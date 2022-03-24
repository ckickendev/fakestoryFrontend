import React, { useEffect, useState } from "react";
import AboutPage from "./AboutPage";
import IntroPage from "./IntroPage";
import VideoPage from "./VideoPage";
import ImagePage from "./ImagePage";
import Header from "../main/Header";
import "../../css/Page.css";
import { useParams } from "react-router-dom";
import {
  fetchAllPeoplesByPageId,
  fetchPageInfoById,
} from "../../store/actions/information";

function Page() {
  const [status, onStatus] = useState(null);
  const [active, setActive] = useState("active");
  const { pageId } = useParams();
  const [info, setInfo] = useState();
  const [listUsers, setListUser] = useState([]);

  useEffect(async () => {
    await fetchPageInfoById(pageId).then((data) => {
        console.log(data);
      setInfo(data);
    });
    await fetchAllPeoplesByPageId(pageId).then((data) => {
      setListUser(data);
    });
  }, []);
  const printAvatar = () => {
      return listUsers.map((user) => {
          return (<img
            src={user ? user.avatar : ""}
            alt=""
            className="w-10 h-10 rounded-full border-2 border-white"
          />)
      })
  }
  const handleClick = (step) => {
    onStatus(step);
  };

  return (
    <>
      <Header />
      <div className="mcontainer">
        <div className="page">
          <div className="pages_banner">
            <img src={info ? info.background : ""} alt="" />
          </div>
          <div className="pages_content">
            <div className="page_avatar">
              <div className="page_avatar_holder">
                <img src={info ? info.avatar : ""} alt="" />
              </div>
              <div className="icon_change_photo" hidden>
                <ion-icon name="camera" className="text-xl"></ion-icon>
              </div>
            </div>
            <div className="page_info">
              <h1> {info ? info.name : ""} </h1>
              <p> Public page · <span>{info ? info.liked : 0}</span> liked</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center -space-x-4">
                {printAvatar()}
                <div className="w-10 h-10 rounded-full flex justify-center items-center bg-red-100 text-red-500 font-semibold">
                  ...
                </div>
              </div>
              <a
                href="#"
                className="flex items-center justify-center h-9 px-5 rounded-md bg-blue-600 text-white  space-x-1.5"
              >
                <ion-icon name="thumbs-up"></ion-icon>
                <span> Flow </span>
              </a>
            </div>
          </div>

          <nav className="responsive-nav border-t -mb-0.5 lg:pl-6">
            <ul>
              <li className="active">
                <a href={`/page/${info? info.id : 0}`} onClick={() => handleClick(0)}>
                  Trang chủ
                </a>
              </li>
              <li>
                <button href="#" onClick={() => handleClick(1)}>
                  Giới thiệu
                </button>
              </li>
              <li>
                <button href="#" onClick={() => handleClick(2)}>
                  Ảnh
                </button>
              </li>
              <li>
                <button href="#" onClick={() => handleClick(3)}>
                  Video
                </button>
              </li>
            </ul>
          </nav>
        </div>
        {!status && (
          <div className="">
            <AboutPage info={info ? info : null} />
          </div>
        )}

        {status === 3 && (
          <div className="">
            <VideoPage />
          </div>
        )}

        {status === 1 && (
          <div div className="">
            <IntroPage />
          </div>
        )}

        {status === 2 && (
          <div className="">
            <ImagePage />
          </div>
        )}
      </div>
    </>
  );
}

export default Page;
