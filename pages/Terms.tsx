
import React from "react";
import PolicyHeader from "../components/PolicyHeader";
import TermsContent from "../components/TermsContent";

export default function Terms() {
  return (
    <div className='bg-gray-100 pt-[72px]'>
      <PolicyHeader title='Online Terms <br />of Service' />
      <TermsContent />
    </div>
  );
}
