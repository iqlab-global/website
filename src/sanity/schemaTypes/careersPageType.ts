import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const careersPageSingleton = defineType({
  name: 'careersPageSingleton',
  title: 'Careers Page',
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
      initialValue: 'Careers Page',
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
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Description',
        }),
        defineField({
          name: 'mapImage',
          type: 'image',
          title: 'World Map Image',
          options: {
            hotspot: true,
          },
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
