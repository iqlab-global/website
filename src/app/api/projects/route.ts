import { client } from '@/sanity/lib/client';
import { NextRequest } from 'next/server';

import { queryProjects } from '@/app/api/projects/queries/projects';

const PAGE_SIZE = 3;

export async function GET(request: NextRequest): Promise<Response> {
  try {
    const pageQuery = request.nextUrl.searchParams.get('page') ?? '';
    const page = parseInt(pageQuery) ?? 1;
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const response = await client.fetch(queryProjects, { start, end });

    return Response.json(response);
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
