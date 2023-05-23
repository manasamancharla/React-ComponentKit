import React from "react";

import "./index.css";

import data from "./data.js";
import Slider from "./Slider";

import "./Slider.css";

function App() {
  return (
    <>
      <div className="container_div">
        <Slider slides={data} />
      </div>
    </>
  );
}

export default App;
