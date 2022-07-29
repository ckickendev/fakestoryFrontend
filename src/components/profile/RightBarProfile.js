/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import EditForm from "../main/EditForm";
import "../../css/RightbarProfile.css";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CelebrationIcon from "@mui/icons-material/Celebration";
import PhoneIcon from "@mui/icons-material/Phone";
import { SmallProfile } from "../profile/SmallProfile";
import { fetch9Photos, fetchAllInfo } from "../../store/actions/information";
import checkLogin from "../login/LogicLogin";
import { useParams } from "react-router-dom";

const PhotoElement = ({ photo, index }) => {
  if (photo == null) {
    return <></>;
  } else {
    return (
      <div key={index}>
        <div className="rightbarFollowing">
          <img src={photo} alt="img" className="rightbarFollowingImg" />
        </div>
      </div>
    );
  }
};

const RightBarProfile = (props) => {
  const [show, setShow] = useState(false);
  const [photos, setPhotos] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { userId } = useParams();

  const printProfile = () => {
    return props.listFriends ? (
      props.listFriends.map((list) => (
        <SmallProfile key={list.id} user={list} />
      ))
    ) : (
      <div></div>
    );
  };

  useEffect(async () => {
    await fetch9Photos(userId).then((data) => {
      if (data != null) {
        setPhotos(data);
      }
    });
  }, []);

  const printPhotos = () => {
    return photos ? photos.map((photo, index) => <PhotoElement key={index} photo={photo} index={index} />) : <></>;
  };

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
                  Lives in <b>{props.user ? props.user.live : ""}</b>
                </span>
              </div>
              <div className="rightbarInfoItem">
                <LocationOnIcon className="rightBarInfoKey" />
                <span className="rightbarInfoValue">
                  From <b>{props.user ? props.user.country : ""}</b>
                </span>
              </div>
              <div className="rightbarInfoItem">
                <PhoneIcon className="rightBarInfoKey" />
                <span className="rightbarInfoValue">
                  <b>{props.user ? props.user.phone : ""}</b>
                </span>
              </div>
              <div className="rightbarInfoItem">
                <CelebrationIcon className="rightBarInfoKey" />
                <span className="rightbarInfoValue">
                  <b>Alone</b>
                </span>
              </div>
            </div>
            <button className="button" onClick={handleShow}>
              Edit Details
            </button>
          </div>

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
            <div className="rightbarFollowings">{printPhotos()}</div>
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
            <div className="rightbarFollowings">{printProfile()}</div>
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
