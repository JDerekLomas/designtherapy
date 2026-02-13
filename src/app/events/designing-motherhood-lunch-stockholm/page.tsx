import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Designing Motherhood Conversation - Stockholm",
};

export default function DesigningMotherhoodStockholm() {
  return (
    <>
      {/* Hero */}
      <section className="section-white py-16">
        <div className="container-site">
          <h1>Designing Motherhood Conversation &mdash; Stockholm</h1>
          <h3>Tuesday, August 19, 2025 &mdash; 11:00 AM &ndash; 12:30 PM</h3>
          <p className="text-dark mb-2">
            Cafe Blom, 4 Exercisplan Stockholm, 111 49 Sweden
          </p>
          <p>
            Many things are designed. A hammer is not necessarily as we know it.
            Same as motherhood.
          </p>
          <div className="relative aspect-[16/9] w-full mt-8">
            <Image
              src="/images/events/motherhood-stockholm.jpg"
              alt="Designing Motherhood Conversation in Stockholm"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Round Table Conversation */}
      <section className="section-yellow py-16">
        <div className="container-site">
          <h2>The Round Table Conversation</h2>
          <p>
            Join this special and casual event in Stockholm, Sweden, for the
            occasion of the travelling &lsquo;Designing Motherhood&rsquo;
            museum exhibit. I am inviting you to join for a round table meeting
            at Cafe Blom near the design Museum &lsquo;Ark Des&rsquo;, and to
            chat about the topic &lsquo;Designing Motherhood&rsquo;. This
            precedes an optional and free visit of the actual ArkDes Museum
            thereafter.
          </p>
          <p>
            First, I will briefly introduce the topic of designing motherhood.
            Yes, calling all things maternity, matrescence, motherhood
            &lsquo;natural&rsquo; overlooks all the human-made products,
            services and experiences related to the MMMs. I will suggest a
            shared terminology, and then next, we can chat about our own
            individual touch points with the topic.
          </p>
          <p>
            To document our conversation, there will be material such as a
            shared white canvas, post-its and a prototype for a card set (50
            cards with questions about the topic). So join and contribute a few
            cards to a future product &mdash; designed by mothers.
          </p>
          <p>
            The conversation starts promptly at 11am when the cafe doors open,
            and ends before or at 12.30pm.
          </p>
        </div>
      </section>

      {/* Background */}
      <section className="section-white py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2>Background</h2>
              <p>
                I first encountered the curators Michelle Millar Fisher (&amp;
                Amber Winick) and Tekara in my role as community designer for
                the UC San Diego design lab and created a recorded chat &mdash;
                introducing this venture to the lab&rsquo;s online community.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/events/motherhood-curators.png"
                alt="Julika Lomas as host, and Michelle Fisher of @designingmotherhood &amp; Tekara Gainey of @maternitycarecoalition"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-small text-dark italic mt-4">
            Julika Lomas as host, and Michelle Fisher of @designingmotherhood
            &amp; Tekara Gainey of @maternitycarecoalition
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16">
        <div className="container-site text-center">
          <h2 className="text-white">Interested?</h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Follow Design Therapy on Instagram or get in touch for future
            Designing Motherhood conversations.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Link
              href="https://www.instagram.com/designtherapyspace/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill"
            >
              Follow on Instagram
            </Link>
            <Link href="/schedule" className="btn-pill-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
