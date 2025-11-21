'use client';

import { useState, FormEvent, SyntheticEvent } from 'react';
import s from './style.module.scss';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import Pattern from '@/assets/images/textures/pattern-8.svg';
import Input from '@/components/Input';
import { COUNTRIES } from '@/constants/countries';
import { validateFile } from '@/utils/files';
import { MESSAGES, BUTTON_TEXT } from '@/constants';
import { FileUpload } from '@/components/FileUpload';

type Props = {
  jobId: string;
};

export const JobApplicationForm = ({ jobId }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    location: '',
    email: '',
    linkedin: '',
    address: '',
  });

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const fileError = validateFile(uploadedFile);
    if (fileError) {
      setErrorMessage(fileError);
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const submitData = new FormData(e.currentTarget);

    if (uploadedFile) {
      submitData.set('resume', uploadedFile);
    }

    submitData.append('jobId', jobId);

    try {
      const response = await fetch('/api/job-applications', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setErrorMessage('');
        setUploadedFile(null);
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          location: '',
          email: '',
          linkedin: '',
          address: '',
        });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || MESSAGES.APPLICATION_SUBMIT_FAILED);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Application submission error:', error);
      setErrorMessage(MESSAGES.APPLICATION_SUBMIT_FAILED);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.leftColumn}>
            <div className={s.header}>
              <h2 className={s.title}>Apply for this job</h2>
              <p className={s.subtitle}>
                Launch your career with IQ Lab&apos;s innovative teams! Join us
                to build impactful projects, expand your skills, and transform
                ideas into reality.
              </p>
            </div>
            <img className={s.pattern} src={Pattern.src} alt='Pattern' />
          </div>

          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.row}>
              <Input
                id='firstName'
                heading='First name'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Input
                id='lastName'
                heading='Last name'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={s.row}>
              <Input
                id='phone'
                heading='Phone'
                type='tel'
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                id='location'
                heading='Location'
                isSelect={true}
                options={COUNTRIES}
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className={s.row}>
              <Input
                id='email'
                heading='Email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                id='linkedin'
                heading='LinkedIn'
                type='url'
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>

            <Input
              id='address'
              heading='Address'
              value={formData.address}
              onChange={handleChange}
            />

            <FileUpload
              id='resume'
              name='resume'
              label='Resume'
              file={uploadedFile}
              onFileChange={setUploadedFile}
              onError={(error) => {
                setErrorMessage(error);
                setSubmitStatus('error');
              }}
              onClearError={() => {
                setErrorMessage('');
                setSubmitStatus('idle');
              }}
              disabled={isSubmitting}
            />

            {submitStatus === 'success' && (
              <div className={s.successMessage}>
                {MESSAGES.APPLICATION_SUBMITTED_SUCCESS}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={s.errorMessage}>
                {errorMessage || MESSAGES.APPLICATION_SUBMIT_FAILED}
              </div>
            )}

            <Button
              type='submit'
              disabled={isSubmitting}
              className={s.submitButton}
            >
              {isSubmitting ? BUTTON_TEXT.SUBMITTING : BUTTON_TEXT.SUBMIT_APPLICATION}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};
