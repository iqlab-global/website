import { DashboardIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const techCapabilityType = defineType({
  name: 'techCapability',
  title: 'Tech Capability Widget',
  type: 'document',
  icon: DashboardIcon,
  fields: [
    defineField({
      name: 'icon',
      type: 'image',
    }),
    defineField({
      name: 'alt',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'icon',
    },
  },
});
