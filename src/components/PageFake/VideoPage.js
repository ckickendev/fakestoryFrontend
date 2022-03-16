import React, { useRef, useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import video1 from "../../video/test1.mp4"
import "../../css/VideoPage.css"

function VideoPage() {
  const videoRef = useRef()
  console.log(videoRef.current)

  /* const mouseEnter = () => {
    for (let i = 0; i < videoRef.current.length; i++) {
      videoRef.current[i].play()
    }
  } */
  const mouseEnter = () => {
    videoRef.current.play()
  } 


  const mouseLeave = () => {
    videoRef.current.currentTime = 0
    videoRef.current.pause()
  }

  return (
    <Container maxWidth="md" sx={{ bgcolor: '#fff', borderRadius: 2, padding: "40px 30px 20px" }}>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <video 
          type="video/mp4"
          ref={videoRef}
          src={video1}
          onMouseEnter={mouseEnter}
          onMouseOut={mouseLeave}
        />
      </Grid>
      <Grid item xs={4}>
        <video 
          type="video/mp4"
          src="https://v16-webapp.tiktok.com/e71381ae328720156c4cd2511cf4e1cf/62327f86/video/tos/useast2a/tos-useast2a-ve-0068c003/15ee68e743ab4641be3c4e0d016d7975/?a=1988&br=1262&bt=631&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=2&er=&ft=XOQ9-3LGnz7ThV70iDXq&l=202203161823240102440750710C72B767&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzQ2Ojk6ZjppOjMzNzczM0ApOzRoOmhpOzxmNzZkNjhoaWdwNC8ycjQwM3JgLS1kMTZzc18tMWAuMzM1YmNhXl9fY2E6Yw%3D%3D&vl=&vr=" 
          ref={videoRef}
          onMouseEnter={mouseEnter}
          onMouseOut={mouseLeave}
        />
      </Grid>
      <Grid item xs={4}>
        <video 
          type="video/mp4"
          src="https://v16-webapp.tiktok.com/e71381ae328720156c4cd2511cf4e1cf/62327f86/video/tos/useast2a/tos-useast2a-ve-0068c003/15ee68e743ab4641be3c4e0d016d7975/?a=1988&br=1262&bt=631&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=2&er=&ft=XOQ9-3LGnz7ThV70iDXq&l=202203161823240102440750710C72B767&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzQ2Ojk6ZjppOjMzNzczM0ApOzRoOmhpOzxmNzZkNjhoaWdwNC8ycjQwM3JgLS1kMTZzc18tMWAuMzM1YmNhXl9fY2E6Yw%3D%3D&vl=&vr=" 
          ref={videoRef}
          onMouseEnter={mouseEnter}
          onMouseOut={mouseLeave}
        />
      </Grid>
      <Grid item xs={4}>
        <video 
          type="video/mp4"
          src="https://v16-webapp.tiktok.com/e71381ae328720156c4cd2511cf4e1cf/62327f86/video/tos/useast2a/tos-useast2a-ve-0068c003/15ee68e743ab4641be3c4e0d016d7975/?a=1988&br=1262&bt=631&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=2&er=&ft=XOQ9-3LGnz7ThV70iDXq&l=202203161823240102440750710C72B767&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzQ2Ojk6ZjppOjMzNzczM0ApOzRoOmhpOzxmNzZkNjhoaWdwNC8ycjQwM3JgLS1kMTZzc18tMWAuMzM1YmNhXl9fY2E6Yw%3D%3D&vl=&vr=" 
          ref={videoRef}
          onMouseEnter={mouseEnter}
          onMouseOut={mouseLeave}
        />
      </Grid>
      <Grid item xs={4}>
        <video 
          type="video/mp4"
          src="https://v16-webapp.tiktok.com/e71381ae328720156c4cd2511cf4e1cf/62327f86/video/tos/useast2a/tos-useast2a-ve-0068c003/15ee68e743ab4641be3c4e0d016d7975/?a=1988&br=1262&bt=631&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=2&er=&ft=XOQ9-3LGnz7ThV70iDXq&l=202203161823240102440750710C72B767&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzQ2Ojk6ZjppOjMzNzczM0ApOzRoOmhpOzxmNzZkNjhoaWdwNC8ycjQwM3JgLS1kMTZzc18tMWAuMzM1YmNhXl9fY2E6Yw%3D%3D&vl=&vr=" 
          ref={videoRef}
          onMouseEnter={mouseEnter}
          onMouseOut={mouseLeave}
        />
      </Grid>
    </Grid>
  </Box>
  </Container>
  )
}

export default VideoPage