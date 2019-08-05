import React, { useState } from "react";
import sendInfo from "../services/send-info";
import Loader from "./loader-component";

const EmailSendingComp = ({ email, language }) => {
  const [message, setMessage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = e => {
    setIsLoading(true);
    e.preventDefault();
    sendInfo(
      { email: userEmail, name: userName, message: userMessage },
      "https://studio17.duckdns.org/api/uzenetkuldes"
    )
      .then(json => {
        setIsLoading(false);
        setMessage(language === "HU" ? json.messageHU : json.messageEN);
      })
      .catch(error => {
        setIsLoading(false);
        setMessage(language === "HU" ? error.messageHU : error.messageEN);
      });
  };
  const handleChange = e => {
    return e.target.value;
  };
  const removePlaceholder = e => (e.target.placeholder = "");
  return (
    <>
      <div className="email-section">
        <h3>{email["email header"]}</h3>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            placeholder={email["email input"]}
            onFocus={removePlaceholder}
            onBlur={e => (e.target.placeholder = email["email input"])}
            required
            autoComplete="off"
            onChange={e => {
              setUserEmail(handleChange(e));
            }}
          />

          <input
            name="name"
            type="name"
            placeholder={email["name input"]}
            onFocus={removePlaceholder}
            onBlur={e => (e.target.placeholder = email["name input"])}
            required
            autoComplete="off"
            onChange={e => {
              setUserName(handleChange(e));
            }}
          />
          <textarea
            name="message"
            type="text"
            placeholder={email.message}
            onFocus={removePlaceholder}
            onBlur={e => (e.target.placeholder = email.message)}
            rows="7"
            cols="40"
            required
            autoComplete="off"
            onChange={e => {
              setUserMessage(handleChange(e));
            }}
          />
          <button type="submit"> {email.send}</button>
          <h4>{message}</h4>
        </form>
      </div>
      {isLoading ? <Loader /> : null}
    </>
  );
};
export default EmailSendingComp;
