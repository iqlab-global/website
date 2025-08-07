import { BookIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: BookIcon,
  groups: [
    {
      name: 'primaryGroup',
      title: 'Primary Content',
    },
    {
      name: 'secondContentGroup',
      title: 'Secondary Content',
    },
    {
      name: 'thirdContentGroup',
      title: 'Tertiary Content',
    },
    {
      name: 'nextProjectsGroup',
      title: 'Next Projects Content',
    },
  ],
  fields: [
    defineField({
      name: 'primarySection',
      title: 'Primary Content',
      type: 'object',
      group: 'primaryGroup',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'subTitle',
          type: 'text',
        }),
        defineField({
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
          },
        }),
        defineField({
          name: 'previewImage',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'industries',
          type: 'string',
        }),
        defineField({
          name: 'serviceType',
          type: 'string',
        }),
        defineField({
          name: 'techStack',
          type: 'string',
        }),
        defineField({
          title: 'Featured on Home',
          name: 'isFeatured',
          type: 'boolean',
        }),
        defineField({
          name: 'body',
          type: 'blockContent',
        }),
        defineField({
          name: 'mainImage',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'secondSection',
      title: 'Second Section',
      group: 'secondContentGroup',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'body',
          type: 'blockContent',
        }),
        defineField({
          name: 'image1',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'image2',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'thirdSection',
      title: 'Third Section',
      group: 'thirdContentGroup',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'body',
          type: 'blockContent',
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
  preview: {
    select: {
      title: 'primarySection.title',
    },
  },
});
