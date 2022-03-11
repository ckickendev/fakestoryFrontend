import React, { useState } from "react";
import { storage } from "./index";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";

const UploadDemo = () => {
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
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
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
      }
    );
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
      <h3>Uploaded {progress}%</h3>
    </div>
  );
};

export default UploadDemo;
