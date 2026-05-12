import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Events — Design Therapy',
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="section-padding max-w-[800px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-3">
            Community Events On- &amp; Offline
          </h1>
          <h2 className="text-lg md:text-xl font-light text-[#4a4a4a]">
            Past &amp; Upcoming Events
          </h2>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#1a1a1a] mb-8 font-medium">
            Upcoming
          </h3>

          {/* 4-Week Parenting Group */}
          <div className="border border-[#e8e8e8] rounded-sm overflow-hidden mb-8">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/event-parenting.jpg"
                alt="4-Week Parenting Group"
                fill
                className="object-cover"
                sizes="(max-width: 800px) 100vw, 800px"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-[#888] mb-2">
                Tuesday, March 3, 2026 &middot; 11:00 AM &ndash; 12:15 PM
              </div>
              <h3 className="text-2xl font-light text-[#1a1a1a] mb-4">
                4-Week Parenting Group
              </h3>
              <a
                href="#"
                className="text-sm font-medium text-[#1a1a1a] hover:opacity-70 transition-opacity"
              >
                View Event &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Recent / Past Events */}
        <section className="mb-16">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#1a1a1a] mb-8 font-medium">
            Recent &amp; Past Events
          </h3>

          <div className="space-y-8">
            {/* Emotional Connection Couple Retreat */}
            <div className="border border-[#e8e8e8] rounded-sm overflow-hidden">
              <div className="md:flex">
                <div className="relative w-full md:w-[320px] shrink-0 aspect-[3/2] md:aspect-auto">
                  <Image
                    src="/images/event-retreat.jpg"
                    alt="Emotional Connection Couple Retreat"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[0.6875rem] uppercase tracking-wider bg-[#f9f7f4] text-[#888] px-2 py-0.5 rounded-sm">
                      retreats
                    </span>
                  </div>
                  <h4 className="text-xl font-light text-[#1a1a1a] mb-2">
                    Emotional Connection Couple Retreat
                  </h4>
                  <div className="text-sm text-[#888] mb-1">
                    October 31 &ndash; November 1, 2025 &middot; 9:00 AM &ndash; 10:00 AM
                  </div>
                  <div className="text-sm text-[#888] mb-3">
                    Voetangelweg, Abcoude, Netherlands
                  </div>
                  <p className="text-[0.9375rem] text-[#4a4a4a] leading-relaxed mb-4">
                    A couple retreat in Amsterdam at the start of the summer? Combined expertise
                    of two couples therapists to ramp up your connection to each other.
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-[#1a1a1a] hover:opacity-70 transition-opacity"
                  >
                    View Event &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Community of Therapists Event */}
            <div className="border border-[#e8e8e8] rounded-sm overflow-hidden">
              <div className="md:flex">
                <div className="relative w-full md:w-[320px] shrink-0 aspect-[3/2] md:aspect-auto">
                  <Image
                    src="/images/event-community.jpg"
                    alt="Community of Therapists Event"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-light text-[#1a1a1a] mb-2">
                    Community of Therapists Event
                  </h4>
                  <div className="text-sm text-[#888] mb-1">
                    October 7, 2025 &middot; 12:30 PM &ndash; 2:00 PM
                  </div>
                  <div className="text-sm text-[#888] mb-3">
                    Fosbury &amp; Sons, Prinsengracht, Amsterdam
                  </div>
                  <p className="text-[0.9375rem] text-[#4a4a4a] leading-relaxed mb-4">
                    Free event at co-working space. An invite-only gathering to build a small,
                    yet possibly growing supportive community of mental health providers.
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-[#1a1a1a] hover:opacity-70 transition-opacity"
                  >
                    View Event &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Designing Motherhood Conversation - Stockholm */}
            <div className="border border-[#e8e8e8] rounded-sm overflow-hidden">
              <div className="md:flex">
                <div className="relative w-full md:w-[320px] shrink-0 aspect-[3/2] md:aspect-auto">
                  <Image
                    src="/images/event-stockholm.jpg"
                    alt="Designing Motherhood Conversation - Stockholm"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-light text-[#1a1a1a] mb-2">
                    Designing Motherhood Conversation &ndash; Stockholm
                  </h4>
                  <div className="text-sm text-[#888] mb-1">
                    August 19, 2025 &middot; 11:00 AM &ndash; 12:30 PM
                  </div>
                  <div className="text-sm text-[#888] mb-3">
                    Cafe Blom, Stockholm, Sweden
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-[#1a1a1a] hover:opacity-70 transition-opacity"
                  >
                    View Event &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Online Group Therapy for Couples */}
            <div className="border border-[#e8e8e8] rounded-sm overflow-hidden p-6">
              <h4 className="text-xl font-light text-[#1a1a1a] mb-2">
                Online Group Therapy for Couples (weekly)
              </h4>
              <p className="text-[0.9375rem] text-[#4a4a4a] leading-relaxed mb-2">
                If you are following Design Your Future Together sessions and are interested in
                a group therapy trajectory &ndash; please discuss this with your therapist or
                leave a request in the intake.
              </p>
              <p className="text-[0.9375rem] text-[#888] leading-relaxed">
                Groups are by invite only, and scheduled based on growing demand.
              </p>
            </div>

            {/* Info Nights: Group Therapy */}
            <div className="border border-[#e8e8e8] rounded-sm overflow-hidden p-6">
              <h4 className="text-xl font-light text-[#1a1a1a] mb-2">
                Info Nights: Group Therapy &ndash; is it for you?
              </h4>
              <p className="text-[0.9375rem] text-[#4a4a4a] leading-relaxed">
                30 minute online info session to explore your fit for the weekly online
                Group Therapy for Couples.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
