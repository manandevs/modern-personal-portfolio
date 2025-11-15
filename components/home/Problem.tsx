
import React from "react";
import Badge from "../shared/Badge";

const cardData = [
  {
    title: "SLOW",
    description:
      "Slow-loading websites frustrate users and hurt search rankings, leading to lost engagement and revenue.",
    imgurl: "/images/home/slow-load.png",
  },
  {
    title: "CONFUSING",
    description:
      "Poor user experience and unintuitive design cause users to abandon your site before they find what they need.",
    imgurl: "/images/home/confusing-ux.png",
  },
  {
    title: "INACCESSIBLE",
    description:
      "Failing to build for accessibility excludes a significant portion of the population and opens you to legal risks.",
    imgurl: "/images/home/accessible.png",
  },
];

const values = [
  {
    title: "PERFORMANCE",
    text: "is non-negotiable for user retention and SEO.",
  },
  {
    title: "USABILITY",
    text: "drives conversion and user satisfaction.",
  },
  {
    title: "INCLUSIVITY",
    text: "expands your audience and builds brand trust.",
  },
];

export const Problem = () => {
  return (
    <div className="w-full bg-[#0d0d0d] rounded-t-[50px] text-white overflow-hidden">
      <main className="w-full mx-auto">
        <div className="">
          {/* ---------- HERO SECTION ---------- */}
          <section className="py-12 md:py-20 sm:py-24 px-6 lg:px-8 group">
            <div className="mx-auto max-w-[1550px] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
              <div className="md:hidden block">
                <Badge
                  text="Frontend Excellence"
                  src="/icons/usability_icon.svg"
                />
                <h2 className="text-[42px] md:text-[68px] font-heading font-semibold uppercase text-white leading-[1.1] mt-3">
                  Mediocre web experiences will cost you users.
                </h2>
              </div>
              <div className="max-w-[450px] w-full overflow-hidden rounded-[36px] hover:scale-[1.03] hover:shadow-xl transition-all duration-300" data-aos="fade-right">
                <img
                  src="/images/home/user-first.png"
                  alt="user-first"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="max-w-[1000px] text-right ml-auto" data-aos="fade-left">
                <div className="hidden md:block ml-auto">
                  <Badge
                    className="ml-auto"
                    text="Frontend Excellence"
                    src="/icons/usability_icon.svg"
                  />
                  <h2 className="text-[42px] md:text-[68px] font-heading font-semibold uppercase text-white leading-[1.1] mt-3">
                    Mediocre web experiences will cost you users.
                  </h2>
                </div>
                <p className="mt-6 text-[18px] md:text-[22px] text-white/80 leading-[1.5] max-w-[900px] ml-auto">
                  In a competitive digital landscape, users have high
                  expectations. Generic templates and unoptimized code lead to
                  poor performance, bad user experiences, and inaccessible
                  products. I build custom solutions that avoid these
                  pitfalls.
                </p>
              </div>
            </div>
          </section>

          {/* ---------- PROBLEMS GRID ---------- */}
          <div className="mt-20 max-w-[1550px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {cardData.map((card, index) => (
                <div className='column group max-w-[450px] w-full mx-auto space-y-2' key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div
                    className="flex flex-col items-center text-center bg-[#1a1a1a] group hover:cursor-pointer hovershadow-xl hover:scale-[1.025] rounded-[48px] overflow-hidden hover:bg-[#222] transition-all duration-300 group"
                  >
                    <img
                      src={card.imgurl}
                      alt={card.title}
                      className="w-full h-full object-contain bg-no-repeat group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="pl-2">
                    <h3 className='font-heading text-[36px] lg:text-[56px] font-semibold uppercase'>
                      {card.title}
                    </h3>
                    <p className='text-[18px] text-white/80 leading-relaxed max-w-md'>
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- WHY INVEST SECTION ---------- */}
          <section className="py-24 lg:py-32 max-w-[1550px] px-8 sm:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
            <div className="max-w-[800px]" data-aos="fade-right">
              <h1 className="font-heading text-[42px] lg:text-[68px] font-semibold uppercase leading-[1.1] tracking-normal mb-8">
                Why invest in a quality frontend?
              </h1>
              <p className="text-[18px] md:text-[22px] text-white/70 leading-[1.6]">
                Your website is often the first interaction a customer has
                with your brand. A well-crafted frontend isn't just about
                aesthetics; it's about building trust, ensuring a seamless user
                journey, and driving business goals.
              </p>
            </div>

            <div className="max-w-[450px] w-full overflow-hidden rounded-[36px] hover:scale-[1.03] hover:shadow-xl transition-all duration-300" data-aos="fade-left">
              <img
                src="/images/home/performance.png"
                alt="high-growth"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </section>

          {/* ---------- VALUES GRID ---------- */}
          <section className="max-w-[1550px] px-8 sm:px-6 mx-auto flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-16 pb-24 lg:pb-32">
            {values.map((item, i) => (
              <div key={i} className="column" data-aos="fade-up" data-aos-delay={i * 100}>
                <h3 className="font-heading text-[36px] lg:text-[56px] font-semibold uppercase mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[18px] text-white/80 leading-relaxed max-w-md">
                  {item.text}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};
