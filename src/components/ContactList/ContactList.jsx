import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/contactsOps";
import {
  selectFilteredContacts,
  selectError,
  selectLoading,
} from "../../redux/contactsSlice";
import { useEffect } from "react";

export default function ContactList() {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={s.list}>
      {filteredContacts.map((item) => (
        <Contact key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </ul>
  );
}
