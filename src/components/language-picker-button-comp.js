import huFlag from "../pic/hu-flag.webp";
import enFlag from "../pic/en-flag.webp";
import React, { useState, useEffect } from "react";

const LanguagePickerButton = props => {
  const { language, changeLanguageToEN, changeLanguageToHU, setIsloading, isLoading } = props;
  const [height, setHeight] = useState("2.5em");
  const setLang = () => {
    setIsloading(!isLoading);
    setTimeout(()=>{
      language === "HU" ? changeLanguageToEN() : changeLanguageToHU();
    }, 300)
  }
  useEffect(() => {
      setIsloading(false);
  }, [language, setIsloading])
  return (
    <ul
      className="languagepicker"
    > 
    {window.innerWidth>768? <li onClick={() => {
        height==="2.5em"? setHeight("5em"):setHeight("2.5em");
        }}>
        <img src={language === "HU" ? huFlag : enFlag} alt="flag" />
        {language === "HU" ? "Magyar" : "English"}
      </li>:null}
      
      <li
        onClick={() => {
          setLang();
          setHeight("2.5em");
        }}
      >
        <img src={language === "HU" ? enFlag : huFlag} alt="flag" />
        {language === "HU" ? "English" : "Magyar"}
      </li>
    </ul>
  );
};

export default LanguagePickerButton;
