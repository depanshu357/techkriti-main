import React from "react";
import { Grid } from "@mui/material";
import "./styles.css";

function Main() {
  return (
    // <div className="main">
    //   <Grid container spacing={2}>
    //     <Grid item md={1} className="socialLogos">
    //       <br />
    //       <a href="/">
    //         <img
    //           src="images/facebook.png"
    //           height={"20px"}
    //           width={"11px"}
    //           alt="social"
    //         ></img>
    //       </a>
    //       <br></br>
    //       <a href="/">
    //         <img src="images/twitter.png" height={"17.94px"} alt="social"></img>
    //       </a>
    //       <br></br>
    //       <a href="/">
    //         <img src="images/youtube.png" height={"24px"} alt="social"></img>
    //       </a>
    //       <br></br>
    //       <a href="/">
    //         <img src="images/linkedin.png" height={"24px"} alt="social"></img>
    //       </a>
    //       <br></br>
    //       <a href="/">
    //         <img src="images/instagram.png" height={"20px"} alt="social"></img>
    //       </a>
    //     </Grid>
    //     <Grid item md={10}>
          <div className="main-container">
            <div className="main-text">
              <h1>Mandakini</h1>
              <br />
              <br />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <br />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
            <img src="images/mandakani.svg" alt="mandakini"/>
          </div>
    //     {/* </Grid>
    //   </Grid>
    // </div> */}
  );
}

export default Main;