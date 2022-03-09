import React from "react";
import Header from "../src/components/main/Header";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./nav/Profile";
import Main from "./nav/Main";
import Login from "./components/login/Login";
import Register from "./components/register/Register"
import Group from "./nav/Group"
import Page from "./nav/Page"

function App() {
  /* const [{ user }, dispatch] = useStateValue(); */
  const user = null;

  const user = 'huy';
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
      <>
        {/* <Header />
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div> */}
        <Group />
      </>
      )}
      
    </div>
  );
}

export default App;
