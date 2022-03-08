import React from "react";
import Header from "../src/components/main/Header";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./nav/Profile";
import Main from "./nav/Main";
import Login from "./components/login/Login";
// import Register from "./components/login/Register";
import { createStore, combineReducers } from "redux";
import Group from "./nav/Group"
import { Provider } from "react-redux";
import authReducer from "./store/reducers/auth";

const rootReducer = combineReducers({
  auth : authReducer
});

const store = createStore(rootReducer);

function App() {
  /* const [{ user }, dispatch] = useStateValue(); */

  const user = null;
  return (
    <Provider store={store}>
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
        <Group />

      </div>
    </Provider>


  );
}

export default App;
