import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { Avatar, IconButton } from '@mui/material';
import "./Header.css"

function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img 
                src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.sgv.png"
                alt="Fakebook"
            />
            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder='Tìm kiếm trên fakebook'/>
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
            <div className="header__info">
                <Avatar />
                <h4>Huy</h4>
            </div>

            <IconButton>
                <AppRegistrationRoundedIcon />
            </IconButton>
            <IconButton>
                <ForumSharpIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <IconButton>
                <ArrowDropDownRoundedIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default Header