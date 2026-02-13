import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "One Couple Therapy Retreat - Two Days in June",
};

export default function JuneRetreatPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-white py-16">
        <div className="container-site">
          <h1>One Couple Therapy Retreat &mdash; Two Days in June</h1>
          <h3>Friday, June 13 &amp; Saturday, June 14, 2025</h3>
          <p className="text-dark mb-2">
            Voetangelweg, Abcoude &mdash; Villa Oldenhoff
          </p>
          <p>
            A couple retreat in Amsterdam at the start of the summer? Combined
            expertise of two couples therapists to ramp up your connection to
            each other. Join this unique experience designed to address in
            comfortable and confidential setting your issues, learn effective
            conflict resolution skills while learning through observation.
          </p>
          <p>
            Enjoy a stress-free, actually enjoyable getaway without the hassle
            of flights or long travel. Even parents of young kids can join
            &mdash; all for a reasonable price.
          </p>
          <div className="relative aspect-[16/9] w-full mt-8">
            <Image
              src="/images/events/retreat-hero.jpg"
              alt="Villa Oldenhoff, retreat venue"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sign Up */}
      <section id="sign-up" className="section-yellow py-16">
        <div className="container-site max-w-2xl">
          <h2>Sign up for the retreat</h2>
          <p>
            Inquire about availability or simply sign up by filling in the form
            below. We will get in touch with you within 24-48 hours.
          </p>
          <p>
            Or leave your contact details to be informed about future retreats
            in fall &amp; spring.
          </p>
          <div className="mt-6">
            <Link
              href="mailto:info@pixelstorystudio.com"
              className="btn-pill"
            >
              Email to Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Explore */}
      <section className="section-white py-16">
        <div className="container-site">
          <h2>What You&rsquo;ll Explore</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li className="text-small text-dark">
              Research-backed relationship frameworks for thriving couples
            </li>
            <li className="text-small text-dark">
              Cultural factors and expat relationship navigation
            </li>
            <li className="text-small text-dark">
              Conflict management and disagreement skills
            </li>
            <li className="text-small text-dark">
              Mutual support and strengthening friendship
            </li>
            <li className="text-small text-dark">
              Emotional connection and intimacy
            </li>
            <li className="text-small text-dark">
              Shared vision and life dreams
            </li>
          </ul>
          <p>
            Group size: 3&ndash;5 other couples (8&ndash;12 total
            participants).
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="section-dark py-16">
        <div className="container-site">
          <h2 className="text-white">Program Details</h2>
          <p className="text-white/80 mb-4">
            <strong className="text-white">Time:</strong> 9:30 AM &mdash; 6:00
            PM on Friday 13th June &amp; Saturday 14th June
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li className="text-small text-white/80">
              Morning: Two sessions (group learning, couple reflection,
              individual therapist meetings)
            </li>
            <li className="text-small text-white/80">
              Mid-morning break with delicious and healthy refreshments
            </li>
            <li className="text-small text-white/80">
              One-hour three-course lunch followed by mini stroll / siesta
            </li>
            <li className="text-small text-white/80">
              Afternoon: Two sessions (mirrors morning structure)
            </li>
            <li className="text-small text-white/80">
              Afternoon break with delicious and healthy refreshments
            </li>
            <li className="text-small text-white/80">
              Closing reflections
            </li>
          </ul>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-yellow py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2>What&rsquo;s Included</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-small text-dark">
                  Expert-led couples therapy (group, 1:2, or 1:1 formats) with
                  Julika Lomas (Gottman Level 3, registered systemic &amp;
                  relationship therapist) and Dr. Naomi Gibson (Registered
                  Clinical Psychologist)
                </li>
                <li className="text-small text-dark">
                  Healthy refreshments (tea, coffee, cake, fruit)
                </li>
                <li className="text-small text-dark">
                  Daily three-course lunch
                </li>
                <li className="text-small text-dark">
                  Workshop materials for note-taking and private reflection
                </li>
                <li className="text-small text-dark">
                  Pre-Retreat Assessment Call (30 min)
                </li>
                <li className="text-small text-dark">
                  Post-Retreat Call (30 min)
                </li>
                <li className="text-small text-dark">
                  Gottman Checkup (worth EUR50 per couple) + free retake after
                  6+ months
                </li>
                <li className="text-small text-dark">
                  Uninterrupted connection time with your partner through guided
                  exercises and breaks
                </li>
              </ul>
            </div>
            <div>
              <h2>Not Included</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-small text-dark">
                  Pre-Retreat Assessment Session for new couples (EUR100,
                  required)
                </li>
                <li className="text-small text-dark">
                  Transport (we suggest coming together on your bikes!)
                </li>
                <li className="text-small text-dark">
                  Accommodation, though a luxurious overnight stay at Villa
                  Oldenhoff is available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-white py-16">
        <div className="container-site">
          <h2>Pricing</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li className="text-small text-dark">
              <strong>Standard:</strong> EUR 1,850 per couple (21% VAT may
              apply)
            </li>
            <li className="text-small text-dark">
              <strong>Early signup</strong> (before April 7, 2025): EUR 1,799
              per couple
            </li>
            <li className="text-small text-dark">
              <strong>New clients:</strong> EUR 100 for required pre-retreat
              assessment
            </li>
          </ul>

          <h3>Registration Process</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li className="text-small text-dark">
              Questions answered via email or 10-minute info call
            </li>
            <li className="text-small text-dark">
              Pre-retreat assessment for new clients (50&ndash;60 min, EUR 100)
            </li>
            <li className="text-small text-dark">
              Down payment secures your spot
            </li>
            <li className="text-small text-dark">
              Optional accommodation booking at the venue
            </li>
          </ul>

          <h3>Cancellation Policy</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-small text-dark">
              Full refund: Until April 14, 2025
            </li>
            <li className="text-small text-dark">
              60% refund: Until May 2, 2025
            </li>
            <li className="text-small text-dark">
              30% refund: Until May 16, 2025
            </li>
            <li className="text-small text-dark">
              After May 16: No refund unless spot fills (then 50% credit toward
              future retreat, valid 1 year, non-guaranteed)
            </li>
          </ul>
        </div>
      </section>

      {/* Facilitators */}
      <section className="section-yellow py-16">
        <div className="container-site">
          <h2>Your Facilitators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="my-4">Julika Lomas</h3>
              <p className="text-small text-dark mb-2">Couple Therapist</p>
              <p>
                Gottman Level 3, registered NVRG systemic &amp; relationship
                therapist.
              </p>
              <Link
                href="https://www.designtherapy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small underline"
              >
                www.designtherapy.org
              </Link>
            </div>
            <div>
              <div className="relative aspect-[3/4] w-full mb-6">
                <Image
                  src="/images/events/naomi-facilitator.png"
                  alt="Dr. Naomi Gibson, Psychologist"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="my-4">Dr. Naomi Gibson</h3>
              <p className="text-small text-dark mb-2">Psychologist</p>
              <p>Registered Clinical Psychologist.</p>
              <Link
                href="https://www.drnaomigibson.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small underline"
              >
                www.drnaomigibson.com
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-white py-16">
        <div className="container-site">
          <p className="text-small text-dark italic">
            The retreat alone is surely not a guaranteed cure for a relationship
            that is structurally weak &mdash; it functions as a booster and
            marathon of couple therapy.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16">
        <div className="container-site text-center">
          <h2 className="text-white">Ready to Connect?</h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Inquire about availability or sign up by reaching out. We will get
            in touch with you within 24-48 hours.
          </p>
          <div className="mt-8">
            <Link
              href="mailto:info@pixelstorystudio.com"
              className="btn-pill"
            >
              Email to Sign Up
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
