import React, { createContext, useContext, useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  attraction: string;
  ageRange: string;
  relationshipStatus: string;
  ethnicity: string;
  birthDate: string;
  zodiacSign: string;
  quizAnswers?: Record<number, string>;
}

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    attraction: '',
    ageRange: '',
    relationshipStatus: '',
    ethnicity: '',
    birthDate: '',
    zodiacSign: '',
    quizAnswers: {}
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};