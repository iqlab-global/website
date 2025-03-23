import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const aboutPageSingleton = defineType({
  name: 'aboutPageSingleton',
  title: 'About Page',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {
      name: 'companyHistoryGroup',
      title: 'Company History Section',
    },
    {
      name: 'valuesGroup',
      title: 'Values Section',
    },
    {
      name: 'meetTheTeamGroup',
      title: 'Meet The Team Section',
    },
  ],
  fields: [
    defineField({
      name: 'companyHistorySection',
      type: 'object',
      group: 'companyHistoryGroup',
      fields: [
        defineField({
          name: 'description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'valuesSection',
      type: 'object',
      group: 'valuesGroup',
      fields: [
        defineField({
          name: 'description',
          type: 'text',
        }),
        defineField({
          name: 'blocks',
          type: 'array',
          of: [
            defineField({
              name: 'blockItem',
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
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'meetTheTeamSection',
      type: 'object',
      group: 'meetTheTeamGroup',
      fields: [
        defineField({
          name: 'description',
          type: 'text',
        }),
        defineField({
          name: 'blocks',
          type: 'array',
          of: [
            defineField({
              name: 'blockItem',
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: 'name',
                  type: 'string',
                }),
                defineField({
                  name: 'position',
                  type: 'text',
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
