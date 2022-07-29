import React, { useDebugValue, useEffect, useState } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import "../../css/Post.css";
import {
  fetchAllCommentByPostId,
  fetchAllInfo,
  fetchGroupByPostId,
  fetchIsReact,
  fetchPost,
} from "../../store/actions/information";
import { ImageViewer } from "react-image-viewer-dv";
import checkLogin from "../login/LogicLogin";
import { YourSpaceComment } from "../post/YourSpaceComment";
import { ShowComment } from "../post/ShowComment";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import fetchTime from "../post/fetchTime";
import {
  addReact,
  editComment,
  deletePostById,
  deleteCommentById,
} from "../../store/actions/grow";
import { AlertDelete } from "../utils/AlertDelete";
import { confirm } from "react-confirm-box";
import { async } from "@firebase/util";
function Post(props) {
  const [user, setUser] = useState(null);
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [listComment, setListComment] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [isReactThisPost, setIsReactThisPost] = useState();
  const [isChange, setIsChange] = useState(false);
  const [post, setPost] = useState(props.post ? props.post : null);
  const [numberComment, setNumberComment] = useState(0);
  const [editDelete, setEditDelete] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [group, setGroup] = useState();
  const [groupLink, setGroupLink] = useState();
  const [editTitle, seteditTitle] = useState(
    props.post ? props.post.content : ""
  );
  const [isShowComment, setIsShowComment] = useState(false);
  const [showConfirmBox, setShowConfirmBox] = useState(true);
  const user_id = checkLogin();

  const onEditChange = (e) => {
    seteditTitle(e.target.value);
  };
  const saveStatus = async () => {
    const data = {
      id: props.post ? props.post.id : 0,
      content: editTitle,
      image: props.post ? props.post.image : "",
      user: props.post ? props.post.user : 0,
      react: props.post ? props.post.react : 0,
    };
    console.log(data);
    await editComment(data).then((data2) => {
      console.log(data2);
    });
    setOnEdit(!onEdit);
  };

  const options = {
    render: (message, onConfirm, onCancel) => {
      return (
        <div className="bg-light confirm-box-element">
          <h1 className="font-weight-bold text-center">{message}</h1>
          <div className="mt-4 d-flex flex-row justify-content-around">
            <button className="btn btn-danger col-md-5 m-1" onClick={onConfirm}>
              {" "}
              Yes{" "}
            </button>
            <button className="btn btn-primary col-md-5 m-1" onClick={onCancel}>
              {" "}
              Cancel{" "}
            </button>
          </div>
        </div>
      );
    },
  };

  const onClickDeletePost = async () => {
    const result = await confirm(
      "Bạn có chắc chắn muốn xóa bài viết không? ",
      options
    );
    if (result) {
      handleConfirm();
      window.location.reload();
      return;
    }
    console.log("You click No!");
  };

  const handleConfirm = async () => {
    const idPost = props.post.id;
    console.log(idPost);
    await deletePostById(idPost).then((data) => {
      console.log(data);
    });
    return setShowConfirmBox(false);
  };

  const deleteComment = async (idComment) => {
    await deleteCommentById(idComment).then((data) => {});
    setListComment((oldlist) => oldlist.filter((comment) => comment.id !== idComment ))
  };

  //check info, fetch comment and list comment
  useEffect(() => {
    const id = checkLogin();
    const idUser = props.post ? props.post.user : 0;
    async function fetch() {
      setTime(fetchTime(props.post ? props.post.time : 0));
      await fetchAllInfo(idUser).then((data) => {
        setUser(data);
      });
      await fetchAllCommentByPostId(props.post ? props.post.id : 0).then(
        (data) => {
          // console.log("number of comment: ", data.length);
          // console.log("list comment: ", data);
          setNumberComment(data.length);
          setListComment(data);
        }
      );
      await fetchIsReact(id, props.post ? props.post.id : 0).then((data) => {
        setIsReactThisPost(data);
      });
      await fetchGroupByPostId(props.post ? props.post.id : 0).then((data) => {
        setGroup(data);
        setGroupLink(`http://localhost:3000/group/${group ? group.id : 0}`);
      });
    }
    fetch();
  }, [props.post, time, isChange]);

  let showAllComment;

  useEffect(
    () =>
      setLink(
        user
          ? user.id === checkLogin()
            ? "http://localhost:3000/profile"
            : `http://localhost:3000/profile/${user ? user.id : 0}`
          : ""
      ),
    [user]
  );

  showAllComment = () =>
    listComment.map((comment) => {
      return (
        <ShowComment
          userid={comment ? comment.userid : 0}
          comment={comment}
          user_id={user_id}
          deleteComment={deleteComment}
        />
      );
    });

  useEffect(() => {
    setNumberComment(listComment.length);
  }, [isLoad]);

  //effect after handlerReact
  const handlerReact = async () => {
    const data = {
      type: 1,
      user: checkLogin(),
      post: props ? props.post.id : 0,
    };
    console.log(data);
    await addReact(data).then((something) => {
      setIsChange(!isChange);
    });
  };

  useEffect(async () => {
    const id = checkLogin();
    await fetchIsReact(id, props.post ? props.post.id : 0).then((data) => {
      setIsReactThisPost(data);
    });
    await fetchPost(post ? post.id : 0).then((data) => {
      // console.log("post", data);
      setPost(data);
    });
  }, [isChange]);

  return (
    <div className="post">
      <div className="post__top">
        <a href={link} className="post-top__link">
          <div className="post__avatar">
            <Avatar
              src={user ? user.avatar : ""}
              className="post__avatar-img"
            />
          </div>
        </a>

        <div className="post__top-info">
          <div style={{ display: "flex", alignItems: "center" }}>
            <a href={link ? link : ""} className="post-top__link">
              <h3 className="post-top__underline">{user ? user.fullname : ""} </h3>
            </a>
            {group ? (
              <div>
                <a href={groupLink ? groupLink : ""}>
                  {" "}
                  - {group ? group.name : ""}
                </a>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <p>{time}</p>
        </div>

        {user_id == post.user ? (
          <div
            className="post__top-more"
            onClick={() => setEditDelete(!editDelete)}
          >
            <div className="moreIcon">
              <MoreHorizIcon style={{ position: "relative" }} />
            </div>
            {editDelete ? (
              <div class="postOptions">
                <button
                  class="button_options set__border"
                  onClick={() => setOnEdit(!onEdit)}
                >
                  Chỉnh Sửa
                </button>
                <button
                  class="button_options"
                  style={{ position: "relative" }}
                  onClick={() => onClickDeletePost()}
                >
                  Xóa bài viết
                </button>
                <AlertDelete />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {onEdit ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10
          }}
        >
          <input
            style={{ border: "1px solid black" }}
            value={editTitle}
            onChange={(e) => onEditChange(e)}
            type="text"
          />
          <button onClick={() => saveStatus()} class="btn btn-danger m-0">
            Lưu
          </button>
          <button
            onClick={() => setOnEdit(!onEdit)}
            class="btn btn-primary m-0"
          >
            Hủy
          </button>
        </div>
      ) : (
        <div className="post__bottom">
          <p>{editTitle ? editTitle : ""}</p>
        </div>
      )}

      {post ? (
        post.image ? (
          <div className="post__image">
            <ImageViewer>
              <img src={post ? post.image : ""} alt="" />
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
          <ThumbUpOutlinedIcon />{" "}
          {post
            ? post.react === 0
              ? "Hãy là người đầu tiên thích nội dung này"
              : post.react + " Người đã thích nội dung này"
            : ""}
        </div>
        <div className="post__quantity-comment">
          {numberComment === 0
            ? "Hãy là người bình luận đầu tiên"
            : numberComment + " bình luận"}
        </div>
      </div>

      <div>
        <hr />
        <div className="post__options">
          {isReactThisPost ? (
            <div className="post__option btn-danger" onClick={handlerReact}>
              <ThumbUpOutlinedIcon />
              <p>Like</p>
            </div>
          ) : (
            <div className="post__option btn-primary" onClick={handlerReact}>
              <ThumbUpOutlinedIcon />
              <p>Like</p>
            </div>
          )}

          <div
            className="post__option"
            onClick={() => setIsShowComment(!isShowComment)}
          >
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>
          <div className="post__option">
            <NearMeIcon />
            <p>Share</p>
          </div>
        </div>
      </div>
      {isShowComment ? (
        <div>
          <hr />
          {showAllComment()}
          <YourSpaceComment
            setLoad={setLoad}
            listComment={listComment ? listComment : []}
            setListComment={(list) => {
              setListComment(list);
            }}
            user={user}
            post={post ? post : null}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Post;
