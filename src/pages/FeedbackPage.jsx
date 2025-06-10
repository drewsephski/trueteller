import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { saveFeedback } from '../firebase/config';
import '../styles/FeedbackPage.css';

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    feedback: ''
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
      await saveFeedback(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', rating: '', feedback: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="feedback-container container section">
      <Helmet>
        <title>Feedback - TrueYouTeller</title>
        <meta name="description" content="Share your feedback about TrueYouTeller. Help us improve and make our personality quizzes even better!" />
      </Helmet>
      <div className="feedback-content">
        <h2>We'd Love Your Feedback!</h2>
        <p>
          Your opinion matters to us! Please share your thoughts about TrueYouTeller and how we can make it even better.
        </p>
        <form className="feedback-form" onSubmit={handleSubmit}>
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
            <label htmlFor="rating">Overall Rating</label>
            <select 
              id="rating" 
              name="rating" 
              value={formData.rating}
              onChange={handleInputChange}
              required 
              disabled={isSubmitting}
            >
              <option value="">Select a rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent (5/5)</option>
              <option value="4">⭐⭐⭐⭐☆ Very Good (4/5)</option>
              <option value="3">⭐⭐⭐☆☆ Good (3/5)</option>
              <option value="2">⭐⭐☆☆☆ Fair (2/5)</option>
              <option value="1">⭐☆☆☆☆ Poor (1/5)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Your Feedback</label>
            <textarea 
              id="feedback" 
              name="feedback" 
              rows="6" 
              value={formData.feedback}
              onChange={handleInputChange}
              placeholder="Tell us what you loved, what we could improve, or any suggestions you have..."
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          {submitStatus === 'success' && (
            <div className="status-message success">
              Thank you for your feedback! Your input helps us improve TrueYouTeller.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="status-message error">
              Sorry, there was an error submitting your feedback. Please try again.
            </div>
          )}
          
          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage; 