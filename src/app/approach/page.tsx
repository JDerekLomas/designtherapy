import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Approach",
};

export default function Approach() {
  return (
    <>
      {/* Hero */}
      <section className="section-white py-16">
        <div className="container-site">
          <h1>The Design Therapy Approach</h1>
        </div>
      </section>

      {/* Approach Block 1 */}
      <section className="section-white py-12">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p>
                Design Therapy is a designerly conversation between a therapist
                or coach and clients in safe space. In this conversation, the
                therapist asks relevant questions, listens empathically and
                allows for deeper self awareness through talking, thinking,
                feelings, mini experiences.
              </p>
              <p>
                One main goal is to find your agency, energy to play &amp;
                labor, self love &amp; care again &mdash; and a balance thereof.
                This is accomplished through a holistic approach &mdash;
                including body work such as a body scan, time to feel inside and
                integrate physiological experiences, too.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/approach/approach-1.jpg"
                alt="Design Therapy approach - visual methods"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Block 2 */}
      <section className="section-yellow py-12">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] w-full md:order-1">
              <Image
                src="/images/approach/approach-2.png"
                alt="Design Therapy approach - collaborative process"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-2">
              <p>
                Design Therapy is using systemic psychotherapy elements,
                evidence-proven couple therapy, narrative elements and focus on
                emotions as drivers. Yet also design methods like design
                thinking, design doing, experience design are a key element and
                the novel spin to outdated psychotherapy.
              </p>
              <p>
                For instance, the couple therapy is based on the Gottman Level
                Therapy approach after Dr. Julie &amp; John Gottman and on
                Emotionally Focused Therapy &amp; attachment theory elements
                after Dr. Sue Johnson in particular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Block 3 */}
      <section className="section-white py-12">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p>
                Design Therapy is an ice-breaker where some would cringe and
                hesitate to request help and instead opens the door wide and
                welcoming to couples and individuals that take things in their
                heart..
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/approach/approach-3.jpg"
                alt="Design Therapy approach - couples and bodywork"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Block 4 */}
      <section className="section-dark py-12">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] w-full md:order-1">
              <Image
                src="/images/approach/approach-4.png"
                alt="Deconstruct Your Life (left) &amp; Design Your Life &amp; Future Together (Right arch)"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-2">
              <p className="text-white/80">
                Sessions can take place in person at the Design Therapy space in
                the Veluwebuurt, Amsterdam, or via secure video call. The space
                itself is designed to feel warm, creative and safe &mdash; a
                place where you can think freely and feel held.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-white py-12">
        <div className="container-site">
          <h2>Exercises &amp; Workshops</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/approach/exercise-1.jpg"
                alt="Welcome Package for Design Your Life"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square w-full">
              <Image
                src="/images/approach/exercise-2.jpg"
                alt="Welcome Package for new Clients - Paper Handouts for Exercises"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square w-full">
              <Image
                src="/images/approach/exercise-3.jpg"
                alt="Exercise: Design Your Life Values &amp; Triggers"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square w-full">
              <Image
                src="/images/approach/exercise-4.jpg"
                alt="Body Work Exercise: Laying out a Real &amp; Ideal Day W/ a Rope"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square w-full">
              <Image
                src="/images/approach/exercise-5.jpg"
                alt="Design Thinking Day-Long Workshop for Vision, Content &amp; Going Deep"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square w-full">
              <Image
                src="/images/approach/exercise-6.jpg"
                alt="Exercise: Image-Inspired Value Definition"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-white pb-12">
        <div className="container-site">
          <p className="text-small text-dark italic">
            *People shown are peers helping visualize the work &mdash; never
            clients. All work is strictly confidential.
          </p>
        </div>
      </section>
    </>
  );
}
