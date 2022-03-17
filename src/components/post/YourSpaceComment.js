import React, { useState } from "react";
import { Avatar } from "@mui/material";
import checkLogin from "../login/LogicLogin";
import { addMoreComment } from "../../store/actions/grow";

export const YourSpaceComment = (props) => {
  const userid = checkLogin();
  const [content, setContent] = useState("");
  const post_id = props.post ? props.post.id : null;
  const addComment = async () => {
    const data = { userid, content, post_id, rep_id: -1 };
    await addMoreComment(data).then((data) => {
      props.listComment.unshift(data)
      const newList = props.listComment;
      props.setLoad(true);
      props.setListComment(newList);
      props.setLoad(false);
    });
  };
  return (
    <div className="post__comment">
      <div className="post__comment-avatar">
        <Avatar
          style={{ width: "32px", height: "32px" }}
          src={props.user ? props.user.avatar : ""}
        />
      </div>

      <div className="post__comment-input">
        <input
          type="text"
          placeholder="Hãy để lại bình luận của bạn"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
        />
        <input type="button" value="Add comment" onClick={() => addComment()} />
      </div>
    </div>
  );
};
