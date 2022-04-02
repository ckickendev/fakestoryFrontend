import { direction } from "cords";
import React, { useEffect, useState } from "react";
import {
  fetchAllInfo,
  fetchAllPostInGroup,
} from "../../store/actions/information";
import checkLogin from "../login/LogicLogin";
import Post from "./Post";
import StoryReel from "./StoryReel";
import UploadPostSpace from "./UploadPostSpaceInGroup";

export const FeedInGroup = (props) => {
  const id = checkLogin();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const showAllPosts = () => {
    return posts ? posts.map((post) => <Post post={post} />) : <></>;
  };
  useEffect(async () => {
    await fetchAllInfo(id).then((data) => {
      console.log(data);
      setUser(data);
    });
    await fetchAllPostInGroup(id).then((data) => {
      setPosts(data);
    });
  }, []);
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}} >{showAllPosts()}</div>
    // <div className="feed">

    // </div>
  );
};
