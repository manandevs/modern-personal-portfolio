
import React from 'react';
import { ProcessFAQ } from '../components/PageFAQs';
import { PageIntro } from '../components/PageIntro';
import { FaSearch, FaPalette, FaCode } from "react-icons/fa";
import { SiJira, SiSlack, SiGithub, SiFigma } from 'react-icons/si';

const processData = [
  {
    icon: FaSearch,
    title: "1. Discovery & Strategy",
    color: "from-blue-500 to-cyan-500",
    description: "I start by understanding your business goals, target audience, and technical requirements to create a solid foundation for the project.",
    steps: [
      "Requirement Gathering & Analysis",
      "User Persona & Journey Mapping",
      "Technology Stack Selection",
      "Project Roadmap & Scoping",
    ],
  },
  {
    icon: FaPalette,
    title: "2. Design & Prototyping",
    color: "from-emerald-500 to-teal-500",
    description: "I translate strategy into a tangible user experience, creating wireframes and high-fidelity mockups that we can test and refine.",
    steps: [
      "Wireframing & Information Architecture",
      "High-Fidelity UI Design in Figma",
      "Interactive Prototyping",
      "User Feedback & Iteration",
    ],
  },
  {
    icon: FaCode,
    title: "3. Development & Launch",
    color: "from-purple-500 to-pink-500",
    description: "I write clean, efficient, and scalable code, following best practices to build a robust and performant application, followed by rigorous testing and a smooth deployment.",
    steps: [
      "Agile Development Sprints",
      "Component-Based Architecture",
      "Comprehensive Testing (Unit, Integration, E2E)",
      "Deployment & Post-Launch Support",
    ],
  },
];

const tools = [
  { name: 'Jira', icon: SiJira },
  { name: 'Slack', icon: SiSlack },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Figma', icon: SiFigma },
]

export default function MyProcess() {
  return (
    <div className="pt-[72px] bg-gray-50">
      <PageIntro
        title="My Process"
        subtitle="I follow a structured and collaborative process to ensure every project is a success, from initial idea to final launch."
      />
      <div className="bg-gray-50 w-full py-8 pt-0">
        <div data-aos="zoom-in" className="px-6 md:px-8 mx-auto max-w-[1200px] rounded-[48px] group hover:shadow-xl transition-shadow duration-300 py-4">
          <img
            className="w-full h-auto rounded-[56px] group-hover:scale-105 transition-transform duration-300"
            alt="User-centric design illustration showcasing interactive UI/UX"
            src="/images/my-process.png"
          />
        </div>
      </div>

      <div className="bg-gray-50 py-20 sm:py-32">
        <div className='mx-auto px-6 md:px-12 max-w-[1550px]'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {processData.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <div
                  key={index}
                  className='bg-white rounded-2xl shadow-lg p-8 flex flex-col'
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className='flex items-center gap-4 mb-6'>
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex-shrink-0`}
                    >
                      <IconComponent size={24} color='#fff' />
                    </div>
                    <h3 className='font-semibold text-gray-900 text-2xl leading-tight font-heading'>
                      {phase.title}
                    </h3>
                  </div>
                  <p className='text-gray-600 leading-relaxed mb-6'>{phase.description}</p>
                  <ul className='space-y-3 text-gray-800 list-disc list-inside'>
                    {phase.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900 font-heading" data-aos="fade-up">
            Tools I Use for Collaboration
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={tool.name} className="flex flex-col items-center gap-2 text-gray-500 hover:text-black transition-colors" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <Icon className="h-12 w-12" />
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ProcessFAQ />
    </div>
  );
}
