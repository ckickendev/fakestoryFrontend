import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import { ImageViewer } from "react-image-viewer-dv";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../css/Photos.css";

function Photos() {
  return (
    <div className="photoWrapper">
      <div className="subPhotoWrapper">
        <div className="photoBarTitle">
          <h4>
            <ImageIcon className="iconImage" />
          </h4>
          <h4 className="photoTitle">Photos</h4>
        </div>

        <div className="photoBarDetail">
          <div className="photoCollection">
            <Grid container xs={12} spacing={2}>
              <Grid item xs={2} md={2}>
                <div className="imgView">
                  <ImageViewer>
                    <img
                      src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=DcDYRlNqx7oAX8EF8Wn&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_BD4qx2yzC9ZEo1Qk_Zhl8mk7iqnWqEUOtlOp7mbw-dg&oe=624E0721"
                      alt="bosua"
                    />
                  </ImageViewer>
                  <button className="buttonDel">
                    <DeleteIcon className="iconDel" />
                  </button>
                </div>
              </Grid>

              <Grid item xs={2} md={2}>
                <div className="imgView">
                  <ImageViewer>
                    <img
                      src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=DcDYRlNqx7oAX8EF8Wn&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_BD4qx2yzC9ZEo1Qk_Zhl8mk7iqnWqEUOtlOp7mbw-dg&oe=624E0721"
                      alt="bosua"
                    />
                  </ImageViewer>
                  <button className="buttonDel">
                    <DeleteIcon className="iconDel" />
                  </button>
                </div>
              </Grid>

              <Grid item xs={2} md={2}>
                <div className="imgView">
                  <ImageViewer>
                    <img
                      src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=DcDYRlNqx7oAX8EF8Wn&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_BD4qx2yzC9ZEo1Qk_Zhl8mk7iqnWqEUOtlOp7mbw-dg&oe=624E0721"
                      alt="bosua"
                    />
                  </ImageViewer>
                  <button className="buttonDel">
                    <DeleteIcon className="iconDel" />
                  </button>
                </div>
              </Grid>

              <Grid item xs={2} md={2}>
                <div className="imgView">
                  <ImageViewer>
                    <img
                      src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=DcDYRlNqx7oAX8EF8Wn&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_BD4qx2yzC9ZEo1Qk_Zhl8mk7iqnWqEUOtlOp7mbw-dg&oe=624E0721"
                      alt="bosua"
                    />
                  </ImageViewer>
                  <button className="buttonDel">
                    <DeleteIcon className="iconDel" />
                  </button>
                </div>
              </Grid>

              <Grid item xs={2} md={2}>
                <div className="imgView">
                  <ImageViewer>
                    <img
                      src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=DcDYRlNqx7oAX8EF8Wn&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_BD4qx2yzC9ZEo1Qk_Zhl8mk7iqnWqEUOtlOp7mbw-dg&oe=624E0721"
                      alt="bosua"
                    />
                  </ImageViewer>
                  <button className="buttonDel">
                    <DeleteIcon className="iconDel" />
                  </button>
                </div>
              </Grid>

              <Grid item xs={2} md={2}>
                <div className="imgView">
                  <ImageViewer>
                    <img
                      src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=DcDYRlNqx7oAX8EF8Wn&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_BD4qx2yzC9ZEo1Qk_Zhl8mk7iqnWqEUOtlOp7mbw-dg&oe=624E0721"
                      alt="bosua"
                    />
                  </ImageViewer>
                  <button className="buttonDel">
                    <DeleteIcon className="iconDel" />
                  </button>
                </div>
              </Grid>

              <Grid item xs={2} md={2}>
                <div className="imgView">
                  <ImageViewer>
                    <img
                      src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=DcDYRlNqx7oAX8EF8Wn&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_BD4qx2yzC9ZEo1Qk_Zhl8mk7iqnWqEUOtlOp7mbw-dg&oe=624E0721"
                      alt="bosua"
                    />
                  </ImageViewer>
                  <button className="buttonDel">
                    <DeleteIcon className="iconDel" />
                  </button>
                </div>
              </Grid>

              <Grid item xs={2} md={2}>
                <div className="imgView">
                  <ImageViewer>
                    <img
                      src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.6435-9/142744943_108671591216325_2670127871559986738_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=DcDYRlNqx7oAX8EF8Wn&tn=7wk8T-GdILCqXwVR&_nc_ht=scontent.fdad1-2.fna&oh=00_AT_BD4qx2yzC9ZEo1Qk_Zhl8mk7iqnWqEUOtlOp7mbw-dg&oe=624E0721"
                      alt="bosua"
                    />
                  </ImageViewer>
                  <button className="buttonDel">
                    <DeleteIcon className="iconDel" />
                  </button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
