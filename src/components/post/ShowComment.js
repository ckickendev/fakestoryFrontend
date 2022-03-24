import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { fetchAllInfo } from "../../store/actions/information";
import fetchTime from "./fetchTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const ShowComment = (props) => {
  const id = props.userid ? props.userid : 0;
  const [userlink, setuserlink] = useState("");
  const [user, setUser] = useState();
  const [onDelete, setOnDelete] = useState(false);

  useEffect(async () => {
    await fetchAllInfo(id).then((data) => {
      setUser(data);
      setuserlink(`http://localhost:3000/profile/${user ? user.id : 0}`);
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
        <div className="show__comment-details--top" style={{display: "flex", justifyContent: "space-between"}}>
          <div class="content">
            <a href={userlink} className="show__comment-name">
              <h4>{user ? user.fullname : ""}</h4>
            </a>
            <div className="show__comment-content">
              <p>{props.comment ? props.comment.content : ""}</p>
            </div>
          </div>
          <div style={{width: "40px", height: "40px"}} className="post__top-more" onClick={() => setOnDelete(!onDelete)}>
            <MoreHorizIcon />
          </div>
          {onDelete ? <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <button onClick={() => {}}>Delete</button>
          </div> : <div></div> }
          
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
