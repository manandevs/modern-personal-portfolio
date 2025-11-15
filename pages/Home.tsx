
import React from "react";
import { CallToAction } from "../components/CallToAction";
import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { ExploreSection } from "@/components/home/ExploreSection";

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
