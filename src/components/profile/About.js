import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import EditForm from "../main/EditForm";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CakeIcon from "@mui/icons-material/Cake";
import WcIcon from "@mui/icons-material/Wc";
import DescriptionIcon from "@mui/icons-material/Description";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import "../../css/About.css";
import "../../css/RightbarProfile.css";

function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="aboutWrapper">
        <div className="subAboutWrapper">
          <div className="aboutBarTitle">
            <h4>
              <InfoIcon className="inconInfo" />
            </h4>
            <h4 className="aboutTitle">About</h4>
          </div>
          <div className="aboutBarDetail">
            <div className="aboutBarItem">
              <DescriptionIcon className="rightBarInfoKey" />
              <span className="rightbarInfoValue">
                <b>Call Me Bo Sua</b>
              </span>
            </div>
            <div className="aboutBarItem">
              <WcIcon className="rightBarInfoKey" />
              <span className="rightbarInfoValue">
                <b>Male</b>
              </span>
            </div>
            <div className="aboutBarItem">
              <CakeIcon className="rightBarInfoKey" />
              <span className="rightbarInfoValue">
                <b>12 February 2001</b>
              </span>
            </div>
            <div className="aboutBarItem">
              <CelebrationIcon className="rightBarInfoKey" />
              <span className="rightbarInfoValue">
                <b>In a relationship</b>
              </span>
            </div>
            <div className="aboutBarItem">
              <SchoolIcon className="rightBarInfoKey" />
              <span className="rightbarInfoValue">
                Studied Information of Technology (IT) at{" "}
                <b>FPT University Da Nang</b>
              </span>
            </div>
            <div className="aboutBarItem">
              <HomeIcon className="rightBarInfoKey" />
              <span className="rightbarInfoValue">
                Lives in <b>Đà Nẵng</b>, <b>Việt Nam</b>
              </span>
            </div>
            <div className="aboutBarItem">
              <LocationOnIcon className="rightBarInfoKey" />
              <span className="rightbarInfoValue">
                From <b>Đà Nẵng</b>, <b>Việt Nam</b>
              </span>
            </div>
            <div className="aboutBarItem">
              <PhoneIcon className="rightBarInfoKey" />
              <span className="rightbarInfoValue">
                <b>1234567890</b>
              </span>
            </div>
            <div className="aboutBarItem">
              <MailIcon className="rightBarInfoKey" />
              <span className="rightbarInfoValue">
                <b>bosua@gmail.com</b>
              </span>
            </div>
          </div>
          <button className="buttonEdit" onClick={handleShow}>
            Edit Details
          </button>
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
}

export default About;
