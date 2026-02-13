import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      {/* Profile & Intro */}
      <section className="section-white py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/about/profile.jpg"
                alt="Julika Lomas, Psychotherapist and Life Coach"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h1>Hi, I am Julika</h1>
              <p>
                As a trained psychotherapist and life coach, I&rsquo;m interested
                in learning about you. I believe in the value of providing a safe
                space, where you can tell your story. Giving you my undivided
                attention, I ask questions and make suggestions. Together, we
                explore meaningful scenarios &mdash; and we reframe your life.
              </p>
              <p>
                What makes this approach &lsquo;creative&rsquo;? We use drawing
                and other ways to help you &lsquo;externalize&rsquo; your story.
                Bodywork is another option that can help you to express yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Credentials */}
      <section className="section-white py-12">
        <div className="container-site">
          <h2>Selected Credentials</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li className="text-small text-dark">
              Master&rsquo;s degree in Psychology
            </li>
            <li className="text-small text-dark">
              Second master&rsquo;s degree in Marriage &amp; Family Therapy
            </li>
            <li className="text-small text-dark">
              More than 750 hours of direct client contact
            </li>
            <li className="text-small text-dark">
              Trained in Gottman Couple Therapy (Level 3 since April, 2022)
            </li>
            <li className="text-small text-dark">
              Trained in Dr. Sue Johnson&rsquo;s Emotionally Focused Therapy,
              (Level 1 Emotionally Focused Individual Therapy EFIT, Level 2
              soon)
            </li>
            <li className="text-small text-dark">Certified Yoga Teacher</li>
            <li className="text-small text-dark">
              Multilingual Communication &mdash; German (native), English
              (native) &amp; Dutch (working level)
            </li>
          </ul>

          {/* Credential Badges */}
          <div className="flex flex-wrap gap-8 items-center mb-12">
            <div className="relative w-[120px] h-[120px]">
              <Image
                src="/images/badges/nvrg.png"
                alt="NVRG Member Badge"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[120px] h-[120px]">
              <Image
                src="/images/badges/gottman.jpg"
                alt="Gottman Relationship Checkup Badge"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[120px] h-[120px]">
              <Image
                src="/images/badges/efit.png"
                alt="EFIT Trained Badge"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team & Network */}
      <section className="section-yellow py-16">
        <div className="container-site">
          <h2>Team &amp; Network</h2>
          <p>
            For certain project &amp; challenges, I draw in resources from my
            network of Dutch, English and German speaking professionals,
            leadership-focused coaches, and body work experts. It is most
            important to me that you find the best help and right fit. So
            network referrals are my service to you, too. Can&rsquo;t find what
            you are looking for? Email me with your specific request.
          </p>

          <h3>Network Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4>Breath &amp; Bodywork</h4>
              <p>
                Mira Star Breathing (in Dutch &amp; English). An
                Amsterdam-based yogi &amp; breath worker that teaches the basic
                yet powerful breath, relaxation and transformation in 1:1 and
                small groups.{" "}
                <a
                  href="https://mirastar.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  mirastar.nl
                </a>
              </p>
            </div>
            <div>
              <h4>Processing Your Birth Experience</h4>
              <p>
                Geboortewolk Iva Eijke. Former midwife crafted coaching and
                courses to look closer at the life event of becoming parent(s).
                In Dutch &amp; English.{" "}
                <a
                  href="https://www.geboortewolk.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  geboortewolk.nl
                </a>
              </p>
            </div>
            <div>
              <h4>Energy &amp; Bodywork</h4>
              <p>
                Marije Oostindie (in Dutch &amp; English). An Amsterdam-based
                Tantra professional who facilitates a 3-hr evening for couples
                to discover sensuality, connection and pure attention for one
                another. Avond vol Aandacht &mdash; Evening of Attention.{" "}
                <a
                  href="https://www.avondvolaandacht.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  avondvolaandacht.nl
                </a>
              </p>
            </div>
            <div>
              <h4>Family Planning, Fertility, Design Your Health</h4>
              <p>
                Hertility &mdash; in-home fertility testing. Hey Grip originally
                launched in the Netherlands, sold to Hertility and offers
                services allows for easy, affordable in-home self-testing to
                explore your fertility stats &mdash; so you can start asking
                yourself big questions based on facts and figures.{" "}
                <a
                  href="https://hertilityhealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  hertilityhealth.com
                </a>
              </p>
            </div>
            <div>
              <h4>Bringing Baby Home</h4>
              <p>
                Online providers &amp; by Julika Lomas. While prioritizing the
                couple or parent, this evidence based intervention prepares for
                the arrival of a new family member for when &lsquo;we become
                three&rsquo; (or the plus one arrives). More than gadgets and
                helping hands will be needed, and fine-tuning the Gottman method
                for early parenting is a game changer.
              </p>
            </div>
            <div>
              <h4>Sleep Coaching for Children &mdash; and Families</h4>
              <p>
                Vera Hoffman, Sleepybird is effective, focused and accessible
                coaching to help you and your system recharge, prioritize sleep
                and calm for overall wellbeing and improved functioning.{" "}
                <a
                  href="http://www.sleepybird.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  sleepybird.net
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/testimonials" className="btn-pill-outline">
              Read here more what past clients said.
            </Link>
          </div>
        </div>
      </section>

      {/* Studio Images */}
      <section className="section-white py-12">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/about/studio-1.jpg"
                alt="Design Therapy studio space"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/about/studio-2.jpg"
                alt="Design Therapy studio details"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
