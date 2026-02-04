import React from "react";
import { SectionContainer } from "../components/SectionContainer";
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

export default LeadershipPage;