import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Contact.styled';
const Contact = ({ name, phone, children }) => (
  <Item>
    <span>
      {name}: {phone}
    </span>
    {children}
  </Item>
);

Contact.protoTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
