import React, { useEffect, useState } from "react";
import UploadPostSpace from "../main/UploadPostSpace";
import "../../css/AboutPage.css";
import { IntroPageIndex } from "./IntroPageIndex";
import { fetchLikePageInPage } from "../../store/actions/information";
import { useParams } from "react-router-dom";
import checkLogin from "../login/LogicLogin";

function AboutPage(props) {
  const id = checkLogin();
  const { pageId } = useParams();
  const [likePage, setLikePage] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [listPage, setListPage] = useState([]);

  useEffect(async () => {
    await fetchLikePageInPage(id, pageId).then((data) => {
      console.log(data);
      setLikePage(data);
      if(data.role == 1 || data.role==3) setIsAdmin(true);
    });
    
  }, []);
  

  return (
    <div class="md:flex md:space-x-6 pageAboutWrapper">
      <IntroPageIndex info={props.info ? props.info : ""} />

      {isAdmin ? (
        <div class="space-y-5 flex-shrink-0 md:w-7/12 uploadPostPage">
          <UploadPostSpace />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default AboutPage;
