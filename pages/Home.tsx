
import React from "react";
import { Problem } from "../components/Problem";
import { ExploreSection } from "../components/ExploreSection";
import { CallToAction } from "../components/CallToAction";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="w-full bg-gray-50">
      <Hero />
      <Problem />
      <ExploreSection />
      <CallToAction />
    </div>
  );
}
