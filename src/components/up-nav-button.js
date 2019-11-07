import React, { useState } from "react";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";

const UpNavButton = (props) => {
  console.log(props, hu);
  
  let upButton = "HU";
  props.language === "HU" ? (upButton = hu.upButton) : (upButton = en.upButton);
  const [visibility, setVisibility] = useState("hidden");
  const onScroll = event => {
    if (window.pageYOffset > 400) {
      setVisibility("visible");
    } else if (window.pageYOffset < 400) {
      setVisibility("hidden");
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <nav className="up-button">
      <a href="#page-up">
        <h1 className={visibility}>{upButton}</h1>
      </a>
    </nav>
  );
};

export default UpNavButton;