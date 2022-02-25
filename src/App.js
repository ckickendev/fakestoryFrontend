import React from "react";
import Header from "./Header";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Index from "./components/index/Index";

function App() {
  /* const [{ user }, dispatch] = useStateValue(); */

  return (
    <div className="app">
      {/* {!user ? (
        <Login />
      ) : ( */}
      <>
        <Header />

        <div className="app__body">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </>
      {/* )} */}
    </div>
  );
}

export default App;
