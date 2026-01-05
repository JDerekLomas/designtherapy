"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AboutProps {
  imageUrl?: string;
}

export function About({ imageUrl }: AboutProps) {
  return (
    <section id="about" className="py-section bg-cloud-50 dark:bg-ink-900">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="Julika Lomas - Design Therapy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-terra-100 to-sage-100 dark:from-ink-800 dark:to-ink-700" />
              )}
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-cloud-50/50 dark:border-ink-700/50 rounded-xl pointer-events-none" />
            </div>
            {/* Floating accent */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-terra-400/20 dark:bg-terra-600/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="label mb-4 block">About</span>
            <h2 className="heading-lg mb-8">
              Designing futures,
              <span className="block text-terra-500 dark:text-terra-400">
                not just healing pasts
              </span>
            </h2>
            <div className="space-y-6 text-ink-600 dark:text-cloud-400">
              <p className="body-md">
                I&apos;m Julika Lomas, a psychotherapist and coach based in Amsterdam.
                My practice centers on a fundamental belief: therapy should be about
                designing your future, not just processing your past.
              </p>
              <p className="body-md">
                Through embodied exercises, systemic perspectives, and the unique
                Rope Method, I help individuals and couples discover fresh perspectives
                that transform how they relate to themselves and each other.
              </p>
              <p className="body-md">
                Whether you&apos;re seeking individual growth, navigating relationship
                challenges, or exploring deeper systemic patterns, my approach offers
                a collaborative space where change becomes possible.
              </p>
            </div>

            {/* Stats/Credentials */}
            <div className="mt-12 pt-8 border-t border-ink-200 dark:border-ink-700">
              <div className="grid grid-cols-3 gap-8">
                {[
                  { number: "10+", label: "Years Experience" },
                  { number: "500+", label: "Clients Supported" },
                  { number: "3", label: "Languages" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-display text-3xl md:text-4xl font-light text-terra-500 dark:text-terra-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="label text-[10px]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
