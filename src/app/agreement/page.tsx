import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agreement",
};

export default function Agreement() {
  return (
    <section className="section-white py-16">
      <div className="container-site max-w-[800px]">
        <h1>Design Therapy Agreement</h1>

        <p>
          This agreement, between Design Therapist Julika Lomas and the
          client(s), will begin as you choose &ldquo;I agree.&rdquo; The fee per
          session(s) are listed under{" "}
          <Link href="/services" className="underline">
            services
          </Link>
          .
        </p>

        <h2>Cancellation Policy</h2>
        <p>
          If I cancel my Design Therapy session less than 24 hours in advance
          (unless there is a severe reason for the cancellation, such as an
          emergency) or in case of no show, the full price of the session will be
          charged.
        </p>
        <p>
          In the event of the therapist not being able to provide the session due
          to their own health, as much notice as possible will be given and an
          alternative time will be offered.
        </p>

        <h2>Services</h2>
        <p>
          The services provided by the design therapist to clients is
          psychotherapy delivered in person or online via zoom. This therapy is
          designed jointly with the client and addresses specific personal and
          relational topics, projects, business successes, or general conditions
          in the clients&rsquo; life or profession.
        </p>

        <h2>Confidentiality</h2>
        <p>
          The design therapist promises the client that all information provided
          to the design therapist will be kept strictly confidential. However,
          the therapist is a mandated reporter with two exceptions:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-8">
          <li className="text-small text-dark">
            If your therapist has reasonable suspicion or knowledge that abuse or
            neglect occurs.
          </li>
          <li className="text-small text-dark">
            If you may be a danger to yourself or threatening serious bodily harm
            to another.
          </li>
        </ol>

        <h2>Therapeutic Relationship</h2>
        <p>
          Throughout the working relationship, the design therapist will engage
          in direct and personal conversations. The client acknowledges that
          therapeutic power depends on client investment and agrees to maintain
          that commitment.
        </p>
        <p>
          If the client believes the Design Therapy is not working as desired,
          the client will communicate that belief and take action to return the
          power to the Design Therapy relationship.
        </p>
      </div>
    </section>
  );
}
