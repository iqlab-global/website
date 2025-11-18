import { UsersIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const jobType = defineType({
  name: 'job',
  title: 'Jobs',
  type: 'document',
  icon: UsersIcon,
  groups: [
    {
      name: 'introGroup',
      title: 'Intro Section',
    },
    {
      name: 'detailsGroup',
      title: 'Job Details',
    },
    {
      name: 'metadataGroup',
      title: 'Metadata',
    },
  ],
  fields: [
    defineField({
      name: 'introSection',
      type: 'object',
      group: 'introGroup',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Job Title',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          options: {
            source: 'introSection.title',
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'location',
          type: 'string',
          title: 'Location',
          options: {
            list: [
              { title: 'Remote', value: 'Remote' },
              { title: 'On-site', value: 'On-site' },
              { title: 'Remote/On-site', value: 'Remote/On-site' },
            ],
          },
        }),
        defineField({
          name: 'employmentType',
          type: 'string',
          title: 'Employment Type',
          options: {
            list: [
              { title: 'Full-time', value: 'Full-time' },
              { title: 'Part-time', value: 'Part-time' },
              { title: 'Contract', value: 'Contract' },
            ],
          },
        }),
        defineField({
          name: 'experienceLevel',
          type: 'string',
          title: 'Experience Level',
          options: {
            list: [
              { title: 'Junior', value: 'Junior' },
              { title: 'Middle', value: 'Middle' },
              { title: 'Senior', value: 'Senior' },
            ],
          },
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Job Description',
          rows: 5,
        }),
      ],
    }),
    defineField({
      name: 'keyResponsibilities',
      type: 'array',
      title: 'Key Responsibilities',
      group: 'detailsGroup',
      of: [
        defineField({
          name: 'responsibility',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'requiredSkills',
      type: 'array',
      title: 'Required Skills',
      group: 'detailsGroup',
      of: [
        defineField({
          name: 'skill',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'qualifications',
      type: 'array',
      title: 'Qualifications',
      group: 'detailsGroup',
      of: [
        defineField({
          name: 'qualification',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'preferredQualifications',
      type: 'array',
      title: 'Preferred Qualifications',
      group: 'detailsGroup',
      of: [
        defineField({
          name: 'preferredQualification',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'publishedDate',
      type: 'datetime',
      title: 'Published Date',
      group: 'metadataGroup',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'applicationDeadline',
      type: 'datetime',
      title: 'Application Deadline',
      group: 'metadataGroup',
    }),
    defineField({
      name: 'salaryRange',
      type: 'string',
      title: 'Salary Range',
      group: 'metadataGroup',
      description: 'Optional, e.g., "$80k - $120k"',
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Status',
      group: 'metadataGroup',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Inactive', value: 'inactive' },
        ],
      },
      initialValue: 'active',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'introSection.title',
      location: 'introSection.location',
      status: 'status',
    },
    prepare({ title, location, status }) {
      return {
        title: title || 'Untitled Job',
        subtitle: `${location || 'No location'} - ${status || 'No status'}`,
      };
    },
  },
});
