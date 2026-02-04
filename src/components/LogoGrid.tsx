import React from 'react';

interface LogoGridProps {
  logos: Array<{
    id: string;
    name: string;
    image: string;
    link?: string;
  }>;
  title?: string;
}

export const LogoGrid: React.FC<LogoGridProps> = ({
  logos,
  title = 'Our Partners',
}) => {
  return (
    <div>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {logos.map((logo) => {
          const content = (
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-24">
              <img
                src={logo.image}
                alt={logo.name}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          );

          if (logo.link) {
            return (
              <a
                key={logo.id}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            );
          }

          return <div key={logo.id}>{content}</div>;
        })}
      </div>
    </div>
  );
};
