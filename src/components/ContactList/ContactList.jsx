import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.contactBox}>
        {filterContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
      {filterContacts.length === 0 ? <p>No contacts found </p> : ""}
    </div>
  );
};

export default ContactList;
