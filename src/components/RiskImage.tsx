import React from 'react';

interface RiskImageProps {
  src: string;
  alt?: string;
}

export const RiskImage: React.FC<RiskImageProps> = ({ 
  src, 
  alt = "Brand risk assessment visualization showing competitive landscape analysis" 
}) => {
  return (
    <figure className="w-full flex justify-center">
      <img
        src={src}
        alt={alt}
        className="aspect-[1.59] object-contain w-full z-10 mt-[-175px] max-w-[1226px] rounded-[0px_0px_0px_0px] max-md:max-w-full"
        loading="lazy"
      />
    </figure>
  );
};
