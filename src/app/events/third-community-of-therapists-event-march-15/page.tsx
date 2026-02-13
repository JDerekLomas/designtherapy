import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3rd Community of Therapists Event",
};

export default function EventPage() {
  return (
    <section className="section-white py-16">
      <div className="container-site">
        <h1>3rd Community of Therapists Event</h1>
        <p className="text-dark mb-2">March 15, 2023</p>
        <p className="text-dark mb-8">Amsterdam</p>
        <p>This event has passed.</p>
      </div>
    </section>
  );
}
