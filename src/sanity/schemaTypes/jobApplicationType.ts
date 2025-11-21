import { EnvelopeIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const jobApplicationType = defineType({
  name: 'jobApplication',
  title: 'Job Applications',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'firstName',
      type: 'string',
      title: 'First Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Country',
      description: 'Country of residence',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn Profile',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
      description: 'Full address',
    }),
    defineField({
      name: 'applicationType',
      type: 'string',
      title: 'Application Type',
      description:
        'Type of application: job application or internship application',
      options: {
        list: [
          { title: 'Job Application', value: 'job' },
          { title: 'Internship Application', value: 'internship' },
        ],
        layout: 'radio',
      },
      initialValue: 'job',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'message',
      type: 'text',
      title: 'Message',
      description: 'Additional message from applicant (internships)',
      rows: 6,
    }),
    defineField({
      name: 'job',
      type: 'reference',
      title: 'Job Posting',
      to: [{ type: 'job' }],
      description: 'Link to the job posting (required for job applications)',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const doc = context.document as
            | { applicationType?: string }
            | undefined;
          const applicationType = doc?.applicationType;
          if (applicationType === 'job' && !value) {
            return 'Job posting is required for job applications';
          }
          return true;
        }),
      hidden: ({ document }) => document?.applicationType === 'internship',
    }),
    defineField({
      name: 'resume',
      type: 'file',
      title: 'Resume',
      description: 'Uploaded resume file (PDF, DOC, or DOCX)',
      options: {
        accept: '.pdf,.doc,.docx',
      },
    }),
    defineField({
      name: 'submittedAt',
      type: 'datetime',
      title: 'Submitted At',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Application Status',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Reviewing', value: 'reviewing' },
          { title: 'Interview Scheduled', value: 'interview' },
          { title: 'Rejected', value: 'rejected' },
          { title: 'Accepted', value: 'accepted' },
        ],
      },
      initialValue: 'new',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'notes',
      type: 'text',
      title: 'Internal Notes',
      description: 'Notes for hiring team (not visible to applicant)',
      rows: 4,
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      jobTitle: 'job.introSection.title',
      applicationType: 'applicationType',
      status: 'status',
      submittedAt: 'submittedAt',
    },
    prepare({
      firstName,
      lastName,
      jobTitle,
      applicationType,
      status,
      submittedAt,
    }) {
      const date = submittedAt
        ? new Date(submittedAt).toLocaleDateString()
        : 'Unknown date';
      const type = applicationType === 'internship' ? 'Internship' : 'Job';
      const position =
        applicationType === 'internship'
          ? 'Internship Application'
          : jobTitle || 'No job specified';
      return {
        title: `${firstName} ${lastName}`,
        subtitle: `[${type}] ${position} - ${status} (${date})`,
      };
    },
  },
  orderings: [
    {
      title: 'Submitted Date (Newest First)',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Status',
      name: 'statusAsc',
      by: [{ field: 'status', direction: 'asc' }],
    },
  ],
});
