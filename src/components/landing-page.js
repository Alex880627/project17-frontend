import React from "react";
import NavBarContainer from "../containers/nav-bar-container";
import SideBarContainer from "../containers/sidebar-container";
import PrivacyPolicyContainer from "../containers/privacy-policy-container";


const LandinPage = () => {
  return (
    <>
      <NavBarContainer />
      <div className="landing-page" id="page-up">
      <SideBarContainer />
      </div>
      <PrivacyPolicyContainer />
    </>
  );
};

export default LandinPage;
