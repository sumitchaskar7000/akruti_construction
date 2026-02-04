import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import { Button } from '../components/Button';

export const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: '1',
      title: 'Senior Project Manager',
      department: 'Operations',
      location: 'Pune',
      type: 'Full-time',
    },
    {
      id: '2',
      title: 'Sales Executive',
      department: 'Sales & Marketing',
      location: 'Pune',
      type: 'Full-time',
    },
    {
      id: '3',
      title: 'Architect',
      department: 'Design',
      location: 'Pune',
      type: 'Full-time',
    },
    {
      id: '4',
      title: 'Marketing Manager',
      department: 'Sales & Marketing',
      location: 'Pune',
      type: 'Full-time',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="pt-20 md:pt-24 bg-brandDark text-white">
        <SectionContainer>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Careers
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Join us in building the future
            </p>
          </div>
        </SectionContainer>
      </div>

      {/* Why Join Us */}
      <SectionContainer className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Opportunities</h3>
              <p className="text-gray-700">
                We invest in our employees' growth with training programs, mentorship, and clear career progression paths.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray=900 mb-2">Competitive Benefits</h3>
              <p className="text-gray-700">
                Attractive compensation packages, health insurance, and other benefits to support your well-being.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovative Environment</h3>
              <p className="text-gray-700">
                Work on cutting-edge projects with the latest technology and best practices in the industry.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Work-Life Balance</h3>
              <p className="text-gray-700">
                Flexible work arrangements and policies that help you maintain a healthy work-life balance.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Job Openings */}
      <SectionContainer className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Open Positions
          </h2>
          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>

                  {/* MAIL SEND BUTTON */}
                  <a
                    href={`mailto:info@realestatepro.com?subject=Application for ${job.title}&body=Hello,%0D%0AI am interested in applying for the position of ${job.title}.%0D%0A%0D%0AThanks & Regards,%0D%0A[Your Name]`}
                  >
                    <Button variant="primary">Apply Now</Button>
                  </a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Culture Values */}
      <SectionContainer className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Culture Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-700">We work together to achieve common goals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-700">We encourage creative thinking and new ideas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-700">We strive for the highest standards in everything</p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default CareersPage;
