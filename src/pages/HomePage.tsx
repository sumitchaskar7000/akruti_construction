import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { HeroSection } from "../components/HeroSection";
import { SectionContainer } from "../components/SectionContainer";
import { ProjectCard } from "../components/ProjectCard";

import projectsData from "../data/projects.json";
import { Project, ProjectStatus } from "../types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Status mapping
const mapStatus = (status: string): ProjectStatus => {
  const s = status.toLowerCase();
  if (s === "ongoing") return "Ongoing";
  if (s === "completed") return "Completed";
  if (s === "upcoming") return "Upcoming";
  return "Upcoming";
};

const projects: Project[] = projectsData.map((p) => ({
  ...p,
  status: mapStatus(p.status),
}));

// ✅ Title Block component
const TitleBlock: React.FC<{ children: string }> = ({ children }) => (
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">{children}</h2>
    <div className="w-28 h-1 bg-gradient-to-r from-primary to-primaryDark mx-auto mt-3 rounded-full"></div>
  </div>
);

export const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const ongoing = projects.filter((p) => p.status === "Ongoing");
  const upcoming = projects.filter((p) => p.status === "Upcoming");
  const completed = projects.filter((p) => p.status === "Completed");

  return (
    <div className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT */}
      <SectionContainer className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* LEFT: TEXT CONTENT */}
          <div className="text-left max-w-2xl mx-auto px-4" data-aos="fade-up">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1a1a1a] mb-6 leading-tight">
              Crafting Spaces. <span className="text-primary">Building Dreams.</span>
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-primary to-primaryDark mb-8 rounded-full" />

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              Akruti Construction is a trusted name in premium real estate development,
              creating residential and commercial landmarks since 2013.
            </p>
          </div>

          {/* RIGHT: IMAGE BLOCK */}
          <div
            className="h-80 md:h-full w-full bg-cover bg-center rounded-xl shadow-lg"
            style={{ backgroundImage: "url('/images/blog/b.jpg')" }}
            data-aos="fade-left"
          ></div>

        </div>
      </SectionContainer>
      {/* VIDEOS SECTION */}
      <SectionContainer className="py-20 bg-[#f8f8f8]">
        <div className="text-center max-w-4xl mx-auto px-4 mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">
            Real Estate Project Showcase
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-primary to-primaryDark mx-auto mt-4 mb-6 rounded-full"></div>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            Explore our latest construction progress and project development highlights.
          </p>
        </div>

        {/* SINGLE VIDEO */}
        <video
          src="/videos/v1.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-80 md:h-[500px] rounded-xl shadow-lg object-cover"
          data-aos="fade-up"
        />
      </SectionContainer>






      {/* ONGOING PROJECTS */}
      {/* ONGOING PROJECTS */}
      <SectionContainer id="projects" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <TitleBlock>✨ Ongoing Projects</TitleBlock>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          spaceBetween={25}
          slidesPerView={1}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {ongoing.map((project) => (
            <SwiperSlide key={project.id} className="px-3">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionContainer>




      {/* UPCOMING PROJECTS */}
      <SectionContainer className="section-padding bg-[url('/images/bg-pattern.png')] bg-cover bg-center bg-fixed">
        <TitleBlock>🚀 Upcoming Projects</TitleBlock>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={25}
          slidesPerView={1}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {upcoming.map((project) => (
            <SwiperSlide key={project.id} className="px-3">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionContainer>

      {/* COMPLETED PROJECTS */}
      <SectionContainer className="section-padding bg-gradient-to-b from-white to-gray-100">
        <TitleBlock>🏆 Completed Projects</TitleBlock>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          spaceBetween={25}
          slidesPerView={1}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {completed.map((project) => (
            <SwiperSlide key={project.id} className="px-3">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionContainer>

    </div>
  );
};
