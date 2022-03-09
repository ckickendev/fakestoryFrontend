import React from "react";
import Sidebar from "../components/main/Sidebar";
import Feed from "../components/main/Feed";
import Advertisement from "../components/main/Advertisement";
import "../css/App.css";

function Main() {
  return (
    <div className="app__body">
      <Sidebar />
      <Feed />
      <Advertisement />
    </div>
  );
}

export default Main;
