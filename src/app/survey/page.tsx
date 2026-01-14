"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PostIt } from "@/components/ui/PostIt";
import { Check, Copy, ChevronRight, ChevronLeft } from "lucide-react";

interface SurveyData {
  // Vision
  brandPersonality: string;
  targetAudience: string;
  uniqueValue: string;
  competitors: string;

  // Design
  colorFeelings: string;
  stylePreferences: string[];
  mustHaveElements: string;
  avoidElements: string;

  // Content
  keyMessages: string;
  servicesHighlight: string;
  callToAction: string;

  // Practical
  timeline: string;
  specificChanges: string;
  additionalNotes: string;
}

const initialData: SurveyData = {
  brandPersonality: "",
  targetAudience: "",
  uniqueValue: "",
  competitors: "",
  colorFeelings: "",
  stylePreferences: [],
  mustHaveElements: "",
  avoidElements: "",
  keyMessages: "",
  servicesHighlight: "",
  callToAction: "",
  timeline: "",
  specificChanges: "",
  additionalNotes: "",
};

const styleOptions = [
  "Warm & Inviting",
  "Professional & Clean",
  "Creative & Playful",
  "Calm & Serene",
  "Bold & Confident",
  "Minimalist",
  "Organic & Natural",
  "Modern & Sleek",
];

