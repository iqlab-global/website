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
    }),
    defineField({
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn Profile',
    }),
    defineField({
      name: 'jobTitle',
      type: 'string',
      title: 'Job Position Applied For',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'job',
      type: 'reference',
      title: 'Job Posting',
      to: [{ type: 'job' }],
      description: 'Link to the job posting (if available)',
    }),
    defineField({
      name: 'resumeUrl',
      type: 'url',
      title: 'Resume URL',
      description: 'URL to uploaded resume file',
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
      jobTitle: 'jobTitle',
      status: 'status',
      submittedAt: 'submittedAt',
    },
    prepare({ firstName, lastName, jobTitle, status, submittedAt }) {
      const date = submittedAt
        ? new Date(submittedAt).toLocaleDateString()
        : 'Unknown date';
      return {
        title: `${firstName} ${lastName}`,
        subtitle: `${jobTitle} - ${status} (${date})`,
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
