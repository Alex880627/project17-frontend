import React from "react";
import EmailSendingComp from "./email-sending-comp";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";

const FooterComp = props => {
  let footer = "HU";
  props.language === "HU" ? (footer = hu.footer) : (footer = en.footer);
  return (
    <div className="footer-wrapper">
     <div>
     </div>
      <div className="footer">
        <h3>{"@2019 Stúdió 17"}</h3>
        <p>{footer.copyright}</p>
      </div>
    </div>
  );
};

export default FooterComp;
