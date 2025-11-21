import { validateFile } from '@/utils/files/fileValidation';

export type FileUploadCallbacks = {
  onFileSelect: (file: File | null) => void;
  onError: (error: string) => void;
  onClearError: () => void;
};

/**
 * Creates a file change handler for file input elements
 */
export const createFileChangeHandler =
  (callbacks: FileUploadCallbacks) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const error = validateFile(file);
      if (error) {
        callbacks.onError(error);
        return;
      }
      callbacks.onFileSelect(file);
      callbacks.onClearError();
    }
  };

/**
 * Creates a drag over handler for drag and drop
 */
export const createDragOverHandler =
  (setIsDragging: (isDragging: boolean) => void) =>
  (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

/**
 * Creates a drag leave handler for drag and drop
 */
export const createDragLeaveHandler =
  (setIsDragging: (isDragging: boolean) => void) =>
  (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

/**
 * Creates a drop handler for drag and drop
 */
export const createDropHandler =
  (
    callbacks: FileUploadCallbacks & {
      setIsDragging: (isDragging: boolean) => void;
    }
  ) =>
  (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    callbacks.setIsDragging(false);

    const file = e.dataTransfer.files?.[0] || null;
    if (file) {
      const error = validateFile(file);
      if (error) {
        callbacks.onError(error);
        return;
      }
      callbacks.onFileSelect(file);
      callbacks.onClearError();
    }
  };

export const createRemoveFileHandler =
  (inputId: string, onFileSelect: (file: File | null) => void) => () => {
    onFileSelect(null);
    const fileInput = document.getElementById(inputId) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };
