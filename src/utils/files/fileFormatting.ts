export const formatFileSize = (bytes: number): string => {
  return `${Math.round(bytes / 1024)} KB`;
};

export const sanitizeFilename = (filename: string): string => {
  const basename = filename.split('/').pop()?.split('\\').pop() || 'resume';
  const sanitized = basename.replace(/[^a-zA-Z0-9._-]/g, '_');
  return sanitized.slice(0, 255);
};
