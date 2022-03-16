import React from "react";
import MessageSender from "../main/MessageSender";
import Post from "../main/Post";
import "../../css/ProfileFeed.css";

function ProfileFeed() {
  return (
    <div className="subFeed">
      <MessageSender />
      <Post
        profAva="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-1/c47.0.240.240a/p240x240/168600690_132095425540608_6073473717300407730_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=At8nSiypLZQAX9hE-5T&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT93qTODXwc0-Yrv8BcT8fbz-OKJfH_g_BGL94fsXuOwzg&oe=622E92C1"
        message="Hello world"
        timestamp="14 phut"
        username="Huy Nguyen"
        image="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/151266852_114763457273805_3886756789292532879_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=B7c1a4f8ZgcAX-Ep6iN&_nc_ht=scontent.fhan3-4.fna&oh=00_AT-fo3ma4zEyUUqRTbQ8hP83Hl6ky8V989Tb8gADpCaQvg&oe=623013DE"
      />
    </div>
  );
}

export default ProfileFeed;
