import React from 'react';
import { RiskHeading } from './RiskHeading';
import { RiskContent } from './RiskContent';
import { RiskImage } from './RiskImage';

export const BrandRiskSection: React.FC = () => {
  return (
    <main className="flex flex-col items-center text-black min-h-screen py-8">
      <RiskHeading>
        Why your brand is at risk
      </RiskHeading>
      
      <RiskContent>
        Practice shows that any competitor can buy ads on your brand. Even the
        giants do this to each other.
        <br />
        <br />
        Your niche is also full of competitors who want to capture as much
        relevant and parasitic traffic as possible.
        <br />
        And it costs them little — as long as you do nothing.
        <br />
        Your brand is growing, but the money flows away from you.
      </RiskContent>
      
      <RiskImage 
        src="https://api.builder.io/api/v1/image/assets/0f3806ae0a48419ea9375526b008ec6d/8aa5838d823a7675a155ce07c14b330b6a168297?placeholderIfAbsent=true"
        alt="Competitive analysis dashboard showing brand risk metrics and competitor advertising strategies"
      />
    </main>
  );
};
