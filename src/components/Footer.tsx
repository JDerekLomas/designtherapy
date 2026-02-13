import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-yellow py-12">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <p className="text-[16px] font-light mb-1">Design Therapy</p>
            <p className="text-small text-dark">
              Betuwestraat in the{" "}
              <Link
                href="https://www.google.com/maps/place/Design+Therapy+Space/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Veluwebuurt
              </Link>
            </p>
            <p className="text-small text-dark">Amsterdam, The Netherlands</p>
            <p className="text-small text-dark mt-2">
              <Link href="mailto:info@pixelstorystudio.com" className="underline">
                info@pixelstorystudio.com
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="md:text-right">
            <p className="text-small text-dark mb-1">
              Sessions offered in English, German and now also Dutch.
            </p>
            <p className="text-small text-dark mb-4">
              In person or per{" "}
              <Link
                href="https://www.mijndiad.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                protected video calls
              </Link>
              .
            </p>
            <div className="flex gap-4 md:justify-end">
              <Link
                href="https://www.instagram.com/designtherapyspace/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small underline"
              >
                Instagram
              </Link>
              <span className="text-small">&amp;</span>
              <Link
                href="https://medium.com/@yeaahrright"
                target="_blank"
                rel="noopener noreferrer"
                className="text-small underline"
              >
                Medium Blog
              </Link>
            </div>
            <div className="mt-2">
              <Link href="/terms" className="text-small underline">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
