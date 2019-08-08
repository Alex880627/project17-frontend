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
      show? <div className="privacy-policy">
      <p>
        {`${policy.sentence} `}
        <a href={privacyPdf}>{`${policy.link}`}</a>
        {`.`}
        <button onClick={()=>{
          setShow(false);
        }}>{policy.button}</button>
      </p>
    </div>:null
  );
};

export default PrivacyPolicyComp;
