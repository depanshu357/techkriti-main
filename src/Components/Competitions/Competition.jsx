import React from "react";
import Topgrid from "./Topgrid";
import Main from "./Main";
import Bottomgrid from "./Bottomgrid";
import "./styles.css";

function Competition({setThemeColor}) {
  return (
    <div>
      {/* <Topgrid /> */}
      <Main setThemeColor={setThemeColor}/>
      {/* <Bottomgrid classname="bottom-grid"/> */}
    </div>
  );
}

export default Competition;