import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="section-white py-16">
        <div className="container-site">
          <h1>Systemic Therapy &amp; Cost of Services</h1>

          {/* Service Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/services/service-1.jpg"
                alt="Individual Therapy session"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/services/service-2.jpg"
                alt="Couples Therapy session"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/services/service-3.jpg"
                alt="Group Therapy session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Individual Therapy */}
      <section className="section-white py-12">
        <div className="container-site">
          <h2>Individual Therapy &mdash; &lsquo;Design Your Life&rsquo;</h2>
          <p>
            Traditional psychotherapy topics like anxiety, stress, grief &amp;
            loss, and self doubt are part of the practice. Design Therapy,
            however, is a designerly conversation between a therapist and the
            client (system) with the goal of fresh self-awareness and self-care.
            Individuals are invited to explore their mental well being through
            the innovative framework Design Your Life. That&rsquo;s a custom mix
            of design methods (think post-its, whiteboard, vision boards) and
            psychotherapy. Yoga &amp; body work are an option, too.
          </p>
        </div>
      </section>

      {/* Couples Therapy */}
      <section className="section-yellow py-12">
        <div className="container-site">
          <h2>Couples Therapy &mdash; &lsquo;Design Your Future Together&rsquo;</h2>
          <p>
            Couples or &lsquo;intimate partners&rsquo; are two people who want
            to feel better, move forward and seek strategies to take your life
            together. The method is based on the Gottman approach &mdash; an
            evidence based method with a rich toolbox of interventions. This
            approach focuses on emotions, teaches skills and is supported by
            books, and an initial assessment to allow for a thorough overview of
            your resources and challenges.
          </p>
          <p>
            In addition, couples therapy is interspersed with design methods
            (think post-its, whiteboard, visioning). Your design therapist will
            meet you at your level of understanding of these creative tools, and
            ignite your creativity and can-do attitude. For instance, couples
            mounted white boards in their kitchen in response.
          </p>
          <p>
            Lastly, emotionally focused therapy (EFT) concepts are shared where
            needed. This attachment-focused approach is also evidence based and
            ensures sessions evoke needed emotions, corrective healing encounters
            and sense-making thereof.
          </p>
        </div>
      </section>

      {/* Group Therapy */}
      <section className="section-white py-12">
        <div className="container-site">
          <h2>Group Therapy</h2>
          <p>
            A group setting that provides for social learning by seeing other
            people or couples reflect and interact in a safe space. Group
            participants are participating for longer stretches in a closed group
            and share openly yet also learn in small steps about new skills.
          </p>
        </div>
      </section>

      {/* Small Teams & Start-ups */}
      <section className="section-dark py-12">
        <div className="container-site">
          <h2 className="text-white">Small Teams &amp; Start-ups</h2>
          <p className="text-white/80">
            The world of work is notoriously stressful. Coaching teams and
            start-ups is about teaching people to be productive and balanced.
            Design Therapy for work teams connects with my work &amp;
            organizational psychology services at &lsquo;The Inner
            Office&rsquo; (coming soon).
          </p>
        </div>
      </section>

      {/* Training for Mental Health Professionals */}
      <section className="section-white py-12">
        <div className="container-site">
          <h2>Training for Mental Health Professionals</h2>
          <p>
            People in the field of mental health &mdash; including Health Care
            Designers &mdash; are a vital part of the health-care ecosystem.
            That&rsquo;s why I provide presentations and trainings to &lsquo;care
            for the carers.&rsquo; Need a keynote speaker or event moderator?
            Just reach out.
          </p>
        </div>
      </section>

      {/* Cost per Session */}
      <section className="section-yellow py-12">
        <div className="container-site">
          <h2>Cost per Session</h2>

          <h3>For Individuals</h3>
          <ul className="list-disc pl-6 space-y-1 mb-8">
            <li className="text-small text-dark">
              60-min: 150,- Euro (VAT exempt), thereafter charged in 15 min
              increments
            </li>
            <li className="text-small text-dark">
              90-min: 210,- Euro (VAT exempt)
            </li>
          </ul>

          <h3>For Couples</h3>
          <ul className="list-disc pl-6 space-y-1 mb-8">
            <li className="text-small text-dark">
              60-min: 150,- Euro (VAT exempt) for couples, thereafter charged
              in 15 min increments
            </li>
            <li className="text-small text-dark">
              75-min: 180,- Euro (VAT exempt) for couples, thereafter charged
              in 15 min increments
            </li>
            <li className="text-small text-dark">
              90-min: 210,- Euro (VAT exempt) for couples
            </li>
            <li className="text-small text-dark">15min: 30,- Euro each</li>
          </ul>

          <h3>For Groups</h3>
          <p>Custom</p>
        </div>
      </section>

      {/* Session Protocols */}
      <section className="section-white py-12">
        <div className="container-site">
          <h2>Session Protocols &amp; Visualizations</h2>
          <p>
            <em>
              Your &lsquo;Life Design&rsquo; sessions yield valuable data for
              rich story-telling. If you are interested in an ongoing text- and
              image-based session protocol that aggregates to become like a
              journal &mdash; request this add-on service. Clients have praised
              this add-on feature highly! Protocols are shared digitally after
              each session within 1-3 business days.
            </em>
          </p>
          <p className="mt-4 font-bold">Upon Request</p>
        </div>
      </section>

      {/* Design Therapy Library of Exercises */}
      <section className="section-white py-12">
        <div className="container-site">
          <h2>Design Therapy Library of Exercises</h2>

          <h3>
            Design Your Future Together for Couples &amp; Design Your Life for
            Individuals
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li className="text-small text-dark">
              Couple Wheel of Life (PDF)
            </li>
            <li className="text-small text-dark">
              Couple SWOT Analysis (PDF)
            </li>
            <li className="text-small text-dark">
              Couple Future Cone (PDF)
            </li>
            <li className="text-small text-dark">
              Design Your Lovemaking (PDF)
            </li>
            <li className="text-small text-dark">
              Design Your Values (PDF)
            </li>
            <li className="text-small text-dark">
              How to Talk so Others Listen (PDF)
            </li>
            <li className="text-small text-dark">
              Design Your Emotional Labor Contract (PDF)
            </li>
            <li className="text-small text-dark">
              Design Your Telling Signs (PDF)
            </li>
            <li className="text-small text-dark">
              3-Week Guide to Rekindle Positivity (PDF)
            </li>
          </ul>

          <h3>The Gottman Couple Therapy Resources</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li className="text-small text-dark">
              The Four Horsemen &amp; Antidotes (PDF)
            </li>
            <li className="text-small text-dark">
              A Sound Relationship House (PDF)
            </li>
            <li className="text-small text-dark">
              Dreams Within Conflict (PDF)
            </li>
            <li className="text-small text-dark">
              Expressing Needs (PDF)
            </li>
          </ul>

          <h3>Bringing Baby Home</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li className="text-small text-dark">
              Love Maps for Parents w/ Kids (PDF)
            </li>
          </ul>

          <p className="text-small text-dark italic mt-8">
            * All exercises &mdash; available for download and non-commercial use
            only. Suggested donation of EUR15 per file &mdash; send via paypal
            to info@pixelstorystudio.com
          </p>
          <p className="text-small text-dark italic">
            * Always attribute authorship. The Gottman Method material is shared
            w/ explicit permission from the Institute.
          </p>
        </div>
      </section>
    </>
  );
}
