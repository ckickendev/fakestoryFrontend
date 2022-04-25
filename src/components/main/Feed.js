import React, { useEffect, useState } from "react";
// import StoryReel from "./StoryReel";
import UploadPostSpace from "./UploadPostSpace";
import Post from "./Post";
import "../../css/Feed.css";
import { fetchAllInfo, fetchPostFeed } from "../../store/actions/information";
import checkLogin from "../login/LogicLogin";

function Feed() {
  const showAllPosts = () => {
    console.log(posts);
    return posts ? (
      posts.map((post) => {
        if (post.status === 1) {
          return <Post key={post.id} post={post} />;
        }
      })
    ) : (
      <></>
    );
  };
  const id = checkLogin();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  useEffect(async () => {
    await fetchAllInfo(id).then((data) => {
      console.log(data);
      setUser(data);
    });
    await fetchPostFeed(id).then((data) => {
      setPosts(data);
    });
  }, [id]);
  return (
    <div className="feed">
      {/* <StoryReel /> */}
      <UploadPostSpace user={user} />
      {showAllPosts()}
    </div>
  );
}

export default Feed;
