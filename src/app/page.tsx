import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

// Generated images - now hosted locally
const images = {
  // Hero video - abstract flowing organic forms
  heroVideo: "/images/generated/hero-video.mp4",
  // Therapist hands - warm editorial style
  about: "/images/generated/about-therapist.png",
  // Couples hands reaching across table
  couples: "/images/generated/couples.png",
  // Individual meditation by window
  individual: "/images/generated/individual.png",
  // Amsterdam therapy office interior
  office: "/images/generated/office.png",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About imageUrl={images.about} />
      <Approach />
      <Services
        couplesImageUrl={images.couples}
        individualImageUrl={images.individual}
        officeImageUrl={images.office}
      />
      <Testimonials />
      <Contact />
    </>
  );
}
