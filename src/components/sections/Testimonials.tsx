"use client";

import { motion } from "framer-motion";
import { PostIt } from "@/components/ui/PostIt";

const testimonials = [
  {
    quote:
      "The Rope Method revealed patterns we never knew existed. We finally see our relationship clearly.",
    author: "Couples client",
    color: "yellow" as const,
    rotation: -3,
  },
  {
    quote:
      "I came seeking clarity and found so much more. The embodied approach changed everything.",
    author: "Individual client",
    color: "pink" as const,
    rotation: 2,
  },
  {
    quote:
      "Understanding my place in larger patterns gave me both freedom and direction.",
    author: "Systemic work client",
    color: "blue" as const,
    rotation: -2,
  },
  {
    quote:
      "It's like having a design partner for your life. Practical, insightful, transformative.",
    author: "Individual client",
    color: "green" as const,
    rotation: 4,
  },
  {
    quote:
      "We learned to prototype new ways of being together. Our relationship is our ongoing project now.",
    author: "Couples client",
    color: "orange" as const,
    rotation: -1,
  },
];

export function Testimonials() {
  return (
    <section
      className="py-section relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, #FAF8F6 0%, #F5F0E8 100%)`,
      }}
    >
      {/* Cork board texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
        }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            <span className="font-handwriting text-4xl md:text-5xl text-terra-500 block mb-2">
              Feedback Wall
            </span>
            What clients say
          </h2>
          <p className="body-md text-ink-600 max-w-xl mx-auto">
            Anonymous notes from those who&apos;ve walked this path
          </p>
        </motion.div>

        {/* Testimonials as scattered post-its */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop: scattered layout */}
          <div className="hidden md:block relative h-[500px]">
            {testimonials.map((testimonial, index) => {
              // Position each post-it in a scattered but balanced way
              const positions = [
                { top: "0%", left: "5%" },
                { top: "10%", left: "55%" },
                { top: "35%", left: "25%" },
                { top: "40%", left: "70%" },
                { top: "60%", left: "10%" },
              ];
              const pos = positions[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotate: testimonial.rotation * 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: testimonial.rotation }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="absolute"
                  style={{ top: pos.top, left: pos.left }}
                >
                  <PostIt
                    color={testimonial.color}
                    rotation={testimonial.rotation}
                    size="lg"
                    className="w-[280px]"
                  >
                    <p className="font-handwriting text-xl text-ink-700 mb-4 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <p className="text-sm text-ink-500 italic">
                      — {testimonial.author}
                    </p>
                  </PostIt>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: stacked grid */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PostIt
                  color={testimonial.color}
                  rotation={testimonial.rotation}
                  size="md"
                >
                  <p className="font-handwriting text-lg text-ink-700 mb-3">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="text-sm text-ink-500 italic">
                    — {testimonial.author}
                  </p>
                </PostIt>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Add your note CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="font-handwriting text-2xl text-ink-500 mb-4">
            Ready to start your own story?
          </p>
          <motion.a
            href="#schedule"
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Session
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
