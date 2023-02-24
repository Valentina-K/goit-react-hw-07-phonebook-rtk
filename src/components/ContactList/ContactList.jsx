import { useSelector } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { selectFilter } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { Loader } from 'components/Loader/Loader';

const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const filterValue = useSelector(selectFilter);
  function getContactsList() {
    if (filterValue === '') return data;
    return data.filter(item =>
      item.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
    );
  }
  const contactsList = getContactsList();
  return (
    <List>
      {isLoading && !error && <Loader />}
      {contactsList &&
        contactsList.map(contact => (
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
