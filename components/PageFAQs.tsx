
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='py-4 md:py-6 border-b border-gray-200 w-full'>
      <button
        className='flex justify-between items-center w-full text-left'
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <p className='text-[20px] md:text-[24px] font-semibold text-black font-sans pr-4 leading-[1.3]'>
          {question}
        </p>
        <span className={`transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`}>
          <IoIosArrowUp size={20} />
        </span>
      </button>
      {open && (
        <div className='pt-4 md:pt-6 text-[18px] md:text-[20px] font-sans text-gray-600 space-y-3 leading-[1.5]'>
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  );
};

// --- Services FAQ ---
const servicesFaqData = [
    { q: "What types of projects do you specialize in?", a: "I specialize in building rich, interactive single-page applications (SPAs) and performant websites using modern technologies like React, Next.js, and TypeScript. I have extensive experience with e-commerce, SaaS platforms, and marketing websites." },
    { q: "Do you offer UI/UX design services?", a: "Yes, I provide end-to-end services from initial concept to a fully deployed application. This includes UI/UX design, where I create wireframes, mockups, and prototypes using tools like Figma to ensure an intuitive and beautiful user experience." },
    { q: "Can you help improve the performance of an existing website?", a: "Absolutely. I offer performance optimization services, which include code splitting, asset optimization, leveraging browser caching, and improving Core Web Vitals to make your website faster and more responsive." },
];

export const ServicesFAQ = () => (
    <div className='p-5 px-8 sm:px-6 py-20 md:py-28 bg-gray-50'>
      <div className='max-w-[800px] mx-auto'>
        <h1 data-aos="fade-up" className='text-[44px] md:text-[72px] leading-[1] font-heading'>Services FAQ</h1>
        <div className='mt-[18px] md:mt-[22px]'>
          {servicesFaqData.map((item, index) => <div data-aos="fade-up" data-aos-delay={index * 50} key={index}><FaqItem question={item.q} answer={item.a} /></div>)}
        </div>
      </div>
    </div>
);

// --- Projects FAQ ---
const projectsFaqData = [
    { q: "Can you describe a challenging technical problem you solved?", a: "On the 'Zenith' e-commerce project, I led the implementation of a real-time inventory system using WebSockets, which reduced overselling by 98%. This involved complex state management and ensuring data consistency across thousands of concurrent users." },
    { q: "Are the projects listed your individual work?", a: "The projects are a mix of team collaborations and solo endeavors. For each project, I clearly state my role and specific contributions, whether it was leading the frontend architecture, designing the UI, or implementing key features." },
    { q: "Is the source code for your projects available?", a: "Whenever possible, I provide links to public GitHub repositories. For projects under NDA or with proprietary codebases, I offer detailed case studies and can walk through the architecture and code samples during a technical discussion." },
];

export const ProjectsFAQ = () => (
    <div className='p-5 px-8 sm:px-6 py-20 md:py-28 bg-gray-50'>
      <div className='max-w-[800px] mx-auto'>
        <h1 data-aos="fade-up" className='text-[44px] md:text-[72px] leading-[1] font-heading'>Projects FAQ</h1>
        <div className='mt-[18px] md:mt-[22px]'>
          {projectsFaqData.map((item, index) => <div data-aos="fade-up" data-aos-delay={index * 50} key={index}><FaqItem question={item.q} answer={item.a} /></div>)}
        </div>
      </div>
    </div>
);

// --- My Process FAQ ---
const processFaqData = [
    { q: "How do you approach project management and communication?", a: "I believe in transparent and frequent communication. I typically use agile methodologies with weekly sprints and regular check-ins via Slack or video calls. I use tools like Jira or Trello to track progress and ensure all stakeholders are aligned." },
    { q: "What is your testing strategy?", a: "I follow a comprehensive testing strategy that includes unit tests with Jest and React Testing Library, integration tests to ensure components work together, and end-to-end tests with tools like Cypress for critical user flows." },
    { q: "How do you ensure the final product meets the project goals?", a: "By starting with a thorough discovery phase to understand your business objectives and user needs. I build interactive prototypes for early feedback and conduct regular demos throughout the development cycle to ensure the project stays on track and delivers the intended value." },
];

export const ProcessFAQ = () => (
    <div className='p-5 px-8 sm:px-6 py-20 md:py-28 bg-gray-50'>
      <div className='max-w-[800px] mx-auto'>
        <h1 data-aos="fade-up" className='text-[44px] md:text-[72px] leading-[1] font-heading'>My Process FAQ</h1>
        <div className='mt-[18px] md:mt-[22px]'>
          {processFaqData.map((item, index) => <div data-aos="fade-up" data-aos-delay={index * 50} key={index}><FaqItem question={item.q} answer={item.a} /></div>)}
        </div>
      </div>
    </div>
);

// --- About Me FAQ ---
const aboutMeFaqData = [
    { q: "What are you passionate about outside of coding?", a: "When I'm not coding, I enjoy hiking, landscape photography, and exploring new coffee shops. I believe that having creative outlets outside of work helps me bring a fresh perspective to my technical projects." },
    { q: "What are you currently learning?", a: "I'm always eager to learn and grow. Currently, I'm diving deeper into WebAssembly to explore its potential for performance-critical web applications. I'm also refining my skills in 3D web graphics with Three.js." },
    { q: "What is your ideal work environment?", a: "I thrive in collaborative, product-focused teams where I can work closely with designers, product managers, and other engineers to solve challenging problems. I value environments that prioritize code quality, continuous learning, and a healthy work-life balance." },
];

export const AboutMeFAQ = () => (
    <div className='p-5 px-8 sm:px-6 py-20 md:py-28 bg-gray-50'>
      <div className='max-w-[800px] mx-auto'>
        <h1 data-aos="fade-up" className='text-[44px] md:text-[72px] leading-[1] font-heading'>About Me FAQ</h1>
        <div className='mt-[18px] md:mt-[22px]'>
          {aboutMeFaqData.map((item, index) => <div data-aos="fade-up" data-aos-delay={index * 50} key={index}><FaqItem question={item.q} answer={item.a} /></div>)}
        </div>
      </div>
    </div>
);
