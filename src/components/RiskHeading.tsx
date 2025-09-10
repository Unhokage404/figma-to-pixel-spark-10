import React from 'react';

interface RiskHeadingProps {
  children: React.ReactNode;
}

export const RiskHeading: React.FC<RiskHeadingProps> = ({ children }) => {
  return (
    <header className="flex flex-col items-center">
      <h1 
        className="rotate-[4.966377839389597e-17rad] text-5xl font-extrabold leading-[1.1] text-center uppercase z-10 -mt-2.5 max-md:max-w-full max-md:text-[40px] text-black"
        role="banner"
      >
        {children}
      </h1>
    </header>
  );
};
