import React from "react";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import privacyPdf from "../assets/privacy-policy/privacy-policy.pdf"

const FooterComp = props => {
  let footer = "HU";
  let contacts = "HU";
  props.language === "HU" ? (contacts = hu.contacts) : (contacts = en.contacts);
  props.language === "HU" ? (footer = hu.footer) : (footer = en.footer);
  return (
    <div className="footer-wrapper">
     <p>{footer.name}</p>
     <p>{contacts["contacts info"].address}</p>
     <p>{contacts["contacts info"].email}</p>
      <div className="footer">
        <p>{"@2019 Studio 17"}</p>
        <p>{footer.copyright}</p>
        <a href={privacyPdf} target="blank">{footer["privacy policy"]}</a>
      </div>
    </div>
  );
};

export default FooterComp;
