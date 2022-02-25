import React from "react";
import Sidebar from "../../Sidebar";
import Feed from "../../Feed";
import Advertisement from "../../Advertisement";
import "../../css/App.css";

function Index() {
  return (
    <div className="app__body">
      <Sidebar />
      <Feed />
      <Advertisement />
    </div>
  );
}

export default Index;
