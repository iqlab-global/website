import { NextRequest, NextResponse } from 'next/server';
import { writeClient } from '@/sanity/lib/write-client';

export async function POST(request: NextRequest) {
  try {
    // Check if Sanity API token is configured
    if (!process.env.SANITY_API_TOKEN) {
      console.error('SANITY_API_TOKEN is not configured');
      return NextResponse.json(
        {
          error: 'Server configuration error',
          details: process.env.NODE_ENV === 'development'
            ? 'SANITY_API_TOKEN environment variable is missing. Please add it to .env.local'
            : 'Server configuration error',
        },
        { status: 500 }
      );
    }

    const formData = await request.formData();

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const linkedin = formData.get('linkedin') as string;
    const resume = formData.get('resume') as File;
    const jobTitle = formData.get('jobTitle') as string;

    if (!firstName || !lastName || !email || !jobTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const applicationData = {
      _type: 'jobApplication',
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      linkedin: linkedin || undefined,
      jobTitle,
      submittedAt: new Date().toISOString(),
      status: 'new',
    };
    
    const result = await writeClient.create(applicationData);

    // TODO: Optional enhancements:
    // 1. Upload resume to Sanity assets or cloud storage
    // 2. Send email notification to HR
    // 3. Send confirmation email to applicant
    // 4. Link application to specific job posting by finding job by title

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully',
        applicationId: result._id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Job application error:', error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorDetails = process.env.NODE_ENV === 'development'
      ? { error: 'Failed to submit application', details: errorMessage, stack: error instanceof Error ? error.stack : undefined }
      : { error: 'Failed to submit application' };

    return NextResponse.json(errorDetails, { status: 500 });
  }
}
