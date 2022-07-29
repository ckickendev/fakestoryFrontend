import React, { useEffect, useState } from "react";
// import StoryReel from "./StoryReel";
import UploadPostSpace from "./UploadPostSpace";
import Post from "./Post";
import "../../css/Feed.css";
import { fetchAllInfo, fetchPostFeed } from "../../store/actions/information";
import checkLogin from "../login/LogicLogin";
import { async } from "@firebase/util";

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

  const [offset, setOffSet] = useState(1);
  const id = checkLogin();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  useEffect(async () => {
    await fetchAllInfo(id).then((data) => {
      console.log(data);
      setUser(data);
    });
    await fetchPostFeed(id, 1).then((data) => {
      setPosts(data);
    });
  }, [id]);

  useEffect(() => {
    const onScroll =  () => {
      // console.log(window.scrollY);
      const scrollOffset = offset*2000;
      if(window.scrollY >= scrollOffset){
        setOffSet(offset+1);
        fetchPostFeed(id, offset).then((data) => {
          setPosts((posts) => [...posts, ...data]);
        })
      }
    }
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [posts, offset])

  return (
    <div className="feed">
      {/* <StoryReel /> */}
      <UploadPostSpace user={user} />
      {showAllPosts()}
    </div>
  );
}

export default Feed;
