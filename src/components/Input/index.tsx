import s from './style.module.scss';
import { clsx } from 'clsx';
import { SyntheticEvent } from 'react';

interface InputProps {
  id: string;
  name?: string;
  type?: string;
  placeholder?: string;
  heading: string;
  className?: string;
  isTextarea?: boolean;
  required?: boolean;
  value?: string;
  onChange?: (e: SyntheticEvent) => void;
}

export default function Input({
  id,
  name,
  type,
  placeholder,
  heading,
  className,
  required,
  isTextarea,
  value,
  onChange,
}: InputProps) {
  return (
    <div className={clsx(s.inputWrapper, className || className)}>
      <label htmlFor={id}>{heading}</label>
      <br />
      {isTextarea && (
        <textarea
          required={required}
          name={name || id}
          cols={30}
          rows={50}
          value={value}
          onChange={onChange}
        />
      )}
      {!isTextarea && (
        <input
          required={required}
          placeholder={placeholder || ''}
          type={type || 'text'}
          id={id}
          value={value}
          name={name || id}
          onChange={onChange}
        />
      )}
    </div>
  );
}
