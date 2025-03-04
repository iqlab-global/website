import { InfoFilledIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const serviceType = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  icon: InfoFilledIcon,
  groups: [
    {
      name: 'introGroup',
      title: 'Intro Section',
    },
    {
      name: 'whyGroup',
      title: 'Why? Section',
    },
    {
      name: 'howGroup',
      title: 'How do we work for you? Section',
    },
    {
      name: 'caseStudyGroup',
      title: 'How do we work for you? Section',
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
        }),
        defineField({
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
          },
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
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'whySection',
      type: 'object',
      group: 'whyGroup',
      fields: [
        defineField({
          name: 'image',
          type: 'image',
        }),
        defineField({
          name: 'block1Title',
          type: 'string',
        }),
        defineField({
          name: 'block1Description',
          type: 'text',
        }),
        defineField({
          name: 'block2Title',
          type: 'string',
        }),
        defineField({
          name: 'block2Description',
          type: 'text',
        }),
        defineField({
          name: 'areas',
          type: 'array',
          of: [
            defineField({
              name: 'area',
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
                  name: 'icon',
                  type: 'image',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'howSection',
      group: 'howGroup',
      type: 'array',
      of: [
        defineField({
          name: 'howItem',
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
              name: 'order',
              type: 'number',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'caseStudySection',
      type: 'object',
      group: 'caseStudyGroup',
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
          name: 'projects',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'project' } }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'introSection.title',
    },
  },
});
