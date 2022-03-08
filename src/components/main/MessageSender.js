import React, { useState } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import ImageIcon from "@mui/icons-material/Image";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Avatar } from "@mui/material";
import "../../css/MessageSender.css";

function MessageSender() {
  const [input, setInput] = useState("");

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            className="messageSender__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Huy ơi, bạn đang nghĩ gì thể?`}
          />
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Video trực tiếp</h3>
        </div>
        <div className="messageSender__option">
          <ImageIcon style={{ color: "green" }} />
          <h3>Ảnh/video</h3>
        </div>
        <div className="messageSender__option">
          <SentimentVerySatisfiedIcon style={{ color: "#f7b928" }} />
          <h3>Cảm xúc/Hoạt động</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
