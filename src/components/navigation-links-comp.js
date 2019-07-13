import React from "react";

const NavigationLinksComp = ({navbar}) => {
  return (
    <div className="navigation">
      <a href="#collagues">{navbar.colleagues}</a>
      <a href="#treatments">{navbar["treatments"]}</a>
      <a href="#prices">{navbar.prices}</a>
      <a href="#group-sessions">{navbar["group sessions"]}</a>
      <a href="#contacts">{navbar.contacts}</a>
    </div>
  );
};

export default NavigationLinksComp;