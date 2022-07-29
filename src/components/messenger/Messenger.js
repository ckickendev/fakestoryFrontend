import React, { useEffect, useRef, useState } from "react";
import Header from "../main/Header";
import "../../css/Messesger.css";
import {
  checkFullStatusFriend,
  fetchAllInfo,
  fetchAllMessBetweenTwoPeople,
  fetchLastMessage,
} from "../../store/actions/information";
import checkLogin from "../login/LogicLogin";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { BubleMe, BubleOpp, LastMessElement } from "./MessengerElement";
import { addMessenger } from "../../store/actions/grow";

function Messenger() {
  const id = checkLogin();
  const [listMessengerLeft, setListMessengerLeft] = useState([]);
  const [room, setRoom] = useState();
  const { userId } = useParams();
  const [yourInfo, setYourInfo] = useState({});
  const [oppUserId, setOppUserId] = useState(userId);
  const [oppUserInfo, setOppUserInfo] = useState({});
  const [currentMessage, setCurrentMessage] = useState("");
  const [historyMessage, setHistoryMessage] = useState([]);
  const socket = io.connect("http://localhost:8001");

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      // console.log("data_recieve_message", data);
      setHistoryMessage((oldMess) => [...oldMess, data.message]);
    });
  }, [socket]);

  useEffect(async () => {
    await fetchLastMessage(id).then((data) => {
      setListMessengerLeft(data);
    });
    await fetchAllInfo(oppUserId).then((data) => {
      setOppUserInfo(data);
    });
    await fetchAllInfo(id).then((data) => {
      setYourInfo(data);
    });
    await checkFullStatusFriend(oppUserId, id).then((data) => {
      setRoom(data.id);
      socket.emit("join_room", data.id);
    });
    await fetchAllMessBetweenTwoPeople(id, oppUserId).then((data) => {
      setHistoryMessage(data);
    });
  }, []);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        authorId: id,
        message: {
          userFrom: parseInt(id),
          userTo: parseInt(userId),
          dateTime: Date.now(),
          content: currentMessage,
        },
      };
      await socket.emit("send_message", messageData);
      await addMessenger();
    }
    setCurrentMessage("");
  };

  const renderLastMess = () => {
    return listMessengerLeft.map((mess) => {
      // console.log("mess.userFrom === parseInt(id)", mess.userFrom, parseInt(id), mess.userTo, mess.userFrom  );
      return (
        <LastMessElement
          key={mess.dateTime}
          currentId={mess.userFrom === parseInt(id) ?  mess.userFrom:  mess.userTo }
          mess={mess}
        />
      );
    });
  };

  const renderHistoryMessenger = () => {
    if (historyMessage.length !== 0) {
      return historyMessage.map((mess, index) => {
        if (mess.userFrom === parseInt(id)) {
          return (
            <BubleMe
              key={index}
              message={mess.content}
              avatar={yourInfo.avatar}
            />
          );
        }
        return (
          <BubleOpp
            key={index}
            message={mess.content}
            avatar={oppUserInfo.avatar}
          />
        );
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="main_messenger">
        <div className="container-messenger container d-flex">
          <div className="messages-inbox col-md-3">
            <div className="messages-headline">
              <div className="input-with-icon" hidden>
                <input
                  id="autocomplete-input"
                  type="text"
                  placeholder="Search"
                />
                <i className="icon-material-outline-search"></i>
              </div>
              <h2 className="text-2xl font-semibold">Chats</h2>
              <span className="absolute icon-feather-edit mr-4 text-xl uk-position-center-right cursor-pointer"></span>
            </div>
            <div className="messages-inbox-inner" data-simplebar>
              <ul>{renderLastMess()}</ul>
            </div>
          </div>
          <div className="message-content col-md-9 d-flex flex-column">
            <div className="title_header">
              <h1 className="name_user_chat messages-headline">
                {oppUserInfo.fullname}
              </h1>
              <a href="/" className="message-action text-red-500">
                <i className="icon-feather-trash-2"></i>{" "}
              </a>
            </div>
            <div className="message-history flex-1">
              {renderHistoryMessenger()}
            </div>
            <div className="message-new-message">
              <div className="message-new">
                <input
                  className="col-md-9 text-center"
                  onChange={(event) => {
                    setCurrentMessage(event.target.value);
                  }}
                  placeholder="Your Message"
                  value={currentMessage}
                ></input>
                <button
                  onClick={() => {
                    sendMessage();
                  }}
                  className="button col-md-3"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messenger;
