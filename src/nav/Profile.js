/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import ProfileFeed from "../components/profile/ProfileFeed";
import RightBarProfile from "../components/profile/RightBarProfile";
import About from "../components/profile/About";
import Photos from "../components/profile/Photos";
import Friends from "../components/profile/Friends";
import { ImageViewer } from "react-image-viewer-dv";
import "../css/Profile.css";
import "../css/EditAvatart.css";
import Header from "../components/main/Header";
import checkLogin from "../components/login/LogicLogin";
import {
  checkRecieveOrSent,
  checkStatusFriend,
  fetch9Friends,
  fetchAllInfo,
  sendFriendRequest,
} from "../store/actions/information";
import { useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import ForwardIcon from "@mui/icons-material/Forward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import CheckIcon from '@mui/icons-material/Check';
import { EditAvatar } from "../components/profile/EditAvatar";

function Profile(props) {
  const [status, onStatus] = useState(null);
  const [user, setUser] = useState(null);
  const [listFriends, setListFriend] = useState([]);
  const [editProfile, setEditProfile] = useState(false);
  const [editAvatar, setEditAvatar] = useState(false);
  const { userId } = useParams();
  const userCurrentId = checkLogin();
  const [enableCancelFriendRequest, setEnableCancelFriendRequest] =
    useState(false);
  const [enableUnfriend, setEnableUnfriend] = useState(false);
  const [recieve_or_send, setRecieve] = useState();

  let id = userId === undefined ? userCurrentId : userId;
  //0: myself, 1: friend, 2: not friend, 3: sentrequest
  const [statusFriend, setStatusFriend] = useState(0);
  const editAvatarHandler = () => {
    setEditProfile(!editProfile);
  };
  const editAvatarStatus = () => {
    setEditAvatar(!editAvatar);
  };

  const handleSendRequest = async () => {
    await sendFriendRequest(userId, userCurrentId, 3);
    await checkStatusFriend(userId, userCurrentId).then((data) => {
      setStatusFriend(() => data);
    });
  };

  const handleCancelRequestFriend = async () => {
    setEnableCancelFriendRequest(false);
    await sendFriendRequest(userId, userCurrentId, 2);
    await checkStatusFriend(userId, userCurrentId).then((data) => {
      setStatusFriend(() => data);
    });
  };

  const handleAcceptFriend = async () => {
    await sendFriendRequest(userId, userCurrentId, 5);
    await checkStatusFriend(userId, userCurrentId).then((data) => {
      setStatusFriend(() => data);
    });
  };

  const handleUnfriend = async () => {
    setEnableUnfriend(false);
    await sendFriendRequest(userId, userCurrentId, -1);
    await checkStatusFriend(userId, userCurrentId).then((data) => {
      setStatusFriend(() => data);
    });
  };

  useEffect(async () => {
    await checkStatusFriend(userId, userCurrentId).then((data) => {
      console.log("status", data);
      setStatusFriend(() => data);
      if (data === 3) {
        checkRecieveOrSent(userId, userCurrentId).then((data) => {
          setStatusFriend(4);
        });
      }
    });
  }, []);

  useEffect(async () => {
    if (userId == undefined) {
      id = userCurrentId;
    } else {
      id = userId;
    }
    await fetchAllInfo(id).then((data) => {
      setUser(data);
    });
    await fetch9Friends(id).then((data) => {
      console.log(data);
      setListFriend(data);
    });
  }, []);

  const handleClick = (step) => {
    onStatus(step);
  };

  return (
    <div className="profile">
      {editAvatar ? (
        <EditAvatar editAvatarStatus={editAvatarStatus} />
      ) : (
        <div></div>
      )}
      <div className="profileRight" style={{ backgroundColor: "#eee" }}>
        <Header />
        <div className="profileRightTop">
          <div className="profileCover">
            <ImageViewer>
              <img
                className="profileCoverImg"
                src={user ? user.background : ""}
                alt="image cover"
              />
            </ImageViewer>
            <ImageViewer>
              <img
                className="profileUserImg"
                src={user ? user.avatar : ""}
                alt="user image"
              />
            </ImageViewer>
            <EditIcon className="iconEdit" onClick={editAvatarHandler} />
            {editProfile ? (
              <div class="edit_control">
                <button onClick={editAvatarStatus}>Đổi ảnh</button>
                <button>Xem</button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">{user ? user.fullname : ""}</h4>
            <span className="profileInfoDesc">
              {user ? user.description : ""}
            </span>
          </div>
          {statusFriend == 1 && (
            <div className="text-center space-status d-flex flex-column m-4">
              <div
                className="addFriendSpace m-auto btn btn-success"
                onClick={() => setEnableUnfriend((status) => !status)}
              >
                Bạn bè <CheckCircleIcon />
              </div>

              {enableUnfriend && (
                <div
                  className="addFriendSpace m-auto btn btn-danger"
                  onClick={handleUnfriend}
                >
                  Hủy kết bạn
                  <PersonRemoveIcon />
                </div>
              )}
            </div>
          )}
          {statusFriend == 2 && (
            <div className="text-center space-status m-4">
              <div
                className="addFriendSpace m-auto btn btn-primary"
                onClick={handleSendRequest}
              >
                Gửi lời mời kết bạn <SwapHorizontalCircleIcon />{" "}
              </div>
            </div>
          )}
          {statusFriend == 3 && (
            <div className="text-center space-status d-flex flex-column m-4">
              <div
                className="addFriendSpace m-auto btn btn-warning"
                onClick={() =>
                  setEnableCancelFriendRequest((status) => !status)
                }
              >
                Đã gửi lời mời
                <ForwardIcon />
              </div>
              {enableCancelFriendRequest && (
                <div
                  className="addFriendSpace m-auto btn btn-warning"
                  onClick={handleCancelRequestFriend}
                >
                  Hủy lời mời
                  <CancelPresentationIcon />
                </div>
              )}
            </div>
          )}

          {statusFriend == 4 && (
            <div className="text-center space-status d-flex flex-column m-4">
              Đã gửi cho bạn một lời mời kết bạn
              <div
                className="addFriendSpace m-auto btn btn-danger"
                onClick={() =>
                  handleAcceptFriend()
                }
              >
                Chấp nhận
                <CheckIcon />
              </div>
            </div>
          )}

          <div className="profileNav">
            <a href="#" onClick={() => handleClick(0)}>
              Bài viết
            </a>
            <a href="#" onClick={() => handleClick(1)}>
              Thông tin
            </a>
            <a href="#" onClick={() => handleClick(2)}>
              Bạn bè
            </a>
            <a href="#" onClick={() => handleClick(3)}>
              Ảnh
            </a>
          </div>
        </div>

        {status === 1 && (
          <div className="profileRightBottom">
            <About />
          </div>
        )}

        {status === 2 && (
          <div className="profileRightBottom">
            <Friends listFriends={listFriends} />
          </div>
        )}

        {status === 3 && (
          <div className="profileRightBottom">
            <Photos userId={id} />
          </div>
        )}

        {!status && (
          <div className="profileRightBottom">
            <ProfileFeed isPost={id === userCurrentId ? true : false} />
            <RightBarProfile
              listFriends={listFriends ? listFriends : []}
              user={user ? user : null}
              changeStatus={handleClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
