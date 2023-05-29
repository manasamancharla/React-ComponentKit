import React from "react";

import "./SideBar.css";

function Backdrop({ sideBar, closeSideBar }) {
  return (
    <>
      <div onClick={closeSideBar} className={sideBar ? "backdrop" : ""}></div>
    </>
  );
}

export default Backdrop;
