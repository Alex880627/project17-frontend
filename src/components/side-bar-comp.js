import React from "react";
import NavigationLinksComp from "./navigation-links-comp";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";

const SideBarComp = props => {
  let navbar = "HU";
  let style;
  props.language === "HU" ? (navbar = hu.navbar) : (navbar = en.navbar);
  const closeThePopUp = event => {
    const container = document.getElementsByClassName("side-bar")[0];
    if (event.target !== container && event.target.parentNode !== container) {
      props.closeSideBar();
    }
  };
  if (props.sideBar === "") {
    style = { left: "-130%", transition: "left 0.5s ease-in-out" };
  }
  return (
    <div className="side-bar-wrapper" style={style} onMouseUp={closeThePopUp}>
      <div className="side-bar"  onMouseUp={closeThePopUp}>
        <NavigationLinksComp navbar={navbar} />
      </div>
    </div>
  );
};

export default SideBarComp;
