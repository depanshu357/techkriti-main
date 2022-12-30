import React from "react";

import Main from "./Main";
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