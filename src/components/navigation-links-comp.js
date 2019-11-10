import React from "react";
const Scroll = require("react-scroll");
const scroller = Scroll.scroller;

const NavigationLinksComp = ({ props, navbar }) => {
  const link = element => {
    scroller.scrollTo(element, {
      duration: 400,
      smooth: "easeInOutExpo",
      offset: 0
    });
  };
  return (
    <div
      className="navigation"
      onMouseEnter={() => {
        props.setBlur();
      }}
      onMouseLeave={() => {
        props.unsetBlur();
      }}
    >
      <a
        onClick={() => {
          link("colleagues");
        }}
      >
        {navbar.colleagues}
      </a>
      <a
        onClick={() => {
          link("treatments");
        }}
      >
        {navbar["treatments"]}
      </a>
      <a
        onClick={() => {
          link("prices");
        }}
      >
        {navbar.prices}
      </a>
      <a
        onClick={() => {
          link("group sessions");
        }}
      >
        {navbar["group sessions"]}
      </a>
      <a
        onClick={() => {
          link("contacts");
        }}
      >
        {navbar.contacts}
      </a>
      <a onClick={props.openModal}>{navbar.contactUs}</a>
    </div>
  );
};

export default NavigationLinksComp;
