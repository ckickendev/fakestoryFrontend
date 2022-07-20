import React, { useState } from "react";
import { storage } from "./index";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import checkLogin from "../components/login/LogicLogin";
import NotFound from "../components/main/NotFound";
import { fetchAllInfo } from "../store/actions/information";
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
  const [isAdmin, setIsAdmin] = useState(0);
  const check = async () => {
    await fetchAllInfo(idlogin).then((data) => {
      console.log(data)
      setIsAdmin(data.role_id);
    });
  };
  check();
  console.log("isAdmin", isAdmin);
  return (
    <div style={{ width: "100%" }}>
      {isAdmin ? (
        <div style={{ }} >
          <form style={{display: "flex", flexDirection: "column" ,justifyContent: "space-between", padding: "0.4em"}}>
            <input type="file" id="file" class="custom-file-upload form-control form-control-lg "  />
            <div style={{display:"flex", flexDirection:"column", justifyContent: "space-between" , alignItems: "center", marginTop: "0.25em"}}> 
              <button type="button" style={{border: "1px solid grey", width:"100%" , borderRadius:"5px" ,padding: "0.5em"}} onClick={inputHandler}>
                Upload Image
              </button>   
              <button type="button" onClick={() => props.setIsUploadImage(!props.isUploadImage)}  style={{border: "1px solid grey", width:"100%" , borderRadius:"5px" ,padding: "0.5em"}}>
                Cancel
              </button>  
              <h3 style={{marginTop: "1em", textAlign: "center"}}>Uploaded {progress}%</h3>
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
