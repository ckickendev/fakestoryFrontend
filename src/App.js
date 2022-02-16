import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Advertisement from "./Advertisement";
import Login from "./Login";
import "./App.css";

function App() {
  const user = "Nguyen Minh Huy";
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
       <>
        <Header />

        <div className="app__body"> 
          <Sidebar />
          <Feed />
          <Advertisement />
        </div>
       </> 
      )} 
    </div>
  );
}

export default App;

