import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

// Generated images from MuleRouter AI
const images = {
  // Hero video - abstract flowing organic forms
  heroVideo: "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/72adf681-ddc5-404d-995e-bd4da2fa48b9/result_00.mp4",
  // Therapist hands - warm editorial style
  about: "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/70220a85-933e-4d2a-b65d-f66da1c0a46c/result_00.png",
  // Couples hands reaching across table
  couples: "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/80d80131-b026-4e2d-a903-28ed637306d2/result_00.png",
  // Individual meditation by window
  individual: "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/7be8f23a-68f2-42cb-a69f-a53812500655/result_00.png",
  // Amsterdam therapy office interior
  office: "https://mule-router-assets.muleusercontent.com/router_public/production/ephemeral/f1edaea3-e7d2-4be5-89f1-325400b6454d/result_00.png",
};

export default function Home() {
  return (
    <>
      <Hero videoUrl={images.heroVideo} />
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
