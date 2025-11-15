
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";

const Logo = () => (
  <div className='flex-shrink-0'>
    <Link to='/' className={`font-heading text-4xl font-bold text-white`}>
      <img
        src="/images/about/logo-image.png"
        alt="logo"
        className="w-16 aspect-square rounded-sm"
      />
    </Link>
  </div>
);

export const Footer: React.FC = React.memo(() => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'My Process', path: '/process' },
    { name: 'About Me', path: '/about' },
    { name: 'Notes', path: '/notes' },
  ];

  const legalLinks = [
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', path: 'https://www.linkedin.com/' },
    { name: 'GitHub', path: 'https://github.com/' },
  ];

  return (
    <footer className='bg-black text-white' data-aos="fade-up">
      <div className='mx-auto px-8 sm:px-6 lg:px-10 pt-8 md:pt-20 pb-10 max-w-[1550px]'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-1/4'>
            <div className='flex justify-between'>
              <Logo />
              <a
                href='#'
                onClick={scrollToTop}
                className='md:hidden group cursor-pointer flex items-center gap-3 text-sm'
              >
                Back to top
                <span className='bg-white group-hover:bg-violet-500 transition-all duration-300 ease-in-out rounded-[8px] w-7 h-7 flex items-center justify-center text-black'>
                  <FiArrowUp size={14} />
                </span>
              </a>
            </div>
            <div className='mt-6 hidden lg:block'>
              <p className='text-[18px]'>Have questions or want to chat?</p>
              <p className='text-[18px] mt-1'>
                Drop me a line →
                <br />
                <a href='mailto:abdulmanan.devs@gmail.com' className='text-violet-400 ml-[5px] hover:text-violet-300 underline'>
                  abdulmanan.devs@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className='w-full lg:w-3/4 flex flex-wrap justify-start lg:justify-between lg:pl-32 mt-8 lg:mt-0'>
            <div className='w-1/2 md:w-1/4 mb-4 md:mb-8 lg:mb-0'>
              <h3 className='font-bold text-white text-[16px] md:text-[18px] mb-3'>Navigation</h3>
              <ul className='space-y-1'>
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className='text-[14px] md:text-[16px] text-neutral-300 hover:text-white'>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='w-1/2 md:w-1/4 mb-4 md:mb-8 lg:mb-0'>
              <h3 className='font-bold text-white text-[16px] md:text-[18px] mb-3'>Legal</h3>
              <ul className='space-y-1'>
                {legalLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className='text-[14px] md:text-[16px] text-neutral-300 hover:text-white'>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='w-1/2 md:w-1/4 mb-4 md:mb-8 lg:mb-0'>
              <h3 className='font-bold text-white text-[16px] md:text-[18px] mb-3'>Socials</h3>
              <ul className='space-y-1'>
                {socialLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className='text-[14px] md:text-[16px] text-neutral-300 hover:text-white'>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 md:mt-28 flex flex-col lg:flex-row items-start lg:items-end justify-between font-mono text-xs text-neutral-400 gap-8 lg:gap-4'>
          <div className='hidden lg:flex flex-col gap-16 order-1'>
            <a href='#' onClick={scrollToTop} className='flex group items-center cursor-pointer gap-3 text-sm'>
              <span className='bg-white group-hover:bg-violet-500 transition-all duration-300 ease-in-out rounded-xl w-9 h-9 flex items-center justify-center text-black'>
                <FiArrowUp size={16} />
              </span>
              Back to top
            </a>
            <p className='text-[12px]'>Abdul Manan © {new Date().getFullYear()} | All rights reserved</p>
          </div>

          <p className='block lg:hidden text-[12px] order-4'>
            Abdul Manan © {new Date().getFullYear()} | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
});
