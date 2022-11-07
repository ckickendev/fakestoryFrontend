import React, { useEffect, useState } from "react";
import { fetchAllInfo, fetchLastMessage } from "../../store/actions/information";
import fetchTime from "../post/fetchTime";

const MessengerIcon = ({ number }) => {
  return (
    <a href="#" className="is_icon" uk-tooltip="title: Message">
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span>{number}</span>
    </a>
  );
};

const MessageElement = ({message ,id}) => {
  const oppUser = message.userFrom === parseInt(id) ? message.userTo : message.userFrom;
  const [oppUserInfo, setOppUserInfo] = useState({});
  useEffect(async () => {
    await fetchAllInfo(oppUser).then((data) => {
      setOppUserInfo(data);
    });
  }, []);
  
  return (
    <li className="un-read">
      <a href={`http://localhost:3000/messenger/${oppUser}`}>
        <div className="drop_avatar">
          <img src={oppUserInfo.avatar} alt="" />
        </div>
        <div className="drop_text">
          <strong>{oppUserInfo.fullname}</strong> <time>{fetchTime(message.dateTime)}</time>
          <p> {message.content} </p>
        </div>
      </a>
    </li>
  );
};

export const MessengerBoard = ({ id }) => {
  const [listMessenger, setListMessenger] = useState([]);
  useEffect(
    async () =>
      await fetchLastMessage(id).then((data) => {
        setListMessenger(data);
      }),
    []
  );

  const renderLastMess = (id) => {
    return listMessenger.map((message) => {
      return <MessageElement key={message.dateTime} message={message} id={id} />;
    });
  };
  
  return (
    <>
      <MessengerIcon number={listMessenger.length} />
      <div uk-drop="mode: click" className="header_dropdown is_message">
        <div className="dropdown_scrollbar" data-simplebar>
          <div className="drop_headline">
            <h4>Messages </h4>
            <div className="btn_action">
              <a href="#" data-tippy-placement="left" title="Notifications">
                <ion-icon
                  name="settings-outline"
                  uk-tooltip="title: Message settings ; pos: left"
                ></ion-icon>
              </a>
              <a href="#" data-tippy-placement="left" title="Mark as read all">
                <ion-icon name="checkbox-outline"></ion-icon>
              </a>
            </div>
          </div>
          <input
            type="text"
            className="uk-input"
            placeholder="Search in Messages"
          />
          <ul>{renderLastMess(id)}</ul>
        </div>
        <a href="./messenger" className="see-all">
          See all in Messages
        </a>
      </div>
    </>
  );
};
