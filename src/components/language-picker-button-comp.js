import huFlag from '../pic/hu-flag.jpg'
import enFlag from '../pic/en-flag.jpg'
import React from "react";

const LanguagePickerButton = (props) => {
  const { language, changeLanguageToEN, changeLanguageToHU } = props;
  return (
    <ul className="languagepicker">
        <li>
          <img src={language==='HU'? huFlag:enFlag} alt="flag" />
          {language==='HU'? 'Magyar':'English'}
        </li>
        <li onClick={language==='HU'? changeLanguageToEN:changeLanguageToHU}>
          <img src={language==='HU'? enFlag:huFlag} alt="flag"/>
          {language==='HU'? 'Angol':'Hungarian'}
        </li>
    </ul>
  );
};

export default LanguagePickerButton;
