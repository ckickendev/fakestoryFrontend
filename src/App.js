import React from "react";
import "./css/App.css";
<<<<<<< HEAD
=======
import Header from "../src/components/main/Header";
>>>>>>> 9220d62f8915345240a956ff4bb5b0e242c5110d
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Main from "./nav/Main";
import authReducer from "./store/reducers/auth";
import inforReducer from "./store/reducers/information";
import checkLogin from "./components/login/LogicLogin";
<<<<<<< HEAD
import Profile from "./nav/Profile";
import Register from "./components/register/Register";
import UploadDemo from "./firebase/UploadDemo"


const rootReducer = combineReducers({
  auth : authReducer,
  information : inforReducer
=======
import Register from "./Register";
import Profile from "./nav/Profile";
import Main from "./nav/Main";

const rootReducer = combineReducers({
  auth: authReducer,
>>>>>>> 9220d62f8915345240a956ff4bb5b0e242c5110d
});

const store = createStore(rootReducer);

function App() {
<<<<<<< HEAD
  // const isLogin = checkLogin();
=======
>>>>>>> 9220d62f8915345240a956ff4bb5b0e242c5110d
  const isLogin = true;
  return (
    <Provider store={store}>
      <div className="app">
        {!isLogin ? (
          <Login />
        ) : (
          <>
<<<<<<< HEAD
            <div className="app__body">
              <Routes>
                <Route path="/firebase" element= {<UploadDemo />} />
                <Route path="/login" element={<Login/>} />
=======
            <Header />
            <div className="app__body">
              <Routes>
                <Route path="/login" element={<Login />} />
>>>>>>> 9220d62f8915345240a956ff4bb5b0e242c5110d
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Main />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Provider>
  );
}
export default App;
