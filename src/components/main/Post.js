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

function Post(props) {
  const [user, setUser] = useState(null);
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [listComment, setListComment] = useState([]);
  useEffect(() => {
    var DateDiff = {
      inMinutes: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime() + 3600 * 1000 * 7;
        return Math.floor((t2 - t1) / (60 * 1000));
      },
      inHours: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime() + 3600 * 1000 * 7;

        return Math.floor((t2 - t1) / (3600 * 1000));
      },
      inDays: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime() + 3600 * 1000 * 7;
        return Math.floor((t2 - t1) / (24 * 3600 * 1000));
      },
      inWeeks: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime() + 3600 * 1000 * 7;
        return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7));
      },
      inMonths: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime() + 3600 * 1000 * 7;
        return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7 * 30));
      },
      inYears: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime() + 3600 * 1000 * 7;
        return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 7 * 30 * 12));
      },
    };
    var dString = props.post ? props.post.time : "";
    var d1 = new Date(dString);
    var d2 = new Date();
    const minutes = DateDiff.inMinutes(d1, d2);
    const hours = DateDiff.inHours(d1, d2);
    const days = DateDiff.inDays(d1, d2);
    const weeks = DateDiff.inWeeks(d1, d2);
    const months = DateDiff.inMonths(d1, d2);
    const years = DateDiff.inYears(d1, d2);

    if (years > 0) {
      setTime(years + " years ago");
    } else if (months > 0) {
      setTime(months + " months ago");
    } else if (weeks > 0) {
      setTime(weeks + " weeks ago");
    } else if (days > 0) {
      setTime(days + " days ago");
    } else if (hours > 0) {
      setTime(hours + " hours ago");
    } else if (minutes > 0) {
      setTime(minutes + " minutes ago");
    } else {
      setTime("just now");
    }
    const id = checkLogin();
    const idUser = props.post ? props.post.user : 0;
    async function fetch() {
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

  function showAllComment() {
    return listComment.map(comment => <ShowComment comment={comment} />)
  }

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
      <YourSpaceComment user={user} />
      {showAllComment()}
    </div>
  );
}

export default Post;
