import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const blogPageSingleton = defineType({
  name: 'blogPageSingleton',
  title: 'Blog Page',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {
      name: 'introGroup',
      title: 'Intro Section',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      hidden: true,
      initialValue: 'Blog Page',
    }),
    defineField({
      name: 'introSection',
      type: 'object',
      group: 'introGroup',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          type: 'string',
        }),
        defineField({
          name: 'body',
          type: 'blockContent',
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
