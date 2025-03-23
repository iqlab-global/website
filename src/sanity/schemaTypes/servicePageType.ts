import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const servicePageSingleton = defineType({
  name: 'servicePageSingleton',
  title: 'Services Page',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {
      name: 'introGroup',
      title: 'Intro Section',
    },
    {
      name: 'areasGroup',
      title: 'Areas Section',
    },
    {
      name: 'industriesServedGroup',
      title: 'Industries Served Section',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      hidden: true,
      initialValue: 'Services Page',
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
          name: 'description',
          type: 'text',
        }),
        defineField({
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'areasSection',
      type: 'object',
      group: 'areasGroup',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'services',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'service' } }],
        }),
      ],
    }),
    defineField({
      name: 'industriesServedSection',
      type: 'object',
      group: 'industriesServedGroup',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          type: 'string',
        }),
        defineField({
          name: 'industries',
          type: 'array',
          of: [
            defineField({
              name: 'industry',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  type: 'text',
                }),
                defineField({
                  name: 'image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
              ],
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
