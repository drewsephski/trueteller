import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { saveContactMessage } from '../firebase/config';
import '../styles/ContactUsPage.css';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await saveContactMessage(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us-container container section">
      <Helmet>
        <title>Contact TrueYouTeller - We'd Love to Hear From You</title>
        <meta name="description" content="Have questions, feedback, or just want to say hello? Contact the TrueYouTeller team. We're here to help you on your journey of self-discovery." />
      </Helmet>
      <div className="contact-us-content">
        <h2>Contact Us</h2>
        <p>
          Have questions, feedback, or just want to say hello? Drop us a message below!
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          {submitStatus === 'success' && (
            <div className="status-message success">
              Thank you for your message! We will get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="status-message error">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
          
          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage; 