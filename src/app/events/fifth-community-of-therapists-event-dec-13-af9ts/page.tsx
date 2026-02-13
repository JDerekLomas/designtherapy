import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "6th Community of Therapists Event (Maind)",
};

export default function EventPage() {
  return (
    <section className="section-white py-16">
      <div className="container-site">
        <h1>6th Community of Therapists Event (Maind)</h1>
        <p className="text-dark mb-2">March 20, 2024</p>
        <p className="text-dark mb-8">Amsterdam</p>
        <p>This event has passed.</p>
      </div>
    </section>
  );
}
