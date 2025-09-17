import { groq } from 'next-sanity';

export const query = groq`{
  "posts": *[_type == "post"] | order(_createdAt desc) [$start...$end] {
    _id,
    title,
    slug,
    mainImage,
  },
  "total": count(*[_type == "post"])
}`;
