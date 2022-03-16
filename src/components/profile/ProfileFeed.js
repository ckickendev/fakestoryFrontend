import React, { useEffect, useState } from "react";
import UploadPostSpace from "../main/UploadPostSpace";
import Post from "../main/Post";
import "../../css/ProfileFeed.css";
import { fetchAllInfo, fetchPostFeed } from "../../store/actions/information";
import checkLogin from "../login/LogicLogin";

function ProfileFeed() {
  const id = checkLogin();
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    await fetchAllInfo(id).then((data) => {
      console.log(data);
      setUser(data);
    });
    await fetchPostFeed(id).then((data) => {
      console.log(data);
      setPosts(data);
    });
  }, []);
  return (
    <div className="subFeed">
      <UploadPostSpace />
      {posts[0] ? <Post post={posts[0]} /> : <></> }
      {posts[1] ? <Post post={posts[1]} /> : <></> }
      {posts[2] ? <Post post={posts[2]} /> : <></> }
      {posts[3] ? <Post post={posts[3]} /> : <></> }
    </div>
  );
}

export default ProfileFeed;
