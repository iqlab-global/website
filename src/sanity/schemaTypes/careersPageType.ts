import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const careersPageSingleton = defineType({
  name: 'careersPageSingleton',
  title: 'Careers Page',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {
      name: 'heroGroup',
      title: 'Hero Section',
    },
    {
      name: 'cultureGroup',
      title: 'Company Culture Section',
    },
    {
      name: 'internshipGroup',
      title: 'Internship Program',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      hidden: true,
      initialValue: 'Careers Page',
    }),
    defineField({
      name: 'heroSection',
      type: 'object',
      group: 'heroGroup',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Description',
        }),
        defineField({
          name: 'mapImage',
          type: 'image',
          title: 'World Map Image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'companyCulture',
      type: 'object',
      title: 'Company Culture',
      group: 'cultureGroup',
      fields: [
        defineField({
          name: 'description',
          type: 'text',
          title: 'Section Description',
          description: 'Main description for the company culture section',
        }),
        defineField({
          name: 'cultureItems',
          type: 'array',
          title: 'Culture Items',
          validation: (Rule) => Rule.max(4).min(4),
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  type: 'image',
                  title: 'Icon',
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                }),
                defineField({
                  name: 'description',
                  type: 'text',
                  title: 'Description',
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'showInternshipSection',
      type: 'boolean',
      title: 'Show Internship Section',
      description: 'Toggle to show or hide the internship application form on the careers page',
      group: 'internshipGroup',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});
