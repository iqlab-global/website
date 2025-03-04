import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { authorType } from './authorType';
import { homePageSingleton } from './homePageType';
import { techCapabilityType } from './techCapabilityType';
import { projectType } from './projectType';
import { aboutPageSingleton } from '@/sanity/schemaTypes/aboutPageType';
import { servicePageSingleton } from '@/sanity/schemaTypes/servicePageType';
import { serviceType } from '@/sanity/schemaTypes/serviceType';
import { contactFormType } from '@/sanity/schemaTypes/contactFormType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    homePageSingleton,
    techCapabilityType,
    projectType,
    aboutPageSingleton,
    servicePageSingleton,
    serviceType,
    contactFormType,
  ],
};
