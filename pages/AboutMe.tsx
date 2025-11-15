
import React from 'react';
import { AboutMeFAQ } from '../components/PageFAQs';
import { PageIntro } from '../components/PageIntro';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { FaFigma, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const AboutHero = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="text-left" data-aos="fade-right">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
            AVAILABLE FOR WORK
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-black tracking-tighter leading-none">
            Hi, I'm a web developer.
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-md">
            I have 5 years of experience working on useful and mindful products together with startups and known brands.
          </p>
          {/* <a
            href="mailto:hello@abdulmanan.dev"
            className="mt-8 inline-block px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </a> */}
          <Link
            to={"mailto:abdulmanan.devs@gmail.com"}
            className="rounded-2xl mt-3 text-white py-3 hover:scale-[0.98] hover:translate-y-[-3px]  px-7 inline-block cursor-pointer transition-all duration-300 ease-in-out shadow-[0px_3px_0px_0px_#6E50D1,0px_5px_6px_0px_#7558FC80] active:shadow-none"
            style={{
              background: "linear-gradient(180deg, #7F61FB 0%, #7558FC 100%)",
            }}
          >
            Contact Me
          </Link>
        </div>

        {/* Right Column */}
        <div className="min-h-[500px] lg:min-h-0 lg:h-[450px]" data-aos="fade-left">
          <div className="flex justify-center items-center gap-4">
            {/* Profile Picture */}
            <div data-aos="zoom-in" data-aos-delay="200" className="w-56 h-56 md:w-64 md:h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-lg transform lg:hover:scale-105 transition-transform duration-300">
              <img
                src="/images/about/profile-image-min.webp"
                alt="Profile of Abdul Manan"
                className="w-full h-full object-cover scale-125"
              />
            </div>

            {/* Project Card */}
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="w-64 md:w-72 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 transform lg:hover:scale-105 transition-transform duration-300 z-10"
            >
              <div className="flex justify-between">
                <div className="">
                  <p className="font-bold text-gray-800">FlavorDesk Dashboard</p>
                  <p className="text-sm text-gray-500 mb-2">Admin Panel</p>
                </div>
                <a
                  href="https://flavordesk-admin.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-semibold text-cyan-600 hover:underline"
                >
                  View Live
                </a>
              </div>

              <div className="h-32 bg-gray-100 rounded-lg overflow-hidden mb-3">
                <img
                  src="/images/projects/flavordesk-dashboard.png"
                  alt="FlavorDesk Dashboard project preview"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="bg-gray-100 px-2 py-1 rounded-md font-medium text-gray-700">
                  NEXT.JS • TAILWIND
                </span>
                <span className="font-semibold text-cyan-600">$500</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 pt-4">
            {/* Brands Card */}
            <div data-aos="zoom-in" data-aos-delay="400" className="w-full bg-violet-200/50 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50 transform lg:hover:scale-105 transition-transform duration-300 z-20">
              <p className="text-sm text-violet-900 font-medium">The most recent brands I happily worked with :</p>
              <div className="flex items-center gap-6 mt-3 text-gray-600">
                <FaFigma size={24} className="text-violet-900/80" />
                <FaLinkedin size={24} className="text-violet-900/80" />
                <FaGithub size={24} className="text-violet-900/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutMeDetail = () => {
  return (
    <div
      id="contact-section"
      className="flex items-center justify-center py-16 bg-gray-50"
    >
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl px-6 md:px-12 w-full">
        {/* 1. My Journey */}
        <div className="flex flex-col items-start text-left space-y-6" data-aos="fade-up">
          <h1 className="text-[28px] md:text-[36px] uppercase font-heading font-bold leading-[1.2] text-gray-900">
            My Journey
          </h1>
          <p className="text-[16px] md:text-[18px] font-light text-gray-700 max-w-[500px]">
            My journey into web development is driven by a passion for creating intuitive digital experiences. I specialize in turning complex problems into simple, user-friendly solutions, always prioritizing the user's needs before a single line of code is written.
          </p>
          <Link
            to="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl mt-3 py-3 px-7 inline-block cursor-pointer transition-all duration-300 ease-in-out text-gray-400 border-2 border-gray-400 shadow-[0px_3px_0px_0px_rgba(156,163,175,1),0px_5px_6px_0px_rgba(156,163,175,0.5)] hover:scale-[0.98] hover:translate-y-[-3px]  hover:bg-gray-500 hover:text-gray-100 active:shadow-none"

          >
            View My Resume
            <IoArrowForwardCircleOutline className="inline-block ml-2 text-xl" />
          </Link>
        </div>

        {/* 2. Beyond the Code */}
        <div className="flex flex-col items-start text-left space-y-6" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-[28px] md:text-[36px] uppercase font-heading font-bold leading-[1.2] text-gray-900">
            Beyond the Code
          </h1>
          <p className="text-[16px] md:text-[18px] font-light text-gray-700 max-w-[500px]">
            When I'm not at my keyboard, you can find me exploring mountain trails, experimenting with new recipes, or capturing moments through my camera lens. I believe that a balanced life fuels creativity and leads to better work.
          </p>
          <Link
            to="/mailto:abdulmanan.devs@gmail.com"
            className="rounded-2xl mt-3 py-3 px-7 inline-block cursor-pointer transition-all duration-300 ease-in-out text-gray-400 border-2 border-gray-400 shadow-[0px_3px_0px_0px_rgba(156,163,175,1),0px_5px_6px_0px_rgba(156,163,175,0.5)] hover:scale-[0.98] hover:translate-y-[-3px]  hover:bg-gray-500 hover:text-gray-100 active:shadow-none"

          >
            Get in Touch
            <IoArrowForwardCircleOutline className="inline-block ml-2 text-xl" />
          </Link>
        </div>

        {/* 3. Design Philosophy */}
        <div className="flex flex-col items-start text-left space-y-6" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-[28px] md:text-[36px] uppercase font-heading font-bold leading-[1.2] text-gray-900">
            Design Philosophy
          </h1>
          <p className="text-[16px] md:text-[18px] font-light text-gray-700 max-w-[500px]">
            I believe great design feels effortless. My goal is to craft interfaces that are both visually appealing and functionally intuitive for all users.
          </p>
          <Link
            to="/projects"
            className="rounded-2xl mt-3 py-3 px-7 inline-block cursor-pointer transition-all duration-300 ease-in-out text-gray-400 border-2 border-gray-400 shadow-[0px_3px_0px_0px_rgba(156,163,175,1),0px_5px_6px_0px_rgba(156,163,175,0.5)] hover:scale-[0.98] hover:translate-y-[-3px]  hover:bg-gray-500 hover:text-gray-100 active:shadow-none"

          >
            Explore Projects
            <IoArrowForwardCircleOutline className="inline-block ml-2 text-xl" />
          </Link>
        </div>

        {/* 4. Tech Stack */}
        <div className="flex flex-col items-start text-left space-y-6" data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-[28px] md:text-[36px] uppercase font-heading font-bold leading-[1.2] text-gray-900">
            Tech Stack
          </h1>
          <p className="text-[16px] md:text-[18px] font-light text-gray-700 max-w-[500px]">
            My current toolkit includes React, Next.js, Tailwind CSS, Node.js, and TypeScript — tools I use to build modern, scalable web apps.
          </p>
          <Link
            to="/services"
            className="rounded-2xl mt-3 py-3 px-7 inline-block cursor-pointer transition-all duration-300 ease-in-out text-gray-400 border-2 border-gray-400 shadow-[0px_3px_0px_0px_rgba(156,163,175,1),0px_5px_6px_0px_rgba(156,163,175,0.5)] hover:scale-[0.98] hover:translate-y-[-3px]  hover:bg-gray-500 hover:text-gray-100 active:shadow-none"

          >
            Explore Stack
            <IoArrowForwardCircleOutline className="inline-block ml-2 text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function AboutMe() {
  return (
    <div className="pt-[72px] bg-gray-50">
      <PageIntro
        title="About Me"
        subtitle="I'm Abdul Manan, a passionate web developer dedicated to building things for the web with a user-first approach."
      />
      <AboutHero />
      <ExperienceTimeline />
      <AboutMeDetail />
      <AboutMeFAQ />
    </div>
  );
}
