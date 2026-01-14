"use client";

import { motion } from "framer-motion";
import { PostIt, MarkerHighlight } from "@/components/ui/PostIt";

const principles = [
  {
    color: "yellow" as const,
    rotation: -2,
    title: "Future-Oriented",
    note: "We don't just analyze the past — we design your future",
    detail: "What do you want to build?",
  },
  {
    color: "blue" as const,
    rotation: 3,
    title: "Systemic View",
    note: "You exist within systems: family, work, relationships",
    detail: "Understand the bigger picture",
  },
  {
    color: "green" as const,
    rotation: -1,
    title: "Fresh Perspectives",
    note: "Every session brings new ways of seeing",
    detail: "Shift happens here",
  },
];

const processSteps = [
  { step: "01", title: "Map", desc: "Understand where you are" },
  { step: "02", title: "Explore", desc: "Discover new possibilities" },
  { step: "03", title: "Prototype", desc: "Try new patterns" },
  { step: "04", title: "Build", desc: "Create lasting change" },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="py-section relative overflow-hidden"
      style={{
        background: `
          linear-gradient(to bottom, #F5F0E8, #FAF8F6)
        `,
      }}
    >
      {/* Whiteboard/cork board texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #C9BBA8 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #C9BBA8 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-4">
            <span className="font-handwriting text-4xl md:text-5xl text-terra-500 block mb-2">
              The Process
            </span>
            Therapy as <MarkerHighlight color="yellow">Design Thinking</MarkerHighlight>
          </h2>
          <p className="body-md text-ink-600 dark:text-cloud-400">
            Like any good design process, we start with understanding, move through
            exploration, and build toward meaningful change.
          </p>
        </motion.div>

        {/* Design Process Steps - like a timeline/flowchart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg relative">
            {/* Tape decorations */}
            <div className="absolute -top-3 left-12 w-16 h-6 bg-[#F5F5DC]/90 rotate-[-3deg] shadow-sm" />
            <div className="absolute -top-3 right-12 w-16 h-6 bg-[#F5F5DC]/90 rotate-[2deg] shadow-sm" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center relative"
                >
                  {/* Arrow connector */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-2 text-terra-300 text-2xl font-handwriting">
                      →
                    </div>
                  )}
                  <div className="font-handwriting text-5xl text-terra-400 mb-2">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl font-medium mb-1">
                    {step.title}
                  </h3>
                  <p className="font-handwriting text-lg text-ink-500">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Guiding Principles */}
        <div className="mb-16">
          <h3 className="font-handwriting text-3xl text-center text-ink-600 mb-8">
            Guiding Principles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30, rotate: principle.rotation * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: principle.rotation }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PostIt
                  color={principle.color}
                  rotation={principle.rotation}
                  size="lg"
                  className="w-full max-w-[240px]"
                >
                  <h4 className="font-display text-xl font-semibold mb-2">
                    {principle.title}
                  </h4>
                  <p className="font-handwriting text-xl mb-3">
                    {principle.note}
                  </p>
                  <p className="text-sm opacity-80 italic">
                    {principle.detail}
                  </p>
                </PostIt>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote - like a note pinned to a board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg relative">
            {/* Pin decoration */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-400 shadow-md" />
            <blockquote className="text-center">
              <p className="font-display text-2xl md:text-3xl font-light text-ink-700 italic leading-relaxed mb-4">
                &ldquo;The quality of our relationships determines the quality of our lives.
                When we learn to design these connections intentionally, everything changes.&rdquo;
              </p>
              <cite className="font-handwriting text-xl text-terra-500 not-italic">
                — Julika Lomas
              </cite>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
