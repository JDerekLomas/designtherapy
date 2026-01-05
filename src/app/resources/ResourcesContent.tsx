"use client";

import { motion } from "framer-motion";
import { PostIt, MarkerHighlight } from "@/components/ui/PostIt";
import { Download, ExternalLink, Lightbulb, Target, Users, Repeat, ArrowRight } from "lucide-react";
import Link from "next/link";

const designThinkingPhases = [
  {
    phase: "Empathize",
    icon: Users,
    color: "pink" as const,
    description: "Understand your own experience deeply before trying to change it.",
    inTherapy: "What am I actually feeling? What patterns keep showing up?",
    exercise: "Body Scan: Spend 5 minutes noticing where you feel tension, ease, emotion in your body right now.",
  },
  {
    phase: "Define",
    icon: Target,
    color: "blue" as const,
    description: "Frame the real problem, not just the symptoms.",
    inTherapy: "What's the core issue beneath the surface complaints?",
    exercise: "5 Whys: Take a problem and ask 'why?' five times to find the root cause.",
  },
  {
    phase: "Ideate",
    icon: Lightbulb,
    color: "yellow" as const,
    description: "Generate possibilities without judgment.",
    inTherapy: "What could be different? What would I try if failure wasn't possible?",
    exercise: "Possibility Brainstorm: Write 20 possible responses to your situation. Don't filter.",
  },
  {
    phase: "Prototype",
    icon: Repeat,
    color: "green" as const,
    description: "Test small changes in real life.",
    inTherapy: "What's one tiny experiment I can try this week?",
    exercise: "Micro-experiment: Choose one new behavior and commit to trying it 3 times.",
  },
];

const practicalTools = [
  {
    title: "The Relationship Map",
    description: "Visualize the dynamics between you and important people in your life. See patterns, distance, and connection at a glance.",
    timeNeeded: "20 minutes",
    materials: "Paper, colored pens",
    steps: [
      "Draw yourself in the center of a large paper",
      "Add important people at distances that feel right",
      "Draw lines between you and them - thick for strong connection, dotted for tension",
      "Notice: Who's close? Who's far? Where are the tangles?",
    ],
  },
  {
    title: "Future Self Letter",
    description: "Design your future by writing from it. A powerful way to clarify what you actually want.",
    timeNeeded: "30 minutes",
    materials: "Paper or journal",
    steps: [
      "Imagine yourself 2 years from now, having resolved your current challenges",
      "Write a letter FROM that future self TO your present self",
      "Describe what life looks like, what changed, what you learned",
      "Read it back and notice what feels most true",
    ],
  },
  {
    title: "The Needs Audit",
    description: "Before solving problems, check if your basic needs are met. Often the 'real' issue is simpler.",
    timeNeeded: "10 minutes",
    materials: "Just reflection",
    steps: [
      "Rate 1-10: Sleep, nutrition, movement, connection, meaning",
      "Which is lowest? That might be your starting point",
      "Design one small improvement for your lowest-rated need",
      "Try it for a week before tackling bigger issues",
    ],
  },
  {
    title: "Pattern Interruption Cards",
    description: "Create physical reminders to break automatic reactions. Design thinking meets behavioral change.",
    timeNeeded: "15 minutes to make, ongoing to use",
    materials: "Index cards or post-its",
    steps: [
      "Identify 3 automatic reactions you want to change",
      "For each, write a 'pause prompt' question on a card",
      "Examples: 'What do I actually need right now?' 'What would calm me do?'",
      "Place cards where you'll see them at trigger moments",
    ],
  },
];

const frameworks = [
  {
    name: "Double Diamond",
    source: "British Design Council",
    application: "Navigate any life decision by diverging (exploring options) then converging (choosing one) twice: once for defining the problem, once for finding solutions.",
  },
  {
    name: "Jobs to Be Done",
    source: "Clayton Christensen",
    application: "Instead of asking 'What's wrong with me?', ask 'What job am I hiring this behavior to do?' Anxiety, for example, is often hired to protect us from disappointment.",
  },
  {
    name: "Rapid Prototyping",
    source: "IDEO",
    application: "Don't wait until you have the perfect plan. Try rough versions of new behaviors quickly, learn from them, and iterate.",
  },
  {
    name: "How Might We",
    source: "Design Thinking",
    application: "Reframe problems as opportunities: 'How might I turn this conflict into connection?' 'How might we make difficult conversations easier?'",
  },
];

