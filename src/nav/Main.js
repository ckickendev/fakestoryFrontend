import React from "react";
import Sidebar from "../components/main/Sidebar";
import Feed from "../components/main/Feed";
import Header from "../components/main/Header";
import Advertisement from "../components/main/Advertisement";

function Main() {
  return (
    <div>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Advertisement />
      </div>
    </div>
  );
}

export default Main;
