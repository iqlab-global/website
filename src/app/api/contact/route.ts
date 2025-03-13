import { emailRegex } from '@/lib/utils';
import { apiKey, dataset, projectId } from '@/sanity/env';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest): Promise<Response> {
  try {
    const contactData = await request.json();
    const { firstName, lastName, email, company, message } = contactData;

    // Validate input
    if (!firstName || !lastName || !email || !company || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const response = await fetch(
      `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          mutations: [
            {
              create: {
                _type: 'contactForm',
                ...contactData,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to submit data');
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
