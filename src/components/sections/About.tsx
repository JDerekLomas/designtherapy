"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PostIt, MarkerHighlight } from "@/components/ui/PostIt";

interface AboutProps {
  imageUrl?: string;
}

export function About({ imageUrl }: AboutProps) {
  return (
    <section
      id="about"
      className="py-section bg-white dark:bg-ink-900"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column - like a photo on a workspace */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main photo with tape */}
            <motion.div
              whileHover={{ rotate: 0 }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl"
              style={{ transform: "rotate(-2deg)" }}
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="Julika Lomas - Design Therapy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-terra-100 to-sage-100" />
              )}
              {/* Tape corners */}
              <div className="absolute top-3 left-3 w-14 h-6 bg-[#F5F5DC]/80 rotate-[-12deg] shadow-sm" />
              <div className="absolute top-3 right-3 w-14 h-6 bg-[#F5F5DC]/80 rotate-[8deg] shadow-sm" />
            </motion.div>

            {/* Decorative post-its around the image */}
            <motion.div
              initial={{ opacity: 0, rotate: 10 }}
              whileInView={{ opacity: 1, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 lg:-right-8"
            >
              <PostIt color="yellow" rotation={5} size="sm">
                <span className="font-handwriting text-lg">
                  Based in Amsterdam
                </span>
              </PostIt>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -left-4 lg:-left-8 hidden md:block"
            >
              <PostIt color="pink" rotation={-3} size="sm">
                <span className="font-handwriting text-lg">
                  10+ years experience
                </span>
              </PostIt>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="heading-lg mb-6">
              <span className="font-handwriting text-3xl md:text-4xl text-terra-500 block mb-2">
                Hello, I&apos;m Julika
              </span>
              <MarkerHighlight color="yellow">Designing</MarkerHighlight> futures,
              <span className="block">not just healing pasts</span>
            </h2>

            <div className="space-y-5 text-ink-600 dark:text-cloud-400">
              <p className="body-md">
                I&apos;m a psychotherapist and coach who believes therapy should feel
                more like a <span className="font-handwriting text-xl text-terra-600">creative workshop</span> than
                a clinical session.
              </p>
              <p className="body-md">
                Through embodied exercises, systemic perspectives, and the unique
                Rope Method, I help you see your patterns clearly—and design new ones.
              </p>
              <p className="body-md">
                Whether you&apos;re navigating personal growth, relationship challenges,
                or deeper systemic patterns, my approach is collaborative, practical,
                and always focused on <span className="font-handwriting text-xl text-terra-600">what&apos;s next</span>.
              </p>
            </div>

            {/* Credentials as sticky notes */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { label: "Systemic Therapist", color: "blue" as const },
                { label: "Couples Coach", color: "green" as const },
                { label: "Rope Method", color: "pink" as const },
              ].map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <PostIt color={cred.color} rotation={i % 2 === 0 ? -2 : 2} size="sm">
                    <span className="font-handwriting text-base">{cred.label}</span>
                  </PostIt>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
