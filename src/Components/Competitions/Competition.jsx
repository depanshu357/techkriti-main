import React from "react";

import Main from "./Main";
import "./styles.css";
import { useParams } from "react-router-dom";

function Competition(props) {
	const {params} = useParams();
  return (
    <>
    <img id="myVideo" src = "background.gif"></img>
      <Main {...props} params={params} />
      </>
  );
}

export default Competition;