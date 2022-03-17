import React, { useEffect, useState } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import "../../css/Post.css";
import {
  fetchAllCommentByPostId,
  fetchAllInfo,
} from "../../store/actions/information";
import { ImageViewer } from "react-image-viewer-dv";
import checkLogin from "../login/LogicLogin";
import { YourSpaceComment } from "../post/YourSpaceComment";
import { ShowComment } from "../post/ShowComment";
import { LikeCommentShareSpace } from "../post/LikeCommentShareSpace";
import fetchTime from "../post/fetchTime";

function Post(props) {
  const [user, setUser] = useState(null);
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [listComment, setListComment] = useState([]);
  const [isLoad, setLoad] = useState(false);
  useEffect(() => {
    const id = checkLogin();
    const idUser = props.post ? props.post.user : 0;
    async function fetch() {
      setTime(fetchTime(props.post ? props.post.time : 0));
      await fetchAllInfo(idUser).then((data) => {
        setUser(data);
        setLink(
          user
            ? user.id == id
              ? "http://localhost:3000/profile"
              : `http://localhost:3000/profile?id=${user ? user.id : 0}`
            : ""
        );
      });
      await fetchAllCommentByPostId(props.post ? props.post.id : 0).then(
        (data) => {
          setListComment(data);
        }
      );
    }
    fetch();
  }, [props.post, time]);
  let showAllComment;

  useEffect(
    (showAllComment = () => {
      console.log("Rerender listComment", listComment);
      return listComment.map((comment) => {
        return <ShowComment userid={comment? comment.userid : 0} comment={comment} />;
      });
    }),
    [listComment, isLoad]
  );

  return (
    <div className="post">
      <div className="post__top">
        <a href={link}>
          <div className="post__avatar">
            <Avatar
              src={user ? user.avatar : ""}
              className="post__avatar-img"
            />
          </div>
        </a>

        <div className="post__top-info">
          <a href={link}>
            <h3>{user ? user.fullname : ""}</h3>
          </a>
          <p>{time}</p>
        </div>

        <div className="post__top-more">
          <MoreHorizIcon />
        </div>
      </div>

      <div className="post__bottom">
        <p>{props.post ? props.post.content : ""}</p>
      </div>

      {props.post ? (
        props.post.image ? (
          <div className="post__image">
            <ImageViewer>
              <img src={props.post ? props.post.image : ""} alt="" />
            </ImageViewer>
          </div>
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}
      <div className="post__quantity">
        <div className="post__quantity-like">
          {props.post ? props.post.react : ""}
        </div>
        <div className="post__quantity-comment">10 comments</div>
      </div>
      <LikeCommentShareSpace />
      {showAllComment()}
      <YourSpaceComment
        setLoad={setLoad}
        listComment={listComment ? listComment : []}
        setListComment={(list) => {
          setListComment(list);
        }}
        user={user}
        post={props.post ? props.post : null}
      />
      
    </div>
  );
}

export default Post;
