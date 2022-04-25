import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import ForumSharpIcon from "@mui/icons-material/ForumSharp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { Avatar, IconButton } from "@mui/material";
import MessengerTab from "../messenger/MessengerTab";
import "../../css/Header.css";
import checkLogin from "../login/LogicLogin";
import { fetchAllInfo } from "../../store/actions/information";

function Header() {
  const id = checkLogin();
  const [user, setUser] = useState();
  useEffect(async () => {
    console.log(id);
    await fetchAllInfo(id).then((data) => {
      console.log(data);
      setUser(data);
    });
  }, []);
  return (
    <div className="header">
      <div className="header__left">
        <a href="/">
          <img
            className="imgHeader"
            src="https://firebasestorage.googleapis.com/v0/b/fakestory-9fb8d.appspot.com/o/file%2F06f74djcd28be?alt=media&token=57d37f0b-deec-453b-b150-efdd4734a182"
            alt="Fakebook"
          />
        </a>

        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Tìm kiếm trên fakestory" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <SubscriptionsIcon />
        </div>
        <div className="header__option">
          <StorefrontIcon />
        </div>
        <div className="header__option">
          <GroupsIcon />
        </div>
        <div className="header__option">
          <SportsEsportsIcon />
        </div>
      </div>

      <div className="header__right">
        <MessengerTab />
      </div>
    </div>
  );
}

export default Header;
