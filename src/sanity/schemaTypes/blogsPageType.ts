import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const blogsPageSingleton = defineType({
  name: 'blogsPageSingleton',
  title: 'Blogs Page',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {
      name: 'heroGroup',
      title: 'Hero Section',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      hidden: true,
      initialValue: 'Blogs Page',
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
          description: 'Main hero title (e.g., "Insights & Inspiration")',
        }),
        defineField({
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
          description: 'Hero subtitle (e.g., "Stay Updated with the Latest in Technology and Innovation")',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Description',
          description: 'Hero description text',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});
