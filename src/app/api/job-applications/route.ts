import { NextRequest, NextResponse } from 'next/server';
import { writeClient } from '@/sanity/lib/write-client';
import { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } from '@/constants/fileUpload';
import { VALIDATION_MESSAGES } from '@/constants/validationMessages';
import { sanitizeFilename } from '@/utils/files';

export async function POST(request: NextRequest) {
  try {
    if (!process.env.NEXT_PUBLIC_SANITY_API_KEY) {
      console.error('NEXT_PUBLIC_SANITY_API_KEY is not configured');
      return NextResponse.json(
        {
          error: 'Server configuration error',
          details:
            process.env.NODE_ENV === 'development'
              ? 'NEXT_PUBLIC_SANITY_API_KEY environment variable is missing. Please add it to .env.local'
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
    const location = formData.get('location') as string;
    const linkedin = formData.get('linkedin') as string;
    const address = formData.get('address') as string;
    const message = formData.get('message') as string;
    const resume = formData.get('resume') as File | null;
    const applicationType =
      (formData.get('applicationType') as string) || 'job';
    const jobId = formData.get('jobId') as string;

    if (!firstName || !lastName || !email || !phone || !location) {
      return NextResponse.json(
        { error: VALIDATION_MESSAGES.REQUIRED_FIELDS_MISSING },
        { status: 400 }
      );
    }

    if (applicationType === 'job' && !jobId) {
      return NextResponse.json(
        { error: 'Job posting is required for job applications' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: VALIDATION_MESSAGES.EMAIL_INVALID },
        { status: 400 }
      );
    }

    if (!resume || !(resume instanceof File) || resume.size === 0) {
      return NextResponse.json(
        { error: VALIDATION_MESSAGES.FILE_REQUIRED },
        { status: 400 }
      );
    }

    if (!ALLOWED_FILE_TYPES.includes(resume.type)) {
      return NextResponse.json(
        { error: VALIDATION_MESSAGES.FILE_TYPE_INVALID },
        { status: 400 }
      );
    }

    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: VALIDATION_MESSAGES.FILE_SIZE_EXCEEDED },
        { status: 400 }
      );
    }

    let resumeAsset = null;
    try {
      const buffer = Buffer.from(await resume.arrayBuffer());
      const sanitizedFilename = sanitizeFilename(resume.name);

      resumeAsset = await writeClient.assets.upload('file', buffer, {
        filename: sanitizedFilename,
        contentType: resume.type,
      });
    } catch (uploadError) {
      console.error('Resume upload error:', uploadError);
      return NextResponse.json(
        {
          error: 'Failed to upload resume',
          details:
            process.env.NODE_ENV === 'development'
              ? uploadError instanceof Error
                ? uploadError.message
                : 'Unknown upload error'
              : undefined,
        },
        { status: 500 }
      );
    }

    const baseApplicationData = {
      _type: 'jobApplication',
      firstName,
      lastName,
      phone,
      location,
      email,
      linkedin: linkedin || undefined,
      address: address || undefined,
      message: message || undefined,
      applicationType: applicationType || 'job',
      submittedAt: new Date().toISOString(),
      status: 'new',
      resume: {
        _type: 'file',
        asset: {
          _type: 'reference',
          _ref: resumeAsset._id,
        },
      },
    };

    const applicationData =
      applicationType === 'job' && jobId
        ? {
            ...baseApplicationData,
            job: {
              _type: 'reference',
              _ref: jobId,
            },
          }
        : baseApplicationData;

    const result = await writeClient.create(applicationData);

    // TODO: Optional enhancements:
    // 1. Send email notification to HR
    // 2. Send confirmation email to applicant

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

    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    const errorDetails =
      process.env.NODE_ENV === 'development'
        ? {
            error: 'Failed to submit application',
            details: errorMessage,
            stack: error instanceof Error ? error.stack : undefined,
          }
        : { error: 'Failed to submit application' };

    return NextResponse.json(errorDetails, { status: 500 });
  }
}
