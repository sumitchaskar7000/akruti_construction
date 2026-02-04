import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { LifeCarousel } from '../components/LifeCarousel';
import lifeEventsData from '../data/lifeEvents.json';
import { LifeEvent } from '../types';

// Type checked against LifeEvent[]
const lifeEvents: LifeEvent[] = lifeEventsData;

export const LifeAtCompanyPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="pt-20 md:pt-24 bg-brandDark text-white">
        <SectionContainer>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Life @ Company
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Experience our vibrant culture and team spirit
            </p>
          </div>
        </SectionContainer>
      </div>

      {/* Carousel */}
      <SectionContainer className="bg-white">
        <LifeCarousel events={lifeEvents} />
      </SectionContainer>

      {/* Culture Section */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Culture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Collaboration</h3>
              <p className="text-gray-700">
                We believe in the power of teamwork. Our collaborative environment encourages
                innovation and ensures every voice is heard.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Work-Life Balance</h3>
              <p className="text-gray-700">
                We understand the importance of balance. Our flexible policies help our team
                members thrive both professionally and personally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Learning</h3>
              <p className="text-gray-700">
                Growth is at the core of our culture. We invest in training and development
                programs to help our team stay ahead of the curve.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Celebrating Success</h3>
              <p className="text-gray-700">
                We celebrate achievements, both big and small. Recognition and appreciation
                are integral to our workplace culture.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};
