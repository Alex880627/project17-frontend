import React, { useEffect, useState } from "react";
import LanguagePickerButton from "./language-picker-button-comp";
import UpNavButtonContainer from "../containers/up-button-container";
import NavigationLinksComp from "./navigation-links-comp";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import HamburgerMenu from "./hamburger-icon-comp";
import Loader from "./loader-component";

const NavBarComp = props => {
  let navbar = "HU";
  let email = "HU"
  props.language === "HU" ? (navbar = hu.navbar) : (navbar = en.navbar);
  props.language === "HU" ? (email = hu.footer.email) : (email = en.footer.email);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [isLoading, setIsloading] = useState(false);
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
      {innerWidth > 768 ? <NavigationLinksComp props={props} navbar={navbar} email={email} language={props.language}/> : null}
      {isLoading===true? <Loader />:null}
      <UpNavButtonContainer />
      <LanguagePickerButton
        changeLanguageToEN={props.changeLanguageToEN}
        changeLanguageToHU={props.changeLanguageToHU}
        setIsloading={setIsloading}
        isLoading={isLoading}
        language={props.language}
      />
    </nav>
  );
};

export default NavBarComp;
