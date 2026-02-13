import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parenting Group 2026",
};

export default function EventPage() {
  return (
    <section className="section-white py-16">
      <div className="container-site">
        <h1>Parenting Group 2026</h1>
        <p className="text-dark mb-2">2026</p>
        <p className="text-dark mb-8">Amsterdam</p>
        <p>This event has passed.</p>
      </div>
    </section>
  );
}
