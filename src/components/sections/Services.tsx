"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users, User, Building } from "lucide-react";
import { PostIt, MarkerHighlight } from "@/components/ui/PostIt";

interface Service {
  id: string;
  icon: typeof Users;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  color: "yellow" | "pink" | "blue" | "green";
}

const services: Service[] = [
  {
    id: "couples",
    icon: Users,
    title: "Couples Coaching",
    tagline: "Design Your Future Together",
    description:
      "Navigate relationship challenges with fresh perspectives. Using systemic approaches and embodied exercises, discover new ways of connecting.",
    features: [
      "Relationship dynamics mapping",
      "Communication patterns",
      "Conflict transformation",
      "Intimacy & connection",
    ],
    color: "pink",
  },
  {
    id: "individual",
    icon: User,
    title: "Individual Sessions",
    tagline: "Design Your Life",
    description:
      "Personal growth through embodied practices. Move beyond limiting patterns and design a life aligned with your authentic self.",
    features: [
      "Personal development",
      "Anxiety & stress",
      "Life transitions",
      "Self-relationship",
    ],
    color: "blue",
  },
  {
    id: "systems",
    icon: Building,
    title: "Systemic Work",
    tagline: "Design Your System",
    description:
      "Explore the larger systems you're part of—family patterns, organizational dynamics, and inherited stories that shape your present.",
    features: [
      "Family constellations",
      "Team dynamics",
      "Organizational patterns",
      "Intergenerational work",
    ],
    color: "green",
  },
];

interface ServicesProps {
  couplesImageUrl?: string;
  individualImageUrl?: string;
  officeImageUrl?: string;
}

export function Services({
  couplesImageUrl,
  individualImageUrl,
  officeImageUrl,
}: ServicesProps) {
  const imageUrls = [couplesImageUrl, individualImageUrl, officeImageUrl];

  return (
    <section
      id="services"
      className="py-section bg-white dark:bg-ink-900"
    >
      <div className="container-wide">
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
              How can I help?
            </span>
            Choose your <MarkerHighlight color="pink">path</MarkerHighlight>
          </h2>
          <p className="body-md text-ink-600 dark:text-cloud-400">
            Whether you&apos;re designing your individual journey, your relationship,
            or understanding the systems you&apos;re part of.
          </p>
        </motion.div>

        {/* Services as workspace cards */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image - looks like a photo pinned to board */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:col-start-8" : ""
                }`}
              >
                <motion.div
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
                  style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}
                >
                  {imageUrls[index] ? (
                    <Image
                      src={imageUrls[index]!}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-terra-100 to-sage-100 flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-terra-300" />
                    </div>
                  )}
                  {/* Tape corners */}
                  <div className="absolute top-2 left-2 w-12 h-5 bg-[#F5F5DC]/80 rotate-[-15deg] shadow-sm" />
                  <div className="absolute top-2 right-2 w-12 h-5 bg-[#F5F5DC]/80 rotate-[10deg] shadow-sm" />
                </motion.div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                {/* Post-it tagline */}
                <motion.div
                  initial={{ opacity: 0, rotate: 5 }}
                  whileInView={{ opacity: 1, rotate: -2 }}
                  viewport={{ once: true }}
                  className="inline-block mb-4"
                >
                  <PostIt color={service.color} rotation={-2} size="sm">
                    <span className="font-handwriting text-lg">{service.tagline}</span>
                  </PostIt>
                </motion.div>

                <h3 className="heading-md mb-4 flex items-center gap-3">
                  <service.icon className="w-8 h-8 text-terra-500" />
                  {service.title}
                </h3>

                <p className="body-md text-ink-600 dark:text-cloud-400 mb-6">
                  {service.description}
                </p>

                {/* Features as checklist style */}
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 font-handwriting text-lg text-ink-600 dark:text-cloud-400"
                    >
                      <span className="text-terra-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#schedule"
                  className="inline-flex items-center gap-2 btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Here
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
