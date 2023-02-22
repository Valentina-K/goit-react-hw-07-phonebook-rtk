import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { deleteContact } from 'redux/contactSlice';
import { List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';

const getContactsList = (contacts, filter) => {
  if (filter === '') return contacts;
  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contactsList = getContactsList(contacts, filter);
  const dispatch = useDispatch();
  return (
    <List>
      {contactsList.map(contact => (
        <Contact key={contact.id} name={contact.name} number={contact.number}>
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </Contact>
      ))}
    </List>
  );
};

export default ContactList;
