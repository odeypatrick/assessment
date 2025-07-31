import React from 'react';

interface StepOneProps {
  fullName: string;
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepOne: React.FC<StepOneProps> = ({ fullName, email, onChange }) => {
  return (
    <div className="space-y-4">
      <input
        type="text"
        name="fullName"
        value={fullName}
        onChange={onChange}
        placeholder="Full Name"
        className="w-full p-2 border border-gray-300 rounded outline-none"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email Address"
        className="w-full p-2 border border-gray-300 rounded outline-0"
      />
    </div>
  );
};

export default StepOne;
