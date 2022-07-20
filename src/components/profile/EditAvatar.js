import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "react-bootstrap";
import UploadDemo from "../../firebase/UploadDemo";
import checkLogin from "../login/LogicLogin";

export const EditAvatar = (props) => {
  const [input, setInput] = useState("Đã đổi avatar");
  const [isUploadImage, setIsUploadImage] = useState(true);
  const [image, setImage] = useState();
  const id = checkLogin();
  return (
    <div className="editAvatar">
      <div className="containerAvatar text-center">
        <Button className="closeIcon">
          <CloseIcon fontSize="large" onClick={props.editAvatarStatus} />
        </Button>
        <form
          className="formUploadPost"
          acceptCharset="utf-8"
          action="http://localhost:8080/FakeStory/changeAvatar"
          method="post"
          style={{ marginLeft: 65 }}
        >
          <div className="formUpload">
            <input
              type="hidden"
              className="messageSender__input"
              name="content"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Anh ấy đã đổi avatar`}
            />
          </div>
          <input type="hidden" name="image" value={image} />
          <input type="hidden" name="user_id" value={id} />

          <div className="editContent">
            <h2 className="editTitle text-danger">Chọn ảnh của bạn</h2>
            <UploadDemo
              setIsUploadImage={props.editAvatarStatus}
              isUploadImage={isUploadImage}
              setImage={setImage}
              content={input}
            />
          </div>

          {image ? (
            <>
              {" "}
              <div>Xem trước</div><img src={image} />
            </>
          ) : (
            <div></div>
          )}
          {image ? <button className="btn btn-success">Thay đổi ảnh đại diện</button> : <></>}
        </form>
      </div>
    </div>
  );
};
