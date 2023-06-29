import { saveMessage } from "../../api/messages";
import { useState } from "react";
import "./ContactsForm.scss";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [sentMessage, setSentMessage] = useState();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const message = { name, email, messageText };

    const handleNewMessage = (message) => {
      saveMessage(message)
        .then(() => {
          setName("");
          setEmail("");
          setMessageText("");
          setSentMessage(true);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    handleNewMessage(message);
  };

  const validateForm = () => {
    let isValid = true;

    if (name.length < 2) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (messageText.length < 5) {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  return (
    <form className="message-me-form" onSubmit={handleSubmit}>
      <div className="inputs">
        <div className="name-input">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength="2"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          ></input>
          {nameError && <div className="error">{nameError}</div>}
        </div>
        <div className="email-input">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email Address"
          ></input>
          {emailError && <div className="error">{emailError}</div>}
        </div>
      </div>
      <div className="text-area">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          required
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
        ></textarea>
        {messageError && <div className="error">{messageError}</div>}
      </div>
      <Button title="Shoot" type="submit" onClick={handleSubmit} />
      {sentMessage && (
        <div className="alert-container">
          <Alert alertMessage="Your message has been successfully sent!" />
        </div>
      )}
    </form>
  );
};

export default ContactsForm;
