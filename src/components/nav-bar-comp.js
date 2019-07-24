import React, { useEffect, useState } from "react";
import LanguagePickerButton from "./language-picker-button-comp";
import UpNavButton from "./up-nav-button";
import NavigationLinksComp from "./navigation-links-comp";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import HamburgerMenu from "./hamburger-icon-comp";

const NavBarComp = props => {
  console.log(props);

  let navbar = "HU";
  props.language === "HU" ? (navbar = hu.navbar) : (navbar = en.navbar);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, []);
  if (innerWidth > 768) {
    props.closeSideBar();
  }
  return (
    <nav className="main-navbar">
      <HamburgerMenu
        closeSideBar={props.closeSideBar}
        openSideBar={props.openSideBar}
        sideBar={props.sideBar}
      />
      <div />
      {innerWidth > 768 ? <NavigationLinksComp navbar={navbar} /> : null}

      <UpNavButton />
      <LanguagePickerButton
        changeLanguageToEN={props.changeLanguageToEN}
        changeLanguageToHU={props.changeLanguageToHU}
        language={props.language}
      />
    </nav>
  );
};

export default NavBarComp;
