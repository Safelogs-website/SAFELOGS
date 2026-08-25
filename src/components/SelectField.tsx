import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

type Option = { value: string; label: string };

type SelectFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  icon?: React.ReactNode;
};

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ id, label, value, onChange, options, placeholder, icon }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="label-field">
          <span className="inline-flex items-center gap-1.5">
            {icon}
            {label}
          </span>
        </label>
        <div className="relative">
          <select
            id={id}
            ref={ref}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="field-select pr-10"
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((o) => (
              <option key={o.value} value={o.value} className="bg-ink-800 text-slate-100">
                {o.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            strokeWidth={2.5}
          />
        </div>
      </div>
    );
  },
);

SelectField.displayName = 'SelectField';
export default SelectField;
