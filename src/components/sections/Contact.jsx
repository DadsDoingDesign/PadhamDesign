import { useState } from 'react';
import { contactContent } from '@/data/siteContent';
import { getWeb3ApiKey } from '@/utils/env';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });
    try {
      const apiKey = getWeb3ApiKey();
      if (!apiKey) throw new Error('Not configured');
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: apiKey, ...formData, subject: 'New inquiry — Padham Design' }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ submitting: false, submitted: false, error: json.message || 'Something went wrong.' });
      }
    } catch {
      setStatus({ submitting: false, submitted: false, error: 'An error occurred. Please try again.' });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__info">
          <h2 className="contact__heading">{contactContent.title}</h2>
          <div className="contact__details">
            <div className="contact__detail-group">
              <span className="contact__label">Email</span>
              <a href={`mailto:${contactContent.email}`} className="contact__email">{contactContent.email}</a>
            </div>
            <div className="contact__detail-group">
              <span className="contact__label">Phone</span>
              <a href={`tel:${contactContent.phone}`} className="contact__phone">{contactContent.phone}</a>
            </div>
            <div className="contact__detail-group">
              <span className="contact__label">Studio</span>
              <p className="contact__address">
                {contactContent.address.street}<br />
                {contactContent.address.city}, {contactContent.address.state} {contactContent.address.zip}
              </p>
            </div>
            <p className="contact__hours">{contactContent.hours}</p>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name" className="contact__field-label">{contactContent.formLabels.name}</label>
            <input id="name" name="name" type="text" className="contact__input"
              value={formData.name} onChange={handleChange}
              placeholder={contactContent.formPlaceholders.name} required />
          </div>
          <div className="contact__field">
            <label htmlFor="email" className="contact__field-label">{contactContent.formLabels.email}</label>
            <input id="email" name="email" type="email" className="contact__input"
              value={formData.email} onChange={handleChange}
              placeholder={contactContent.formPlaceholders.email} required />
          </div>
          <div className="contact__field">
            <label htmlFor="message" className="contact__field-label">{contactContent.formLabels.message}</label>
            <textarea id="message" name="message" className="contact__textarea"
              value={formData.message} onChange={handleChange}
              placeholder={contactContent.formPlaceholders.message} rows={5} required />
          </div>
          <input type="hidden" name="botcheck" style={{ display: 'none' }} />
          {status.error && <p className="contact__msg contact__msg--error">{status.error}</p>}
          {status.submitted && <p className="contact__msg contact__msg--success">{contactContent.successMessage}</p>}
          <button type="submit" className="contact__btn" disabled={status.submitting}>
            {status.submitting ? 'Sending…' : contactContent.formLabels.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
