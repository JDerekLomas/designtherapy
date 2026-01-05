"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/designtherapyspace",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="bg-ink-900 dark:bg-ink-950 text-cloud-100 py-section">
      <div className="container-wide">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
                Design<span className="text-terra-400">Therapy</span>
              </h2>
              <p className="body-md text-cloud-400 max-w-md mb-8">
                Designing futures through psychotherapy and coaching.
                Fresh perspectives for individuals, couples, and systems.
              </p>
              <div className="flex items-center gap-2 text-cloud-500">
                <MapPin className="w-4 h-4" />
                <span className="body-sm">Amsterdam, Netherlands</span>
              </div>
            </motion.div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 md:col-start-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="label mb-6">Navigate</h3>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="body-sm text-cloud-400 hover:text-cloud-100 transition-colors link-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="label mb-6">Connect</h3>
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:info@designtherapy.org"
                  className="flex items-center gap-3 text-cloud-400 hover:text-cloud-100 transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:text-terra-400 transition-colors" />
                  <span className="body-sm">info@designtherapy.org</span>
                </a>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-ink-800 hover:bg-terra-500 transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-ink-800 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="body-sm text-cloud-600">
            &copy; {new Date().getFullYear()} Design Therapy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/terms"
              className="body-sm text-cloud-600 hover:text-cloud-300 transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="/privacy"
              className="body-sm text-cloud-600 hover:text-cloud-300 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
