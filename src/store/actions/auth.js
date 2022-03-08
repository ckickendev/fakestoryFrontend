export const AUTHENTICATION = "AUTHENTICATION";

// import User from "../../models/user";

// import { useDispatch } from "react-redux";
// import { response } from "express";

export const login = async (username, password) => {
  let mess;
  fetch("http://localhost:8080/FakeStory/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  }).then((response) =>
    response.json().then((data) => {
      if(data.content === undefined){
        console.log(data);
        document.cookie = `username=${data.id};max-age=60*60*24`;
        
      }else{
        mess = data.content;
        console.log(data);
      }
    })
  );
};

// const test = (test) => {
//     return (dispatch) => {
//         dispatch({type: "test", test: test})
//     }
// }
