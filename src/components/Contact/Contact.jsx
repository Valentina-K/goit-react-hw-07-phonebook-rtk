import PropTypes from 'prop-types';
import { Item } from './Contact.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';
const Contact = ({ name, phone, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Item>
      <span>
        {name}: {phone}
      </span>
      <button disabled={isLoading} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </Item>
  );
};

Contact.protoTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
