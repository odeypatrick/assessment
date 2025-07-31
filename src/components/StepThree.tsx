import React from 'react';

interface StepThreeProps {
  theme: string;
  subscribe: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const StepThree: React.FC<StepThreeProps> = ({ theme, subscribe, onChange }) => {
  return (
    <div className="space-y-4">
      <select
        name="theme"
        value={theme}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded outline-0"
      >
        <option value="">Select Theme</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="subscribe"
          checked={subscribe}
          onChange={onChange}
        />
        <span>Subscribe to newsletter?</span>
      </label>
    </div>
  );
};

export default StepThree;
