import { useState } from 'react';
import { customAlphabet } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import Form from './ContactForm.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';

const nanoid = customAlphabet('1234567890id-', 5);

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data: contacts } = useGetContactsQuery();

  const nameInput = nanoid();
  const phoneInput = nanoid();
  const [addContact] = useAddContactMutation();
  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!contacts.some(contact => contact.name === name)) {
      addContact({ name, phone });
      toast.success(`Contact ${name} was added!`);
    } else {
      toast.error(`${name} is already in contacts`);
    }
    reset();
  };

  return (
    <>
      <Toaster />
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={nameInput}>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            id={nameInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor={phoneInput}>Phone</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={phoneInput}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </>
  );
};

export default ContactForm;
