import React, { useEffect, useState } from "react";
import StoryReel from "./StoryReel";
import UploadPostSpace from "./UploadPostSpace";
import Post from "./Post";
import "../../css/Feed.css";
import { fetchAllInfo, fetchPost } from "../../store/actions/information";
import checkLogin from "../login/LogicLogin";

function Feed() {
  const id = checkLogin();
  const [post, setPost] = useState();
  const [user, setUser] = useState();
  useEffect( async() => {
    await fetchAllInfo(id).then((data) => {
      console.log(data);
      setUser(data);
    });
    await fetchPost(2).then((data) => {
      console.log(data);
      setPost(data);
    });
  }, [])
  return (
    <div className="feed">
      <StoryReel />
      <UploadPostSpace user={user} />
      <Post
        post ={post}
      />
    </div>
  );
}

export default Feed;
