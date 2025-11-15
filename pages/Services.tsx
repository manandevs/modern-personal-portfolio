
import React from 'react';
import { ServicesFAQ } from '../components/PageFAQs';
import { PageIntro } from '../components/PageIntro';
import { FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const services = [
  {
    title: "Frontend Development",
    text: "I build responsive, high-performance, and maintainable user interfaces using modern technologies like React and Next.js. My focus is on writing clean, scalable code that delivers a seamless user experience across all devices.",
  },
  {
    title: "UI/UX Design",
    text: "Good design is about solving problems. I create intuitive, user-centric designs that are both beautiful and functional. From wireframes and prototypes in Figma to polished final products, I ensure every pixel has a purpose.",
  },
  {
    title: "Web Performance Optimization",
    text: "A fast website is crucial for user engagement and SEO. I specialize in optimizing web applications for speed, improving metrics like Core Web Vitals to ensure your site loads quickly and runs smoothly.",
  },
];

const techStack = [
  {
    name: 'React',
    icon: FaReact,
    image: '/images/react.png',
    info: 'A JavaScript library for building user interfaces.',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    image: '/images/specialize_SPAs.png',
    info: 'A React framework for server-rendered apps and static sites.',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    image: '/images/typescript.png',
    info: 'A strongly typed programming language that builds on JavaScript.',
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    image: '/images/node-js.png',
    info: 'A runtime that lets you run JavaScript on the server.',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    image: '/images/tailwindcss.png',
    info: 'A utility-first CSS framework for fast UI development.',
  },
  {
    name: 'Figma',
    icon: FaFigma,
    image: '/images/figma.png',
    info: 'A collaborative design tool for teams to create digital products.',
  },
];

export default function Services() {
  return (
    <div className="pt-[72px] bg-gray-50">
      <PageIntro
        title="My Services"
        subtitle="I offer a range of services to bring your digital vision to life, focusing on quality, performance, and user-centric design."
      />

      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-[1550px] px-6 md:px-8 mx-auto">
          <div
            className="w-full flex justify-between items-center flex-wrap gap-10"
          >
            <div className="max-w-[750px]" data-aos="fade-right">
              <h2 className="text-[32px] md:text-[52px] font-heading font-bold text-black leading-[1] mb-6 uppercase">
                From Concept to Code
              </h2>
              <p className="text-lg md:text-[20px] text-black leading-relaxed mb-12">
                Whether you need a full application built from scratch, a redesign of an existing product, or performance tuning, I provide the expertise to deliver outstanding results.
              </p>
            </div>

            <img
              data-aos="fade-left"
              className="w-full max-w-[500px] h-auto rounded-[56px] group-hover:scale-105 transition-transform duration-300"
              alt="Concept to code illustration"
              src="/icons/concept-to-code.png"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-12">
            {services.map((service, i) => (
              <article
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <h3 className="font-heading text-2xl md:text-[28px] font-semibold text-black mb-4 group-hover:text-violet-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-[16px] md:text-[18px] leading-relaxed">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900 font-heading mb-10" data-aos="fade-up">
            My Favorite Technologies
          </h2>

          <div className="relative mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group relative flex flex-col items-center gap-2 text-gray-500 hover:text-violet-500 transition-colors duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <Icon className="h-12 w-12" aria-hidden="true" />
                  <span className="text-sm font-medium">{tech.name}</span>
                  <div className="absolute z-50 top-[115%] left-1/2 -translate-x-1/2 w-72 bg-white shadow-xl rounded-xl p-4 border border-gray-200 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto animate-fadeIn">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-auto mb-3 object-contain rounded-lg"
                    />
                    <h4 className="font-semibold text-gray-900 mb-1">{tech.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{tech.info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesFAQ />
    </div>
  );
}
