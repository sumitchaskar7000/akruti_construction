import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { Button } from '../components/Button';

export const ChannelPartnersPage: React.FC = () => {
  return (
    <div>
      <div className="pt-20 md:pt-24 bg-brandDark text-white">
        <SectionContainer>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Channel Partners
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Partner with us for mutual growth
            </p>
          </div>
        </SectionContainer>
      </div>

      <SectionContainer className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Become a Channel Partner
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Join our network of trusted partners and help us reach more customers while
            earning attractive commissions and benefits.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Competitive commission structure</li>
                <li>• Marketing support and materials</li>
                <li>• Training and certification programs</li>
                <li>• Dedicated partner support team</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Real estate license (if applicable)</li>
                <li>• Strong local network</li>
                <li>• Commitment to customer service</li>
                <li>• Alignment with our values</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button variant="primary">Apply to Become a Partner</Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};



