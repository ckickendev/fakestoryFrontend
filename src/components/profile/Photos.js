import React, { useEffect, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { ImageViewer } from "react-image-viewer-dv";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../css/Photos.css";
import { useParams } from "react-router-dom";
import checkLogin from "../login/LogicLogin";
import { fetch9Friends, fetch9Photos } from "../../store/actions/information";

function PhotoIcon(props) {
  return (
    <div class="col-md-2 mt-4">
      <div className="imgView">
        <ImageViewer>
          <img src={props.image ? props.image : ""} alt="image" />
        </ImageViewer>
        <button className="buttonDel">
          <DeleteIcon className="iconDel" />
        </button>
      </div>
    </div>
  );
}
function Photos({ userId }) {
  const [listPhotos, setListPhotos] = useState([]);

  useEffect(async () => {
    await fetch9Photos(userId).then((data) => {
      console.log(data);
      setListPhotos(data);
    });
  }, [userId]);

  const printListPhoto = () => {
    console.log("list photos", listPhotos);
    return listPhotos ? (
      listPhotos.map((photo) => {
        if (photo) {
          return <PhotoIcon image={photo} />;
        }
      })
    ) : (
      <div></div>
    );
  };

  return (
    <div className="photoWrapper">
      <div className="subPhotoWrapper">
        <div className="photoBarTitle">
          <h4>
            <ImageIcon className="iconImage" />
          </h4>
          <h4 className="photoTitle">Tất cả ảnh</h4>
        </div>

        <div className="photoBarDetail">
          <div className="photoCollection row">{printListPhoto()}</div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
