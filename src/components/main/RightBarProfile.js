/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import EditForm from "./EditForm";
import "../../css/RightbarProfile.css";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PhoneIcon from "@mui/icons-material/Phone";

const RightBarProfile = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeStatusHandler = (status) => {
    props.changeStatus(status);
  };

  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          {/* info user */}
          <div className="subWrapper">
            <h4 className="rightbarTitle">User Information</h4>
            <div className="">
              <div className="rightbarInfoItem">
                <HomeIcon className="rightBarInfoKey" />
                <span className="rightbarInfoValue">
                  Lives in <b>Đà Nẵng</b>
                </span>
              </div>
              <div className="rightbarInfoItem">
                <LocationOnIcon className="rightBarInfoKey" />
                <span className="rightbarInfoValue">
                  From <b>Đà Nẵng</b>
                </span>
              </div>
              <div className="rightbarInfoItem">
                <PhoneIcon className="rightBarInfoKey" />
                <span className="rightbarInfoValue">
                  <b>1234567890</b>
                </span>
              </div>
              <div className="rightbarInfoItem">
                <CelebrationIcon className="rightBarInfoKey" />
                <span className="rightbarInfoValue">
                  <b>Married</b>
                </span>
              </div>
            </div>
            <button className="button" onClick={handleShow}>
              Edit Details
            </button>
          </div>

          {/* Photos */}
          <div className="subWrapper">
            <div className="rightbarNav">
              <h4 className="rightbarTitle">Photos</h4>
              <button
                className="buttonFriends"
                onClick={() => {
                  changeStatusHandler(3);
                }}
              >
                See All My Photos
              </button>
            </div>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img
                  src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/79646492_1271798489686887_4272600003970596864_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9DiMv46jkMQAX-qUbhg&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_iUd1lS3uv8M9yOUHUrL46kxnTxKwbCG4YwHrw8oJZaA&oe=62451031"
                  alt="img"
                  className="rightbarFollowingImg"
                />
              </div>
              <div className="rightbarFollowing">
                <img
                  src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/79646492_1271798489686887_4272600003970596864_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9DiMv46jkMQAX-qUbhg&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_iUd1lS3uv8M9yOUHUrL46kxnTxKwbCG4YwHrw8oJZaA&oe=62451031"
                  alt="img"
                  className="rightbarFollowingImg"
                />
              </div>
              <div className="rightbarFollowing">
                <img
                  src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/79646492_1271798489686887_4272600003970596864_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9DiMv46jkMQAX-qUbhg&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_iUd1lS3uv8M9yOUHUrL46kxnTxKwbCG4YwHrw8oJZaA&oe=62451031"
                  alt="img"
                  className="rightbarFollowingImg"
                />
              </div>
            </div>
          </div>

          <div className="subWrapper">
            <div className="rightbarNav">
              <h4 className="rightbarTitle">User Friends</h4>
              <button
                className="buttonFriends"
                onClick={() => {
                  changeStatusHandler(2);
                }}
              >
                See All Friends
              </button>
            </div>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <a href="">
                  <img
                    src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/79646492_1271798489686887_4272600003970596864_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9DiMv46jkMQAX-qUbhg&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_iUd1lS3uv8M9yOUHUrL46kxnTxKwbCG4YwHrw8oJZaA&oe=62451031"
                    alt="img"
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">Hoàng Thịnh</span>
                </a>
              </div>
              <div className="rightbarFollowing">
                <a href="">
                  <img
                    src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/79646492_1271798489686887_4272600003970596864_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9DiMv46jkMQAX-qUbhg&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_iUd1lS3uv8M9yOUHUrL46kxnTxKwbCG4YwHrw8oJZaA&oe=62451031"
                    alt="img"
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">Hoàng Thịnh</span>
                </a>
              </div>
              <div className="rightbarFollowing">
                <a href="">
                  <img
                    src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/79646492_1271798489686887_4272600003970596864_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9DiMv46jkMQAX-qUbhg&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_iUd1lS3uv8M9yOUHUrL46kxnTxKwbCG4YwHrw8oJZaA&oe=62451031"
                    alt="img"
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">Hoàng Thịnh</span>
                </a>
              </div>
              <div className="rightbarFollowing">
                <a href="">
                  <img
                    src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/79646492_1271798489686887_4272600003970596864_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9DiMv46jkMQAX-qUbhg&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_iUd1lS3uv8M9yOUHUrL46kxnTxKwbCG4YwHrw8oJZaA&oe=62451031"
                    alt="img"
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">Hoàng Thịnh</span>
                </a>
              </div>
              <div className="rightbarFollowing">
                <a href="">
                  <img
                    src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/79646492_1271798489686887_4272600003970596864_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9DiMv46jkMQAX-qUbhg&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_iUd1lS3uv8M9yOUHUrL46kxnTxKwbCG4YwHrw8oJZaA&oe=62451031"
                    alt="img"
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">Hoàng Thịnh</span>
                </a>
              </div>
              <div className="rightbarFollowing">
                <a href="">
                  <img
                    src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/79646492_1271798489686887_4272600003970596864_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=9DiMv46jkMQAX-qUbhg&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_iUd1lS3uv8M9yOUHUrL46kxnTxKwbCG4YwHrw8oJZaA&oe=62451031"
                    alt="img"
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">Hoàng Thịnh</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} className="modal" onHide={handleClose}>
        <Modal.Header className="formEditTitle" closeButton>
          <h4>Edit Profile</h4>
        </Modal.Header>
        <Modal.Body>
          <EditForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RightBarProfile;
