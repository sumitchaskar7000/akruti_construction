import React from 'react';
import { SectionContainer } from '../components/SectionContainer';

export const TestimonialsPage: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Rajesh Mehta',
      role: 'Homeowner',
      project: 'Premium Residence Tower A',
      image: '/images/testimonials/rajesh.jpg',
      text: 'Excellent quality construction and timely delivery. The team was professional throughout the process. Highly recommended!',
      rating: 5,
    },
    {
      id: '2',
      name: 'Priya Singh',
      role: 'Investor',
      project: 'Luxury Villas Estate',
      image: '/images/testimonials/priya.jpg',
      text: 'Great investment opportunity. The location and amenities are outstanding. The ROI has been excellent.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Amit Patel',
      role: 'Homeowner',
      project: 'Green Meadows',
      image: '/images/testimonials/amit.jpg',
      text: 'The eco-friendly features and sustainable design really impressed us. Living here has been a wonderful experience.',
      rating: 5,
    },
  ];

  return (
    <div>
      <div className="pt-20 md:pt-24 bg-brandDark text-white">
        <SectionContainer>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              What our customers say about us
            </p>
          </div>
        </SectionContainer>
      </div>

      <SectionContainer className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.project}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};



