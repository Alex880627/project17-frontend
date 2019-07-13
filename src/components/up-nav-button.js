import React, { useState } from "react";
import upButton from "../pic/icons/arrow-up-icon.png";

const UpNavButton = () => {
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
      <a href="#navigation">
        <img src={upButton} className={visibility} />
      </a>
    </nav>
  );
};

export default UpNavButton;