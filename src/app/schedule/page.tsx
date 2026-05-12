import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule — Design Therapy",
};

export default function SchedulePage() {
  return (
    <main className="section-padding">
      <div className="max-w-[800px] mx-auto">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-8">
            Scheduling our First Call
          </h1>

          <div className="space-y-6 text-[#4a4a4a] leading-relaxed">
            <p>
              First thing, you can{" "}
              <strong className="text-[#1a1a1a]">
                either email me at{" "}
                <a
                  href="mailto:info@pixelstorystudio.com"
                  className="underline hover:text-[#4a4a4a] transition-colors"
                >
                  info@pixelstorystudio.com
                </a>{" "}
                with your questions and requests.
              </strong>{" "}
              You can keep it very brief and there is no need to explain in
              detail (the email is via gmail services). Alternatively,{" "}
              <strong className="text-[#1a1a1a]">
                reach out via WhatsApp Business at 06-15444170 with a message.
              </strong>
            </p>

            <p>
              Next, we can either agree for{" "}
              <strong className="text-[#1a1a1a]">
                a free 10-min phone call or schedule a starter session
              </strong>{" "}
              (both via a protected platform). These sessions are 60 or 90 mins
              in length in person at the private practice in Amsterdam
              Veluwebuurt or a video call via the protected platform.
            </p>

            <p>
              Once you became a registered client with me and we begin our joint
              work,{" "}
              <strong className="text-[#1a1a1a]">
                you will have access to easy self scheduling.
              </strong>
            </p>

            <p>
              Currently, I don&apos;t waitlist and have availability during
              working hours on
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Mondays</li>
              <li>Tuesdays (long days)</li>
              <li>Thursdays (long days)</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-8">
            Looking for Speaker?
          </h2>

          <div className="space-y-6 text-[#4a4a4a] leading-relaxed">
            <p>
              A lightning talk at work or in your community can just spark the
              curiosity that you long for. I offer custom presentations,
              workshops and also therapy groups on request. With years of
              experience in the mental health and design spaces, you&apos;ve come
              to the right place. For all inquiries - collaboration, business,
              and feedback on site, please email:{" "}
              <a
                href="mailto:info@pixelstorystudio.com"
                className="text-[#1a1a1a] underline hover:text-[#4a4a4a] transition-colors"
              >
                info@pixelstorystudio.com
              </a>
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Stating your general question</li>
              <li>Subject</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
