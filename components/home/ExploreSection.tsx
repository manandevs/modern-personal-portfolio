
import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowRedoCircleOutline } from 'react-icons/io5';

import { FaTools, FaProjectDiagram, FaCogs } from 'react-icons/fa';
import Badge from '../shared/Badge';

const sections = [
  {
    title: 'My Services',
    description: 'See how I build fast, scalable, and user-friendly web applications.',
    path: '/services',
    icon: <FaTools className="w-8 h-8 text-violet-500" />,
    imgurl: "/images/home/develop-design.png"
  },
  {
    title: 'My Projects',
    description: 'Explore a selection of my work, from concept to deployment.',
    path: '/projects',
    icon: <FaProjectDiagram className="w-8 h-8 text-violet-500" />,
    imgurl: "/images/home/deploy.png"
  },
  {
    title: 'My Process',
    description: 'Learn about my approach to design, development, and collaboration.',
    path: '/process',
    icon: <FaCogs className="w-8 h-8 text-violet-500" />,
    imgurl: "/images/home/design.png"
  }
];

export const ExploreSection = () => {
  return (
    <section className="bg-gradient-to-b from-violet-50 to-white py-24 sm:py-36">
      <div className="mx-auto max-w-[1550px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center" data-aos="fade-up">
          {/* <h2 className="text-base font-semibold leading-7 text-violet-600 tracking-wide uppercase">My Work</h2> */}
          <Badge text="Explore My Portfolio" src="/icons/inclusivity_icon.svg" className="mx-auto" />
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl font-heading">
            A Glimpse Into How I Work
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700 max-w-xl mx-auto">
            Dive deeper into the services I offer, the projects I've built, and the process I follow to deliver high-quality results.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-4xl sm:mt-24 lg:mt-28 lg:max-w-none">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {sections.map((section, index) => (
              <Link
                key={section.title}
                to={section.path}
                className="relative flex flex-col p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transform transition duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <IoArrowRedoCircleOutline className="absolute top-6 right-6 w-6 h-6 text-gray-300 group-hover:text-violet-500 transition-colors duration-300" />
                <div className="mb-4">{section.icon}</div>
                <h3 className="text-2xl font-semibold leading-7 text-gray-900 font-heading mb-4">{section.title}</h3>
                <p className="flex-auto text-base leading-7 text-gray-600">{section.description}</p>
                <div
                  className="w-full h-72 flex items-center justify-center text-center bg-[#1a1a1a] group hover:cursor-pointer hovershadow-xl hover:scale-[1.025] rounded-[48px] overflow-hidden hover:bg-[#222] transition-all duration-300 group mt-3"
                >
                  <img
                    src={section.imgurl}
                    alt={section.title}
                    className="w-full h-full object-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
