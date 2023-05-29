import React from "react";

import "./SideBar.css";

import { FaWindowClose } from "react-icons/fa";

function SideBar({ sideBar, closeSideBar }) {
  return (
    <div className={sideBar ? "sidebar sidebar_open" : "sidebar"}>
      <div className="xbutton_div">
        <FaWindowClose onClick={closeSideBar} id="xbutton" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Guide</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default SideBar;
