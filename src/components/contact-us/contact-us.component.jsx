import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './contact-us.styles.scss';

class ContactUs extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleSubmit = event => {
    this.setState({
        name: '',
        email: '',
        message: ''
      });
    }; 

  handleChange = event => {
    const { name, email, message, value } = event.target;
    this.setState({ 
        [name]: value,
        [email]: value,
        [message]: value
    });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className='contact-us'>
        <h2 className='title'>Have a question?</h2>
        <span>We love to hear your thoughts, comments, opinions, ideas and questions</span>
        <form className='contact-us-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
            label='Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='textarea'
            name='message'
            value={message}
            onChange={this.handleChange}
            label='Message'
            required
          />
          <CustomButton type='submit'>SUBMIT</CustomButton>
        </form>
      </div>
    );
  };
};

export default ContactUs;