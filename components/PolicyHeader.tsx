
import React from "react";

const PolicyHeader = ({ title }: { title?: string }) => {
  return (
    <div className='mx-auto max-w-[1550px] bg-gray-200 px-6 pt-20 pb-10 lg:pt-32 md:pb-16 h-full relative'>
      <h1
        dangerouslySetInnerHTML={{ __html: title ? title : "Privacy <br /> Statement" }}
        className='font-bold font-heading uppercase leading-[1] text-[42px] sm:text-[56px] md:text-[4rem] lg:text-[6rem] tracking-tight'
      ></h1>
    </div>
  );
};

export default PolicyHeader;
