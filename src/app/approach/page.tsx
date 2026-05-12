import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approach — Design Therapy",
};

const featuredImages = [
  {
    src: "/images/approach-outlook.png",
    alt: "Outlook in Design Therapy - Your Life",
    caption: "Outlook in Design Therapy - Your Life",
  },
  {
    src: "/images/approach-vision.png",
    alt: "Deconstruct Your Life & Design Your Life & Future Together",
    caption:
      "Deconstruct Your Life (left) & Design Your Life & Future Together (Right arch)",
  },
];

const galleryImages = [
  {
    src: "/images/approach-welcome-pkg.jpg",
    alt: "Welcome Package for Design Your Life",
    caption: "Welcome Package for Design Your Life",
  },
  {
    src: "/images/approach-handouts.jpg",
    alt: "Welcome Package for new Clients - Paper Handouts for Exercises",
    caption: "Welcome Package for new Clients - Paper Handouts for Exercises",
  },
  {
    src: "/images/approach-values.jpg",
    alt: "Exercise: Design Your Life Values & Triggers",
    caption: "Exercise: Design Your Life Values & Triggers",
  },
  {
    src: "/images/approach-rope.jpg",
    alt: "Body Work Exercise: Laying out a Real & Ideal Day W/ a Rope",
    caption: "Body Work Exercise: Laying out a Real & Ideal Day W/ a Rope",
  },
  {
    src: "/images/approach-sprint.jpg",
    alt: "Design Thinking Day-Long Workshop for Vision, Content & Going Deep",
    caption:
      "Design Thinking Day-Long Workshop for Vision, Content & Going Deep",
  },
  {
    src: "/images/approach-image-values.jpg",
    alt: "Exercise: Image-Inspired Value Definition",
    caption: "Exercise: Image-Inspired Value Definition",
  },
  {
    src: "/images/approach-balls.jpg",
    alt: "Game Design: Labeling Balls w/ Unique Ideas to Connect",
    caption: "Game Design: Labeling Balls w/ Unique Ideas to Connect",
  },
  {
    src: "/images/approach-mapping.png",
    alt: "Exercise in Mapping - A Napkin is Enough",
    caption: "Exercise in Mapping - A Napkin is Enough",
  },
  {
    src: "/images/approach-space.jpg",
    alt: "Design Therapy Space in Amsterdam, Rivierenbuurt",
    caption:
      "Design Therapy Space in Amsterdam, Rivierenbuurt - Postits, Football & More",
  },
];

export default function ApproachPage() {
  return (
    <main className="min-h-screen">
      {/* Text Content */}
      <section className="section-padding">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-10">
            The Design Therapy Approach
          </h1>

          <div className="space-y-6 text-lg text-[#4a4a4a] leading-relaxed">
            <p>
              Design Therapy is a designerly conversation between a therapist or
              coach and clients in safe space. In this conversation, the
              therapist asks relevant questions, listens empathically and allows
              for deeper self awareness through talking, thinking, feelings, mini
              experiences.
            </p>

            <p>
              One main goal is to find your agency, energy to play & labor, self
              love & care again - and a balance thereof. This is accomplished
              through a holistic approach - including body work such as a body
              scan, time to feel inside and integrate physiological experiences,
              too.
            </p>

            <p>
              Design Therapy is using systemic psychotherapy elements,
              evidence-proven couple therapy, narrative elements and focus on
              emotions as drivers. Yet also design methods like design thinking,
              design doing, experience design are a key element and the novel
              spin to outdated psychotherapy.
            </p>

            <p>
              For instance, the couple therapy is based on the Gottman Level
              Therapy approach after Dr. Julie & John Gottman and on Emotionally
              Focused Therapy & attachment theory elements after Dr. Sue Johnson
              in particular.
            </p>

            <p>
              Design Therapy is an ice-breaker where some would cringe and
              hesitate to request help and instead opens the door wide and
              welcoming to couples and individuals that take things in their
              heart..
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-[#f9f7f4]">
        <div className="max-w-[1000px] mx-auto">
          {/* Featured branded graphics - full width */}
          <div className="space-y-8 mb-10">
            {featuredImages.map((img) => (
              <figure key={img.src}>
                <div className="relative w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1000}
                    height={600}
                    className="w-full h-auto"
                    sizes="(max-width: 1000px) 100vw, 1000px"
                  />
                </div>
                <figcaption className="text-[0.8125rem] text-[#4a4a4a] mt-2">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Exercise photos grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img) => (
              <figure key={img.src}>
                <div className="relative w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={400}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="text-[0.8125rem] text-[#4a4a4a] mt-2">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
