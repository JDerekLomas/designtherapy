import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Co-Design Group",
};

export default function CoDesignGroup() {
  return (
    <>
      {/* Hero */}
      <section className="section-white py-16">
        <div className="container-site">
          <h1>Design Thinking for Mental Health</h1>
          <h2>Co-Design Group</h2>
        </div>
      </section>

      {/* The Mission */}
      <section className="section-yellow py-12">
        <div className="container-site">
          <h2>The Mission</h2>
          <p>
            The Co-Design Group brings together mental health professionals,
            designers, and researchers who share a common mission: to improve
            mental health care through design thinking. We believe that the
            methods of human-centered design &mdash; empathy, prototyping,
            iteration and co-creation &mdash; can transform how therapy is
            practiced, experienced and accessed.
          </p>
          <p>
            Our group meets regularly to explore how design methods can be
            integrated into therapeutic practice, to share case studies, and to
            develop new tools and exercises that benefit both practitioners and
            clients.
          </p>
        </div>
      </section>

      {/* The Founders & People */}
      <section className="section-white py-12">
        <div className="container-site">
          <h2>The Founders &amp; People</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p>
                The Co-Design Group was founded by Julika Lomas and a network of
                interdisciplinary professionals committed to bridging the gap
                between design and mental health. Our members include
                psychotherapists, UX designers, health care designers, social
                workers, and academic researchers.
              </p>
              <p>
                We welcome new members who are passionate about improving mental
                health care through creative and collaborative methods. Whether
                you are a seasoned therapist curious about design methods or a
                designer interested in mental health &mdash; there is a place for
                you in our group.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/events/community-therapists.jpg"
                alt="Co-Design Group founders and members"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Process & Cases */}
      <section className="section-dark py-12">
        <div className="container-site">
          <h2 className="text-white">The Process &amp; Cases</h2>
          <p className="text-white/80">
            Our co-design process follows a structured yet flexible framework.
            We begin with shared inquiry &mdash; identifying a challenge or
            opportunity in mental health practice. Through workshops, we
            empathize with end users (clients and practitioners), ideate
            solutions, prototype tools and test them in real-world settings.
          </p>
          <p className="text-white/80">
            Past cases have explored topics such as visual communication in
            therapy, designing intake processes, creating therapeutic exercises
            for couples, and developing group facilitation methods. Each case
            contributes to a growing body of knowledge that is openly shared
            with the mental health and design communities.
          </p>
          <p className="text-white/80">
            Interested in joining or learning more? Reach out to us via{" "}
            <a
              href="mailto:info@pixelstorystudio.com"
              className="underline text-white"
            >
              email
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
