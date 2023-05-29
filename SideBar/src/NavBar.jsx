import React, { useState } from "react";

import "./NavBar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloud } from "react-icons/ai";

import SideBar from "./SideBar/SideBar";
import Backdrop from "./SideBar/Backdrop";

function NavBar() {
  const [sideBar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <>
      <nav>
        <div className="hamburger_menu" onClick={toggleSideBar}>
          <GiHamburgerMenu />
        </div>

        <div className="nav_logo">
          <a href="#" className="logo_section">
            <AiOutlineCloud id="logo" />
            <span>Cloud</span>
          </a>
        </div>
      </nav>
      <Backdrop sideBar={sideBar} closeSideBar={toggleSideBar} />
      <SideBar sideBar={sideBar} closeSideBar={toggleSideBar} />
    </>
  );
}

export default NavBar;
