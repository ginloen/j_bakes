import React from 'react';

import ContactUs from '../../components/contact-us/contact-us.component';

import './contact.styles';
import { ContactContainer } from './contact.styles';

const ContactUsPage = () => (
  <ContactContainer>
    <ContactUs />
  </ContactContainer>
);

export default ContactUsPage;