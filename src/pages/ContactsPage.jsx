import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectIsLoading, selectIsError } from "../redux/contacts/selectors";
import { apiGetUserContacts } from "../redux/contacts/operations";
import { useEffect } from "react";

const Contacts = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(apiGetUserContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !isError && <b>Request in progress...</b>}
      {!isLoading && <ContactList />}
    </>
  );
};

export default Contacts;
