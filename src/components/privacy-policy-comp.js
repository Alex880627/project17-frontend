import React, { useState } from "react";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import privacyPdf from "../assets/privacy-policy/privacy-policy.pdf"

const PrivacyPolicyComp = props => {
  const [show, setShow] = useState(true)
  let policy;
  props.language === "HU"
    ? (policy = hu["privacy policy"])
    : (policy = en["privacy policy"]);
  return (
      <div className="privacy-policy" style={!show? {bottom: "-20%", transition: 'bottom 0.7s'}:null}>
      <p>
        {`${policy.sentence} `}
        <a href={privacyPdf}>{`${policy.link}`}</a>
        {`.`}
        <button onClick={()=>{
          setShow(false);
        }}>{policy.button}</button>
      </p>
    </div>
  );
};

export default PrivacyPolicyComp;
