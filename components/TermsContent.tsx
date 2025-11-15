
import React from "react";

const TermsContent = () => {
  return (
    <main className='px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-300'>
      <div className='mx-auto max-w-[1000px]'>
        <header>
          <p className='text-[20px] sm:text-[24px] md:text-[26px] font-semibold text-slate-900'>
            Last Updated: January 16, 2024
          </p>
          <p className='mt-5 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
            These Terms of Service govern your access to and use of this website. By using the site, you agree to these Terms.
          </p>
        </header>

        <article className='mt-12 space-y-16'>
          <section id='overview' className='space-y-5'>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              These Terms apply to your access to and use of this website, provided by Abdul Manan (“I”, “me”, or “my”).
            </p>
          </section>

          <section id='supplemental-terms' className='space-y-5'>
            <h3 className='font-bold font-heading uppercase text-[24px] sm:text-[28px] md:text-[36px] tracking-tight'>
              Supplemental Terms
            </h3>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              I may supply different or additional terms for some services. Those supplemental terms become part of your agreement with me if you use those services.
            </p>
            <ul className='list-disc pl-6 space-y-2 text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed'>
              <li><span className='font-medium'>Privacy Policy</span>: How I collect, use, and safeguard your information.</li>
            </ul>
          </section>

          <section id='changes' className='space-y-5'>
            <h3 className='font-bold font-heading uppercase text-[24px] sm:text-[28px] md:text-[36px] tracking-tight'>
              Changes to These Terms
            </h3>
            <p className='text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed'>
              I may change these Terms from time to time. The “Last Updated” date above serves as
              notice of changes. Unless stated otherwise, changes are effective immediately, and
              your continued use of the site confirms acceptance. If you do not agree to the
              amended Terms, you must stop using the site.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default TermsContent;
