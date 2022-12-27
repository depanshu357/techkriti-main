import React from "react";
import { useState } from "react";

const HorizontalBar = (props) => {
  const address = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
  ];
  const [y, setY] = useState(0);
  const [height, setHeight] = useState("100px");
  // setInterval(() => {
  //   setY(window.pageYOffset);
  // }, 1);
  //   const container = {
  //     height: "200px",
  //     display: "flex",
  //     flexDirection: "row",
  //     border: "2px solid red",
  //     position: "sticky",
  //     bottom:`100px`,
  //     zIndex: "2",
  //     right: "-200px",
  //     cursor:"pointer"
  //   };
  const [container, setContainer] = useState({
    height: "100px",
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    border: "2px solid red",
    position: "sticky",
    bottom: `100px`,
    zIndex: "2",
    // right: "-200px",
    cursor: "pointer",
    // width:"70vw",
  });
  const box = {
    height: `100%`,
    margin: "0 10px",
  };
  const image = {
    height: "100%",
    width:"130px",
    borderRadius: "20px",
  };
  function handleClick(event) {
    // const box = document.getElementById("box")
    // box.style.height = "200px"
    // console.log(event.target)
    // event.target.style.height="200px"
    // if (props.clicked) {
    //   console.log("hello ");
    //   setContainer({
    //     height: "200px",
    //     display: "flex",
    //     flexDirection: "row",
    //     border: "2px solid red",
    //     position: "absolute",
    //     // bottom:`40vh`,
    //     zIndex: "2",
    //     right: "-200px",
    //     cursor: "pointer",
    //   });
    // }
  }
  return (
    <div>
      <div style={container} onClick={handleClick}>
        {address.map((item, index) => (
          <div key={index}>
            <div style={box} className="box" id="box">
              <img src={item} style={image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalBar;