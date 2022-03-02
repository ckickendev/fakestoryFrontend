/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ProfileFeed from "../components/main/ProfileFeed";
import RightBarProfile from "../components/main/RightBarProfile";
import "../css/App.css";
import "../css/Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/151266852_114763457273805_3886756789292532879_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=E8k0WJrgNe0AX9PnxBO&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-IXRhV7JnhW85dtRK4X5HFVtFeME8MLmVLnejgUFPYgw&oe=6243DA5E"
              alt="image cover"
            />
            <img
              className="profileUserImg"
              src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=_AiCoqvSsOsAX83yOYT&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT-tBShqDtEIxGh5HTg21Fe83VAhB68WDbwQh2DLvnThVw&oe=62461E21"
              alt="user image"
            />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Nguyễn Minh Huy</h4>
            <span className="profileInfoDesc">HV</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <ProfileFeed />
          <RightBarProfile />
        </div>
      </div>
    </div>
  );
}

export default Profile;
