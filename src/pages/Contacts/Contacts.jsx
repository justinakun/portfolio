import "./Contacts.scss";
import ContactsForm from "../../components/ContactsForm/ContactsForm";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="message-me-container">
        <div className="message-me-intro">
          <h1 className="message-me-title">Send me a message!</h1>
          <p className="message-me-text">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>
        <ContactsForm />
      </div>
    </div>
  );
};

export default Contacts;
