import React from "react";

import Main from "./Main";
import "./styles.css";
import { useParams } from "react-router-dom";

function Competition(props) {
	const {params} = useParams();
  return (
    <div>
      {/* <Topgrid /> */}
      <Main {...props} params={params} />
      {/* <Bottomgrid classname="bottom-grid"/> */}
    </div>
  );
}

export default Competition;