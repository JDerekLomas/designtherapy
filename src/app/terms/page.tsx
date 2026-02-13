import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function Terms() {
  return (
    <section className="section-white py-16">
      <div className="container-site max-w-[800px]">
        <h1>Terms &amp; Conditions</h1>
        <p>
          The full Terms &amp; Conditions for Design Therapy are available as a
          PDF document.
        </p>
        <p>
          <a
            href="/downloads/terms-and-conditions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill"
          >
            Download Terms &amp; Conditions (PDF)
          </a>
        </p>
      </div>
    </section>
  );
}
