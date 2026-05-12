export default function Footer() {
  return (
    <footer className="bg-[#f5e642] text-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-[4vw] py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-3 text-[0.875rem]">
            <p className="font-medium">Design Therapy</p>
            <p>
              Betuwestraat in the{" "}
              <a
                href="https://maps.google.com/?q=Veluwebuurt,Amsterdam,Netherlands"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Veluwebuurt
              </a>
            </p>
            <p>Amsterdam, The Netherlands</p>
            <p>
              <a href="mailto:info@pixelstorystudio.com" className="underline">
                info@pixelstorystudio.com
              </a>
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-3 text-[0.875rem]">
            <p>Sessions offered in English, German and now also Dutch</p>
            <p>
              In person or per{" "}
              <span className="underline">protected video calls</span>
            </p>
            <div className="pt-2 space-y-2">
              <p>
                <a
                  href="https://www.instagram.com/designtherapyspace/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Instagram
                </a>
                {" & "}
                <a
                  href="https://medium.com/@yeaahrright"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Medium Blog
                </a>
              </p>
              <p>
                <a href="/terms" className="underline">
                  Terms &amp; Conditions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
