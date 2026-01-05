"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with Julika transformed how my partner and I communicate. The Rope Method revealed patterns we never knew existed, and gave us tools to build something new together.",
    author: "Anonymous",
    context: "Couples Coaching Client",
  },
  {
    quote:
      "I came seeking clarity and found so much more. The embodied approach helped me understand myself in ways that years of talk therapy hadn't accessed.",
    author: "Anonymous",
    context: "Individual Session Client",
  },
  {
    quote:
      "The systemic perspective was eye-opening. Understanding my place in larger patterns gave me both freedom and direction I didn't know I was missing.",
    author: "Anonymous",
    context: "Systemic Work Client",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-section bg-ink-900 dark:bg-ink-950 text-cloud-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-terra-900/20 to-transparent" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label text-cloud-500 mb-4 block">Testimonials</span>
          <h2 className="heading-lg">
            Words from those who&apos;ve
            <span className="text-terra-400"> walked this path</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Quote className="w-12 h-12 text-terra-500/30 mx-auto mb-8" />
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8 text-balance">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-medium text-cloud-300">
                {testimonials[currentIndex].author}
              </p>
              <p className="label text-cloud-600 mt-1">
                {testimonials[currentIndex].context}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              onClick={prev}
              className="p-3 rounded-full border border-ink-700 hover:border-terra-500 hover:bg-terra-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-terra-500"
                      : "bg-ink-700 hover:bg-ink-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="p-3 rounded-full border border-ink-700 hover:border-terra-500 hover:bg-terra-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
