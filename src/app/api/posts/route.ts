import { NextRequest } from 'next/server';
import { client } from '@/sanity/lib/client';
import { POSTS_PER_PAGE } from '@/constants/posts';

const queryPosts = `*[_type == "post"] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  slug,
  mainImage,
  categories[]->{
    title
  }
}`;

export async function GET(request: NextRequest): Promise<Response> {
  try {
    const offsetQuery = request.nextUrl.searchParams.get('offset') ?? '0';
    const limitQuery = request.nextUrl.searchParams.get('limit') ?? POSTS_PER_PAGE.toString();

    const offset = parseInt(offsetQuery);
    const limit = parseInt(limitQuery);
    const start = offset;
    const end = offset + limit;

    const posts = await client.fetch(queryPosts, { start, end });

    return Response.json(posts);
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
