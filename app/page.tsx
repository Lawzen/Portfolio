import React from "react";
import Hero from "@/app/components/Hero";
import Stack from "@/app/components/Stack";
import Projects from "@/app/components/Projects";
import About from "@/app/components/About";

export default function Home() {
  return (
      <div>
          <Hero />
          <Stack />
          <Projects />
          <About />
      </div>
  );
}
