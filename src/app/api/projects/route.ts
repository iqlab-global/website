import { NextRequest } from 'next/server';
import { client, PROJECT_PAGE_SIZE } from '@/sanity/lib/client';
import { queryProjects } from '@/app/api/projects/queries/projects';

export async function GET(request: NextRequest): Promise<Response> {
  try {
    const pageQuery = request.nextUrl.searchParams.get('page') ?? '';
    const page = parseInt(pageQuery) ?? 1;
    const start = (page - 1) * PROJECT_PAGE_SIZE;
    const end = start + PROJECT_PAGE_SIZE;

    const response = await client.fetch(queryProjects, { start, end });

    return Response.json(response);
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
