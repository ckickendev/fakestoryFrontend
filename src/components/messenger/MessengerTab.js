import React, { useEffect, useState } from "react";
import "../../css/MessengerTab.css";
import { fetchAllInfo } from "../../store/actions/information";
import checkLogin from "../login/LogicLogin";
import { NotificationBoard } from "../main/NotificationBoard";
import { MessengerBoard } from "./MessengerBoard";
import { OptionTag } from "./OptionTag";
function MessengerTab() {
  const [user, setUser] = useState();
  const id = checkLogin();
  useEffect(async () => {
    await fetchAllInfo(id).then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <div className="header_widgets">
      <a href="#" className="is_icon" uk-tooltip="title: Cart">
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
      </a>
      <div uk-drop="mode: click" className="header_dropdown dropdown_cart">
        <div className="drop_headline">
          <h4> My Cart </h4>
          <a
            href="#"
            className="btn_action hover:bg-gray-100 mr-2 px-2 py-1 rounded-md underline"
          >
            Checkout
          </a>
        </div>

        <ul className="dropdown_cart_scrollbar" data-simplebar>
          <li>
            <div className="cart_avatar">
              <img src="assets/images/product/2.jpg" alt="" />
            </div>
            <div className="cart_text">
              <div className=" font-semibold leading-4 mb-1.5 text-base line-clamp-1">
    
                Wireless headphones
              </div>
              <p className="text-sm">Type Accessories </p>
            </div>
            <div className="cart_price">
              <span> $14.99 </span>
              <button className="type"> Remove</button>
            </div>
          </li>
        </ul>

        <div className="cart_footer">
          <p> Subtotal : $ 320 </p>
          <h1>
            Total : <strong> $ 320</strong>
          </h1>
        </div>
      </div>
      <NotificationBoard />
      <MessengerBoard id={id} />
      

      <a href="#">
        <img src={user ? user.avatar : ""} className="is_avatar" alt="" />
      </a>
      <OptionTag />
    </div>
  );
}

export default MessengerTab;
