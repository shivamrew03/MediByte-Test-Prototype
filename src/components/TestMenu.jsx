import React from 'react';
import { useState } from 'react';
import { classNames } from 'tailwindcss/classnames';

const TestMenu = ({
  label,
  name,
  value,
  onChange,
  className,
}) => {
  const [checked, setChecked] = useState(value);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onChange(event);
  };

  return (
    <div className={classNames(className, 'flex items-center')}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
      />
      <label htmlFor={name} className="ml-2 text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default TestMenu;