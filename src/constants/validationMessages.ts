export const VALIDATION_MESSAGES = {
  FILE_REQUIRED: 'Resume is required. Please upload your resume.',
  FILE_SIZE_EXCEEDED:
    'File size exceeds 5MB limit. Please upload a smaller file.',
  FILE_TYPE_INVALID:
    'Invalid file type. Only PDF, DOC, and DOCX files are allowed.',

  EMAIL_INVALID: 'Email address invalid',

  ALL_FIELDS_REQUIRED: 'All fields are required',
  REQUIRED_FIELDS_MISSING: 'Missing required fields',
} as const;
