'use client';

import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { Section } from '@/components/Section';

import s from './style.module.scss';
import { Container } from '@/components/Container';
import Pattern from '@/assets/images/textures/pattern-3.svg';
import AppImage from '@/components/AppImage';
import Input from '@/components/Input';
import { Button } from '@/components/Button';
import { clsx } from 'clsx';
import { SyntheticEvent, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { emailRegex } from '@/lib/utils';
import { AddressInfo, ContactInfo } from '@/widgets/Contact';

const initialValue = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: '',
};

export default function ContactUs() {
  const [formData, setFormData] = useState(initialValue);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setError(null);
    setSuccess(null);

    if (!captchaValue) {
      setError('CAPTCHA is invalid. Please try again.');
      return;
    }

    const { firstName, lastName, email, company, message } = formData;

    if (!firstName || !lastName || !email || !company || !message) {
      setError('All fields are required');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Email address invalid');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('Message sent successfully!');
        setFormData(initialValue);
      } else {
        setError(`Error: ${result.error}`);
      }
    } catch (e) {
      setError(`Error: ${(e as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page whiteHeader>
      <Breadcrumb pages={[{ label: 'Contact Us' }]} />
      <Section className={s.section}>
        <Container>
          <div className={s.wrapper}>
            <h1>Get in touch</h1>

            <div className={s.headingAndTexts}>
              <h2>
                Reach Out to Us
                <br />
                Anytime
              </h2>

              <div className={s.texts}>
                <p>
                  Let&apos;s build something amazing together. Whether you have
                  a project in mind, need guidance, or just want to learn more
                  about us, we&apos;re here to help.
                </p>
                <p>
                  Have a question or need support? We&apos;re just a message
                  away. Fill out the form below, and we&apos;ll get back to you
                  within 24 hours.
                </p>
              </div>
            </div>
            <div className={s.patternAndInputs}>
              <AppImage
                className={s.pattern}
                src={Pattern}
                alt='Pattern Image'
              />
              <div className={s.inputs}>
                <form onSubmit={handleSubmit}>
                  <Input
                    id='firstName'
                    heading='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <Input
                    id='lastName'
                    heading='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <Input
                    id='email'
                    heading='Email'
                    value={formData.email}
                    required={true}
                    onChange={handleChange}
                  />
                  <Input
                    id='company'
                    heading='Company'
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <Input
                    isTextarea
                    className={s.message}
                    id='message'
                    value={formData.message}
                    heading='Message'
                    onChange={handleChange}
                  />
                  <div className={s.captchaSection}>
                    {success && <small className={s.success}>{success}</small>}
                    {error && <small className={s.error}>{error}</small>}
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                      onChange={setCaptchaValue}
                    />
                    <Button
                      className={s.submitBtn}
                      disabled={loading}
                      type='submit'
                    >
                      {loading ? 'Sending...' : 'Send message'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className={s.companyContacts}>
              <h2>Company Contacts</h2>
              <div className={s.contactsWrapper}>
                <p className={s.description}>
                  Stay connected with us through various channels. Your journey
                  starts with a conversation.
                </p>
                <div className={clsx(s.infoBox, s.centeredBox)}>
                  <div className={s.wrapper}>
                    <p className={s.heading}>Phone & email</p>
                    <ContactInfo />
                  </div>
                </div>
                <div className={s.infoBox}>
                  <div className={s.wrapper}>
                    <p className={s.heading}>Main office</p>
                    <AddressInfo className={s.address} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
