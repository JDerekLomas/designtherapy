"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Card data
const categories = {
  life_domains: {
    name: "Territory",
    color: "#81D4FA",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    description: "Areas of life where conflict commonly arises",
    cards: [
      { id: "domain-01", name: "Money & Finances" },
      { id: "domain-02", name: "Intimacy & Sex" },
      { id: "domain-03", name: "Parenting & Children" },
      { id: "domain-04", name: "Household Labor" },
      { id: "domain-05", name: "Extended Family" },
      { id: "domain-06", name: "Work & Career" },
      { id: "domain-07", name: "Social Life & Friends" },
      { id: "domain-08", name: "Health & Lifestyle" },
      { id: "domain-09", name: "Future Planning" },
      { id: "domain-10", name: "Technology & Attention" },
    ],
  },
  four_horsemen: {
    name: "Danger Zone",
    color: "#F48FB1",
    bgColor: "bg-pink-100 dark:bg-pink-900/30",
    description: "Gottman's destructive communication patterns",
    cards: [
      { id: "horseman-01", name: "Criticism" },
      { id: "horseman-02", name: "Contempt" },
      { id: "horseman-03", name: "Defensiveness" },
      { id: "horseman-04", name: "Stonewalling" },
    ],
  },
  antipatterns: {
    name: "Watch Out",
    color: "#FFCC80",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    description: "Common unhelpful communication habits",
    cards: [
      { id: "anti-01", name: "Mind Reading" },
      { id: "anti-02", name: "Kitchen Sinking" },
      { id: "anti-03", name: "Score Keeping" },
      { id: "anti-04", name: "Yes-Butting" },
      { id: "anti-05", name: "Triangulating" },
      { id: "anti-06", name: "Globalizing" },
      { id: "anti-07", name: "Passive Aggression" },
      { id: "anti-08", name: "Flooding" },
      { id: "anti-09", name: "Minimizing" },
      { id: "anti-10", name: "Catastrophizing" },
      { id: "anti-11", name: "Interrupting" },
      { id: "anti-12", name: "Threatening" },
    ],
  },
  positive_patterns: {
    name: "Try This",
    color: "#A5D6A7",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    description: "Healthy communication techniques from research",
    cards: [
      { id: "pattern-01", name: "Gentle Start-Up" },
      { id: "pattern-02", name: "Build Appreciation" },
      { id: "pattern-03", name: "Take Responsibility" },
      { id: "pattern-04", name: "Self-Soothe" },
      { id: "pattern-05", name: "Repair Attempt" },
      { id: "pattern-06", name: "Active Listening" },
      { id: "pattern-07", name: "Validate Feelings" },
      { id: "pattern-08", name: "Express Curiosity" },
      { id: "pattern-09", name: "Show Vulnerability" },
      { id: "pattern-10", name: "Accept Influence" },
      { id: "pattern-11", name: "Call a Time-Out" },
      { id: "pattern-12", name: "Dreams Within Conflict" },
    ],
  },
  fundamental_needs: {
    name: "Core Need",
    color: "#CE93D8",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    description: "Desmet's 13 fundamental psychological needs",
    cards: [
      { id: "need-01", name: "Autonomy" },
      { id: "need-02", name: "Beauty" },
      { id: "need-03", name: "Comfort" },
      { id: "need-04", name: "Competence" },
      { id: "need-05", name: "Community" },
      { id: "need-06", name: "Fitness" },
      { id: "need-07", name: "Impact" },
      { id: "need-08", name: "Morality" },
      { id: "need-09", name: "Purpose" },
      { id: "need-10", name: "Recognition" },
      { id: "need-11", name: "Relatedness" },
      { id: "need-12", name: "Security" },
      { id: "need-13", name: "Stimulation" },
    ],
  },
  mode_cards: {
    name: "Mode Cards",
    color: "#FFEB3B",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    description: "How to use the cards",
    cards: [
      { id: "mode-01", name: "Practice" },
      { id: "mode-02", name: "Explore" },
      { id: "mode-03", name: "Plan" },
      { id: "mode-04", name: "Appreciate" },
    ],
  },
};

const categoryOrder = [
  "life_domains",
  "four_horsemen",
  "antipatterns",
  "positive_patterns",
  "fundamental_needs",
  "mode_cards",
];

