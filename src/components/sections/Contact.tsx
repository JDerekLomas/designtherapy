"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Video, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Amsterdam, Netherlands",
    subtext: "Betuwestraat, Veluwebuurt",
  },
  {
    icon: Video,
    label: "Format",
    value: "In-person or Online",
    subtext: "Secure video sessions available",
  },
  {
    icon: Clock,
    label: "Sessions",
    value: "By Appointment",
    subtext: "Flexible scheduling",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@designtherapy.org",
    subtext: "Responses within 24 hours",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-section bg-gradient-to-b from-cloud-100 to-cloud-50 dark:from-ink-800 dark:to-ink-900"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="label mb-4 block">Get in Touch</span>
            <h2 className="heading-lg mb-6">
              Ready to begin your
              <span className="text-terra-500 dark:text-terra-400"> journey?</span>
            </h2>
            <p className="body-md text-ink-600 dark:text-cloud-400 mb-12">
              Every transformation starts with a conversation. Reach out to schedule
              an initial consultation and discover how design therapy can support
              your growth.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white/50 dark:bg-ink-800/50 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-terra-100 dark:bg-terra-900/50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-terra-600 dark:text-terra-400" />
                    </div>
                    <div>
                      <p className="label text-[10px] mb-1">{item.label}</p>
                      <p className="font-medium text-ink-900 dark:text-cloud-100">
                        {item.value}
                      </p>
                      <p className="body-sm text-ink-500 dark:text-cloud-500 mt-1">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="schedule"
          >
            <div className="glass-card p-8 md:p-10">
              <h3 className="heading-sm mb-2">Schedule a Consultation</h3>
              <p className="body-sm text-ink-500 dark:text-cloud-500 mb-8">
                Fill out the form below and I&apos;ll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="label text-[10px] mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-cloud-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 focus:border-terra-500 dark:focus:border-terra-400 focus:ring-0 outline-none transition-colors body-sm"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="label text-[10px] mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-cloud-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 focus:border-terra-500 dark:focus:border-terra-400 focus:ring-0 outline-none transition-colors body-sm"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="label text-[10px] mb-2 block">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-cloud-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 focus:border-terra-500 dark:focus:border-terra-400 focus:ring-0 outline-none transition-colors body-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="label text-[10px] mb-2 block">
                    Interest
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-cloud-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 focus:border-terra-500 dark:focus:border-terra-400 focus:ring-0 outline-none transition-colors body-sm appearance-none">
                    <option value="">Select your interest</option>
                    <option value="individual">Individual Sessions</option>
                    <option value="couples">Couples Coaching</option>
                    <option value="systems">Systemic Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="label text-[10px] mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-cloud-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 focus:border-terra-500 dark:focus:border-terra-400 focus:ring-0 outline-none transition-colors body-sm resize-none"
                    placeholder="Tell me a bit about what brings you here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Send Message
                </motion.button>

                <p className="body-sm text-ink-400 dark:text-cloud-600 text-center">
                  All inquiries are strictly confidential
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
