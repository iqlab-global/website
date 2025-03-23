import { EnvelopeIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const contactFormType = defineType({
  name: 'contactForm',
  title: 'Contact Form',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'firstName',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'email',
    }),
    defineField({
      name: 'company',
      type: 'string',
    }),
    defineField({
      name: 'message',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'email',
    },
  },
});
