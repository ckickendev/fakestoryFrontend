import React, { useEffect, useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../css/Friends.css";
import { useParams } from "react-router-dom";

const FriendsSingle = ({ friend }) => {
  const link = `http://localhost:3000/profile/${friend.id ? friend.id : 0}`;
  return (
    <Grid item xs={6} xl={6}>
      <div className="friendList">
        <div className="col-md-5">
          <img className="col-md-12" src={friend.avatar} alt="imgFriend" />
        </div>
        <a href={link} className="col-md-5 m-0">
          <p>{friend.fullname}</p>
        </a>
        <div className="col-md-2 d-flex align-items-center">
            <DeleteIcon />
        </div>
      </div>
    </Grid>
  );
};

function Friends(props) {
  console.log(props.listFriends);
  return (
    <div className="friendWrapper">
      <div className="subFriendWrapper">
        <div className="friendBarTitle">
          <h4>
            <PeopleIcon className="iconPeople" style={{ fontSize: "30px" }} />
          </h4>
          <h4 className="friendTitle">Friends</h4>
        </div>
      </div>

      <div className="friendBarDetail">
        <div className="friendCollection col-md-12">
          <Grid container xs={12} spacing={2}>
            {props.listFriends.map((friend) => {
              return <FriendsSingle friend={friend} />;
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Friends;
