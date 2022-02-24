import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Advertisement from "./Advertisement";
import Login from "./Login";
import "./css/App.css";

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
          <Sidebar />
          <Feed />
          <Advertisement />
        </div>
      </>
      {/* )} */}
    </div>
  );
}

export default App;
