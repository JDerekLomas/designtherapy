import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "8th Community of Therapists Event",
};

export default function EventPage() {
  return (
    <section className="section-white py-16">
      <div className="container-site">
        <h1>8th Community of Therapists Event</h1>
        <p className="text-dark mb-2">May 14, 2025</p>
        <p className="text-dark mb-8">Amsterdam</p>
        <p>This event has passed.</p>
      </div>
    </section>
  );
}
