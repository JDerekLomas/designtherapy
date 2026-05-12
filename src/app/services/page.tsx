import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Design Therapy',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Intro Section */}
      <section className="section-padding">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-8">
            Systemic Therapy &amp; Cost of Services
          </h1>

          <div className="text-[#4a4a4a] leading-relaxed space-y-6">
            <p>
              I take a systems approach to coaching and psychotherapy &mdash; meaning I understand you are embedded in a system of family, friends, work, culture and community. For individual work, we will also map your genogram (family tree) to learn about your family of origin and to better design your family of choice.
            </p>
            <p>
              Some challenges are &ldquo;wicked challenges&rdquo; &mdash; they resist simple solutions and require careful exploration. Others feel like &ldquo;gridlock&rdquo; &mdash; stuck patterns that need movement. The work balances problem-focused and solution-focused dialogue, meeting you where you are.
            </p>
            <p>
              So for the first time methodology driven counsel sessions in a design thinking framework &lsquo;in this country&rsquo; and probably the world, I am offering &lsquo;Design Therapy&rsquo; to bridge with a crafted conversation and a series of creative exercises.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="max-w-[800px] mx-auto space-y-14">

          {/* 1. Individual Therapy */}
          <div>
            <h3 className="text-2xl font-light text-[#1a1a1a] mb-4">
              1. Individual Therapy &mdash; &ldquo;Design Your Life&rdquo;
            </h3>
            <div className="text-[#4a4a4a] leading-relaxed space-y-4">
              <p>
                These are guided conversations about where you&rsquo;ve been in life &mdash; and where you&rsquo;re going. Sufficient enough understanding of your background is necessary to craft a first life design. A genogram is often drawn on a real whiteboard or in a digital version to understand your family of origin 3 generations back (1 session) &mdash; a handy road map to your relations. Your mental health to date is discussed (attachment history) as well as your vision, fears &amp; dreams, for your life ahead of you.
              </p>
              <p>
                Expect for this kind of therapy to begin with weekly sessions or sessions every other week, and for assessment to last 2&ndash;4 sessions to prepare the intervention phase. At the same time, bodywork is an option to ground your work in your physical experiences. Sessions may start with brief breathing exercises or include on occasion a body sculpture to move beyond &lsquo;talk therapy&rsquo;. Several clients request these body scans at the start of sessions since they have built a habit of fully arriving on the couch.
              </p>
            </div>
          </div>

          {/* 2. Couples Therapy */}
          <div>
            <h3 className="text-2xl font-light text-[#1a1a1a] mb-4">
              2. Couples Therapy &mdash; &ldquo;Design Your Future Together&rdquo;
            </h3>
            <div className="text-[#4a4a4a] leading-relaxed space-y-4">
              <p>
                These are constructive conversations about the two of you &mdash; and where you&rsquo;d like to take your life together. The method is based on the Gottman approach &mdash; an evidence based method with a rich toolbox of interventions. This approach focuses on emotions, teaches skills and is supported by books, and an initial assessment to allow for a thorough overview of your resources and challenges.
              </p>
              <p>
                In addition, couples therapy is interspersed with design methods (think post-its, whiteboard, visioning). Your design therapist will meet you at your level of understanding of these creative tools, and ignite your creativity and can-do attitude. For instance, couples mounted white boards in their kitchen in response.
              </p>
              <p>
                Lastly, emotionally focused therapy (EFT) concepts are shared where needed. This attachment-focused approach is also evidence based and ensures sessions evoke needed emotions, corrective healing encounters and sense-making thereof.
              </p>
            </div>
          </div>

          {/* 3. Group Therapy */}
          <div>
            <h3 className="text-2xl font-light text-[#1a1a1a] mb-4">
              3. Group Therapy
            </h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              A group setting that provides for social learning by seeing other people or couples reflect and interact in a safe space. Group participants are participating for longer stretches in a closed group and share openly yet also learn in small steps about new skills.
            </p>
          </div>

          {/* 4. Small Teams & Start-ups */}
          <div>
            <h3 className="text-2xl font-light text-[#1a1a1a] mb-4">
              4. Small Teams &amp; Start-ups
            </h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              The world of work is notoriously stressful. Coaching teams and start-ups is about teaching people to be productive and balanced. Design Therapy for work teams connects with my work &amp; organizational psychology services at &lsquo;The Inner Office&rsquo; (coming soon).
            </p>
          </div>

          {/* 5. Training for Mental Health Professionals */}
          <div>
            <h3 className="text-2xl font-light text-[#1a1a1a] mb-4">
              5. Training for Mental Health Professionals
            </h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              People in the field of mental health &mdash; including Health Care Designers &mdash; are a vital part of the health-care ecosystem. That&rsquo;s why I provide presentations and trainings to &lsquo;care for the carers.&rsquo; Need a keynote speaker or event moderator? Just reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Cost per Session */}
      <section className="section-padding">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-8">
            Cost per Session
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#e8e8e8]">
              <thead>
                <tr className="border-b border-[#e8e8e8] bg-[#f9f7f4]">
                  <th className="text-left py-3 px-5 text-[#1a1a1a] font-medium border border-[#e8e8e8]">
                    Session
                  </th>
                  <th className="text-left py-3 px-5 text-[#1a1a1a] font-medium border border-[#e8e8e8]">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#4a4a4a]">
                <tr className="border-b border-[#e8e8e8]">
                  <td className="py-3 px-5 border border-[#e8e8e8]">Individual 60 min</td>
                  <td className="py-3 px-5 border border-[#e8e8e8]">150,&ndash; Euro (VAT exempt)</td>
                </tr>
                <tr className="border-b border-[#e8e8e8]">
                  <td className="py-3 px-5 border border-[#e8e8e8]">Individual 90 min</td>
                  <td className="py-3 px-5 border border-[#e8e8e8]">210,&ndash; Euro (VAT exempt)</td>
                </tr>
                <tr className="border-b border-[#e8e8e8]">
                  <td className="py-3 px-5 border border-[#e8e8e8]">Couples 60 min</td>
                  <td className="py-3 px-5 border border-[#e8e8e8]">150,&ndash; Euro (VAT exempt)</td>
                </tr>
                <tr className="border-b border-[#e8e8e8]">
                  <td className="py-3 px-5 border border-[#e8e8e8]">Couples 75 min</td>
                  <td className="py-3 px-5 border border-[#e8e8e8]">180,&ndash; Euro (VAT exempt)</td>
                </tr>
                <tr className="border-b border-[#e8e8e8]">
                  <td className="py-3 px-5 border border-[#e8e8e8]">Couples 90 min</td>
                  <td className="py-3 px-5 border border-[#e8e8e8]">210,&ndash; Euro (VAT exempt)</td>
                </tr>
                <tr>
                  <td className="py-3 px-5 border border-[#e8e8e8]">15-min increments</td>
                  <td className="py-3 px-5 border border-[#e8e8e8]">30,&ndash; Euro each</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-4">
              Cost per Group
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed">
              Custom pricing
            </p>
          </div>
        </div>
      </section>

      {/* Session Protocols & Visualizations */}
      <section className="section-padding">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-6">
            Session Protocols &amp; Visualizations
          </h2>
          <div className="text-[#4a4a4a] leading-relaxed space-y-4">
            <p>
              Your &lsquo;Life Design&rsquo; sessions yield valuable data for rich story-telling. If you are interested in an ongoing text- and image-based session protocol that aggregates to become like a journal &mdash; request this add-on service. Clients have praised this add-on feature highly! Protocols are shared digitally after each session within 1&ndash;3 business days.
            </p>
            <p className="italic text-[#8a8a8a]">
              Upon Request
            </p>
          </div>
        </div>
      </section>

      {/* Design Therapy Library of Exercises */}
      <section className="section-padding">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-8">
            Design Therapy Library of Exercises
          </h1>

          {/* Couples & Individuals Exercises */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-6">
              Design Your Future Together for Couples &amp; Design Your Life for Individuals
            </h2>
            <ol className="text-[#4a4a4a] leading-relaxed space-y-2 list-decimal list-inside">
              <li>Couple Wheel of Life</li>
              <li>Couple SWOT Analysis</li>
              <li>Couple Future Cone</li>
              <li>Design Your Lovemaking</li>
              <li>Design Your Values</li>
              <li>How to Talk so Others Listen</li>
              <li>Design Your Emotional Labor Contract</li>
              <li>Design Your Telling Signs</li>
              <li>3-Week Guide to Rekindle Positivity</li>
            </ol>
          </div>

          {/* Gottman Resources */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-6">
              The Gottman Couple Therapy Resources
            </h2>
            <ol className="text-[#4a4a4a] leading-relaxed space-y-2 list-decimal list-inside">
              <li>The Four Horsemen &amp; Antidotes</li>
              <li>A Sound Relationship House</li>
              <li>Dreams Within Conflict</li>
              <li>Expressing Needs (Card Deck)</li>
            </ol>
          </div>

          {/* Bringing Baby Home */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-[#1a1a1a] mb-6">
              Bringing Baby Home
            </h2>
            <ol className="text-[#4a4a4a] leading-relaxed space-y-2 list-decimal list-inside">
              <li>Love Maps for Parents w/ Kids (Card Deck)</li>
            </ol>
          </div>

          {/* Footer Notes */}
          <div className="border-t border-[#e8e8e8] pt-6 text-sm text-[#8a8a8a] space-y-2">
            <p>
              * All exercises &mdash; available for download and non-commercial use only. Suggested donation of 15 Euro per file &mdash; send via paypal to info@pixelstorystudio.com
            </p>
            <p>
              * Always attribute authorship. The Gottman Method material is shared w/ explicit permission from the Institute.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
