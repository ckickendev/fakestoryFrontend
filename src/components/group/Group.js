import React, { useEffect, useState } from "react";
import Header from "../main/Header";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IntroGroup from "./IntroGroup";
import MemberGroup from "./MemberGroup";
import MeetingGroup from "./MeetingGroup";
import DiscusGroup from "./DiscusGroup";
import "../../css/Group.css";
import { useParams } from "react-router-dom";
import { fetchAllMembersByGroupId, fetchGroupById } from "../../store/actions/information";

function Group() {

  const {groupId} = useParams();
  const [status, onStatus] = useState(null);
  const [members, setMembers] = useState();
  const [active, setActive] = useState("active");
  const [info, setInfo] = useState();

  useEffect( async () => {
    await fetchGroupById(groupId).then((data) => {
      console.log(data);
      setInfo(data)
    });
    await fetchAllMembersByGroupId(groupId).then((data) => {
      console.log("data", data);
      setMembers(data);
    })
  } , [])

  const displayMembers = () => {
    return members ? (members.map(mem => mem ? (<img key={mem.id}
      src={mem ? mem.avatar : ""}
      alt=""
      className="w-10 h-10 rounded-full border-2 border-white"
    />) : "") ) : (<div></div>); 
  }

  const handleClick = (step) => {
    onStatus(step);
  };
  return (
    <div className="group">
      <Header />
      {/* anh bia group */}
      <div className="container content">
        <div className="group__content">
          <img
            className="group__img"
            src= { info ? info.background : "https://fakeimg.pl/1920x1080/?text=None&font=lobster" }
            alt="friends"
          />
        </div>
        <div className="group__info">
          <div className="group__info-left">
            <div className="group__info-name">
              <h1>{info ? info.name :  ""} </h1>
            </div>
            <div className="group__info-desc">
              <LockRoundedIcon />
              <p>Nhóm riêng tư</p>
              <h5>{info ? info.totalMember : "" }thành viên</h5>
            </div>
            <div className="group__info-members">
              <div className="flex items-center -space-x-2">

                {displayMembers()}
              
              </div>
            </div>
          </div>
          <div>
            <nav className="responsive-nav border-t -mb-0.5 lg:pl-6">
              <ul>
                <li className="">
                  <a href="#" onClick={() => handleClick(1)}>
                    Giới thiệu
                  </a>
                </li>
                <li className="active">
                  <a href="/group" onClick={() => handleClick(0)}>
                    Thảo Luận
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleClick(2)}>
                    Tạo cuộc họp
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleClick(3)}>
                    Thành viên
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#e5ede5" }}>
        <div className="mcontainer">
          {!status && (
            <div className="">
              <DiscusGroup groupId={groupId} />
            </div>
          )}

          {status === 3 && (
            <div className="">
              <MemberGroup />
            </div>
          )}

          {status === 1 && (
            <div div className="">
              <IntroGroup />
            </div>
          )}

          {status === 2 && (
            <div className="">
              <MeetingGroup />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Group;
