import React from "react";
import NavigationLinksComp from "./navigation-links-comp";
import EmailSendingComp from "./email-sending-comp"
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";

const FooterComp = props => {
  let navbar = "HU";
  let footer = "HU";
  props.language === "HU" ? (navbar = hu.navbar) : (navbar = en.navbar);
  props.language === "HU" ? (footer = hu.footer) : (footer = en.footer);
  return (
    <div className="footer-wrapper">
      <div className="pre-footer">
      <NavigationLinksComp navbar={navbar} />
      <EmailSendingComp email={footer.email} language={props.language}/>
      </div>
      <div className="footer">
        <h3>{"@2019 Stúdió 17"}</h3>
        <p>{footer.copyright}</p>
      </div>
    </div>
  );
};

export default FooterComp;
