import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content Management')
    .items([
      // S.documentTypeListItem('post').title('Posts'),
      // S.documentTypeListItem('category').title('Categories'),
      // S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('contactForm').title('Contact Form'),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('service').title('Services'),
      S.divider(),
      S.documentTypeListItem('homePageSingleton')
        .title('Home Page')
        .child(
          S.editor()
            .id('homePageSingleton')
            .schemaType('homePageSingleton')
            .documentId('homePageSingleton')
        ),
      S.documentTypeListItem('aboutPageSingleton')
        .title('About Page')
        .child(
          S.editor()
            .id('aboutPageSingleton')
            .schemaType('aboutPageSingleton')
            .documentId('aboutPageSingleton')
        ),
      S.documentTypeListItem('servicePageSingleton')
        .title('Services Page')
        .child(
          S.editor()
            .id('servicePageSingleton')
            .schemaType('servicePageSingleton')
            .documentId('servicePageSingleton')
        ),
      S.divider(),
      S.documentTypeListItem('techCapability').title('Tech Capability Widget'),
    ]);
