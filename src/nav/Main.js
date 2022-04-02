import React, { useEffect, useState } from "react";
import Sidebar from "../components/main/Sidebar";
import Feed from "../components/main/Feed";
import Header from "../components/main/Header";
import Advertisement from "../components/main/Advertisement";
import "../css/Main.css";
import checkLogin from "../components/login/LogicLogin";
import { fetchAllInfo } from "../store/actions/information";
import NotFound from "../components/main/NotFound";

function Main() {
  const id = checkLogin();
  const [confirm, setConfirm] = useState(false);
  useEffect(async () => {
    await fetchAllInfo(id).then((data) => {
      setConfirm(true);
    });
  }, []);
  return (
    confirm ? (<div>
      <Header />
      <div className="main">
        <Sidebar />
        <Feed />
        <Advertisement />
      </div>
    </div>) : (<NotFound/>) 
    
  );
}

export default Main;