export default function SurveyPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<SurveyData>(initialData);
  const [copied, setCopied] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState("");

  const updateData = (field: keyof SurveyData, value: string | string[]) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleStyle = (style: string) => {
    const current = data.stylePreferences;
    if (current.includes(style)) {
      updateData("stylePreferences", current.filter((s) => s !== style));
    } else {
      updateData("stylePreferences", [...current, style]);
    }
  };

  const generateOutput = () => {
    return `# Design Therapy Website Feedback
Generated: ${new Date().toLocaleDateString()}

## Brand Vision

**Brand Personality:**
${data.brandPersonality || "(Not answered)"}

**Target Audience:**
${data.targetAudience || "(Not answered)"}

**Unique Value Proposition:**
${data.uniqueValue || "(Not answered)"}

**Competitors/Inspiration:**
${data.competitors || "(Not answered)"}

## Design Preferences

**How should colors make visitors feel?**
${data.colorFeelings || "(Not answered)"}

**Style Preferences:**
${data.stylePreferences.length > 0 ? data.stylePreferences.join(", ") : "(Not selected)"}

**Must-Have Elements:**
${data.mustHaveElements || "(Not answered)"}

**Elements to Avoid:**
${data.avoidElements || "(Not answered)"}

## Content & Messaging

**Key Messages to Convey:**
${data.keyMessages || "(Not answered)"}

**Services to Highlight:**
${data.servicesHighlight || "(Not answered)"}

**Desired Call-to-Action:**
${data.callToAction || "(Not answered)"}

## Practical Details

**Timeline/Urgency:**
${data.timeline || "(Not answered)"}

**Specific Changes Needed:**
${data.specificChanges || "(Not answered)"}

**Additional Notes:**
${data.additionalNotes || "(Not answered)"}
`;
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generateOutput());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const saveSurvey = async () => {
    setSaving(true);
    setSaveError("");
    try {
      const response = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
          formattedOutput: generateOutput(),
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSaved(true);
      } else {
        setSaveError("Failed to save. Please copy the text instead.");
      }
    } catch {
      setSaveError("Failed to save. Please copy the text instead.");
    } finally {
      setSaving(false);
    }
  };

  const handleComplete = async () => {
    setIsComplete(true);
    // Auto-save when completing
    await saveSurvey();
  };

  const steps = [
    {
      title: "Brand Vision",
      subtitle: "Let's understand the heart of Design Therapy",
      fields: (
        <div className="space-y-6">
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              If Design Therapy were a person, how would you describe their personality?
            </label>
            <textarea
              value={data.brandPersonality}
              onChange={(e) => updateData("brandPersonality", e.target.value)}
              placeholder="e.g., Warm, approachable, creative, insightful, down-to-earth..."
              className="w-full p-4 border border-ink-200 rounded-lg focus:ring-2 focus:ring-terra-400 focus:border-transparent resize-none h-24"
            />
          </div>
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              Who is your ideal client? Describe them.
            </label>
            <textarea
              value={data.targetAudience}
              onChange={(e) => updateData("targetAudience", e.target.value)}
              placeholder="e.g., Creative professionals, couples seeking deeper connection, expats in Amsterdam..."
              className="w-full p-4 border border-ink-200 rounded-lg focus:ring-2 focus:ring-terra-400 focus:border-transparent resize-none h-24"
            />
          </div>
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              What makes your approach unique? Why should someone choose you?
            </label>
            <textarea
              value={data.uniqueValue}
              onChange={(e) => updateData("uniqueValue", e.target.value)}
              placeholder="e.g., The design thinking approach, embodied exercises, systemic perspective..."
              className="w-full p-4 border border-ink-200 rounded-lg focus:ring-2 focus:ring-terra-400 focus:border-transparent resize-none h-24"
            />
          </div>
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              Any websites or therapists whose style you admire?
            </label>
            <textarea
              value={data.competitors}
              onChange={(e) => updateData("competitors", e.target.value)}
              placeholder="Share links or describe what you like about them..."
              className="w-full p-4 border border-ink-200 rounded-lg focus:ring-2 focus:ring-terra-400 focus:border-transparent resize-none h-24"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Design Preferences",
      subtitle: "How should the site look and feel?",
      fields: (
        <div className="space-y-6">
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              How should the colors make visitors feel?
            </label>
            <textarea
              value={data.colorFeelings}
              onChange={(e) => updateData("colorFeelings", e.target.value)}
              placeholder="e.g., Calm and safe, energized and inspired, grounded and warm..."
              className="w-full p-4 border border-ink-200 rounded-lg focus:ring-2 focus:ring-terra-400 focus:border-transparent resize-none h-24"
            />
          </div>
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              Which styles resonate with you? (Select all that apply)
            </label>
            <div className="flex flex-wrap gap-3">
              {styleOptions.map((style) => (
                <button
                  key={style}
                  onClick={() => toggleStyle(style)}
                  className={`px-4 py-2 rounded-full border-2 transition-all ${
                    data.stylePreferences.includes(style)
                      ? "bg-terra-500 border-terra-500 text-white"
                      : "border-ink-200 text-ink-600 hover:border-terra-300"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              What elements must be on the site?
            </label>
            <textarea
              value={data.mustHaveElements}
              onChange={(e) => updateData("mustHaveElements", e.target.value)}
              placeholder="e.g., Booking system, blog, testimonials, specific images..."
              className="w-full p-4 border border-ink-200 rounded-lg focus:ring-2 focus:ring-terra-400 focus:border-transparent resize-none h-24"
            />
          </div>
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              Anything you definitely do not want?
            </label>
            <textarea
              value={data.avoidElements}
              onChange={(e) => updateData("avoidElements", e.target.value)}
              placeholder="e.g., Stock photos, too clinical feel, certain colors..."
              className="w-full p-4 border border-ink-200 rounded-lg focus:ring-2 focus:ring-terra-400 focus:border-transparent resize-none h-24"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Content & Messaging",
      subtitle: "What should visitors take away?",
      fields: (
        <div className="space-y-6">
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              What are the 3 most important messages visitors should understand?
            </label>
            <textarea
              value={data.keyMessages}
              onChange={(e) => updateData("keyMessages", e.target.value)}
              placeholder="e.g., 1) Therapy can be creative 2) Change is possible 3) You're not alone..."
              className="w-full p-4 border border-ink-200 rounded-lg focus:ring-2 focus:ring-terra-400 focus:border-transparent resize-none h-32"
            />
          </div>
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              Which services should be most prominent?
            </label>
            <textarea
              value={data.servicesHighlight}
              onChange={(e) => updateData("servicesHighlight", e.target.value)}
              placeholder="e.g., Couples coaching is my main focus, individual sessions are secondary..."
              className="w-full p-4 border border-ink-200 rounded-lg focus:ring-2 focus:ring-terra-400 focus:border-transparent resize-none h-24"
            />
          </div>
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              What action should visitors take? What is the main goal?
            </label>
            <textarea
              value={data.callToAction}
              onChange={(e) => updateData("callToAction", e.target.value)}
              placeholder="e.g., Book a free consultation, sign up for newsletter, contact me..."
              className="w-full p-4 border border-ink-200 rounded-lg focus:ring-2 focus:ring-terra-400 focus:border-transparent resize-none h-24"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Specific Feedback",
      subtitle: "Any particular changes or notes?",
      fields: (
        <div className="space-y-6">
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              Timeline - when do you need this ready?
            </label>
            <textarea
              value={data.timeline}
              onChange={(e) => updateData("timeline", e.target.value)}
              placeholder="e.g., No rush, take your time / Need it by end of month / ASAP..."
              className="w-full p-4 border border-ink-200 rounded-lg focus:ring-2 focus:ring-terra-400 focus:border-transparent resize-none h-24"
            />
          </div>
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              Specific changes you would like to see on the current site?
            </label>
            <textarea
              value={data.specificChanges}
              onChange={(e) => updateData("specificChanges", e.target.value)}
              placeholder="e.g., Change the hero image, update the about text, add a new section..."
              className="w-full p-4 border border-ink-200 rounded-lg focus:ring-2 focus:ring-terra-400 focus:border-transparent resize-none h-32"
            />
          </div>
          <div>
            <label className="block font-handwriting text-2xl text-ink-700 mb-3">
              Anything else you would like to share?
            </label>
            <textarea
              value={data.additionalNotes}
              onChange={(e) => updateData("additionalNotes", e.target.value)}
              placeholder="Any other thoughts, concerns, ideas, or inspiration..."
              className="w-full p-4 border border-ink-200 rounded-lg focus:ring-2 focus:ring-terra-400 focus:border-transparent resize-none h-32"
            />
          </div>
        </div>
      ),
    },
  ];

  if (isComplete) {
    return (
      <div className="min-h-screen bg-[#F5F0E8] pt-32 pb-20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <PostIt color="green" rotation={-2} size="lg" hover={false}>
              <span className="font-handwriting text-2xl">Thank you!</span>
            </PostIt>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl">Your Responses</h2>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-terra-500 text-white rounded-lg hover:bg-terra-600 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy to Clipboard
                  </>
                )}
              </button>
            </div>

            <pre className="bg-ink-50 p-6 rounded-lg overflow-auto text-sm font-mono whitespace-pre-wrap max-h-[60vh]">
              {generateOutput()}
            </pre>

            {/* Save status */}
            <div className="mt-6 text-center">
              {saving && (
                <p className="text-ink-500 font-handwriting text-xl">
                  Saving to server...
                </p>
              )}
              {saved && (
                <p className="text-green-600 font-handwriting text-xl">
                  ✓ Saved! Derek will receive your responses.
                </p>
              )}
              {saveError && (
                <p className="text-red-500 font-handwriting text-xl">
                  {saveError}
                </p>
              )}
              {!saving && !saved && !saveError && (
                <p className="text-ink-500 font-handwriting text-xl">
                  Copy the text above and send it to Derek!
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8] pt-32 pb-20">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="heading-lg mb-4">
            <span className="font-handwriting text-3xl text-terra-500 block mb-2">
              Design Therapy
            </span>
            Website Questionnaire
          </h1>
          <p className="body-md text-ink-600 max-w-xl mx-auto">
            Help me understand your vision so I can create the perfect site for you.
          </p>
        </motion.div>

        {/* Progress */}
        <div className="flex justify-center gap-2 mb-8">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === step
                  ? "bg-terra-500 scale-125"
                  : i < step
                  ? "bg-terra-300"
                  : "bg-ink-200"
              }`}
            />
          ))}
        </div>

        {/* Form Card */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-lg relative"
        >
          {/* Tape */}
          <div className="absolute -top-3 left-12 w-16 h-6 bg-[#F5F5DC]/90 rotate-[-3deg] shadow-sm" />
          <div className="absolute -top-3 right-12 w-16 h-6 bg-[#F5F5DC]/90 rotate-[2deg] shadow-sm" />

          <div className="mb-8">
            <span className="font-handwriting text-xl text-terra-500">
              Step {step + 1} of {steps.length}
            </span>
            <h2 className="heading-md mt-2">{steps[step].title}</h2>
            <p className="text-ink-500">{steps[step].subtitle}</p>
          </div>

          {steps[step].fields}

          {/* Navigation */}
          <div className="flex justify-between mt-10 pt-6 border-t border-ink-100">
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                step === 0
                  ? "text-ink-300 cursor-not-allowed"
                  : "text-ink-600 hover:bg-ink-50"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            {step === steps.length - 1 ? (
              <button
                onClick={handleComplete}
                className="flex items-center gap-2 px-6 py-3 bg-terra-500 text-white rounded-lg hover:bg-terra-600 transition-colors"
              >
                Complete
                <Check className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setStep(step + 1)}
                className="flex items-center gap-2 px-6 py-3 bg-ink-900 text-white rounded-lg hover:bg-ink-700 transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
