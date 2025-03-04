import { BookIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: BookIcon,
  groups: [
    {
      name: 'blockInfoGroup',
      title: 'Block Information (block view)',
    },
    {
      name: 'mainInfoGroup',
      title: 'Main Information',
    },
    {
      name: 'projectInfoGroup',
      title: 'Project Information',
    },
    {
      name: 'keyAdvantagesGroup',
      title: 'Key Advantages Section',
    },
    {
      name: 'secondKeyAdvantagesGroup',
      title: 'Second Key Advantages Section',
    },
    {
      name: 'nextProjectsGroup',
      title: 'Next Projects Section',
    },
  ],
  fields: [
    defineField({
      name: 'blockInfoSection',
      title: 'Block Information (block view)',
      type: 'object',
      group: 'blockInfoGroup',
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
          name: 'image',
          type: 'image',
        }),
        defineField({
          name: 'shortDescription',
          type: 'text',
        }),
        defineField({
          title: 'Is Featured (Will be shown in home page)',
          name: 'isFeatured',
          type: 'boolean',
        }),
        defineField({
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'mainInfoSection',
      title: 'Main Information',
      type: 'object',
      group: 'mainInfoGroup',
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
    defineField({
      name: 'projectInfoSection',
      title: 'Project Information Blocks (below title)',
      group: 'projectInfoGroup',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
            }),
            defineField({
              name: 'description',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'keyAdvantagesSection',
      title: 'Key Advantages Section',
      group: 'keyAdvantagesGroup',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'image1',
          type: 'image',
        }),
        defineField({
          name: 'image2',
          type: 'image',
        }),
        defineField({
          name: 'infoList',
          title: 'Info List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'boldText',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'secondKeyAdvantagesSection',
      title: 'Second Key Advantages Section',
      group: 'secondKeyAdvantagesGroup',
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
          name: 'infoList',
          title: 'Info List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'boldText',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
        defineField({
          name: 'image',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'nextProjectsSection',
      title: 'Next Projects Section',
      group: 'nextProjectsGroup',
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
          name: 'projects',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'project' } }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
});
