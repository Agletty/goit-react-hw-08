import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { apiDeleteUserContact } from "../../../redux/contacts/operations";

const Contact = ({ contact, openModal }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(apiDeleteUserContact(contact.id));

  return (
    <li className={css.mainWrapper}>
      <div className={css.textWrapper}>
        <div className={css.textInfo}>
          <FaUser /> {contact.name}
        </div>
        <div>
          <FaPhone /> {contact.number}
        </div>
      </div>

      <div className={css.btnWrapper}>
        <button
          className={css.btn}
          type="button"
          onClick={() => {
            openModal(contact);
          }}
        >
          Edit
        </button>
        <button className={css.btn} type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
