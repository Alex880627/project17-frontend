import React from "react";
import Scroll from "react-scroll";
import GoogleMapConfigured from "./google-maps-comp-config";
import contactsIcon from "../pic/icons/contactsIcon.png";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";

const ContactsComp = props => {
  const Link = Scroll.Element;
  let contacts = "HU";
  props.language === "HU" ? (contacts = hu.contacts) : (contacts = en.contacts);
  return (
    <div className="contacts-wrapper" id="contacts">
      <Link name="contacts"></Link>
      <div className="contacts-heading">
        <h3>{contacts["contacts title"]}</h3>
        <img src={contactsIcon} alt="contacts icon" />
      </div>
      <div className="flex-wrapper">
        <div className="address-details">
          <h4>{contacts["contacts info"].name}</h4>
          <p>{contacts["contacts info"].address}</p>
          <p>{contacts["contacts info"].city}</p>
          <p>
            {contacts["contacts info"].ringbell}:{" "}
            {contacts["contacts info"]["ringbell number"]}
          </p>
          <p>{"Email: "}<span onClick={props.openModal}>{contacts["contacts info"].email}</span></p>
          
        </div>
        <GoogleMapConfigured />
      </div>
    </div>
  );
};

export default ContactsComp;
