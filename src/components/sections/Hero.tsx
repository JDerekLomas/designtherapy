"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  videoUrl?: string;
}

export function Hero({ videoUrl }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Animation */}
      <div className="absolute inset-0 z-0">
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          /* Animated gradient fallback */
          <div className="absolute inset-0 bg-gradient-to-br from-cloud-100 via-cloud-50 to-terra-50 dark:from-ink-900 dark:via-ink-800 dark:to-ink-900">
            {/* Animated shapes */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-terra-200/30 dark:bg-terra-800/20 blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-sage-200/30 dark:bg-sage-800/20 blur-3xl"
              animate={{
                x: [0, -40, 0],
                y: [0, -50, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cloud-300/20 dark:bg-ink-700/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cloud-50/50 via-transparent to-cloud-50 dark:from-ink-900/50 dark:via-transparent dark:to-ink-900" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="label">Psychotherapy & Coaching</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="heading-xl mb-8 max-w-5xl mx-auto text-balance"
        >
          Transform your
          <span className="block text-terra-500 dark:text-terra-400">
            inner world
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="body-lg text-ink-600 dark:text-cloud-400 max-w-2xl mx-auto mb-12"
        >
          Fresh perspectives for designing your future.
          Individual sessions, couples coaching, and systemic work
          that goes beyond the past.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#schedule"
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Begin Your Journey
          </motion.a>
          <motion.a
            href="#approach"
            className="btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Approach
          </motion.a>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-8"
        >
          <span className="label text-ink-400 dark:text-cloud-600">
            Sessions in
          </span>
          <div className="flex items-center gap-4">
            {["English", "German", "Dutch"].map((lang, i) => (
              <span
                key={lang}
                className="body-sm text-ink-500 dark:text-cloud-500"
              >
                {lang}
                {i < 2 && <span className="ml-4 text-ink-300 dark:text-ink-600">•</span>}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-ink-400 dark:text-cloud-600 hover:text-terra-500 dark:hover:text-terra-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="label text-xs">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
