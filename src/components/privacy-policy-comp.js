import React, { useState, useEffect } from "react";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import privacyPdf from "../assets/privacy-policy/privacy-policy.pdf"

const PrivacyPolicyComp = props => {
  const storage = window.localStorage;
  const [show, setShow] = useState(false);
  useEffect(() => {
    const time = storage.getItem('acceptedPrivacyTime');
    if(time===null){
      setShow(true);
    }else if((Date.now()-time)<43200000){
      setShow(false);
    }else{
      setShow(true);
    }
  }, [storage]);
  let policy;
  props.language === "HU"
    ? (policy = hu["privacy policy"])
    : (policy = en["privacy policy"]);
  return (
      <div className="privacy-policy" style={!show? {bottom: "-60%", transition: 'bottom 1.8s'}:null}>
      <p>
        {`${policy.sentence} `}
        <a href={privacyPdf} target="blank">{`${policy.link}`}</a>
        {`.`}
        <button onClick={()=>{
          setShow(false);
          storage.setItem('acceptedPrivacyTime', Date.now());
        }}>{policy.button}</button>
      </p>
    </div>
  );
};

export default PrivacyPolicyComp;
