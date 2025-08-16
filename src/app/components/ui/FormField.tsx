import React from 'react';
import { useFormContext, RegisterOptions, FieldError } from 'react-hook-form';
import { clsx } from 'clsx';

// Define a union of possible element attributes
type AllElementAttributes = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  React.SelectHTMLAttributes<HTMLSelectElement>;

interface FormFieldProps extends AllElementAttributes {
  name: string;
  label?: string;
  rules?: RegisterOptions;
  as?: 'input' | 'textarea' | 'select'; // Add 'select' to the allowed types
  icon?: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  rules,
  as = 'input',
  icon,
  className,
  children, // Capture children for the select options
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name] as FieldError | undefined;

  // Define base styles for all form elements
  const commonStyles =
    'w-full px-3 py-2 text-sm border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-white';

  const commonProps = {
    id: name,
    ...register(name, rules),
    ...props,
    className: clsx(commonStyles, { 'border-red-500': !!error }, className),
  };

  const renderField = () => {
    switch (as) {
      case 'textarea':
        return <textarea {...commonProps} />;
      case 'select':
        return <select {...commonProps}>{children}</select>;
      case 'input':
      default:
        return <input {...commonProps} />;
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-1.5">
        {icon}
        <label htmlFor={name} className="text-xs font-medium text-slate-700">
          {label} {rules?.required && <span className="text-red-500">*</span>}
        </label>
      </div>

      {renderField()}
    </div>
  );
};
