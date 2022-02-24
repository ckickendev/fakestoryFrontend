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
          src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/168600690_132095425540608_6073473717300407730_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vg7DV1MP-BYAX9JsA28&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT-je9MJKVwSjpgQl2fVG_2P2wRDpvEf6QAw5nXU4mQYKw&oe=623B24D4"
          title="Nguyen Minh Huy" 
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