import React, { useState } from "react";
// import { useSelector } from "react-redux";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Main from "./nav/Main";
import auth from "./store/reducers/auth";
import information from "./store/reducers/information";
import checkLogin from "./components/login/LogicLogin";
import Profile from "./nav/Profile";
import Page from "./components/PageFake/Page";
import Register from "./components/register/Register";
import UploadDemo from "./firebase/UploadDemo";
import { fetchAllInfo } from "./store/actions/information";
import NotFound404 from "./components/main/NotFound404";
import NotFound from "./components/main/NotFound";

import Group from "./components/group/Group";
import SuccessRegister from "./components/register/SuccessRegister";
import Messenger from "./components/messenger/Messenger";
import PostScreen from "./nav/PostScreen";

const rootReducer = combineReducers({
  auth,
  information,
});

let store = createStore(rootReducer);

function App() {
  let [isAdmin, setIsAdmin] = useState("");
  const check = async () => {
    await fetchAllInfo(6).then((data) => {
      setIsAdmin(data.role_id);
    });
  };
  check();
  const isLogin = checkLogin();

  return (
    <Provider store={store}>
      <div className="app">
        {!isLogin ? (
          <div className="app__body">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<Login />} />
            </Routes>
          </div>
        ) : (
          <>
            <div className="app__body">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/profile/" element={<Profile />} />
                <Route path="/profile/:userId" element={<Profile />} />
                <Route path="/home" element={<Main />} />
                <Route path="/main" element={<Main />} />
                <Route path="/" element={<Main />} />
                <Route path="/page/:pageId" element={<Page />} />
                <Route path="/group/:groupId" element={<Group />} />
                <Route path="/success" element={<SuccessRegister />} />
                <Route path="/messenger/:userId" element={<Messenger />} />
                <Route path="/post/:postId" element={<PostScreen />} />
                <Route path="/404" element={<NotFound404 />} />
                <Route path="/403" element={<NotFound />} />
                <Route path="/upload" element={< UploadDemo />} />

                <Route path="/firebase" element={<UploadDemo />} />
                <Route path="/*" element={<NotFound404 />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Provider>
  );
}
export default App;
