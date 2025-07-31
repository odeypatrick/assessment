import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const OnboardingModal: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    theme: '',
    subscribe: false,
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const isStepValid = () => {
    switch (step) {
      case 0:
        return formData.fullName && formData.email;
      case 1:
        return formData.username && formData.password;
      case 2:
        return formData.theme !== '';
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
  };

  const steps = [
    <StepOne {...formData} onChange={handleChange} />,
    <StepTwo {...formData} onChange={handleChange} />,
    <StepThree {...formData} onChange={handleChange} />,
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-30">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md space-y-6 min-h-2/4">
        <h1 className="text-center text-2xl pb-6 text-[#1e3a8a]">Quixess Onboarding Process</h1>

        <div className="flex">
          {['Personal Info', 'Account Setup', 'Preferences'].map((label, index) => (
            <div
              key={index}
              className={`w-full px-3 py-1 cursor-pointer border-b-2 text-center transition-all duration-300 ${
                step === index
                  ? 'border-[#1e3a8a] text-[#1e3a8a]'
                  : 'border-gray-200 text-gray-700'
              }`}
              onClick={() => setStep(index)}
            >
              {label}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            {steps[step]}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between pt-4">
          <button
            onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
            disabled={step === 0}
            className="px-4 py-2 bg-gray-400 text-white rounded disabled:opacity-50 cursor-pointer"
          >
            Back
          </button>
          {step < 2 ? (
            <button
              onClick={() => isStepValid() && setStep((prev) => prev + 1)}
              className="px-4 py-2 bg-[#1e3a8a] text-white rounded cursor-pointer"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isStepValid()}
              className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;