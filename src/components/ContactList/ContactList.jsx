import React from 'react';
import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { selectContactsList } from 'redux/selectors';

const ContactList = () => {
  const contactsList = useSelector(selectContactsList);
  return (
    <List>
      {contactsList.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          phone={contact.phone}
          id={contact.id}
        />
      ))}
    </List>
  );
};

export default ContactList;
