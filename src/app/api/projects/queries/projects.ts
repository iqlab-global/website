import { groq } from 'next-sanity';

export const queryProjects = groq`{
  "projects": *[_type == "project" && _id > $lastId] | order(_id) [0...3]  {
    _id,
    primarySection {
      title,
      subTitle,
      slug,
      industries,
      serviceType,
      techStack,
      "previewImage": previewImage.asset->url
    }
  },
  "total": count(*[_type == "project"])
}`;
