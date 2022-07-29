import React, { useEffect, useState } from "react";
import Sidebar from "../components/main/Sidebar";
import Feed from "../components/main/Feed";
import Header from "../components/main/Header";
import Advertisement from "../components/main/Advertisement";
import "../css/Main.css";
import checkLogin from "../components/login/LogicLogin";
import { fetchAllInfo, fetchPost } from "../store/actions/information";

import { useParams } from "react-router-dom";
import Post from "../components/main/Post";

const PostScreen = () => {
  const id = checkLogin();
  const [confirm, setConfirm] = useState(false);
  const [post, setPost] = useState({});
  const { postId } = useParams();
  useEffect(async () => {
    console.log("post id", postId)
    await fetchPost(postId).then((data) => {
      console.log("data of post", data);
      setPost(data);
    });
    await fetchAllInfo(id).then((data) => {
      console.log("Get info of user: ", data);
      setConfirm(true);
    });
  }, []);
  return (
    confirm && (
      <div>
        <Header />
        <div className="main">
          <Sidebar />
          <Post post={post} />
          <Advertisement />
        </div>
      </div>
    )
  );
};

export default PostScreen;
