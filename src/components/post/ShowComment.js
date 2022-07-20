import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { fetchAllInfo } from "../../store/actions/information";
import fetchTime from "./fetchTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { confirm } from "react-confirm-box";

export const ShowComment = (props) => {
  const id = props.userid ? props.userid : 0;
  const [userlink, setuserlink] = useState("");
  const [user, setUser] = useState();
  const [onDelete, setOnDelete] = useState(false);
  const isPermit= (id == props.user_id ? true : false);

  // console.log("Permit: ",isPermit)

  const options = {
    render: (message, onConfirm, onCancel) => {
      return (
        <div className="bg-light confirm-box-element">
          <h1 className="font-weight-bold text-center">{message}</h1>
          <div className="mt-4 d-flex flex-row justify-content-around">
            <button className="btn btn-danger col-md-5 m-1" onClick={onConfirm}> Yes </button>
            <button className="btn btn-primary col-md-5 m-1" onClick={onCancel}> Cancel </button>
          </div>
        </div>
      );
    }
  };

  const onDeleteCommentHandler = async () => {
    const result = await confirm("Bạn có chắc chắn muốn xóa bình luận này không? ", options);
    if (result) {
      props.deleteComment(props.comment.id);
      // console.log("delete post id: ", props.comment.id)
      return;
    } 
    console.log("You click No!");
  };

  useEffect(async () => {
    await fetchAllInfo(id).then((data) => {
      setUser(data);
      setuserlink(`http://localhost:3000/profile/${data ? data.id : 0}`);
    });
  }, []);

  return (
    <div className="show__comment">
      <a href={userlink} className="show__comment-avatar">
        <Avatar
          style={{ width: "32px", height: "32px" }}
          src={user ? user.avatar : ""}
        />
      </a>
      <div className="show__comment-details">
        <div
          className="show__comment-details--top"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="content">
            <a href={userlink} className="show__comment-name">
              <h4>{user ? user.fullname : ""}</h4>
            </a>
            <div className="show__comment-content">
              <p>{props.comment ? props.comment.content : ""}</p>
            </div>
          </div>

          {isPermit ? (
            <div
              className="post__comment-more"
              onClick={() => setOnDelete(!onDelete)}
            >
              <MoreHorizIcon />
              {onDelete ? (
                <div className="more-in-post">
                  <button onClick={onDeleteCommentHandler}>Delete</button>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="show__comment-details--bottom">
          <div className="show__comment-like">
            <button>Thích</button>
          </div>
          <div className="show__comment-feedback">
            <button>Phản hồi</button>
          </div>
          <div className="show__comment-time">
            <p style={{ margin: "0" }}>
              {props.comment ? fetchTime(props.comment.datetime) : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
