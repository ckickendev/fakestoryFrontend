import React, { useEffect, useState } from "react";
import {
  fetchAllInfo,
  fetchAllNotificationById,
} from "../../store/actions/information";
import checkLogin from "../login/LogicLogin";
import fetchTime from "../post/fetchTime";

export const NotificationBoard = () => {
  const [listNoti, setListNoti] = useState([]);
  const id = checkLogin();
  useEffect(async () => {
    await fetchAllNotificationById(id).then((data) => {
      setListNoti(data);
    });
  }, []);

  const renderListNotification = () => {
    if (listNoti) {
      return listNoti.map((noti) => {
        return (
          <NotificationElement
            key={noti.id}
            title={noti.title}
            datetime={noti.datetime}
            forward_id={noti.forward_id}
            status={noti.status}
            content={noti.content}
          />
        );
      });
    } else {
      return <></>;
    }
  };

  return (
    <>
      <a href="#" className="is_icon" uk-tooltip="title: Notifications">
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
        </svg>
        <span>{listNoti ? listNoti.length : 0}</span>
      </a>
      <div uk-drop="mode: click" className="header_dropdown">
        <div className="dropdown_scrollbar" data-simplebar>
          <div className="drop_headline">
            <h4>Notifications </h4>
            <div className="btn_action">
              <a href="#" data-tippy-placement="left" title="Notifications">
                <ion-icon name="settings-outline"></ion-icon>
              </a>
              <a href="#" data-tippy-placement="left" title="Mark as read all">
                <ion-icon name="checkbox-outline"></ion-icon>
              </a>
            </div>
          </div>
        </div>
        <ul className="list-notification">{renderListNotification()}</ul>
      </div>
    </>
  );
};

const NotificationElement = ({ title, datetime, forward_id, status, content }) => {
  const [user, setUser] = useState([]);
  useEffect(async () => {
    await fetchAllInfo(forward_id).then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <>
      {status === 3 && (
        <li>
          <a href={`${window.location.origin}/profile/${user.id}`}>
            <div className="drop_avatar">
              <img src={user.avatar} alt="" />
            </div>
            <span className="drop_icon bg-gradient-success">
              <i className="icon-feather-thumbs-up"></i>
            </span>
            <div className="drop_text">
              <div>
                <strong>{user.fullname}</strong> {title}
              </div>
              <time> {fetchTime(datetime)} </time>
            </div>
          </a>
        </li>
      )}
      {status === 1 && (
        <li>
          <a href={`${window.location.origin}/post/${content}`}>
            <div className="drop_avatar">
              <img src={user.avatar} alt="" />
            </div>
            <span className="drop_icon bg-gradient-success">
              <i className="icon-feather-thumbs-up"></i>
            </span>
            <div className="drop_text">
              <div>
                <strong>{user.fullname}</strong> {title}
              </div>
              <time> {fetchTime(datetime)} </time>
            </div>
          </a>
        </li>
      )}
    </>
  );
};
