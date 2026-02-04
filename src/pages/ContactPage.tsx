import React from 'react';
import { SectionContainer } from '../components/SectionContainer';

export const ContactPage: React.FC = () => {
  const whatsappNumber = '+917219347783';
  const whatsappMessage = encodeURIComponent('Hello, I would like to get in touch.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div>
      {/* Hero Section */}
      <div className="pt-20 md:pt-24 bg-brandDark text-white">
        <SectionContainer>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Get in touch with our team
            </p>
          </div>
        </SectionContainer>
      </div>

      <SectionContainer className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-6">
                We'd love to hear from you. Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-700">
                  Vadgaon Budruk, Sinhgad Road,
                  36/37 Ankur Hotel Backside,
                  Near Nanded City, Pune – 411041, Maharashtra, India
                  <br />
                  India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a href="tel:+91 7219347783" className="text-gray-700 hover:text-primary transition-colors">
                  +91 7219347783
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:info@realestatepro.com" className="text-gray-700 hover:text-primary transition-colors">
                  akruti.construction@outlook.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                    click
                  </button>

                </a>
              </div>

            </div>
          </div>

          {/* Map Placeholder */}
          {/* Map Integration */}
          <div className="mt-8 lg:mt-0">
            <div className="rounded-lg overflow-hidden h-64">
              <iframe
                src="https://maps.google.com/maps?&q=Audumber%20Complex%20Narhe%20Pune%20411041&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location - Audumber Complex, Narhe"
              ></iframe>
            </div>
          </div>


        </div>
      </SectionContainer>
    </div>
  );
};
