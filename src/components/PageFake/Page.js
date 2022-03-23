import React, { useState } from "react";
import AboutPage from "./AboutPage";
import IntroPage from "./IntroPage";
import VideoPage from "./VideoPage";
import ImagePage from "./ImagePage";
import Header from "../main/Header";
import "../../css/Page.css";

function Page() {
  const [status, onStatus] = useState(null);
  const [active, setActive] = useState("active");

  const handleClick = (step) => {
    onStatus(step);
  };

  return (
    <>
      <Header />
      <div className="mcontainer">
        <div className="page">
          <div className="pages_banner">
            <img
              src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/106713300_1432113066992353_8505186567515993124_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8631f5&_nc_ohc=QT7ZkTM0dhQAX-SUUWb&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-ctzTTiq_-nYWXQGmsnfRfUQG0oM6h_gzdbhj9hht2rQ&oe=6261DAD9"
              alt=""
            />
          </div>
          <div className="pages_content">
            <div className="page_avatar">
              <div className="page_avatar_holder">
                <img
                  src="http://demo.foxthemes.net/socialitev2.2/assets/images/group/group-3.jpg"
                  alt=""
                />
              </div>
              <div className="icon_change_photo" hidden>
                <ion-icon name="camera" className="text-xl"></ion-icon>
              </div>
            </div>
            <div className="page_info">
              <h1> Graphic Design </h1>
              <p> Public group · 12 members</p>
            </div>
            <div className="flex items-center space-x-5 ">
              <div className="flex items-center -space-x-3">
                <img
                  src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/275195234_1900829773450419_8832090657846807701_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fqVqq-SlALcAX8CImKK&_nc_ht=scontent.fhan2-4.fna&oh=00_AT9QZ80k4XhpK3SVXxIHHBYRWezobKbbCgbkBJTD3PKnDA&oe=623FD912"
                  alt=""
                  className="w-10 h-10 rounded-full border-1 border-white"
                />
                <img
                  src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/275195234_1900829773450419_8832090657846807701_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fqVqq-SlALcAX8CImKK&_nc_ht=scontent.fhan2-4.fna&oh=00_AT9QZ80k4XhpK3SVXxIHHBYRWezobKbbCgbkBJTD3PKnDA&oe=623FD912"
                  alt=""
                  className="w-10 h-10 rounded-full border-1 border-white"
                />
                <img
                  src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/275195234_1900829773450419_8832090657846807701_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fqVqq-SlALcAX8CImKK&_nc_ht=scontent.fhan2-4.fna&oh=00_AT9QZ80k4XhpK3SVXxIHHBYRWezobKbbCgbkBJTD3PKnDA&oe=623FD912"
                  alt=""
                  className="w-10 h-10 rounded-full  border-1 border-white"
                />
                <img
                  src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/275195234_1900829773450419_8832090657846807701_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fqVqq-SlALcAX8CImKK&_nc_ht=scontent.fhan2-4.fna&oh=00_AT9QZ80k4XhpK3SVXxIHHBYRWezobKbbCgbkBJTD3PKnDA&oe=623FD912"
                  alt=""
                  className="w-10 h-10 rounded-full border-1 border-white"
                />
                <img
                  src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/275195234_1900829773450419_8832090657846807701_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fqVqq-SlALcAX8CImKK&_nc_ht=scontent.fhan2-4.fna&oh=00_AT9QZ80k4XhpK3SVXxIHHBYRWezobKbbCgbkBJTD3PKnDA&oe=623FD912"
                  alt=""
                  className="w-10 h-10 rounded-full border-1 border-white"
                />
                <div className="w-10 h-10 rounded-full flex justify-center items-center bg-red-100 text-red-500 font-semibold">
                  12+
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
                <a href="/Page" onClick={() => handleClick(0)}>
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleClick(1)}>
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleClick(2)}>
                  Ảnh
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleClick(3)}>
                  Video
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {!status && (
          <div className="">
            <AboutPage />
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
