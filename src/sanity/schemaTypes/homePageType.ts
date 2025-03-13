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
      title: 'Services Section',
    },
    {
      name: 'projectsGroup',
      title: 'Featured Projects Section',
    },
    {
      name: 'testimonialsGroup',
      title: 'Testimonials Section',
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
        defineField({
          name: 'recentProject',
          type: 'reference',
          to: { type: 'project' },
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
      name: 'servicesSection',
      type: 'object',
      group: 'servicesGroup',
      fields: [
        defineField({
          name: 'services',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'service' } }],
        }),
      ],
    }),
    defineField({
      name: 'testimonialsSection',
      title: 'Client Testimonials',
      type: 'array',
      group: 'testimonialsGroup',
      of: [
        defineField({
          name: 'testimonialItem',
          type: 'object',
          fields: [
            defineField({
              name: 'companyName',
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
