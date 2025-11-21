'use client';

import { useState } from 'react';
import s from './style.module.scss';
import { validateFile } from '@/utils/files/fileValidation';
import { formatFileSize } from '@/utils/files/fileFormatting';
import { ALLOWED_FILE_EXTENSIONS } from '@/constants/fileUpload';
import { ResumeIcon } from '@/assets/icons/ResumeIcon';
import { CrossIcon } from '@/assets/icons/CrossIcon';

type FileUploadProps = {
  id: string;
  name: string;
  label: string;
  file: File | null;
  onFileChange: (file: File | null) => void;
  onError: (error: string) => void;
  onClearError: () => void;
  disabled?: boolean;
  dropZoneText?: string;
};

export const FileUpload = ({
  id,
  name,
  label,
  file,
  onFileChange,
  onError,
  onClearError,
  disabled = false,
  dropZoneText = 'Drop you file here',
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) {
      const error = validateFile(selectedFile);
      if (error) {
        onError(error);
        return;
      }
      onFileChange(selectedFile);
      onClearError();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files?.[0] || null;
    if (droppedFile) {
      const error = validateFile(droppedFile);
      if (error) {
        onError(error);
        return;
      }
      onFileChange(droppedFile);
      onClearError();
    }
  };

  const handleRemoveFile = () => {
    onFileChange(null);
    const fileInput = document.getElementById(id) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <div className={s.fileUploadWrapper}>
      <label className={s.fileUploadLabel} htmlFor={id}>
        {label}
      </label>
      <div
        className={`${s.fileDropZone} ${isDragging ? s.dragging : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !disabled && document.getElementById(id)?.click()}
      >
        <input
          type='file'
          id={id}
          name={name}
          accept={ALLOWED_FILE_EXTENSIONS}
          disabled={disabled}
          onChange={handleFileChange}
          className={s.fileInput}
        />
        <p className={s.fileDropText}>{dropZoneText}</p>
      </div>

      {file && (
        <div className={s.uploadedFileMinified}>
          <div className={s.fileIconMinified}>
            <ResumeIcon />
          </div>
          <div className={s.fileInfoMinified}>
            <p className={s.fileNameMinified}>{file.name}</p>
            <p className={s.fileSizeMinified}>{formatFileSize(file.size)}</p>
          </div>
          <button
            type='button'
            className={s.removeFileBtnMinified}
            onClick={handleRemoveFile}
            aria-label='Remove file'
          >
            <CrossIcon />
          </button>
        </div>
      )}
    </div>
  );
};
