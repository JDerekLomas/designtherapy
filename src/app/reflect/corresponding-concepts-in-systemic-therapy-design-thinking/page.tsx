import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corresponding Concepts in Systemic Therapy & Design Thinking",
};

export default function CorrespondingConceptsPage() {
  return (
    <section className="section-white py-16">
      <div className="container-site max-w-[800px]">
        {/* Header */}
        <h1>
          Corresponding Concepts in Systemic Therapy &amp; Design Thinking
        </h1>
        <p className="text-small text-dark mb-8">
          Julika Lomas &mdash; March 11, 2019
        </p>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full mb-10">
          <Image
            src="/images/reflect/systemic-therapy-design-thinking.png"
            alt="Corresponding Concepts in Systemic Therapy and Design Thinking"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Introduction */}
        <p>
          This article is about mapping corresponding concepts between two
          disciplines &mdash; psychological therapy methods and creative, design
          thinking methods.
        </p>

        <p>
          My background combines psychology and creative design. Having pursued
          a systemic therapy degree, and with experience at Duolingo shaping
          language curriculum, I have been drawn to what I call &ldquo;design
          doing&rdquo; &mdash; a continuous practice that connects these two
          worlds.
        </p>

        {/* Key Definitions */}
        <h2>Key Definitions</h2>

        <h3>Systemic Psychotherapy</h3>
        <p>
          Treatment approach focusing on individuals within relationship systems
          and context, not isolated patients. Systemic therapy views every person
          as embedded in a web of relationships &mdash; families, couples,
          teams &mdash; and sees symptoms as signals from that wider system
          rather than defects in an individual. The therapist works with
          patterns of interaction, communication, and meaning-making to enable
          change.
        </p>

        <h3>Design Thinking</h3>
        <p>
          A human centered problem solving approach emphasizing solutions over
          problems. Design thinking originated in product and service design but
          has since been applied to virtually every domain where people face
          complex, ambiguous challenges. It proceeds through cycles of empathy,
          definition, ideation, prototyping, and testing &mdash; always keeping
          the lived experience of the end user at the center.
        </p>

        {/* Quote */}
        <blockquote className="border-l-4 border-black/20 pl-6 my-8 italic">
          <p className="text-dark">
            &ldquo;A design mindset is not problem-focused, it&rsquo;s solution
            focused and action oriented towards creating a preferred
            future.&rdquo;
          </p>
        </blockquote>

        {/* Concept Pairs */}
        <h2>18 Corresponding Concept Pairs</h2>

        <p>
          Below are eighteen concept pairs, listed alphabetically, that
          illustrate how design thinking and systemic therapy mirror and
          illuminate each other.
        </p>

        <div className="space-y-8 my-10">
          {/* 1 */}
          <div>
            <h4>1. Agile Development = Dynamic Human Systems</h4>
            <p>
              Agile software development embraces iterative cycles, rapid
              feedback, and continuous adaptation &mdash; just as systemic
              therapy recognizes that human systems are dynamic, constantly
              shifting in response to internal and external events. Neither
              process follows a rigid, linear plan; both require the
              practitioner to stay responsive and adjust as new information
              emerges.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h4>2. False Beliefs = Dominant Stories</h4>
            <p>
              In design, false beliefs are the assumptions teams hold about
              users that turn out to be wrong &mdash; they must be surfaced and
              tested. In narrative therapy, dominant stories are the entrenched
              narratives people carry about themselves that limit possibilities.
              Both disciplines insist on questioning what is taken for granted.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h4>3. Desktop Walkthrough = Role Play</h4>
            <p>
              A desktop walkthrough in design is a low-fidelity simulation where
              team members physically move through a service scenario using
              small props. In therapy, role play serves the same purpose &mdash;
              allowing clients to rehearse new behaviors in a safe, contained
              setting before trying them in the real world.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h4>4. Empathy in Design = Self-Compassion, Emotion-Focused Therapy</h4>
            <p>
              Design thinking begins with empathy &mdash; deeply understanding
              the user&rsquo;s experience before proposing solutions. In
              emotion-focused therapy (EFT), developed by Sue Johnson, empathy
              and self-compassion are the foundation of healing. Both
              disciplines recognize that genuine understanding must precede
              meaningful change.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h4>5. Flipping It = Prescribe the Symptom, Strategic Therapy</h4>
            <p>
              Designers sometimes &ldquo;flip&rdquo; a problem &mdash;
              deliberately exploring the opposite of the desired outcome to
              generate fresh ideas. Strategic therapists use a parallel
              technique when they prescribe the symptom, paradoxically
              encouraging the very behavior the client wants to eliminate. The
              surprise of reversal loosens rigid patterns in both cases.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h4>6. Hero&rsquo;s Journey = Desired Alternative Narrative</h4>
            <p>
              Storytelling in design often follows the hero&rsquo;s journey
              arc &mdash; a protagonist faces a challenge, transforms, and
              returns changed. In narrative therapy, the therapist and client
              co-author a desired alternative narrative, a new story in which
              the client moves from struggle to agency and meaning.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h4>7. Human-Centered Practice = Systemic Psychotherapy</h4>
            <p>
              At the broadest level, design thinking&rsquo;s commitment to
              human-centered practice corresponds directly to systemic
              psychotherapy&rsquo;s insistence on seeing the whole person in
              context. Both refuse to reduce people to isolated data points or
              symptoms.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h4>8. Identifying the Real Problem = It Depends</h4>
            <p>
              Designers know that the stated problem is almost never the real
              problem &mdash; it takes research and reframing to find it. In
              therapy, the answer to almost any clinical question begins with
              &ldquo;it depends,&rdquo; because the presenting complaint is
              rarely the whole story. Both fields cultivate the discipline of
              looking beneath the surface.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h4>9. Manipulable Prototype = Weighing Labels Carefully</h4>
            <p>
              A prototype is deliberately rough and manipulable so that users
              feel free to change it. In therapy, labels &mdash; diagnoses,
              descriptions, identity categories &mdash; must be weighed
              carefully because once attached they shape what feels possible.
              Both fields attend to the power of form: how something is
              presented determines how freely people can engage with it.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h4>
              10. Positive/Negative Emotion Override = Designer&rsquo;s Vibe
            </h4>
            <p>
              John and Julie Gottman describe how couples in positive sentiment
              override interpret ambiguous messages charitably, while those in
              negative override see threat everywhere. Designers create a
              similar emotional atmosphere &mdash; the &ldquo;vibe&rdquo; of a
              workshop or product experience primes users to engage openly or
              defensively.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h4>
              11. Prototyping New Service/Product = Prototyping New Thinking,
              Feeling, Behavior
            </h4>
            <p>
              Designers prototype services and products to learn quickly and
              cheaply. Therapists prototype too &mdash; they invite clients to
              try new ways of thinking, feeling, and behaving in small, safe
              experiments. In both cases, the prototype is not the final
              answer; it is a vehicle for learning.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h4>
              12. Questioning in Design Thinking = Questioning in Therapy
            </h4>
            <p>
              &ldquo;One of the biggest problems in design is knowing what
              questions to ask.&rdquo; The same is true in therapy. Both
              designers and therapists spend years honing the art of asking
              questions that open up new territory rather than confirming
              existing assumptions.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h4>
              13. Radical Collaboration = Blurred Boundaries (Bowen)
            </h4>
            <p>
              Design thinking celebrates radical collaboration &mdash; breaking
              down silos so that diverse perspectives converge. Murray
              Bowen&rsquo;s family systems theory warns about blurred
              boundaries, where individuals lose differentiation inside a fused
              system. The correspondence is instructive: collaboration is
              powerful, but without clear boundaries it becomes enmeshment.
            </p>
          </div>

          {/* 14 */}
          <div>
            <h4>
              14. Rip the Brief = Patient Request &amp; Indicated Problem
            </h4>
            <p>
              In design, &ldquo;ripping the brief&rdquo; means challenging and
              rewriting the client&rsquo;s original problem statement. In
              therapy, the clinician distinguishes between the patient&rsquo;s
              request (what they say they want) and the indicated problem (what
              the assessment reveals). Both practices honor the gap between what
              is asked for and what is actually needed.
            </p>
          </div>

          {/* 15 */}
          <div>
            <h4>15. Reframing = Relabeling (Solution Focused Therapy)</h4>
            <p>
              Reframing is a staple of design thinking &mdash; taking a problem
              and deliberately viewing it from a different angle. In solution
              focused therapy, relabeling serves the same function: the
              therapist offers a new description that changes the meaning of an
              experience and opens up new possibilities for action.
            </p>
          </div>

          {/* 16 */}
          <div>
            <h4>16. Service Staging = Experience-Focused Intervention</h4>
            <p>
              Service designers stage experiences &mdash; they choreograph
              touchpoints, environments, and interactions to create a coherent
              user journey. Therapists do something remarkably similar when they
              design experience-focused interventions, carefully structuring a
              session so that the client has a corrective emotional experience.
            </p>
          </div>

          {/* 17 */}
          <div>
            <h4>17. Storytelling = Narrative Therapy</h4>
            <p>
              Storytelling is central to design &mdash; it communicates
              research findings, builds empathy, and persuades stakeholders.
              Narrative therapy, developed by Michael White and David Epston,
              places storytelling at the very heart of therapeutic change.
              &ldquo;The therapist carefully crafts an alternative story that
              allows for better functioning.&rdquo; In both fields, the stories
              we tell shape the realities we inhabit.
            </p>
          </div>

          {/* 18 */}
          <div>
            <h4>18. Wicked Problem = Gridlocked Problem</h4>
            <p>
              Designers use the term &ldquo;wicked problem&rdquo; for challenges
              that resist neat solutions &mdash; problems that are tangled,
              contextual, and never fully resolved. The Gottmans describe
              &ldquo;gridlocked problems&rdquo; in couples: perpetual conflicts
              rooted in deep differences of value or identity. Both fields
              accept that some problems cannot be solved, only managed with
              skill and compassion.
            </p>
          </div>
        </div>

        {/* References */}
        <h2>References &amp; Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li className="text-small text-dark">
            Bill Burnett &amp; Dave Evans &mdash;{" "}
            <em>Designing Your Life</em>
          </li>
          <li className="text-small text-dark">
            Sue Johnson &mdash;{" "}
            <em>Hold Me Tight: Seven Conversations for a Lifetime of Love</em>
          </li>
          <li className="text-small text-dark">
            Dik &amp; Duffy &mdash; Career calling methodology
          </li>
          <li className="text-small text-dark">
            Tim Brown &mdash; Design thinking blog (IDEO)
          </li>
          <li className="text-small text-dark">
            John &amp; Julie Gottman &mdash; Couple therapy approach
          </li>
          <li className="text-small text-dark">
            Dan Nessler &mdash; UX Design methodology
          </li>
        </ul>

        {/* CTA */}
        <div className="border-t border-black/10 pt-8 mt-10">
          <p>
            Have thoughts, feedback, or your own concept pairs to add? Reach
            out at{" "}
            <a
              href="mailto:info@pixelstorystudio.com"
              className="underline hover:opacity-70"
            >
              info@pixelstorystudio.com
            </a>
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center border-t border-black/10 pt-8 mt-10">
          <Link
            href="/reflect"
            className="text-small hover:opacity-70 transition-opacity"
          >
            &larr; All Posts
          </Link>
          <Link
            href="/reflect/learning-to-care-less"
            className="text-small hover:opacity-70 transition-opacity"
          >
            Next: Learning To Care Less &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
