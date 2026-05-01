import Contact from "@/components/Contact";
import DemoProject from "@/components/DemoProject";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Resume from "@/components/Resume";
import Testimonial from "@/components/Testimonial";
import WhatIDo from "@/components/WhatIDo";


const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhatIDo />
      <Resume/>
      <Testimonial/>
      <DemoProject/>
      <Pricing/>
      <Contact/>
    </div>
  );
};

export default HomePage;