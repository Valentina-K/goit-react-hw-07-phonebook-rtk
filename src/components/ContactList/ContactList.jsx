import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { deleteContact } from 'redux/operations';
import { List } from './ContactList.styled';
import { selectContactsList } from 'redux/selectors';

const ContactList = () => {
  const contactsList = useSelector(selectContactsList);
  const dispatch = useDispatch();
  return (
    <List>
      {contactsList.map(contact => (
        <Contact key={contact.id} name={contact.name} phone={contact.phone}>
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </Contact>
      ))}
    </List>
  );
};

export default ContactList;
