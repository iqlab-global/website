import s from './style.module.scss';
import { clsx } from 'clsx';
import { SyntheticEvent } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface InputProps {
  id: string;
  name?: string;
  type?: string;
  placeholder?: string;
  heading: string;
  className?: string;
  isTextarea?: boolean;
  isSelect?: boolean;
  options?: SelectOption[];
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
  isSelect,
  options,
  value,
  onChange,
}: InputProps) {
  return (
    <div className={clsx(isTextarea ? s.textareaWrapper : s.inputWrapper, className)}>
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
      {isSelect && (
        <select
          required={required}
          id={id}
          name={name || id}
          value={value}
          onChange={onChange}
        >
          <option value=''>Select {heading}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      {!isTextarea && !isSelect && (
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
