import React from "react";
import SidebarRow from "./SidebarRow";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import "./css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarHeader ">
        <SidebarRow
          src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/168600690_132095425540608_6073473717300407730_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vg7DV1MP-BYAX9JsA28&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT-je9MJKVwSjpgQl2fVG_2P2wRDpvEf6QAw5nXU4mQYKw&oe=623B24D4"
          title="Nguyen Minh Huy"
        />
        <SidebarRow Icon={CoronavirusIcon} title="Covid-19 Infomation Center" />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={GroupsRoundedIcon} title="Groups" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={LiveTvIcon} title="Watch" />
        <SidebarRow Icon={KeyboardArrowDownSharpIcon} title="More" />
      </div>
      <div className=" sidebarFooter">
        <div className="titleSidebarFooter">
          <span>Your shortcuts</span>
        </div>
        <div className="mainSidebarFooter">
          <SidebarRow
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/269853607_4865244843588935_6939299051371911022_n.jpg?stp=c42.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=pgxGzzoDLsQAX9Ba60G&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-BoYkIblcos_CIow4zK1h_F3FLHXHUMhDMZLFMx9gBNw&oe=621CBC99"
            title="Chủ Phòng Net Đà Nẵng"
          />
          <SidebarRow
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/269853607_4865244843588935_6939299051371911022_n.jpg?stp=c42.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=pgxGzzoDLsQAX9Ba60G&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-BoYkIblcos_CIow4zK1h_F3FLHXHUMhDMZLFMx9gBNw&oe=621CBC99"
            title="Việc Làm Đà Nẵng"
          />
          <SidebarRow
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/269853607_4865244843588935_6939299051371911022_n.jpg?stp=c42.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=pgxGzzoDLsQAX9Ba60G&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-BoYkIblcos_CIow4zK1h_F3FLHXHUMhDMZLFMx9gBNw&oe=621CBC99"
            title="Nghiện Setup"
          />
          <SidebarRow
            src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/269853607_4865244843588935_6939299051371911022_n.jpg?stp=c42.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=pgxGzzoDLsQAX9Ba60G&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-BoYkIblcos_CIow4zK1h_F3FLHXHUMhDMZLFMx9gBNw&oe=621CBC99"
            title="Chợ Đà Nẵng"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
