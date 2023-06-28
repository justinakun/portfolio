import { saveMessage } from "../../api/messages";
import { useState } from "react";
import "./Contacts.scss";
import Button from "../Button/Button";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = { name, email, messageText };

    const handleNewMessage = (message) => {
      saveMessage(message)
        .then(() => {
          setName("");
          setEmail("");
          setMessageText("");
        })
        .catch((error) => {
          console.error(error);
        });
    };

    handleNewMessage(message);
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
        </div>
        <div className="email-input">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          ></input>
        </div>
      </div>
      <div className="text-area">
        <label htmlFor="story">Your Message</label>
        <textarea
          id="story"
          name="story"
          required
          onChange={(e) => setMessageText(e.target.value)}
          placeholder={`Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?`}
        ></textarea>
      </div>
      <div className="submit-button">
        <Button title="Shoot" type="submit" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default ContactsForm;
