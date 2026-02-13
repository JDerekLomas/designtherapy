import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
};

export default function Schedule() {
  return (
    <>
      {/* Scheduling Section */}
      <section className="section-white py-16">
        <div className="container-site">
          <h1>Scheduling our First Call</h1>
          <p>
            First thing, you can either email me at{" "}
            <a
              href="mailto:info@pixelstorystudio.com"
              className="underline"
            >
              info@pixelstorystudio.com
            </a>{" "}
            with your questions and requests. You can keep it very brief and
            there is no need to explain in detail (the email is via gmail
            services). Alternatively, reach out via WhatsApp Business at{" "}
            <a
              href="https://wa.me/31615444170"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              06-15444170
            </a>{" "}
            with a message.
          </p>
          <p>
            Next, we can either agree for a free 10-min phone call or schedule
            a starter session (both via a protected platform). These sessions
            are 60 or 90 mins in length in person at the private practice in
            Amsterdam Veluwebuurt or a video call via the protected platform.
          </p>
          <p>
            Once you became a registered client with me and we begin our joint
            work, you will have access to easy self scheduling.
          </p>
        </div>
      </section>

      {/* Availability */}
      <section className="section-yellow py-12">
        <div className="container-site">
          <h2>Availability</h2>
          <p>
            Currently, I don&rsquo;t waitlist and have availability during
            working hours on:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li className="text-small text-dark">Mondays</li>
            <li className="text-small text-dark">
              Tuesdays (long days)
            </li>
            <li className="text-small text-dark">
              Thursdays (long days)
            </li>
          </ul>
          <p>
            Sessions take place in person at the Design Therapy space in the
            Veluwebuurt, Amsterdam, or via{" "}
            <a
              href="https://www.mijndiad.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              secure video call
            </a>
            .
          </p>
        </div>
      </section>

      {/* Looking for a Speaker */}
      <section className="section-white py-12">
        <div className="container-site">
          <h2>Looking for a Speaker?</h2>
          <p>
            A lightning talk at work or in your community can just spark the
            curiosity that you long for. I offer custom presentations, workshops
            and also therapy groups on request. With years of experience in the
            mental health and design spaces, you&rsquo;ve come to the right
            place. For all inquiries &mdash; collaboration, business, and
            feedback on site, please email:{" "}
            <a
              href="mailto:info@pixelstorystudio.com"
              className="underline"
            >
              info@pixelstorystudio.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
