import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import checkLogin from "../login/LogicLogin";
import { addMoreComment } from "../../store/actions/grow";
import { async } from "@firebase/util";
import { fetchAllInfo } from "../../store/actions/information";

export const YourSpaceComment = (props) => {
  const userid = checkLogin();
  const [content, setContent] = useState("");
  const [userCurrentInfo, setUserCurrentInfo] = useState({});
  const post_id = props.post ? props.post.id : null;
  const addComment = async () => {
    const data = { userid, content, post_id, rep_id: -1 };
    await addMoreComment(data).then((data) => {
      props.listComment.push(data);
      const newList = props.listComment;
      props.setLoad(true);
      props.setListComment(newList);
      setContent("");
      props.setLoad(false);
    });
  };
  useEffect( async () => {
    await fetchAllInfo(userid).then((data) => {
      setUserCurrentInfo(data);
    })
  },[])
  return (
    <div className="post__comment">
      <div className="post__comment-avatar">
        <Avatar
          style={{ width: "36px", height: "36px" }}
          src={userCurrentInfo ? userCurrentInfo.avatar : ""}
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
          className="commentInput"
        />
        <input
          type="button"
          className="commentBtn"
          value="Add comment"
          onClick={() => addComment()}
        />
      </div>
    </div>
  );
};
