"use client";

import { motion } from "framer-motion";
import { Compass, Heart, Layers, Sparkles } from "lucide-react";

const approaches = [
  {
    icon: Compass,
    title: "Future-Oriented",
    description:
      "Rather than dwelling solely on the past, we focus on designing the future you want to create. Your history informs but doesn't define your path forward.",
  },
  {
    icon: Heart,
    title: "The Rope Method",
    description:
      "A unique embodied practice that makes relationship dynamics visible and tangible. Through physical exercises, patterns become clear and transformation becomes possible.",
  },
  {
    icon: Layers,
    title: "Systemic Perspective",
    description:
      "We exist within systems—families, relationships, organizations. Understanding these interconnections reveals new possibilities for change and growth.",
  },
  {
    icon: Sparkles,
    title: "Fresh Perspectives",
    description:
      "Every session brings new ways of seeing. By shifting perspective, what seemed stuck becomes fluid, and new paths emerge naturally.",
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="py-section bg-cloud-100 dark:bg-ink-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-terra-100/50 to-transparent dark:from-terra-900/20" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-sage-100/50 to-transparent dark:from-sage-900/20" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="label mb-4 block">The Approach</span>
          <h2 className="heading-lg mb-6">
            A method that moves
            <span className="text-terra-500 dark:text-terra-400"> beyond words</span>
          </h2>
          <p className="body-md text-ink-600 dark:text-cloud-400">
            Combining psychotherapy, coaching, and embodied practices to create
            lasting transformation. This isn&apos;t just talk therapy—it&apos;s an
            experience that engages your whole being.
          </p>
        </motion.div>

        {/* Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 md:p-10 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-terra-100 dark:bg-terra-900/50 flex items-center justify-center group-hover:bg-terra-500 group-hover:text-white transition-all duration-300">
                    <approach.icon className="w-6 h-6 text-terra-600 dark:text-terra-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-3 group-hover:text-terra-600 dark:group-hover:text-terra-400 transition-colors">
                      {approach.title}
                    </h3>
                    <p className="body-md text-ink-600 dark:text-cloud-400">
                      {approach.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <p className="font-display text-2xl md:text-3xl font-light text-ink-700 dark:text-cloud-300 italic leading-relaxed">
            &ldquo;The quality of our relationships determines the quality of our lives.
            When we learn to design these connections intentionally, everything changes.&rdquo;
          </p>
          <cite className="mt-6 block label not-italic">— Julika Lomas</cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
