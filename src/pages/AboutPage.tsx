import React from 'react';
import { SectionContainer } from '../components/SectionContainer';
import teamData from "../data/team.json";
import { TeamMember } from "../types";

const team = teamData as TeamMember[];

export const LeadershipPage: React.FC = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white text-center">
        <SectionContainer>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Leadership Team
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Inspiring excellence through vision, innovation and deep industry expertise.
          </p>
        </SectionContainer>
      </section>

      {/* Team Members */}
      <SectionContainer className="py-20">
        <div className="space-y-24 max-w-6xl mx-auto">

          {team.slice(0, 2).map((member, index) => (
            <div
              key={member.id}
              className={`grid md:grid-cols-2 gap-10 items-start`}
            >
              {/* IMAGE - NORMAL DISPLAY */}
              <div className={`${index % 2 === 1 ? "order-2" : ""}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full rounded-2xl shadow-xl border border-gray-200"
                />
              </div>

              {/* CONTENT */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                  {member.name}
                </h2>
                <p className="text-xl font-semibold text-primary">
                  {member.role}
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {member.bio}
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {member.name} is recognized for exceptional leadership and strategic
                  thinking, playing a key role in building a strong foundation of quality,
                  transparency and growth in the real estate industry.
                </p>

                <div className="mt-6 border-l-4 border-primary pl-6 space-y-2">
                  <p className="text-gray-600 text-base">
                    • 10+ Years of construction & project development experience
                  </p>
                  <p className="text-gray-600 text-base">
                    • Expertise in residential & commercial infrastructure planning
                  </p>
                  <p className="text-gray-600 text-base">
                    • Strong focus on innovation, community & modern design standards
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </SectionContainer>

      {/* Leadership Philosophy */}
      <SectionContainer className="pb-24">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Our Leadership Philosophy
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We believe leadership is about inspiring people with purpose, responsibility,
            quality and trust — building not just projects, but strong communities.
          </p>
        </div>
      </SectionContainer>
    </div>
  );
};

export const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="pt-20 md:pt-24 bg-brandDark text-white">
        <SectionContainer>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Akruti Construction is a reputable and dynamic construction company dedicated to delivering exceptional projects in the real estate industry since 2013.
            </p>
          </div>
        </SectionContainer>
      </div>




      {/* Company Story */}
      <SectionContainer className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-medium text-gray-900 mb-6">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Founded with a vision to transform the real estate landscape, our company has been
              at the forefront of premium property development for over two decades. What started
              as a small venture has grown into a trusted name synonymous with quality, innovation,
              and customer satisfaction.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our journey has been marked by numerous milestones - from our first residential
              project to the development of large-scale commercial and mixed-use properties. Each
              project has been a learning experience, helping us refine our approach and deliver
              better value to our customers.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Today, we stand proud of our portfolio that spans across multiple cities, touching
              thousands of lives and creating communities that thrive. Our commitment to excellence
              remains unwavering as we continue to build the future, one project at a time.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Core Attributes - Agile, Experienced, Committed, Reliable */}
      <SectionContainer className="bg-white py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Defines Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four pillars that shape our approach to real estate development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Agile */}
            <div className="group relative border-2 border-black rounded-xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 bg-white">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors duration-300">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                    Agile
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  What sets Akruti Construction apart from every other firm are its youthful, responsive methods. We don't take a one-size-fits-all approach. Every project is distinct, with different requirements and challenges. We create innovative, bespoke packages that bring together all the needed services and elements to ensure our clients visions comes to life.
                </p>
              </div>
            </div>

            {/* Experienced */}
            <div className="group relative border-2 border-black rounded-xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 bg-white">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors duration-300">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                    Experienced
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  With an extensive track record in Pune, we understand the requirements of different markets in terms of design, construction, and regulatory requirements. Our portfolio includes everything from Pune's largest and most exciting projects to innovative design collaborations with international standard design and architecture firms.
                </p>
              </div>
            </div>

            {/* Committed */}
            <div className="group relative border-2 border-black rounded-xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 bg-white">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors duration-300">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v-7a1.5 1.5 0 01-3 0v7zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                    Committed
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  With a strong commitment to quality, innovation and customer satisfaction, we have established ourselves as a trusted name in the construction sector. At Akruti Construction, we believe in transforming spaces and enriching lives through our meticulous approach to design and construction. We take pride in our ability to create extraordinary architecture that leaves a lasting impression.
                </p>
              </div>
            </div>

            {/* Reliable */}
            <div className="group relative border-2 border-black rounded-xl p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 bg-white">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gray-100 transition-colors duration-300">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                    Reliable
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed text-sm">
                  We are committed to delivering excellence no matter the challenges. Our measure of success is to bring projects in on time and on budget every single time, no exceptions. We never compromise on quality and oversee every detail, so our clients don't have to. With us, they know their projects are in safe hands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Mission, Vision, Values */}
      <SectionContainer className="bg-gray-50 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Mission, Vision & Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The core principles that guide every decision and project we undertake
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className="group relative bg-white p-8 rounded-xl border-2 border-black hover:shadow-lg transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v4h8v-4zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Our mission is to create exceptional living and working spaces that enrich the lives of individuals and communities. Through innovative design, superior construction, and a commitment to sustainability, we aim to exceed the expectations of our clients and deliver projects of enduring quality. We strive to be a trusted partner in the real estate industry, driven by integrity, professionalism, and a passion for creating environments that inspire and enhance the human experience.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-white p-8 rounded-xl border-2 border-black hover:shadow-lg transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M1 11a7 7 0 107 7h.089m-.89 0a6.993 6.993 0 00-1.824 4.07M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Our vision is to be a leading promoter and builder recognized for our unwavering commitment to excellence and our ability to transform visions into reality. We aspire to be the preferred choice for clients seeking exceptional construction and development services. By leveraging our expertise, embracing technological advancements and fostering a culture of continuous improvement, we aim to set new benchmarks in the industry. Our ultimate goal is to contribute to the sustainable growth and development of communities.
            </p>
          </div>

          {/* Values Card */}
          <div className="group relative bg-white p-8 rounded-xl border-2 border-black hover:shadow-lg transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 3.27v.756a3.066 3.066 0 01-3.027 3.065 3.065 3.065 0 00-1.852.652 3.066 3.066 0 01-3.796 0 3.065 3.065 0 00-1.852-.652 3.066 3.066 0 01-3.027-3.065v-.756a3.066 3.066 0 012.812-3.27z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M6 16.5a1 1 0 01-1-1v-2a1 1 0 011-1h.01a1 1 0 011 1v2a1 1 0 01-1 1h-.01zm4 0a1 1 0 01-1-1v-2a1 1 0 011-1h.01a1 1 0 011 1v2a1 1 0 01-1 1h-.01zm4 0a1 1 0 01-1-1v-2a1 1 0 011-1h.01a1 1 0 011 1v2a1 1 0 01-1 1h-.01z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Values
            </h3>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                <span>Integrity & Transparency</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                <span>Quality & Excellence</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                <span>Customer First</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                <span>Innovation & Sustainability</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                <span>Community Building</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Why Choose Us */}
      <SectionContainer className="bg-white py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the preferred choice for real estate development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1 - Proven Track Record */}
            <div className="group relative bg-white p-8 rounded-xl border-2 border-black hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
              <div className="relative z-10">
                <div className="w-14 h-14 border-2 border-black rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                  <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Proven Track Record
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Over 20 years of experience with a portfolio of successful projects across
                  multiple cities, delivering excellence consistently.
                </p>
              </div>
            </div>

            {/* Box 2 - Quality Assurance */}
            <div className="group relative bg-white p-8 rounded-xl border-2 border-black hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
              <div className="relative z-10">
                <div className="w-14 h-14 border-2 border-black rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                  <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Quality Assurance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Rigorous quality control processes ensuring every project meets the highest
                  standards of construction and design excellence.
                </p>
              </div>
            </div>

            {/* Box 3 - Customer-Centric */}
            <div className="group relative bg-white p-8 rounded-xl border-2 border-black hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
              <div className="relative z-10">
                <div className="w-14 h-14 border-2 border-black rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                  <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Customer-Centric
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We prioritize our customers' needs and satisfaction, providing exceptional
                  service throughout every step of the journey.
                </p>
              </div>
            </div>

            {/* Box 4 - Innovation */}
            <div className="group relative bg-white p-8 rounded-xl border-2 border-black hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
              <div className="relative z-10">
                <div className="w-14 h-14 border-2 border-black rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                  <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.707 2.293a1 1 0 00-1.414 1.414L6.586 5H3a1 1 0 000 2h3.586l-2.293 2.293a1 1 0 001.414 1.414L10 8.414l2.293 2.293a1 1 0 001.414-1.414L11.414 7H15a1 1 0 000-2h-3.586l2.293-2.293a1 1 0 00-1.414-1.414L10 5.586 7.707 2.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Embracing modern technology and sustainable practices to create future-ready
                  developments that meet tomorrow's needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div >
  );
};