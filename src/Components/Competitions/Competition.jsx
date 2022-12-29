import React from "react";
import Topgrid from "./Topgrid";
import Main from "./Main";
import Bottomgrid from "./Bottomgrid";
import "./styles.css";

function Competition({setThemeColor, setLowergridmenu}) {
  return (
    <div>
      {/* <Topgrid /> */}
      <Main setThemeColor={setThemeColor} setLowergridmenu={setLowergridmenu}/>
      {/* <Bottomgrid classname="bottom-grid"/> */}
    </div>
  );
}

export default Competition;