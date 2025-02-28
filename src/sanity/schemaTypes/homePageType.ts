import { HomeIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const homePageSingleton = defineType({
  name: 'homePageSingleton',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'heroGroup',
      title: 'Hero Section',
    },
    {
      name: 'whyChooseUsGroup',
      title: 'Why Choose Us Section',
    },
    {
      name: 'servicesGroup',
      title: 'Services We Provided',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      hidden: true,
      initialValue: 'Home Page',
    }),
    defineField({
      name: 'heroSection',
      type: 'object',
      group: 'heroGroup',
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
      name: 'whyChooseUs',
      title: 'Why Choose Us Section',
      type: 'array',
      group: 'whyChooseUsGroup',
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
    defineField({
      name: 'servicesWeProvided',
      title: 'Services We Provided Section',
      type: 'array',
      group: 'servicesGroup',
      of: [
        defineField({
          name: 'servicesItem',
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
