'use client';

import { useState, FormEvent } from 'react';
import s from './style.module.scss';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import Pattern from '@/assets/images/textures/pattern-5.svg';

type Props = {
  jobTitle: string;
};

export const JobApplicationForm = ({ jobTitle }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    formData.append('jobTitle', jobTitle);

    try {
      const response = await fetch('/api/job-applications', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Application submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.header}>
            <h2 className={s.title}>Apply for this job</h2>
            <p className={s.subtitle}>
              Launch your career with IQ Lab&apos;s innovative teams! Join us to build
              impactful projects, expand your skills, and transform ideas into
              reality.
            </p>
          </div>

          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.row}>
              <div className={s.field}>
                <label htmlFor='firstName'>First name</label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className={s.field}>
                <label htmlFor='lastName'>Last name</label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className={s.row}>
              <div className={s.field}>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className={s.field}>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className={s.field}>
              <label htmlFor='linkedin'>LinkedIn</label>
              <input
                type='url'
                id='linkedin'
                name='linkedin'
                placeholder='https://linkedin.com/in/yourprofile'
                disabled={isSubmitting}
              />
            </div>

            <div className={s.field}>
              <label htmlFor='resume'>Resume</label>
              <input
                type='file'
                id='resume'
                name='resume'
                accept='.pdf,.doc,.docx'
                disabled={isSubmitting}
              />
              <span className={s.fileHint}>PDF, DOC, DOCX (Max 5MB)</span>
            </div>

            {submitStatus === 'success' && (
              <div className={s.successMessage}>
                Application submitted successfully! We&apos;ll be in touch soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={s.errorMessage}>
                Failed to submit application. Please try again.
              </div>
            )}

            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>

          <img className={s.pattern} src={Pattern.src} alt='Pattern' />
        </div>
      </Container>
    </section>
  );
};
