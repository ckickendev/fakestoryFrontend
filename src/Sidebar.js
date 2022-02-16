import React from 'react'
import SidebarRow from "./SidebarRow"
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
        <SidebarRow 
          src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/168600690_132095425540608_6073473717300407730_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=At8nSiypLZQAX9hE-5T&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT-FAWlDLq6AoqEkWd8oCYIQuKgnfFWH0Op8_HgMIfN6tQ&oe=622F4754" 
          title="Nguyễn Minh Huy" 
        />
        <SidebarRow Icon={CoronavirusIcon} title="Covid-19 Infomation Center" />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
        <SidebarRow Icon={GroupsRoundedIcon} title="Groups"/>
        <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
        <SidebarRow Icon={LiveTvIcon} title="Watch"/>
        <SidebarRow Icon={KeyboardArrowDownSharpIcon} title="More"/>
    </div>
  )
}

export default Sidebar