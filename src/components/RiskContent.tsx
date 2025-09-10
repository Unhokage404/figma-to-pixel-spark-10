import React from 'react';

interface RiskContentProps {
  children: React.ReactNode;
}

export const RiskContent: React.FC<RiskContentProps> = ({ children }) => {
  return (
    <section 
      className="rotate-[4.966377839389597e-17rad] self-stretch min-h-[447px] w-full text-xl font-[450] leading-[27px] mt-[77px] pt-[70px] pb-[242px] px-[70px] rounded-[81px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5 text-black"
      role="main"
      aria-labelledby="risk-heading"
    >
      <article className="max-md:max-w-full">
        {children}
      </article>
    </section>
  );
};
