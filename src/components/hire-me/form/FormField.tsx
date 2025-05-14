
import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
}

const FormField = ({ 
  id, 
  label, 
  type, 
  value, 
  onChange, 
  placeholder, 
  required = false,
  options = [],
  rows = 3
}: FormFieldProps) => {
  const baseClasses = "w-full bg-dark-300 border border-white/10 rounded-lg p-3 text-white focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple/50 transition-all";

  return (
    <div>
      <label htmlFor={id} className="block text-white/70 mb-2">
        {label} {required && '*'}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          rows={rows}
          className={baseClasses}
          placeholder={placeholder}
          required={required}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={baseClasses}
          required={required}
        >
          <option value="" disabled>
            {placeholder || `Select ${label.toLowerCase()}`}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={baseClasses}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;
