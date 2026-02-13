import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events",
};

const upcomingEvents = [
  {
    title: "Emotional Connection Couple Retreat - Two Days in Fall",
    date: "October 31 & November 1, 2025",
    location: "Villa Oldenhoff, Abcoude",
    description:
      "A couple retreat near Amsterdam this fall. Combined expertise of two couples therapists to ramp up your connection to each other.",
    href: "/events/emotional-connection-couple-retreat",
    image: "/images/events/retreat-hero.jpg",
  },
  {
    title: "9th Community of Therapists Event",
    date: "October 7, 2025",
    location: "Fosbury & Sons, Amsterdam",
    description:
      "Join our growing community of therapists for an evening of connection, learning, and exchange.",
    href: "/events/9h-community-of-therapists-event-oct-7",
    image: "/images/events/9th-community.jpg",
  },
  {
    title: "Designing Motherhood Conversation - Stockholm",
    date: "August 19, 2025",
    location: "Cafe Blom, Stockholm",
    description:
      "A round table conversation about designing motherhood, connected to the museum exhibit.",
    href: "/events/designing-motherhood-lunch-stockholm",
    image: "/images/events/motherhood-stockholm.jpg",
  },
];

const pastEvents = [
  {
    title: "One Couple Therapy Retreat - Two Days in June",
    date: "June 13-14, 2025",
    location: "Villa Oldenhoff, Abcoude",
    href: "/events/one-couple-therapy-retreat-june-2025",
    image: "/images/events/retreat-hero.jpg",
  },
  {
    title: "8th Community of Therapists Event",
    date: "May 14, 2025",
    location: "Amsterdam",
    href: "/events/8th-community-of-therapists-event-may-14-2025",
    image: "/images/events/community-therapists.jpg",
  },
  {
    title: "Designing Motherhood Amsterdam",
    date: "2025",
    location: "Amsterdam",
    href: "/events/designing-motherhood-amsterdam",
    image: "/images/events/motherhood-stockholm.jpg",
  },
  {
    title: "Parenting Group 2026",
    date: "2026",
    location: "Amsterdam",
    href: "/events/parenting-group-2026",
    image: "/images/events/community-therapists.jpg",
  },
  {
    title: "7th Community of Therapists Event",
    date: "June 25, 2025",
    location: "Amsterdam",
    href: "/events/seventh-community-of-therapists-event-june-25",
    image: "/images/events/community-therapists.jpg",
  },
  {
    title: "6th Community of Therapists Event (Maind)",
    date: "March 20, 2024",
    location: "Amsterdam",
    href: "/events/fifth-community-of-therapists-event-dec-13-af9ts",
    image: "/images/events/community-therapists.jpg",
  },
  {
    title: "5th Community of Therapists Event",
    date: "December 13, 2023",
    location: "Amsterdam",
    href: "/events/fifth-community-of-therapists-event-dec-13",
    image: "/images/events/community-therapists.jpg",
  },
  {
    title: "4th Community of Therapists Event",
    date: "October 11, 2023",
    location: "Amsterdam",
    href: "/events/fourth-community-of-therapists-event-oct-11",
    image: "/images/events/community-therapists.jpg",
  },
  {
    title: "3rd Community of Therapists Event",
    date: "March 15, 2023",
    location: "Amsterdam",
    href: "/events/third-community-of-therapists-event-march-15",
    image: "/images/events/community-therapists.jpg",
  },
  {
    title: "2nd Community of Therapists Event",
    date: "November 30, 2022",
    location: "Amsterdam",
    href: "/events/community-of-therapists-event-invite-only",
    image: "/images/events/community-therapists.jpg",
  },
];

function EventCard({
  event,
}: {
  event: {
    title: string;
    date: string;
    location: string;
    description?: string;
    href: string;
    image: string;
  };
}) {
  return (
    <Link href={event.href} className="group block">
      <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-h4 font-light mb-2 group-hover:opacity-70 transition-opacity my-0">
        {event.title}
      </h3>
      <p className="text-small text-dark mb-1">{event.date}</p>
      <p className="text-small text-dark mb-2">{event.location}</p>
      {event.description && (
        <p className="text-small text-dark">{event.description}</p>
      )}
    </Link>
  );
}

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-yellow py-16">
        <div className="container-site">
          <h1>Community Events On- &amp; Offline</h1>
          <p className="text-large max-w-2xl">
            Retreats, community gatherings, and conversations for therapists,
            couples, and anyone designing a more intentional life.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-white py-16">
        <div className="container-site">
          <h2>Upcoming</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {upcomingEvents.map((event) => (
              <EventCard key={event.href} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-white py-16 border-t border-black/10">
        <div className="container-site">
          <h2>Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pastEvents.map((event) => (
              <EventCard
                key={event.href}
                event={{ ...event, description: undefined }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
