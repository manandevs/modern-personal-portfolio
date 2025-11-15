
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from 'swiper';
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaPause, FaPlay } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from 'react-icons/fa';

import { ProjectsFAQ } from '../components/PageFAQs';
import { PageIntro } from '../components/PageIntro';
import { Testimonials } from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

const slidesData = [
  {
    image: "/images/projects/protfolio.png",
    title: "My Portfolio Website",
    description:
      "A modern, fully responsive portfolio site built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Designed to showcase my projects, experience, and design sense while maintaining top performance and SEO.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    image: "/images/projects/flavordesk-dashboard.png",
    title: "FlavorDesk Dashboard",
    description:
      "A complete admin dashboard for managing restaurant orders, menus, and customers in real time. Built with React, TypeScript, and Tailwind CSS — focused on performance, analytics, and a smooth user experience.",
    liveUrl: "https://flavordesk-admin.vercel.app/",
    githubUrl: "#",
  },
  {
    image: "/images/projects/flavordesk-client.png",
    title: "FlavorDesk Client App",
    description:
      "Feeling hungry? Just come to FlavorDesk and order! A sleek, responsive food ordering web app that delivers fresh meals quickly and effortlessly. Built with React, Tailwind CSS, and modern UI principles for a delightful user experience.",
    liveUrl: "https://flavordesk.vercel.app/",
    githubUrl: "https://github.com/manandevs/flavordesk",
  },
];

const projects = [
  {
    name: 'Portfolio Website',
    description: 'The very site you are on now. Built with React and Tailwind CSS to be fast, responsive, and showcase my work.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Project Management Tool',
    description: 'A Kanban-style project management app with drag-and-drop functionality and real-time collaboration features.',
    tags: ['React', 'Firebase', 'Styled-Components'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Weather App',
    description: 'A clean and simple weather application that provides real-time weather data using a third-party API.',
    tags: ['JavaScript', 'API', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressPct, setProgressPct] = useState(0);
  const SLIDE_DELAY = 4000;

  const handlePlayPause = () => {
    if (!swiperInstance) return;
    isPlaying ? swiperInstance.autoplay.stop() : swiperInstance.autoplay.start();
    setIsPlaying(!isPlaying);
  };
  const goToSlide = (i: number) => swiperInstance?.slideToLoop(i) && setProgressPct(0);

  return (
    <div className="pt-[72px] bg-gray-50">
      <PageIntro
        title="My Work"
        subtitle="Here is a selection of projects that demonstrate my skills in frontend development, UI/UX design, and problem-solving. Each project was an opportunity to learn and grow."
      />
      <section className='bg-black text-white py-12 md:py-[85px] md:pt-[100px]' data-aos="fade-in">
        <div className='max-w-[1550px] px-8 sm:px-6 mx-auto mb-12 md:mb-16 '>
          <h2
            className='text-[28px] max-w-[1000px] md:text-[48px] leading-[1.2] font-heading font-bold'
          >
            Featured Projects
          </h2>
        </div>
        <div className='relative'>
          <Swiper
            modules={[Autoplay]}
            onSwiper={setSwiperInstance}
            onSlideChange={(s) => {
              setActiveIndex(s.realIndex);
              setProgressPct(0);
            }}
            onAutoplayTimeLeft={(_, __, percentage) =>
              setProgressPct(Math.min(Math.max((1 - percentage) * 100, 0), 100))
            }
            slidesPerView='auto'
            centeredSlides
            loop={true}
            spaceBetween={16}
            autoplay={{ delay: SLIDE_DELAY, disableOnInteraction: false }}
            className='!pb-12 md:!pb-16'
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index} className='max-w-[1250px] md:px-0 px-6 w-full mx-auto'>
                <div
                  className={`flex flex-col rounded-[32px] overflow-hidden bg-[#111] md:grid md:grid-cols-2 `}
                >
                  <div className='p-6 flex flex-col justify-center md:p-10 md:px-16'>
                    <h3 className='text-2xl uppercase text-white max-w-[85%] md:text-[48px] font-heading leading-[1.1] md:leading-[0.9] tracking-[-0.5px] md:tracking-[-1px]'>
                      {slide.title}
                    </h3>
                    <p className='text-base text-white/80 mt-4 leading-relaxed max-w-md'>{slide.description}</p>
                    <div className="flex gap-4 mt-6">
                      <div className="flex gap-4 mt-6">
                        {slide.liveUrl && slide.liveUrl !== "#" && (
                          // <a
                          //   href={slide.liveUrl}
                          //   target="_blank"
                          //   rel="noopener noreferrer"
                          //   className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                          // >
                          //   View Live
                          // </a>
                          <Link
                            to={slide.liveUrl}
                            className="rounded-2xl text-white py-3 hover:scale-[0.98] hover:translate-y-[-3px]  px-7 inline-block cursor-pointer transition-all duration-300 ease-in-out shadow-[0px_3px_0px_0px_#6E50D1,0px_5px_6px_0px_#7558FC80] active:shadow-none"
                            style={{
                              background: "linear-gradient(180deg, #7F61FB 0%, #7558FC 100%)",
                            }}
                          >
                            View Live
                          </Link>
                        )}
                        {slide.githubUrl && slide.githubUrl !== "#" && (
                          // <a
                          //   href={slide.githubUrl}
                          //   target="_blank"
                          //   rel="noopener noreferrer"
                          //   className="px-4 py-2 bg-transparent border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
                          // >
                          //   View Code
                          // </a>

                          <Link
                            to={slide.githubUrl}
                            className="rounded-2xl py-3 px-7 inline-block cursor-pointer transition-all duration-300 ease-in-out text-gray-400 border-2 border-gray-400 shadow-[0px_3px_0px_0px_rgba(156,163,175,1),0px_5px_6px_0px_rgba(156,163,175,0.5)] hover:scale-[0.98] hover:translate-y-[-3px]  hover:bg-gray-700 hover:text-gray-100 active:shadow-none"
                          >
                            View Code
                            <IoArrowForwardCircleOutline className="inline-block ml-2 text-xl" />
                          </Link>

                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`bg-[#222] flex items-center justify-center min-h-[250px] h-[300px] md:h-[600px]`}
                  >
                    <img
                      src={slide.image}
                      alt='Use Case Visual'
                      className='w-full h-full object-cover '
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10'>
            <button
              onClick={handlePlayPause}
              className='w-8 h-8 md:w-10 md:h-10 bg-[#222] text-white/50 rounded-full flex items-center justify-center transition-colors'
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
            </button>
            <div className='flex items-center gap-2 rounded-full bg-[#222] py-2.5 px-4'>
              {slidesData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className='relative flex items-center justify-center'
                >
                  {i === activeIndex ? (
                    <div className='h-3 w-8 md:w-10 rounded-full bg-white/50 overflow-hidden'>
                      <div
                        className='h-full bg-white transition-all duration-100 ease-linear'
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  ) : (
                    <div className='h-3 w-3 cursor-pointer rounded-full bg-white/50' />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-gray-50 py-20 sm:py-32">
        <div className="mx-auto max-w-[1550px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
              More Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Here are some other projects I've worked on.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 md:gap-y-16 lg:max-w-none lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={project.name} className="p-8 bg-white rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{project.name}</h3>
                  <div className="flex gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors"><GoArrowUpRight size={20} /></a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors"><FaGithub size={20} /></a>
                  </div>
                </div>
                <p className="mt-2 text-base text-gray-600">{project.description}</p>
                <div className="flex gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      <Testimonials />
      <ProjectsFAQ />
    </div>
  );
}
