import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-white py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/hero-portrait.jpg"
                alt="Julika Lomas, Design Therapist"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <h1>Design Therapy &mdash;</h1>
              <h3>New methods for building mental health</h3>
              <p>
                Psychotherapy and Coaching targets people seeking positive life
                changes. Design Therapy targets those desiring innovative methods
                to address current challenges while fostering future well-being.
                For individuals, couples and small human systems. It targets
                people seeking fresh perspectives. That means examining your life
                thoughtfully&mdash;not just past, but present, and crucially,
                designing your future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Couples Coaching Image */}
      <section className="section-white py-12">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="relative aspect-[4/3] w-full mb-4">
                <Image
                  src="/images/couples-coaching.jpg"
                  alt="Couples Coaching - Design Your Future Together on the couch or online"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-small text-dark">
                Couples Coaching &lsquo;Design Your Future Together&rsquo; on
                the couch or online
              </p>
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full mb-4">
                <Image
                  src="/images/embodied-exercise.jpg"
                  alt="Off the Couch and into embodied exercise, Rope Method for Design Your Life"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-small text-dark">
                Off the Couch and into embodied exercise, Rope Method for
                &lsquo;Design Your Life&rsquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-white pb-12">
        <div className="container-site">
          <p className="text-small text-dark italic">
            *People shown are peers helping visualize the work &mdash; never
            clients. All work is strictly confidential.
          </p>
        </div>
      </section>
    </>
  );
}
