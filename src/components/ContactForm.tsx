'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="name">{t.form.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={t.form.placeholderName}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">{t.form.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder={t.form.placeholderEmail}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className={styles.field}>
          <label htmlFor="subject">{t.form.subject}</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder={t.form.placeholderSubject}
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="message">{t.form.message}</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder={t.form.placeholderMessage}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button 
          type="submit" 
          className={styles.submitBtn}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? t.form.sending : t.form.send}
        </button>

        {status === 'success' && (
          <p className={styles.successMsg}>{t.form.success}</p>
        )}
        {status === 'error' && (
          <p className={styles.errorMsg}>{t.form.error}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