export function CardDeckContent() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"rules" | "cards">("rules");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-cloud-50 dark:bg-ink-900">
      {/* Hero Section */}
      <section className="relative py-section overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="font-handwriting text-2xl text-terra-500 dark:text-terra-400">
              A therapeutic card game
            </span>
            <h1 className="heading-xl mt-4 mb-6">
              Reframing Relationships Card Deck
            </h1>
            <p className="body-lg text-ink-600 dark:text-cloud-400 max-w-2xl mx-auto">
              A two-player card game for couples and families to explore
              potential conflicts safely through counterfactual scenarios.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mt-12"
          >
            <button
              onClick={() => setActiveTab("rules")}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === "rules"
                  ? "bg-terra-500 text-white"
                  : "bg-white dark:bg-ink-800 text-ink-600 dark:text-cloud-300 hover:bg-cloud-100 dark:hover:bg-ink-700"
              }`}
            >
              How to Play
            </button>
            <button
              onClick={() => setActiveTab("cards")}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                activeTab === "cards"
                  ? "bg-terra-500 text-white"
                  : "bg-white dark:bg-ink-800 text-ink-600 dark:text-cloud-300 hover:bg-cloud-100 dark:hover:bg-ink-700"
              }`}
            >
              View All Cards
            </button>
          </motion.div>
        </div>
      </section>

      {/* Rules Section */}
      {activeTab === "rules" && (
        <section className="pb-section">
          <div className="container-narrow">
            {/* Card Categories Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-ink-800 rounded-2xl p-8 md:p-12 shadow-lg mb-12"
            >
              <h2 className="heading-md mb-8">The Deck</h2>
              <p className="body-md text-ink-600 dark:text-cloud-400 mb-8">
                <strong>55 cards</strong> organized into 6 categories:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryOrder.map((key) => {
                  const cat = categories[key as keyof typeof categories];
                  return (
                    <div
                      key={key}
                      className={`${cat.bgColor} rounded-xl p-4 border-l-4`}
                      style={{ borderColor: cat.color }}
                    >
                      <h3
                        className="font-semibold"
                        style={{ color: cat.color }}
                      >
                        {cat.name}
                      </h3>
                      <p className="text-sm text-ink-600 dark:text-cloud-400">
                        {cat.cards.length} cards &mdash; {cat.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* The Counterfactual Spread */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-ink-800 rounded-2xl p-8 md:p-12 shadow-lg mb-12"
            >
              <h2 className="heading-md mb-4">
                The Core Game: The Counterfactual
              </h2>
              <p className="body-md text-ink-600 dark:text-cloud-400 mb-8">
                <strong>Players:</strong> 2 &nbsp;|&nbsp;{" "}
                <strong>Setup:</strong> Separate cards into their category
                decks.
              </p>

              <h3 className="heading-sm mb-6">Draw Phase</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { id: "domain-03", label: "1. Territory", cat: "life_domains" },
                  { id: "horseman-01", label: "2. Danger Zone", cat: "four_horsemen" },
                  { id: "need-11", label: "3. Core Need", cat: "fundamental_needs" },
                  { id: "pattern-05", label: "4. Try This", cat: "positive_patterns" },
                ].map((card, i) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="text-center"
                  >
                    <div
                      className="relative aspect-[3/5] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setSelectedCard(card.id)}
                    >
                      <Image
                        src={`/cards/${card.id}.png`}
                        alt={card.label}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p
                      className="mt-2 text-sm font-medium"
                      style={{
                        color:
                          categories[card.cat as keyof typeof categories].color,
                      }}
                    >
                      {card.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <h3 className="heading-sm mb-4">The Script</h3>
              <div className="bg-cloud-100 dark:bg-ink-700 rounded-xl p-6 mb-8 border-l-4 border-terra-500">
                <p className="body-md italic">
                  &ldquo;Imagine we were in conflict about{" "}
                  <span className="font-semibold" style={{ color: "#81D4FA" }}>
                    [TERRITORY]
                  </span>
                  . If I fell into{" "}
                  <span className="font-semibold" style={{ color: "#F48FB1" }}>
                    [DANGER ZONE]
                  </span>
                  , it might be because my need for{" "}
                  <span className="font-semibold" style={{ color: "#CE93D8" }}>
                    [CORE NEED]
                  </span>{" "}
                  felt threatened. Can you help me meet that need using{" "}
                  <span className="font-semibold" style={{ color: "#A5D6A7" }}>
                    [TRY THIS]
                  </span>
                  ?&rdquo;
                </p>
              </div>

              <p className="body-md text-ink-600 dark:text-cloud-400 mb-4">
                <strong>Response:</strong> Partner uses the Try This card to
                respond with the healthy communication technique.
              </p>
              <p className="body-md text-ink-600 dark:text-cloud-400">
                <strong>Mode Cards:</strong> Draw a mode card to determine
                whether you <em>Practice</em> (role-play), <em>Explore</em> (go
                deep), <em>Plan</em> (make agreements), or <em>Appreciate</em>{" "}
                (build fondness).
              </p>
            </motion.div>

            {/* Other Spreads */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-ink-800 rounded-2xl p-8 md:p-12 shadow-lg mb-12"
            >
              <h2 className="heading-md mb-8">Other Spreads</h2>

              {/* After the Storm */}
              <div className="mb-12">
                <h3 className="heading-sm mb-4">
                  After the Storm{" "}
                  <span className="text-ink-400 font-normal">(3 cards)</span>
                </h3>
                <p className="body-md text-ink-600 dark:text-cloud-400 mb-6">
                  Process a recent conflict by exploring what happened and what
                  you can learn.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[
                    { id: "anti-06", label: "What pattern showed up?" },
                    { id: "need-01", label: "What need felt threatened?" },
                    { id: "pattern-03", label: "What could we try next time?" },
                  ].map((card, i) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="text-center"
                    >
                      <div
                        className="relative aspect-[3/5] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setSelectedCard(card.id)}
                      >
                        <Image
                          src={`/cards/${card.id}.png`}
                          alt={card.label}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-2 text-xs text-ink-500 dark:text-cloud-500">
                        {card.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Know Me */}
              <div className="mb-12">
                <h3 className="heading-sm mb-4">
                  Know Me{" "}
                  <span className="text-ink-400 font-normal">(2 cards)</span>
                </h3>
                <p className="body-md text-ink-600 dark:text-cloud-400 mb-6">
                  Deepen understanding by sharing what matters most.
                </p>
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-4">
                  {[
                    { id: "need-09", label: "A need that's important to me" },
                    { id: "domain-06", label: "Where it shows up in our life" },
                  ].map((card, i) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="text-center"
                    >
                      <div
                        className="relative aspect-[3/5] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setSelectedCard(card.id)}
                      >
                        <Image
                          src={`/cards/${card.id}.png`}
                          alt={card.label}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-2 text-xs text-ink-500 dark:text-cloud-500">
                        {card.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Horseman Check */}
              <div>
                <h3 className="heading-sm mb-4">
                  The Horseman Check{" "}
                  <span className="text-ink-400 font-normal">(1 card)</span>
                </h3>
                <p className="body-md text-ink-600 dark:text-cloud-400 mb-6">
                  Quick daily check &mdash; did this pattern show up recently?
                </p>
                <div className="max-w-[200px] mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <div
                      className="relative aspect-[3/5] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setSelectedCard("horseman-02")}
                    >
                      <Image
                        src="/cards/horseman-02.png"
                        alt="Horseman Check"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Sources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-ink-800 rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <h2 className="heading-md mb-6">Sources</h2>
              <ul className="space-y-3 body-md text-ink-600 dark:text-cloud-400">
                <li>
                  <strong>Gottman Method</strong> &mdash; Four Horsemen,
                  antidotes, repair attempts
                </li>
                <li>
                  <strong>Emotionally Focused Therapy (EFT)</strong> &mdash;
                  Attachment, emotional bonds
                </li>
                <li>
                  <strong>Desmet & Fokkinga (2020)</strong> &mdash; 13
                  Fundamental Psychological Needs
                </li>
                <li>
                  <strong>Bowen Family Systems Theory</strong> &mdash;
                  Differentiation, patterns
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      )}

      {/* Cards Gallery Section */}
      {activeTab === "cards" && (
        <section className="pb-section">
          <div className="container-wide">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === null
                    ? "bg-ink-900 dark:bg-cloud-100 text-white dark:text-ink-900"
                    : "bg-white dark:bg-ink-800 text-ink-600 dark:text-cloud-300 hover:bg-cloud-100 dark:hover:bg-ink-700"
                }`}
              >
                All Cards
              </button>
              {categoryOrder.map((key) => {
                const cat = categories[key as keyof typeof categories];
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all border-2`}
                    style={{
                      borderColor: cat.color,
                      backgroundColor:
                        activeCategory === key ? cat.color : "transparent",
                      color: activeCategory === key ? "#1a1a1a" : cat.color,
                    }}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </motion.div>

            {/* Cards Grid */}
            {categoryOrder.map((catKey) => {
              const cat = categories[catKey as keyof typeof categories];
              if (activeCategory && activeCategory !== catKey) return null;

              return (
                <motion.div
                  key={catKey}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-16"
                >
                  {!activeCategory && (
                    <h2
                      className="heading-sm mb-2"
                      style={{ color: cat.color }}
                    >
                      {cat.name}
                    </h2>
                  )}
                  {!activeCategory && (
                    <p className="body-sm text-ink-500 dark:text-cloud-500 mb-6">
                      {cat.description}
                    </p>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {cat.cards.map((card, i) => (
                      <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="cursor-pointer group"
                        onClick={() => setSelectedCard(card.id)}
                      >
                        <div className="relative aspect-[3/5] rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                          <Image
                            src={`/cards/${card.id}.png`}
                            alt={card.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="mt-2 text-xs text-center text-ink-600 dark:text-cloud-400 group-hover:text-ink-900 dark:group-hover:text-cloud-100 transition-colors">
                          {card.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-ink-900 dark:bg-ink-800 py-section-sm">
        <div className="container-narrow text-center">
          <h2 className="heading-md text-cloud-100 mb-4">
            Ready to transform your relationship?
          </h2>
          <p className="body-md text-cloud-400 mb-8">
            Use these cards on your own, or book a session to explore them with
            professional guidance.
          </p>
          <Link href="/#contact" className="btn btn-primary">
            Book a Session
          </Link>
        </div>
      </section>

      {/* Modal */}
      {selectedCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/cards/${selectedCard}.png`}
              alt="Card"
              width={450}
              height={750}
              className="rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-ink-900 hover:bg-cloud-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
