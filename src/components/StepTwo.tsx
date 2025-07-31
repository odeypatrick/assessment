import React from 'react';

interface StepTwoProps {
  username: string;
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ username, password, onChange }) => {
  return (
    <div className="space-y-4">
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChange}
        placeholder="Username"
        className="w-full p-2 border border-gray-300 rounded outline-0"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded outline-0"
      />
    </div>
  );
};

export default StepTwo;
