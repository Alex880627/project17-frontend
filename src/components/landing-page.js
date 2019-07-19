import React from "react";
import NavBarContainer from "../containers/nav-bar-container";
import SideBarContainer from "../containers/sidebar-container"


const LandinPage = () => {
  return (
    <>
      <NavBarContainer />
      <div className="landing-page" id="page-up">
      <SideBarContainer />
      </div>
    </>
  );
};

export default LandinPage;
