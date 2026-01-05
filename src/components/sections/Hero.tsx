"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { PostIt, MarkerHighlight } from "@/components/ui/PostIt";

interface HeroProps {
  videoUrl?: string;
}

export function Hero({ videoUrl }: HeroProps) {
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

        {/* Video background - subtle, in a "frame" */}
        {videoUrl && (
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-[70vh] hidden lg:block">
            <div className="relative w-full h-full rounded-l-3xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
              {/* Masking tape corners */}
              <div className="absolute top-4 left-4 w-16 h-6 bg-[#F5F5DC]/80 rotate-[-8deg] shadow-sm" />
              <div className="absolute top-4 right-4 w-16 h-6 bg-[#F5F5DC]/80 rotate-[5deg] shadow-sm" />
              <div className="absolute bottom-4 left-4 w-16 h-6 bg-[#F5F5DC]/80 rotate-[3deg] shadow-sm" />
              <div className="absolute bottom-4 right-4 w-16 h-6 bg-[#F5F5DC]/80 rotate-[-6deg] shadow-sm" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide py-32 lg:py-0">
        <div className="max-w-3xl">
          {/* Scattered post-it notes as design elements */}
          <div className="absolute top-20 right-10 hidden xl:block">
            <PostIt color="yellow" rotation={-3} size="sm">
              <span className="text-lg">fresh ideas</span>
            </PostIt>
          </div>
          <div className="absolute top-40 right-32 hidden xl:block">
            <PostIt color="pink" rotation={5} size="sm">
              <span className="text-lg">new patterns</span>
            </PostIt>
          </div>
          <div className="absolute bottom-32 right-20 hidden xl:block">
            <PostIt color="blue" rotation={-2} size="sm">
              <span className="text-lg">your future</span>
            </PostIt>
          </div>

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
              Therapy that works like a design workshop.{" "}
              <span className="font-handwriting text-2xl text-terra-600 dark:text-terra-400">
                Map your patterns.
              </span>{" "}
              Prototype new ways of being. Build the life and relationships you want.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <motion.a
                href="#schedule"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Design Process
              </motion.a>
              <motion.a
                href="#approach"
                className="btn-ghost font-handwriting text-xl"
                whileHover={{ scale: 1.02 }}
              >
                See how it works →
              </motion.a>
            </motion.div>

            {/* Languages as post-it */}
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: -3 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -right-4 md:right-8"
            >
              <PostIt color="green" rotation={-3} size="sm">
                <span className="text-sm font-handwriting">
                  Sessions in:<br />
                  English • German • Dutch
                </span>
              </PostIt>
            </motion.div>
          </motion.div>

          {/* Workshop tools decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8 flex items-center gap-4 text-ink-400 dark:text-cloud-600"
          >
            <span className="font-handwriting text-xl">Amsterdam, NL</span>
            <span>•</span>
            <span className="font-handwriting text-xl">In-person & Online</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
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
