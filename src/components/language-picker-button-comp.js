import huFlag from "../pic/hu-flag.jpg";
import enFlag from "../pic/en-flag.jpg";
import React, { useState } from "react";

const LanguagePickerButton = props => {
  const { language, changeLanguageToEN, changeLanguageToHU } = props;
  const [height, setHeight] = useState("2.5em");
  return (
    <ul
      className="languagepicker"
      style={{ height: height }}
      onMouseOver={() => {
        setHeight("5em");
      }}
      onMouseLeave={() => {
        setHeight("2.5em");
      }}
    >
      <li>
        <img src={language === "HU" ? huFlag : enFlag} alt="flag" />
        {language === "HU" ? "Magyar" : "English"}
      </li>
      <li
        onClick={() => {
          language === "HU" ? changeLanguageToEN() : changeLanguageToHU();
          setHeight("2.5em");
        }}
      >
        <img src={language === "HU" ? enFlag : huFlag} alt="flag" />
        {language === "HU" ? "Angol" : "Hungarian"}
      </li>
    </ul>
  );
};

export default LanguagePickerButton;
