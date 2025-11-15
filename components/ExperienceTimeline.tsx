
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const timelineData = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Innovate Solutions',
    period: '2020 - Present',
    description: 'Lead development of a flagship SaaS product using React and TypeScript. Architected a new component library, improving developer efficiency by 30%. Mentored junior engineers and championed accessibility best practices.',
  },
  {
    role: 'Frontend Developer',
    company: 'Creative Agency',
    period: '2017 - 2020',
    description: 'Built and maintained marketing websites and e-commerce stores for a variety of clients. Worked closely with designers to translate Figma mockups into responsive, pixel-perfect web pages.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Tech Startup',
    period: '2015 - 2017',
    description: 'Started my career by contributing to a small, agile team. Gained foundational experience with HTML, CSS, and JavaScript, and learned the fundamentals of version control with Git.',
  },
];

export const ExperienceTimeline = () => {
  return (
    <div className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
            My Professional Journey
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A timeline of my career, highlighting my growth and key responsibilities in each role.
          </p>
        </div>
        <div className="mt-16 space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-8" data-aos="fade-left" data-aos-delay={index * 100}>
              <div className="absolute left-0 top-1 h-full w-px bg-gray-200"></div>
              <div className="absolute left-[-9px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-black">
                <FaBriefcase className="h-3 w-3 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-500">{item.period}</span>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">{item.role}</h3>
                <h4 className="font-medium text-gray-700">{item.company}</h4>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
