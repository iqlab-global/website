import { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } from '@/constants/fileUpload';
import { VALIDATION_MESSAGES } from '@/constants/validationMessages';

export const validateFile = (file: File | null): string | null => {
  if (!file || file.size === 0) {
    return VALIDATION_MESSAGES.FILE_REQUIRED;
  }

  if (file.size > MAX_FILE_SIZE) {
    return VALIDATION_MESSAGES.FILE_SIZE_EXCEEDED;
  }

  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return VALIDATION_MESSAGES.FILE_TYPE_INVALID;
  }

  return null;
};
