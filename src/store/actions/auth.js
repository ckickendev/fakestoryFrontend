export const AUTHENTICATION = "AUTHENTICATION";

// import User from "../../models/user";

// import { useDispatch } from "react-redux";
// import { response } from "express";

export const login = async (username, password) => {
  let mess = "";
  return fetch("http://localhost:8080/FakeStory/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
      // if (data.content === undefined) {
      //   document.cookie = `id=${data.id};max-age=60*60*24`;
      //   document.cookie = `username=${data.username};max-age=60*60*24`;
      //   window.location.href = "http://localhost:3000/";
      // } else {
      //   mess = data.content;
      //   console.log(mess);
      //   return mess;
      // }
    });
  
};

// const test = (test) => {
//     return (dispatch) => {
//         dispatch({type: "test", test: test})
//     }
// }
