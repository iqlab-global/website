import { HomeIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const homePageSingleton = defineType({
  name: 'homePageSingleton',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'heroSection',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'paragraph',
          type: 'text',
        }),
        defineField({
          name: 'ctaButtonText',
          type: 'string',
        }),
        defineField({
          name: 'ctaButtonUrl',
          type: 'string',
        }),
        defineField({
          name: 'servicesButtonText',
          type: 'string',
        }),
        defineField({
          name: 'servicesButtonUrl',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'whychooseus',
      title: 'Why Choose Us Section',
      type: 'array',
      of: [
        defineField({
          name: 'whychooseusItem',
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              type: 'image',
            }),
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              type: 'text',
            }),
          ],
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
