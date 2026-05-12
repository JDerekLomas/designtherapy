import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Design Therapy",
};

export default function AboutPage() {
  return (
    <main>
      {/* Full-width Hero Portrait */}
      <section className="relative w-full">
        <div className="relative w-full aspect-[3/2]">
          <Image
            src="/images/julika-portrait.jpg"
            alt="Julika Lomas portrait"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[2rem] md:text-[2.75rem] leading-tight mb-6">
            Hi, I am Julika
          </h1>
          <p className="text-[1.0625rem] text-[#4a4a4a] leading-relaxed">
            As a trained psychotherapist and life coach, I&rsquo;m interested in
            learning about <em>you</em>. I believe in the value of providing a safe
            space, where you can tell your story. Giving you my undivided attention,
            I ask questions and make suggestions. Together, we explore meaningful
            scenarios &mdash; and we reframe your life. What makes this approach
            &ldquo;creative&rdquo;? We use drawing and other ways to help you
            &ldquo;externalize&rdquo; your story. Bodywork is another option that
            can help you to express yourself.
          </p>
        </div>
      </section>

      {/* Selected Credentials */}
      <section className="section-padding bg-[#f9f7f4]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="mb-8">Selected Credentials</h2>

          <ul className="list-disc pl-6 space-y-2 text-[1.0625rem] text-[#4a4a4a] leading-relaxed mb-12">
            <li>Master&rsquo;s degree in Psychology</li>
            <li>Second master&rsquo;s degree in Marriage &amp; Family Therapy</li>
            <li>More than 750 hours of direct client contact</li>
            <li>Trained in Gottman Couple Therapy (Level 3 since April, 2022)</li>
            <li>
              Trained in Dr. Sue Johnson&rsquo;s Emotionally Focused Therapy
              (Level 1 EFIT, Level 2 soon)
            </li>
            <li>Certified Yoga Teacher</li>
            <li>
              Multilingual Communication &mdash; German (native), English
              (native), Dutch (working level)
            </li>
          </ul>

          {/* Credential Badges */}
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="relative w-[150px] h-[150px]">
              <Image
                src="/images/nvrg-logo.png"
                alt="NVRG certification"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[180px] h-[150px]">
              <Image
                src="/images/gottman-badge.jpg"
                alt="Gottman Checkup certification"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[150px] h-[150px]">
              <Image
                src="/images/efit-badge.png"
                alt="EFIT1 2024 certification"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team & Network */}
      <section className="section-padding bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="mb-8">Team &amp; Network</h2>

          <p className="text-[1.0625rem] text-[#4a4a4a] leading-relaxed mb-10">
            For certain project &amp; challenges, I draw in resources from my
            network of Dutch, English and German speaking professionals,
            leadership-focused coaches, and body work experts. It is most
            important to me that you find the best help and right fit. So network
            referrals are my service to you, too. Can&rsquo;t find what you are
            looking for? Email me with your specific request.
          </p>

          <div className="space-y-8 text-[1.0625rem] text-[#4a4a4a] leading-relaxed">
            <div>
              <p>
                <strong>Breath &amp; Bodywork</strong> &mdash; Mira Star
                Breathing (
                <a
                  href="https://mirastar.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  mirastar.nl
                </a>
                ) &mdash; &ldquo;Amsterdam-based yogi &amp; breath worker that
                teaches the basic yet powerful breath, relaxation and
                transformation in 1:1 and small groups.&rdquo; Dutch &amp;
                English
              </p>
            </div>

            <div>
              <p>
                <strong>Processing Your Birth Experience</strong> &mdash;
                Geboortewolk (
                <a
                  href="https://geboortewolk.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  geboortewolk.nl
                </a>
                ) / Iva Eijke &mdash; &ldquo;Former midwife crafted coaching
                and courses to look closer at the life event of becoming
                parent(s).&rdquo; Dutch &amp; English
              </p>
            </div>

            <div>
              <p>
                <strong>Energy &amp; Bodywork</strong> &mdash; Marije Oostindie
                / Avond vol Aandacht (
                <a
                  href="https://avondvolaandacht.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  avondvolaandacht.nl
                </a>
                ) &mdash; &ldquo;Amsterdam-based Tantra professional who
                facilitates a 3-hr evening for couples to discover sensuality,
                connection and pure attention for one another.&rdquo; Dutch
                &amp; English
              </p>
            </div>

            <div>
              <p>
                <strong>
                  Family Planning, Fertility, Design Your Health
                </strong>{" "}
                &mdash; Hertility (
                <a
                  href="https://hertilityhealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  hertilityhealth.com
                </a>
                ) &mdash; &ldquo;In-home fertility testing&hellip; offers
                services allows for easy, affordable in-home self-testing to
                explore your fertility stats.&rdquo;
              </p>
            </div>

            <div>
              <p>
                <strong>Bringing Baby Home</strong> &mdash; Gottman method
                providers &amp; Julika Lomas &mdash; &ldquo;Evidence based
                intervention prepares for the arrival of a new family member for
                when &lsquo;we become three.&rsquo;&rdquo; Online providers
                &amp; Julika Lomas
              </p>
            </div>

            <div>
              <p>
                <strong>Sleep Coaching for Children &amp; Families</strong>{" "}
                &mdash; Vera Hoffman / Sleepybird (
                <a
                  href="https://sleepybird.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  sleepybird.net
                </a>
                ) &mdash; &ldquo;Effective, focused and accessible coaching to
                help you and your system recharge, prioritize sleep and calm for
                overall wellbeing.&rdquo;
              </p>
            </div>
          </div>

          <p className="text-[1.0625rem] text-[#4a4a4a] leading-relaxed mt-10">
            Any further suggestions? Please be in touch &mdash; let me
            experience your service &amp; I love collaborations.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#f9f7f4]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="mb-6">Testimonials</h2>
          <p className="text-[1.0625rem] text-[#4a4a4a] leading-relaxed">
            Read{" "}
            <Link href="/testimonials" className="underline">
              here
            </Link>{" "}
            more what past clients said.
          </p>
        </div>
      </section>

      {/* The Design Therapy Studio */}
      <section className="section-padding bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="mb-8">The Design Therapy Studio</h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/studio-1.jpg"
                alt="Design Therapy studio interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/studio-2.jpg"
                alt="Design Therapy studio space"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
