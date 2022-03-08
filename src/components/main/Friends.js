import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../css/Friends.css";

function Friends() {
  return (
    <div className="friendWrapper">
      <div className="subFriendWrapper">
        <div className="friendBarTitle">
          <h4>
            <PeopleIcon className="iconPeople" style={{ fontSize: "30px" }} />
          </h4>
          <h4 className="friendTitle">Friends</h4>
        </div>
      </div>

      <div className="friendBarDetail">
        <div className="friendCollection">
          <Grid container xs={12} spacing={2}>
            <Grid item xs={6} xl={6}>
              <div className="friendList">
                <img
                  src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/275195234_1900829773450419_8832090657846807701_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=BtNPXsO2HIAAX-JsLpc&_nc_ht=scontent.fdad1-1.fna&oh=00_AT_3fEP0P-TLUZJEMigSuYrUskg5hqd11hZwRO1QacbVJA&oe=622C1292"
                  alt="imgFriend"
                />
                <a href="">
                  <p>Hoàng Thịnh</p>
                </a>
                <button>
                  <DeleteIcon />
                </button>
              </div>
            </Grid>
            <Grid item xs={6} xl={6}>
              <div className="friendList">
                <img
                  src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/275195234_1900829773450419_8832090657846807701_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=BtNPXsO2HIAAX-JsLpc&_nc_ht=scontent.fdad1-1.fna&oh=00_AT_3fEP0P-TLUZJEMigSuYrUskg5hqd11hZwRO1QacbVJA&oe=622C1292"
                  alt="imgFriend"
                />
                <a href="">
                  <p>Hoàng Thịnh</p>
                </a>
                <button>
                  <DeleteIcon />
                </button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Friends;
