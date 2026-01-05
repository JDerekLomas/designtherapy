"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users, User, Building } from "lucide-react";

interface Service {
  id: string;
  icon: typeof Users;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  imageUrl?: string;
}

const services: Service[] = [
  {
    id: "couples",
    icon: Users,
    title: "Couples Coaching",
    tagline: "Design Your Future Together",
    description:
      "Navigate relationship challenges with fresh perspectives. Using the Rope Method and systemic approaches, discover new ways of connecting that honor both partners.",
    features: [
      "Relationship dynamics mapping",
      "Communication enhancement",
      "Conflict transformation",
      "Intimacy & connection work",
    ],
  },
  {
    id: "individual",
    icon: User,
    title: "Individual Sessions",
    tagline: "Design Your Life",
    description:
      "Personal growth and self-discovery through embodied practices. Move beyond limiting patterns and design a life aligned with your authentic self.",
    features: [
      "Personal development",
      "Anxiety & stress management",
      "Life transitions",
      "Self-relationship work",
    ],
  },
  {
    id: "systems",
    icon: Building,
    title: "Systemic Work",
    tagline: "Design Your System",
    description:
      "Explore the larger systems you're part of—family constellations, organizational dynamics, and inherited patterns that shape your present.",
    features: [
      "Family constellation work",
      "Organizational consulting",
      "Team dynamics",
      "Intergenerational patterns",
    ],
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
    <section id="services" className="py-section bg-cloud-50 dark:bg-ink-900">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="label mb-4 block">Services</span>
          <h2 className="heading-lg mb-6">
            Choose your
            <span className="text-terra-500 dark:text-terra-400"> path</span>
          </h2>
          <p className="body-md text-ink-600 dark:text-cloud-400">
            Whether you&apos;re seeking individual transformation, deeper connection
            with a partner, or understanding of systemic patterns, there&apos;s a
            journey here for you.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  {imageUrls[index] ? (
                    <Image
                      src={imageUrls[index]!}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-terra-100 to-sage-100 dark:from-ink-800 dark:to-ink-700 flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-terra-300 dark:text-ink-600" />
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-terra-100 dark:bg-terra-900/50 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-terra-600 dark:text-terra-400" />
                  </div>
                  <span className="label">{service.tagline}</span>
                </div>

                <h3 className="heading-md mb-4">{service.title}</h3>
                <p className="body-md text-ink-600 dark:text-cloud-400 mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-ink-600 dark:text-cloud-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-terra-500" />
                      <span className="body-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#schedule"
                  className="inline-flex items-center gap-2 text-terra-600 dark:text-terra-400 font-medium group/link"
                  whileHover={{ x: 5 }}
                >
                  <span className="link-underline">Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