export function ResourcesContent() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] dark:bg-ink-900 pt-32 pb-20">
      {/* Hero */}
      <section className="container-wide mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="heading-xl mb-6">
            <span className="font-handwriting text-4xl md:text-5xl text-terra-500 block mb-2">
              Your Toolkit
            </span>
            <MarkerHighlight color="yellow">Design Thinking</MarkerHighlight> for Life
          </h1>
          <p className="body-lg text-ink-600 dark:text-cloud-400">
            Practical frameworks, exercises, and tools you can use right now.
            The same approaches that help designers solve complex problems can help you
            navigate life, relationships, and personal growth.
          </p>
        </motion.div>
      </section>

      {/* Design Thinking Applied to Life */}
      <section className="container-wide mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative"
        >
          {/* Tape decorations */}
          <div className="absolute -top-3 left-12 w-16 h-6 bg-[#F5F5DC]/90 rotate-[-3deg] shadow-sm" />
          <div className="absolute -top-3 right-12 w-16 h-6 bg-[#F5F5DC]/90 rotate-[2deg] shadow-sm" />

          <h2 className="heading-md mb-4 text-center">
            <span className="font-handwriting text-3xl text-terra-500 block mb-2">
              The Framework
            </span>
            Design Thinking → Life Design
          </h2>
          <p className="body-md text-ink-600 text-center max-w-2xl mx-auto mb-12">
            Design thinking isn&apos;t just for products—it&apos;s a human-centered approach
            to any challenge. Here&apos;s how each phase applies to personal growth:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designThinkingPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PostIt color={phase.color} rotation={index % 2 === 0 ? -2 : 2} size="lg" className="h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <phase.icon className="w-5 h-5" />
                    <h3 className="font-display text-xl font-bold">{phase.phase}</h3>
                  </div>
                  <p className="text-sm mb-3 opacity-90">{phase.description}</p>
                  <p className="font-handwriting text-lg mb-3 italic">
                    &ldquo;{phase.inTherapy}&rdquo;
                  </p>
                  <div className="pt-3 border-t border-current/20">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1">Try This:</p>
                    <p className="text-sm">{phase.exercise}</p>
                  </div>
                </PostIt>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Practical Tools */}
      <section className="container-wide mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">
            <span className="font-handwriting text-3xl text-terra-500 block mb-2">
              Exercises You Can Do Now
            </span>
            Practical <MarkerHighlight color="green">Tools</MarkerHighlight>
          </h2>
          <p className="body-md text-ink-600 max-w-2xl mx-auto">
            Designed for immediate use. No therapist required—though they work great
            in session too.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practicalTools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg relative group hover:shadow-xl transition-shadow"
            >
              {/* Pin decoration */}
              <div className="absolute -top-2 left-8 w-4 h-4 rounded-full bg-red-400 shadow-md" />

              <div className="flex items-start justify-between mb-4">
                <h3 className="heading-sm">{tool.title}</h3>
                <span className="font-handwriting text-lg text-terra-500">{tool.timeNeeded}</span>
              </div>

              <p className="body-md text-ink-600 mb-4">{tool.description}</p>

              <p className="text-sm text-ink-500 mb-4">
                <span className="font-semibold">You&apos;ll need:</span> {tool.materials}
              </p>

              <ol className="space-y-2">
                {tool.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink-600">
                    <span className="font-handwriting text-xl text-terra-500 font-bold">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Frameworks Reference */}
      <section className="container-wide mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">
            <span className="font-handwriting text-3xl text-terra-500 block mb-2">
              Borrow from the Best
            </span>
            Design <MarkerHighlight color="blue">Frameworks</MarkerHighlight>
          </h2>
          <p className="body-md text-ink-600 max-w-2xl mx-auto">
            These frameworks were created for design and business challenges,
            but they&apos;re surprisingly powerful for life design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-ink-100"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-display text-xl font-semibold">{framework.name}</h3>
                <span className="font-handwriting text-sm text-ink-500">via {framework.source}</span>
              </div>
              <p className="body-sm text-ink-600">{framework.application}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ink-900 dark:bg-ink-800 rounded-2xl p-8 md:p-12 text-center text-cloud-100 relative overflow-hidden"
        >
          <div className="absolute top-4 right-8 rotate-6">
            <PostIt color="yellow" rotation={6} size="sm">
              <span className="font-handwriting">Ready?</span>
            </PostIt>
          </div>

          <h2 className="heading-md mb-4">
            Want to go deeper?
          </h2>
          <p className="body-md text-cloud-400 max-w-xl mx-auto mb-8">
            These tools are powerful on their own, but they work even better with
            a guide. Let&apos;s design your next chapter together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#schedule" className="btn-primary bg-terra-500 hover:bg-terra-600 border-none">
              Book a Session
            </Link>
            <Link href="/blog" className="btn-secondary border-cloud-300 text-cloud-100 hover:bg-cloud-100 hover:text-ink-900">
              Read the Blog
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
