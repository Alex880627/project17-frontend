import React from "react";
import simpleModal from "./modal-comp";
import EmailSendingComp from "./email-sending-comp";
const Scroll = require("react-scroll");
const scroller = Scroll.scroller;
const EmailSending = simpleModal(EmailSendingComp);

const NavigationLinksComp = ({ navbar, email, language }) => {
  const link = (element) => {
    scroller.scrollTo(element, {
      delay: 100,
      duration: 300,
      smooth: "easeInOutExpo",
      offset: -75
    });
  };
  return (
    <div className="navigation">
      <a onClick={()=>{link("therapists")}}>{navbar.colleagues}</a>
      <a onClick={()=>{link("treatements")}}>{navbar["treatments"]}</a>
      <a onClick={()=>{link("prices")}}>{navbar.prices}</a>
      <a onClick={()=>{link("group-sessions")}}>{navbar["group sessions"]}</a>
      <a onClick={()=>{link("contacts")}}>{navbar.contacts}</a>
      <EmailSending
        email={email}
        language={language}
        label={navbar.contactUs}
      />
    </div>
  );
};

export default NavigationLinksComp;
