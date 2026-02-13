import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emotional Connection Couple Retreat",
};

export default function EmotionalConnectionCoupleRetreat() {
  return (
    <>
      {/* Hero */}
      <section className="section-white py-16">
        <div className="container-site">
          <h1>Emotional Connection Couple Retreat &mdash; Two Days in Fall</h1>
          <h3>Friday, October 31 &amp; Saturday, November 1, 2025</h3>
          <p>
            A couple retreat in Amsterdam this fall? Combined expertise of two
            couples therapists to ramp up your connection to each other.
          </p>
          <p>
            Join this unique experience designed to deepen your emotional
            connection by covering five topics. In a comfortable and
            confidential setting, learn evidence based skills in the group
            setting before practicing in your own safe couple bubble. Across the
            weekend, learning through observing others. And ample time to bring
            up dreams, hopes and &mdash; to exhale.
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

      {/* What You Can Expect */}
      <section className="section-white py-16">
        <div className="container-site">
          <h2>What You Can Expect</h2>
          <p>
            The Couple Retreat for Emotional Connection in the fall 2025 is a
            high value experience designed for couples in and near Amsterdam.
            Led by seasoned therapists Julika and Naomi &mdash; who have helped
            dozens of couples strengthen their relationships &mdash; this
            retreat offers a structured yet intimate way to reconnect, learn,
            and grow together. Over two immersive days, you and your partner
            will engage in:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li className="text-small text-dark">
              <strong>Systemic therapy</strong> &mdash; Gain insights through
              guided conversations as a couple and within a supportive group
            </li>
            <li className="text-small text-dark">
              <strong>Psycho-education</strong> &mdash; Learn proven
              relationship strategies with interactive workbooks to continue
              your growth at home. Note: Learning is in groups. Practice is in
              your own couple bubble.
            </li>
          </ul>
        </div>
      </section>

      {/* 5 Topics */}
      <section className="section-dark py-16">
        <div className="container-site">
          <h2 className="text-white">What 5 Topics You&rsquo;ll Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div>
              <h4 className="text-yellow-brand">
                1. Friendship in Your Relationship.
              </h4>
              <p className="text-white/80">
                At the base of a sound relationship, is friendship where we
                express admiration, respect, and know the other.
              </p>
            </div>
            <div>
              <h4 className="text-yellow-brand">
                2. Communication &amp; Conflict Skills.
              </h4>
              <p className="text-white/80">
                Next expressing yourself verbally and non-verbally is crucial,
                all the way to having a proper or fair fight. We will present
                state of the art research on healthy communication in couples,
                and how to approach recurring issues.
              </p>
            </div>
            <div>
              <h4 className="text-yellow-brand">
                3. Co-Regulation in Couples &amp; Stress Reducing Conversations.
              </h4>
              <p className="text-white/80">
                One wrong word and &mdash; boom! &mdash; the conversation can
                derail. Just so, saying the right thing can calm your loved one.
                Now even better, building a positive credit by frequently
                talking about what&rsquo;s currently stressful, builds
                awareness of the other&rsquo;s inner world and vaccinates
                against stress.
              </p>
            </div>
            <div>
              <h4 className="text-yellow-brand">
                4. Identifying Gridlocked Issues
              </h4>
              <p className="text-white/80">
                &mdash; and why they are hard to talk about in your
                relationship.
              </p>
            </div>
            <div>
              <h4 className="text-yellow-brand">5. Dreams &amp; Hopes.</h4>
              <p className="text-white/80">
                Designing together a vision for your shared future, brainstorm
                life dreams, and shape the life you truly want.
              </p>
            </div>
          </div>
          <p className="text-white/80 mt-8">
            In sum, this weekend will give you ample time in the group, alone
            with your spouse, and time off in between to reset. You&rsquo;ll
            deepen your friendship, learn communication skills, co-regulate,
            walk away with a list of topics &amp; dreams to address next &mdash;
            more emotionally connected.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="section-white py-16">
        <div className="container-site">
          <h2>Program Details</h2>
          <p>
            <strong>Time:</strong> 9:30 &mdash; 18:00 on Friday 31st October
            &amp; Saturday 1st November
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-8">
            <li className="text-small text-dark">
              Morning: Two sessions (group learning, couple reflection, 1:1
              with a therapist)
            </li>
            <li className="text-small text-dark">
              Mid-morning break with delicious and healthy refreshments
            </li>
            <li className="text-small text-dark">
              One-hour three-course lunch followed by mini stroll / siesta
            </li>
            <li className="text-small text-dark">
              Afternoon: Two sessions (group learning, then practice in couple
              bubble, 1:1 with a therapist)
            </li>
            <li className="text-small text-dark">
              Afternoon break with delicious and healthy refreshments
            </li>
            <li className="text-small text-dark">
              Wrap up, reflections &amp; send off
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
                  Two days of expert-led couples therapy (group, 1:2, or 1:1)
                  with Julika Lomas (Gottman Level 3, registered systemic
                  therapist) and Dr. Naomi Gibson (licensed Clinical
                  Psychologist)
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
                  Gottman Checkup (worth EUR60 per couple) + free retake after
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
                  Pre-Retreat Assessment Session (60 min, required for new
                  couples, EUR130 per session)
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
              <strong>Standard:</strong> EUR 1,950 per couple (EUR 2,359.50
              including 21% VAT)
            </li>
            <li className="text-small text-dark">
              <strong>Early signup</strong> (before July 15, 2025): EUR 1,799
              per couple
            </li>
            <li className="text-small text-dark">
              <strong>New clients:</strong> EUR 130 for required assessment
              session
            </li>
          </ul>

          <h3>Cancellation Policy</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-small text-dark">
              Full refund: Until August 30, 2025
            </li>
            <li className="text-small text-dark">
              70% refund: Until September 10, 2025
            </li>
            <li className="text-small text-dark">
              No refund: Within 6 weeks of October 31
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
              <p>Licensed Clinical Psychologist.</p>
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
