import React, { useEffect, useState } from "react";
import LanguagePickerButton from "./language-picker-button-comp";
import UpNavButtonContainer from "../containers/up-button-container";
import NavigationLinksComp from "./navigation-links-comp";
import EmailSending from "./email-sending-comp";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import HamburgerMenu from "./hamburger-icon-comp";
import Loader from "./loader-component";
import CoverPic from "../components/cover-photo";

const NavBarComp = props => {
  let navbar = "HU";
  let email = "HU";
  props.language === "HU" ? (navbar = hu.navbar) : (navbar = en.navbar);
  props.language === "HU"
    ? (email = hu.footer.email)
    : (email = en.footer.email);
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
    <>
      <CoverPic props={props} />
      <nav
        className="main-navbar"
      >
        <HamburgerMenu
          closeSideBar={props.closeSideBar}
          openSideBar={props.openSideBar}
          sideBar={props.sideBar}
        />
        <div />
        {innerWidth > 768 ? (
          <NavigationLinksComp props={props} navbar={navbar} />
        ) : null}
        {isLoading === true ? <Loader /> : null}
        <UpNavButtonContainer />
        <EmailSending
          email={email}
          language={props.language}
          closeModal={props.closeModal}
          modalOpen={props.modalOpen}
        />
        <LanguagePickerButton
          changeLanguageToEN={props.changeLanguageToEN}
          changeLanguageToHU={props.changeLanguageToHU}
          setIsloading={setIsloading}
          isLoading={isLoading}
          language={props.language}
        />
      </nav>
    </>
  );
};

export default NavBarComp;
