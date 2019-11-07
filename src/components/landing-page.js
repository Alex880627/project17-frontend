import React from "react";
import NavBarContainer from "../containers/nav-bar-container";
import PrivacyPolicyContainer from "../containers/privacy-policy-container";

import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";

const LandinPage = (props) => {
  let landingSentence = "HU";
  props.language === "HU" ? (landingSentence = hu.landingSentence) : (landingSentence = en.landingSentence);
  return (
    <>
      <NavBarContainer />
      <div className="landing-page" id="page-up">
        <h3 className="left-sentence">{landingSentence.coverSentenceLeft}</h3>
        <h3 className="right-sentence">{landingSentence.coverSentenceRight}</h3>
      </div>
      <PrivacyPolicyContainer />
    </>
  );
};

export default LandinPage;
