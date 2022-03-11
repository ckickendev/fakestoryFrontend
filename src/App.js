import React from "react";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import authReducer from "./store/reducers/auth";
import inforReducer from "./store/reducers/information";
import checkLogin from "./components/login/LogicLogin";
/* import Profile from "./nav/Profile"; */
import Register from "./components/register/Register";
import Main from "./nav/Main";
import Page from "./nav/Page";
import Group from "./components/group/Group";

const rootReducer = combineReducers({
  auth : authReducer,
  information : inforReducer,
});

const store = createStore(rootReducer);

function App() {
  // const isLogin = checkLogin();
  const isLogin = true;
  return (
    <Provider store={store}>
      <div className="app">
        {!isLogin ? (  
          <Login />
        ) : (
            <div className="app__body">
              <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/login" element={<Login/>} />
                {/* <Route path="/profile" element={<Profile />} /> */}
                <Route path="/register" element={<Register />} />
                <Route path="/group" element={<Group />} />
                <Route path="/page" element={<Page />} />
              </Routes>
            </div>
        )}
      </div>
    </Provider>
  )
  }
export default App;
