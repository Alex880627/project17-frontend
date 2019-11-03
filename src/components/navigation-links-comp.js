import React from "react";
import simpleModal from "./modal-comp";
import EmailSendingComp from "./email-sending-comp";

const EmailSending = simpleModal(EmailSendingComp);

const NavigationLinksComp = ({navbar, email, language}) => {
  return (
    <div className="navigation">
      <a href="#collagues">{navbar.colleagues}</a>
      <a href="#treatments">{navbar["treatments"]}</a>
      <a href="#prices">{navbar.prices}</a>
      <a href="#group-sessions">{navbar["group sessions"]}</a>
      <a href="#contacts">{navbar.contacts}</a>
      <EmailSending email={email} language={language} label={navbar.contactUs}/>
      
    </div>
  );
};

export default NavigationLinksComp;