import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  id,
}) => {
  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};




