import { NextRequest } from 'next/server';
import { client, PROJECT_PAGE_SIZE } from '@/sanity/lib/client';

const query = `*[_type == "post" && "Open Source" in categories[]->title] | order(publishedAt desc) [$start...$end] {
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
    const pageQuery = request.nextUrl.searchParams.get('page') ?? '';
    const page = parseInt(pageQuery) ?? 1;
    const start = (page - 1) * PROJECT_PAGE_SIZE;
    const end = start + PROJECT_PAGE_SIZE;

    const posts = await client.fetch(query, { start, end });
    const total = await client.fetch(
      `count(*[_type == "post" && "Open Source" in categories[]->title])`
    );

    return Response.json({ posts, total });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
