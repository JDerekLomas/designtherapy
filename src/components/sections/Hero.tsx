"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { PostIt, MarkerHighlight } from "@/components/ui/PostIt";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background - Cork board / Canvas texture */}
      <div className="absolute inset-0 z-0 bg-[#F5F0E8] dark:bg-ink-900">
        {/* Subtle grid pattern like graph paper */}
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #C9BBA8 1px, transparent 1px),
              linear-gradient(to bottom, #C9BBA8 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pt-32 pb-20 lg:pt-40 lg:pb-0">
        <div className="max-w-3xl mx-auto lg:mx-0">
          {/* Main content card - like a whiteboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-ink-800 rounded-2xl p-8 md:p-12 shadow-xl relative"
          >
            {/* Tape on corners */}
            <div className="absolute -top-3 left-8 w-20 h-7 bg-[#F5F5DC]/90 rotate-[-2deg] shadow-sm" />
            <div className="absolute -top-3 right-8 w-20 h-7 bg-[#F5F5DC]/90 rotate-[3deg] shadow-sm" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-handwriting text-2xl text-terra-500 dark:text-terra-400">
                Psychotherapy & Coaching
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="heading-xl mt-4 mb-6 text-ink-900 dark:text-cloud-100"
            >
              <MarkerHighlight color="yellow">Design</MarkerHighlight> your
              <span className="block mt-2">inner world</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="body-lg text-ink-600 dark:text-cloud-400 mb-8 max-w-xl"
            >
              Therapy that works like a design workshop.
              Prototype new ways of being. Build the life and relationships you want.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#approach"
                className="btn-ghost font-handwriting text-xl pl-0"
                whileHover={{ scale: 1.02 }}
              >
                See how it works →
              </motion.a>
            </motion.div>

            {/* Languages as post-it - larger text */}
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: -3 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-16 -right-4 md:right-8"
            >
              <PostIt color="green" rotation={-3} size="md">
                <span className="font-handwriting text-xl font-semibold block mb-1">
                  Sessions in:
                </span>
                <span className="font-handwriting text-xl">
                  English • German • Dutch
                </span>
              </PostIt>
            </motion.div>
          </motion.div>


          {/* Location info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-20 flex flex-col gap-3"
          >
            <div className="flex items-center gap-4 text-ink-500 dark:text-cloud-500">
              <span className="font-handwriting text-2xl">Amsterdam, NL</span>
              <span className="text-xl">•</span>
              <span className="font-handwriting text-2xl">In-person & Online</span>
            </div>
            <a
              href="#schedule"
              className="font-handwriting text-2xl text-terra-600 hover:text-terra-500 transition-colors"
            >
              Book now.
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-ink-500 dark:text-cloud-500 hover:text-terra-500 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-handwriting text-lg">scroll down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
