import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "9th Community of Therapists Event",
};

export default function NinthCommunityEvent() {
  return (
    <>
      {/* Hero */}
      <section className="section-white py-16">
        <div className="container-site">
          <h1>Community of Therapists Event</h1>
          <h3>Tuesday, October 7, 2025 &mdash; 12:30 PM &ndash; 2:00 PM</h3>
          <p className="text-dark mb-2">
            Fosbury &amp; Sons, Co-Working, 769 Prinsengracht Amsterdam
          </p>
          <p className="mb-2">
            <strong>Free event</strong> &mdash; Invite only
          </p>
          <p>
            Come join our 9th community event at a co-working space in
            Amsterdam. This event is free.
          </p>
          <div className="relative aspect-[16/9] w-full mt-8">
            <Image
              src="/images/events/9th-community.jpg"
              alt="9th Community of Therapists Event"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="section-yellow py-16">
        <div className="container-site">
          <h2>What You Can Expect</h2>
          <p>
            The organiser will invite to the event and facilitate the
            conversion &mdash; welcoming new members, kicking off, and time
            keeping. You will meet new and old peers, walk away with valuable
            learnings and a sense of belonging to a community.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="section-white py-16">
        <div className="container-site">
          <h2>About These Community of Therapists Events</h2>
          <p>
            The idea for this recurring event is to continue building a small,
            yet possibly growing supportive community of mental health providers
            that can often find themselves in quite solitary settings (the only
            provider in room, odd hours with office mates, primarily digital
            trainings or email exchange) &mdash; emerging or navigating a
            pandemic.
          </p>
          <p>
            The format is typically simply meet &amp; greet, share your ideas,
            solutions and challenges, and learn from one another. While at a
            past meeting, we may have focused on ONE topic, for now, we will let
            the conversation free flow.
          </p>
          <p>
            This event is inspired, by a San Diego-based group of mental health
            providers called &lsquo;Therapists That W(h)ine together&rsquo;
            &mdash; and I still think fondly of that North Star of community.
          </p>
        </div>
      </section>

      {/* How to Join */}
      <section className="section-white py-16 border-t border-black/10">
        <div className="container-site">
          <h2>How to Join</h2>
          <p>
            This event is closed, by invite-only, yet we are open to
            suggestions. To attend this event, RSVP by email, briefly introduce
            yourself or a suggested peer and come to the location.
          </p>
          <div className="mt-6">
            <Link
              href="mailto:info@pixelstorystudio.com"
              className="btn-pill"
            >
              RSVP by Email
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-white py-16 border-t border-black/10">
        <div className="container-site">
          <h2>Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/events/community-gallery-1.jpg"
                alt="Community of Therapists event gathering"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/events/community-gallery-2.jpg"
                alt="Therapists networking at the event"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/events/community-gallery-3.png"
                alt="Presentation at the Community of Therapists"
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
