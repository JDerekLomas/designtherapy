import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Full-width Hero Banner Image */}
      <section className="relative w-full">
        <div className="relative w-full aspect-[2.42/1]">
          <Image
            src="/images/julika-hero.jpg"
            alt="Julika Lomas, Design Therapy founder"
            fill
            priority
            className="object-cover object-[center_25%]"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Main Text Section */}
      <section className="section-padding bg-white">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[1.75rem] md:text-[2.25rem] leading-tight mb-2">
            Design Therapy &ndash;
          </h1>
          <h2 className="text-[1.25rem] md:text-[1.5rem] font-light text-[#1a1a1a] mb-8 italic">
            New methods for building mental health
          </h2>

          <div className="space-y-4 text-[0.9375rem] text-[#4a4a4a] leading-relaxed">
            <p>
              Psychotherapy and Coaching is for people who want to change their lives in positive ways.
              Design Therapy is for people who&rsquo;d like to use promising new methods to make those
              changes to address current issues while also building well-being for the future.
            </p>
            <p>
              Who, exactly, is Design Therapy for? For individuals, couples and small human systems.
              It is for people looking for fresh perspectives. That means taking a thoughtful look at
              your life&mdash;not just your past, but your present, and, crucially, designing your future.
            </p>
          </div>
        </div>
      </section>

      {/* Two Images Side by Side */}
      <section className="section-padding bg-white pt-0">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Couples Coaching */}
            <div>
              <div className="relative aspect-[4/3] mb-3">
                <Image
                  src="/images/couples-coaching.jpg"
                  alt="Couples coaching - Design Your Future Together on the couch or online"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-[0.8125rem] text-[#4a4a4a] leading-relaxed">
                Couples Coaching. &ldquo;Design Your Future Together&rdquo; on the couch or online.
              </p>
            </div>

            {/* Rope Method */}
            <div>
              <div className="relative aspect-[4/3] mb-3">
                <Image
                  src="/images/rope-method.jpg"
                  alt="Off the couch and into an embodied exercise - Rope Method for Design Your Life"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-[0.8125rem] text-[#4a4a4a] leading-relaxed">
                Off the couch and into an embodied exercise. Rope Method for &ldquo;Design Your Life&rdquo;
              </p>
            </div>
          </div>

          {/* Footnote text */}
          <div className="mt-8 space-y-2 text-[0.8125rem] text-[#8a8a8a]">
            <p>
              * People shown here are peers helping me to visualize the work &ndash; never clients.
            </p>
            <p>
              All work is strictly confidential.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
