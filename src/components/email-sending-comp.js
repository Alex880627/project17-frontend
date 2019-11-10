import React, { useState } from "react";
import sendInfo from "../services/send-info";
import Loader from "./loader-component";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import simpleModal from "./modal-comp";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "black",
        border: "1px solid black"
      }
    }
  }
})(TextField);

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
      {
        email: userEmail.trim(),
        name: userName.trim(),
        message: userMessage.trim()
      },
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

  return (
    <>
      <div className="email-section">
        <h3>{email["email header"]}</h3>
        <form onSubmit={onSubmit}>
          <CssTextField
            autoFocus={true}
            id="filled-basic"
            label={email["email input"]}
            margin="dense"
            variant="filled"
            name="email"
            type="email"
            required
            autoComplete="off"
            onChange={e => {
              setUserEmail(handleChange(e));
            }}
          />
          <CssTextField
            id="filled-basic"
            label={email["name input"]}
            margin="dense"
            variant="filled"
            name="name"
            type="name"
            required
            autoComplete="off"
            onChange={e => {
              setUserName(handleChange(e));
            }}
          />
          <CssTextField
            id="filled-basic"
            label={email.message}
            margin="dense"
            variant="filled"
            name="message"
            type="text"
            multiline
            rowsMax="4"
            rows="7"
            cols="40"
            autoComplete="off"
            onChange={e => {
              setUserMessage(handleChange(e));
            }}
          />
          <Button type="submit"> {email.send}</Button>
          <h4>{message}</h4>
        </form>
      </div>
      {isLoading ? <Loader /> : null}
    </>
  );
};

const EmailSending = simpleModal(EmailSendingComp);

export default EmailSending;
