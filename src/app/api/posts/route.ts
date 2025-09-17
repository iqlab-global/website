import { NextRequest } from 'next/server';
import { client, PAGE_SIZE } from '@/sanity/lib/client';
import { query } from '@/app/api/posts/queries/posts';

export async function GET(request: NextRequest): Promise<Response> {
  try {
    const pageQuery = request.nextUrl.searchParams.get('page') ?? '';
    const page = parseInt(pageQuery) ?? 1;
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const response = await client.fetch(query, { start, end });

    return Response.json(response);
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
