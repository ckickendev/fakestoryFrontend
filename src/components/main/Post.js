import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from "@mui/material";
import "../../css/Post.css";

function Post({ profAva, image, username, timestamp, message }) {
  const [value, setValue] = React.useState(0);

  return (
    <div className="post">
      <div className="post__top">
        <div className="post__avatar">
          <Avatar src={profAva} className="post__avatar-img" />
        </div>
        <div className="post__top-info">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
        <div className="post__top-more">
          <MoreHorizIcon />
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__quantity">
        {/* quantities of react, comment, share  */}
        <div className="post__quantity-like">
          9 likes
        </div>

        <div className="post__quantity-comment">
          10 comments
        </div>
      </div>

      <hr />

      <div className="post__options">
        <div className="post__option">
          <ThumbUpOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        {/* <div className="post__option">
                <AccountCircleIcon />
                <ExpandMoreIcon />
            </div> */}
      </div>

      <hr />

      <div className="post__comment">
        <div className="post__comment-avatar">
          <Avatar style={{width:'32px', height: '32px'}} src=""/>
        </div>

        <div className="post__comment-input">
          <input 
            type="text"
            placeholder="Hãy bình luận đầu tiên của bạn"
          />
        </div>
      </div>

      <div className="show__comment"> 
        <div className="show__comment-avatar">
          <Avatar 
            style={{width:'32px', height: '32px'}} 
            src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/271715372_1617785131895258_3221287728800887276_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=ruMiA_mhn7UAX8fAyyz&_nc_ht=scontent.fdad2-1.fna&oh=03_AVJzGkN4G7peqhCCAwV9vuVB-FObztPF56TYC-NG_HhLQg&oe=625315B3"
          />
        </div>
        
        <div className="show__comment-details">
          <div className="show__comment-details--top">
            <div className="show__comment-name">
              <h4>Hà Vyy</h4>
            </div>
            <div className="show__comment-content" >
              <p>.</p>
            </div>
          </div>

          <div className="show__comment-details--bottom">
            <div className="show__comment-like">
              <button>Thích</button>
            </div>
            <div className="show__comment-feedback">
              <button>Phản hồi</button>
            </div>
            <div className="show__comment-time">
              <p style={{margin:"0"}}>12 phút</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
