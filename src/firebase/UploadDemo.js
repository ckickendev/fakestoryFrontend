import React, { useState } from "react";
import { useSelector } from "react-redux";
import { storage } from "./index";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import checkLogin from "../components/login/LogicLogin";
import NotFound from "../components/main/NotFound";
import { fetchAllInfo } from "../store/actions/information";
import { addPost } from "../store/actions/grow";
import { padding } from "@mui/system";
import "../css/UploadDemo.css"

const UploadDemo = (props) => {
  const [progress, setProgress] = useState(0);
  // const formHandler = (e) => {
  //   e.preventDefault();
  //   const file = e.target[0].files[0];
  //   uploadFiles(file);
  // };

  const inputHandler = () => {
    const file = document.getElementById("file").files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    if (!file) {
      return;
    }
    const filename = Math.random().toString(20).substring(2);
    console.log(filename);
    const storageRef = ref(storage, `/file/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          props.setImage(url)
        });
      }
    );
  };
  const idlogin = checkLogin();
  console.log("idlogin", idlogin);
  let [isAdmin, setIsAdmin] = useState("");
  const check = async () => {
    await fetchAllInfo(idlogin).then((data) => {
      setIsAdmin(data.role_id);
    });
  };
  check();
  console.log("isAdmin", isAdmin);
  return (
    <div style={{ width: "100%" }}>
      {isAdmin ? (
        <div style={{ width: "100%" }}>
          <form style={{display: "flex", flexDirection: "column", padding: "0.4em"}}>
            <input type="file" id="file"  class="custom-file-upload"/>
            <div style={{display:"flex", justifyContent: "space-between", marginTop: "0.25em"}}> 
              <button type="button" style={{border: "1px solid grey", borderRadius:"5px" ,padding: "0.5em"}} onClick={inputHandler}>
                Upload Image
              </button>   
              <h3 style={{marginTop: "1em"}}>Uploaded {progress}%</h3>
            </div>
            
          </form>
          
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default UploadDemo;
