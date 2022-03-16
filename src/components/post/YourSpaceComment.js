import React from "react";
import { Avatar } from "@mui/material";

export const YourSpaceComment = (props) => {
  return (
    <div className="post__comment">
      <div className="post__comment-avatar">
        <Avatar style={{ width: "32px", height: "32px" }} src={props.user ? props.user.avatar : ""} />
      </div>

      <div className="post__comment-input">
        <input type="text" placeholder="Hãy để lại bình luận của bạn" />
      </div>
    </div>
  );
};
