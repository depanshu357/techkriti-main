import React from "react";
import { workshopData } from "./workshopData";
import { useParams } from "react-router-dom";
import "./workshopDetails.css"
export default function WorkshopTemplate() {
  const params = useParams();
  return (
    // <div>
    //   <div className="stock-container">
    //     <h1>{params.workName}</h1>
    //     {workshopData.map((e) => {
    //       if (e.workName === params.workName) {
    //         return <h3>{e.main.dataMain}</h3>;
    //       }
    //     })}
    //   </div>
    // </div>

    <div className="contestEach">
      <div class="containerEach">
        <div class="cardEach">
          <div style={{ width: "70%", float: "left", display: "inline-block" }}>
            <h1 class="titleEach">{params.workName}</h1>
            {workshopData.map((e) => {
              if (e.workName === params.workName) {
                return <h3>{e.main.dataMain}</h3>;
              }
            })}
            <button class="btnEach">Get Started</button>
          </div>
          <div
            style={{ width: "30%", float: "right", display: "inline-block" }}
          >
          </div>
        </div>
      </div>
      <br />

      {/* <div class="compRegEach"> */}
        <center>
          <button class="glass-button">Register</button>{" "}
        </center>
      {/* </div> */}
    </div>
  );
}
