import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './App.styled';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
