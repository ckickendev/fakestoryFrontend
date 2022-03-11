/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import ProfileFeed from "../components/main/ProfileFeed";
import RightBarProfile from "../components/main/RightBarProfile";
import About from "../components/main/About";
import Photos from "../components/main/Photos";
import Friends from "../components/main/Friends";
import { ImageViewer } from "react-image-viewer-dv";
import "../css/Profile.css";
import Header from "../components/main/Header";

function Profile() {
  const [onPost, setOnPost] = useState(true);
  const [onAbout, setOnAbout] = useState(false);
  const [onFriend, setOnFriend] = useState(false);
  const [onPhoto, setOnPhoto] = useState(false);
  const [onVideo, setOnVideo] = useState(false);
  const [status, setStatus] = useState(1);

  const onPosts = () => {
    setOnPost(true);
    setOnAbout(false);
    setOnFriend(false);
    setOnPhoto(false);
    setOnVideo(false);
  };

  const onAbouts = () => {
    setOnPost(false);
    setOnAbout(true);
    setOnFriend(false);
    setOnPhoto(false);
    setOnVideo(false);
  };

  const onFriends = () => {
    setOnPost(false);
    setOnAbout(false);
    setOnFriend(true);
    setOnPhoto(false);
    setOnVideo(false);
  };

  const onPhotos = () => {
    setOnPost(false);
    setOnAbout(false);
    setOnFriend(false);
    setOnPhoto(true);
    setOnVideo(false);
  };

  const onVideos = () => {
    setOnPost(false);
    setOnAbout(false);
    setOnFriend(false);
    setOnPhoto(false);
    setOnVideo(true);
  };

  return (
    <div className="profile">
      <div className="profileRight">
        <Header />
        <div className="profileRightTop">
          <div className="profileCover">
            <ImageViewer>
              <img
                className="profileCoverImg"
                src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/151266852_114763457273805_3886756789292532879_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=E8k0WJrgNe0AX9PnxBO&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-IXRhV7JnhW85dtRK4X5HFVtFeME8MLmVLnejgUFPYgw&oe=6243DA5E"
                alt="image cover"
              />
            </ImageViewer>
            <ImageViewer>
              <img
                className="profileUserImg"
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=_AiCoqvSsOsAX83yOYT&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT-tBShqDtEIxGh5HTg21Fe83VAhB68WDbwQh2DLvnThVw&oe=62461E21"
                alt="user image"
              />
            </ImageViewer>
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Nguyễn Minh Huy</h4>
            <span className="profileInfoDesc">HV</span>
          </div>
          <div className="profileNav">
            <a href="/profile" onClick={onPosts}>
              Posts
            </a>
            <a href="#" onClick={onAbouts}>
              About
            </a>
            <a href="#" onClick={onFriends}>
              Friends
            </a>
            <a href="#" onClick={onPhotos}>
              Photos
            </a>
            <a href="#" onClick={onVideos}>
              Videos
            </a>
          </div>
        </div>

        {onPost && (
          <div className="profileRightBottom">
            <ProfileFeed />
            <RightBarProfile />
          </div>
        )}

        {onAbout && (
          <div className="profileRightBottom">
            <About />
          </div>
        )}

        {onFriend && (
          <div className="profileRightBottom">
            <Friends />
          </div>
        )}

        {onPhoto && (
          <div className="profileRightBottom">
            <Photos />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
