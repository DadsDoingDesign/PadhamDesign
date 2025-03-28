import { useState } from 'react';
import { contactContent } from '@/data/siteContent';
import { getWeb3ApiKey } from '@/utils/env';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      // Get the API key from environment variables
      const apiKey = getWeb3ApiKey();
      
      if (!apiKey) {
        throw new Error('Web3 API key is not configured');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission - Padham Design',
        }),
      });

      const json = await response.json();

      if (json.success) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: contactContent.successMessage },
        });
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: json.message || 'Something went wrong. Please try again later.' },
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' },
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <form className="contact__form" onSubmit={handleSubmit}>
          <h2 className="contact__title">{contactContent.title}</h2>
          <div className="contact__details">
            <a href={`mailto:${contactContent.email}`} className="contact__email">
              <span className="contact__icon">✉</span> {contactContent.email}
            </a>
            <a href={`tel:${contactContent.phone}`} className="contact__phone">
              <span className="contact__icon">☎</span> {contactContent.phone}
            </a>
          </div>

          <div className="contact__form-group">
            <label htmlFor="name" className="contact__label">{contactContent.formLabels.name}</label>
            <input
              id="name"
              type="text"
              name="name"
              className="contact__input"
              value={formData.name}
              onChange={handleChange}
              placeholder={contactContent.formPlaceholders.name}
              required
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="email" className="contact__label">{contactContent.formLabels.email}</label>
            <input
              id="email"
              type="email"
              name="email"
              className="contact__input"
              value={formData.email}
              onChange={handleChange}
              placeholder={contactContent.formPlaceholders.email}
              required
            />
          </div>

          <div className="contact__form-group">
            <label htmlFor="message" className="contact__label">{contactContent.formLabels.message}</label>
            <textarea
              id="message"
              name="message"
              className="contact__textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder={contactContent.formPlaceholders.message}
              rows="5"
              required
            />
          </div>

          {/* Web3Forms hidden honeypot field to prevent spam */}
          <input type="hidden" name="botcheck" style={{ display: 'none' }} />

          {status.info.error && (
            <div className="contact__error">
              {status.info.msg}
            </div>
          )}

          {status.submitted && !status.info.error && (
            <div className="contact__success">
              {status.info.msg}
            </div>
          )}

          <button
            type="submit"
            className="button button--secondary"
            disabled={status.submitting}
          >
            {status.submitting ? 'Submitting...' : contactContent.formLabels.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
