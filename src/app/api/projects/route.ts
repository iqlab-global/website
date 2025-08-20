import { client } from '@/sanity/lib/client';
import { NextRequest } from 'next/server';

import { queryProjects } from '@/app/api/projects/queries/projects';

export async function GET(request: NextRequest): Promise<Response> {
  try {
    const lastId = request.nextUrl.searchParams.get('lastId') ?? '';

    const response = await client.fetch(queryProjects, {
      lastId,
    });

    return Response.json(response);
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
