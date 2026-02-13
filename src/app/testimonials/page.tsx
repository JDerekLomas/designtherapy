import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
};

function Testimonial({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <blockquote className="border-l-4 border-yellow-brand pl-6 py-4 mb-8">
      <p className="italic">{quote}</p>
      <footer className="text-small text-dark mt-2">&mdash; {attribution}</footer>
    </blockquote>
  );
}

export default function Testimonials() {
  return (
    <>
      {/* English Testimonials */}
      <section className="section-white py-16">
        <div className="container-site">
          <h1>Testimonials</h1>

          <Testimonial
            quote="Julika's sessions bring design thinking and personal relationships together, and are for couples, who are ready to open a new chapter. If you are thinking about taking the next step, but have yet to understand the practical, emotional or social repercussions of what that next chapter will mean, these sessions are for you."
            attribution="Designer Couple, Amsterdam"
          />

          <Testimonial
            quote="Julika's combination of design thinking tools and relationship coaching allowed us to bring clarity to our plans for the future, and sort through a somewhat charged topic in a simultaneously playful and structured manner."
            attribution="Couple, Amsterdam"
          />

          <Testimonial
            quote="Her sessions involved putting different frames on our ideas for the future, and observing our plans through different lenses. This allowed us to not only understand what we want to do, but what we want to feel, and how we want to be."
            attribution="Married Couple, Online"
          />

          <Testimonial
            quote="We could recognize problems and challenges that might arise down the line. And we walked away with a framework for making structured decisions about our lives, allowing us to be playful about what our future could look like without being overly optimistic nor afraid. As a person, Julika is open and attentive, explorative and sensitive, bringing expertise both as a design thinker and councilor. Above all, she's someone you would trust to help shape your future."
            attribution="Irish Client, Online"
          />

          <Testimonial
            quote="Went through very motivating design sessions, receiving constructive consultations on the growth of our start-up as well as on an individual level. Kudos!"
            attribution="Danish Client in Design Coaching, Online"
          />
        </div>
      </section>

      {/* German Testimonials */}
      <section className="section-yellow py-16">
        <div className="container-site">
          <h2>Erfahrungsberichte</h2>

          <Testimonial
            quote="Mein Partner und ich haben 3 Kinder und unser Leben ist durch einen arbeitsreichen Alltag und viel Organisation gepraegt. Durch 'Couple Coaching' wollten wir uns als Paar naeher kommen, unsere Staerken zu finden, aber auch Facetten mit Redebedarf thematisieren. Die Online-Kennenlernstunde zeigte uns dank hilfreicher instrumentellen Mittel in welchen Gebieten wir Harmonie empfanden und in welchen Gebieten wir unterschiedlicher Meinung waren - wo also fuer Zukunftsplanung einer gemeinsamen Zukunft Bedarf ist."
            attribution="Mother &amp; Partner of 3, Cottbus"
          />

          <Testimonial
            quote="Das Starter-Gespraech brachte uns bereits naeher zusammen, Themen brachten uns zum Schmunzeln, und die Gedanken des Partners wurden besser aufgezeigt. Ausserdem ueberraschten uns auch gewisse Unzufriedenheiten oder Wuensche des Partners."
            attribution="Father &amp; Life Partner, Cologne"
          />

          <Testimonial
            quote="Es war schoen uns mal als richtiges Paar zu erleben, einige intime emotionale Momente zu erleben, dank Julikas Hilfe zur tiefgruendigen Kommunikation ueber unser Leben, unsere Beziehung, unseren Alltag und unsere Gefuehle erreichen."
            attribution="Client, Online"
          />
        </div>
      </section>
    </>
  );
}
