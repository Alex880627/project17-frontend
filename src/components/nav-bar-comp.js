import React from "react";
import LanguagePickerButton from "./language-picker-button-comp";
import UpNavButton from "./up-nav-button";
import NavigationLinksComp from "./navigation-links-comp";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";

const NavBarComp = props => {
  let navbar = "HU";
  props.language === "HU" ? (navbar = hu.navbar) : (navbar = en.navbar);
  return (
    <nav className="main-navbar" id="navigation">
      <div />
      <NavigationLinksComp navbar={navbar} />
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
