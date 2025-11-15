
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className=' px-4 sm:px-6 lg:px-8 py-10  border-t border-slate-300'>
      <div className='mx-auto max-w-[1000px] '>
        {/* Header */}
        <header>
          <p className='text-[20px] sm:text-[24px] md:text-[26px] font-semibold text-slate-900'>
            Last Updated: January 16, 2024
          </p>
          <p className='mt-5 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
            On this website, I prioritize privacy as a fundamental right. Any personal
            information is handled with care and transparency to maintain your trust.
          </p>
        </header>

        {/* Main Content */}
        <article className='mt-12 space-y-16'>
          {/* About Privacy */}
          <section id='about-privacy'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              About Privacy on this Site
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              This Privacy Statement outlines how I collect, use, and share personal information through this website. I am committed to handling your data with care and transparency.
            </p>
          </section>

          {/* Scope */}
          <section id='scope' className='space-y-5'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              Scope of this Privacy Statement
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              This Privacy Statement applies when you visit this portfolio website, and I act as a <strong>data controller</strong>,
              collecting and using your personal information for my own purposes, including when you:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              <li>
                Visit this website.
              </li>
              <li>Communicate with me directly via the provided contact information.</li>
            </ul>
          </section>

          {/* Collection + Use */}
          <section id='collection-use' className='space-y-10'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              How I Collect and Use Personal Information
            </h2>

            {/* Info You Provide */}
            <div className='space-y-6'>
              <h3 className='font-bold font-heading uppercase text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] tracking-tight'>
                Information You Provide to Me
              </h3>
              <ul className='list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
                <li>
                  <strong>Data:</strong> Name, email, phone number, company details when you contact me.
                </li>
                <li>
                  <strong>Purpose:</strong> To respond to your inquiries and provide relevant information about my services.
                </li>
                <li>
                  <strong>Legal Basis:</strong> Legitimate interests or consent (where applicable).
                </li>
              </ul>
            </div>

            {/* Info Auto */}
            <div className='space-y-6'>
              <h3 className='font-bold font-heading uppercase text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] tracking-tight'>
                Information I Collect Automatically
              </h3>

              <h4 className='font-semibold font-heading uppercase text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] tracking-tight'>
                From this website
              </h4>
              <ul className='list-disc pl-6 space-y-2 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
                <li>
                  <strong>Data:</strong> Device type, browser information, IP address, interaction logs (for analytics purposes).
                </li>
                <li>
                  <strong>Purpose:</strong> Analytics, service improvements, and security.
                </li>
                <li>
                  <strong>Legal Basis:</strong> Legitimate interests.
                </li>
              </ul>
            </div>
          </section>

          {/* Rights */}
          <section id='rights' className='space-y-5'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              Your Privacy Rights
            </h2>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              Depending on your jurisdiction, you may have rights to access, correct, or delete personal information. To exercise these rights, contact me at{" "}
              <a
                className='text-sky-600 underline decoration-from-font underline-offset-2'
                href='mailto:privacy@abdulmanan.dev'
              >
                privacy@abdulmanan.dev
              </a>
              .
            </p>
          </section>
          
          {/* Contact */}
          <section id='contact' className='space-y-5'>
            <h2 className='font-bold mb-4 font-heading uppercase leading-[1.1] text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] tracking-tight'>
              Contact Me
            </h2>
             <p className='mt-2 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
                Email:{" "}
                <a
                  className='text-sky-600 underline decoration-from-font underline-offset-2'
                  href='mailto:hello@abdulmanan.dev'
                >
                  hello@abdulmanan.dev
                </a>
              </p>
          </section>
        </article>
      </div>
    </main>
  );
}
