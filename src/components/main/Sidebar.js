import React, { useEffect, useState } from "react";
import SidebarRow from "./SidebarRow";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonAdd from "@mui/icons-material/PersonAdd";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import "../../css/Sidebar.css";
import checkLogin from "../login/LogicLogin";
import {
  fetchAllGroupByUser,
  fetchAllInfo,
  fetchAllPagesByUser,
} from "../../store/actions/information";

function Sidebar() {
  const id = checkLogin();
  const [user, setUser] = useState(null);
  const [listGroups, setlistGroups] = useState([]);
  const [listPages, setListPages] = useState([]);
  useEffect(async () => {
    console.log(id);
    await fetchAllInfo(id).then((data) => {
      console.log(data);
      setUser(data);
    });
    await fetchAllGroupByUser(id).then((data) => {
      console.log("list group: ", data);
      setlistGroups(data);
    });
    await fetchAllPagesByUser(id).then((data) => {
      console.log("list page: ", data);
      setListPages(data);
    });
  }, []);

  const listShorcutGroup = () => {
    return listGroups ? (
      listGroups.map((list) => (
        <a key={list.id} href={list ? `http://localhost:3000/group/${list.id}` : ""}>
          <SidebarRow 
            src={
              list
                ? list.background
                : "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/269853607_4865244843588935_6939299051371911022_n.jpg?stp=c42.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=pgxGzzoDLsQAX9Ba60G&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-BoYkIblcos_CIow4zK1h_F3FLHXHUMhDMZLFMx9gBNw&oe=621CBC99"
            }
            title={list ? list.name : ""}
          />
        </a>
      ))
    ) : (
      <div></div>
    );
  };
  const listShorcutPage = () => {
    console.log("list: ", listPages);
    return listPages ? (
      listPages.map((list) => (
        <a key={list.id} href={list ? `http://localhost:3000/page/${list.id}` : ""}>
          <SidebarRow key={list.id}
            src={
              list
                ? list.background
                : "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/269853607_4865244843588935_6939299051371911022_n.jpg?stp=c42.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=pgxGzzoDLsQAX9Ba60G&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-BoYkIblcos_CIow4zK1h_F3FLHXHUMhDMZLFMx9gBNw&oe=621CBC99"
            }
            title={list ? list.name : ""}
          />
        </a>
      ))
    ) : (
      <div></div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebarHeader ">
        <a href="http://localhost:3000/profile">
          <SidebarRow
            src={user ? user.avatar : ""}
            title={user ? user.fullname : "user"}
          />
        </a>
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={GroupsRoundedIcon} title="Groups" />
        <SidebarRow Icon={PersonAdd} title="Friends" />
        <SidebarRow Icon={KeyboardArrowDownSharpIcon} title="More" />
      </div>
      <div className=" sidebarFooter">
        <div className="titleSidebarFooter">
          <span>Your shortcuts</span>
        </div>
        <div className="mainSidebarFooter">{listShorcutGroup()}</div>
        <div className="mainSidebarFooter">{listShorcutPage()}</div>
      </div>
    </div>
  );
}

export default Sidebar;
