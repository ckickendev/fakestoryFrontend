import React from "react";
<<<<<<< HEAD
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Advertisement from "./Advertisement";
import Login from "./Login";
import "./css/App.css";
=======
import Header from "../src/components/main/Header";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./nav/Profile";
import Main from "./nav/Main";
import Login from "./components/login/Login";
>>>>>>> e515c125dd72fb8fa407c7ffab3ac2dd4e603541

function App() {
  /* const [{ user }, dispatch] = useStateValue(); */

<<<<<<< HEAD
  return (
    <div className="app">
      {/* {!user ? (
        <Login />
      ) : ( */}
      <>
        <Header />

        <div className="app__body">
          <Sidebar />
          <Feed />
          <Advertisement />
        </div>
      </>
      {/* )} */}
=======
  const user = "minh huy";
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </>
      )}
>>>>>>> e515c125dd72fb8fa407c7ffab3ac2dd4e603541
    </div>
  );
}

export default App;
