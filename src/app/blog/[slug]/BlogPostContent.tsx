"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PostIt, MarkerHighlight, SharePostIt } from "@/components/ui/PostIt";
import { BlogPost, getAllPosts } from "@/lib/blog";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

interface Props {
  post: BlogPost;
}

const categoryLabels = {
  "design-thinking": "Design Thinking",
  "relationships": "Relationships",
  "self-growth": "Self Growth",
  "tools": "Tools & Exercises",
};

export function BlogPostContent({ post }: Props) {
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const nextPost = allPosts[currentIndex - 1];
  const prevPost = allPosts[currentIndex + 1];

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="space-y-2 my-6 pl-6">
            {listItems.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-terra-500 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    lines.forEach((line, i) => {
      const trimmed = line.trim();

      // Headers
      if (trimmed.startsWith("# ")) {
        flushList();
        elements.push(
          <h1 key={i} className="heading-lg mb-6 mt-12 first:mt-0">
            {trimmed.slice(2)}
          </h1>
        );
      } else if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={i} className="heading-md mb-4 mt-10">
            {trimmed.slice(3)}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={i} className="heading-sm mb-3 mt-8">
            {trimmed.slice(4)}
          </h3>
        );
      }
      // List items
      else if (trimmed.startsWith("- ")) {
        inList = true;
        listItems.push(trimmed.slice(2));
      }
      // Numbered lists
      else if (/^\d+\.\s/.test(trimmed)) {
        inList = true;
        listItems.push(trimmed.replace(/^\d+\.\s/, ""));
      }
      // Bold text handling
      else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        flushList();
        elements.push(
          <p key={i} className="body-lg font-semibold my-4">
            {trimmed.slice(2, -2)}
          </p>
        );
      }
      // Regular paragraphs
      else if (trimmed) {
        flushList();
        // Handle inline formatting
        const formatted = trimmed
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.+?)\*/g, "<em>$1</em>")
          .replace(/"(.+?)"/g, '"<span class=\'font-handwriting text-xl\'>$1</span>"');

        elements.push(
          <p
            key={i}
            className="body-md text-ink-700 dark:text-cloud-300 my-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatted }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] dark:bg-ink-900 pt-32 pb-20">
      {/* Back link */}
      <div className="container-narrow mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-handwriting text-xl text-ink-500 hover:text-terra-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all posts
        </Link>
      </div>

      {/* Article Header */}
      <article className="container-narrow">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="mb-6">
            <PostIt color={post.color} rotation={-2} size="sm" hover={false}>
              <span className="text-sm font-semibold uppercase tracking-wide">
                {categoryLabels[post.category]}
              </span>
            </PostIt>
          </div>

          <h1 className="heading-xl mb-6">{post.title}</h1>

          <p className="body-lg text-ink-600 dark:text-cloud-400 mb-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-ink-500">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative"
        >
          {/* Tape decorations */}
          <div className="absolute -top-3 left-12 w-16 h-6 bg-[#F5F5DC]/90 rotate-[-3deg] shadow-sm" />
          <div className="absolute -top-3 right-12 w-16 h-6 bg-[#F5F5DC]/90 rotate-[2deg] shadow-sm" />

          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-ink-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="font-handwriting text-2xl text-ink-600">
                Found this useful? Share it:
              </p>
              <SharePostIt
                title={post.title}
                url={typeof window !== "undefined" ? window.location.href : ""}
              />
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {prevPost && (
            <Link href={`/blog/${prevPost.slug}`} className="group">
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-ink-500 flex items-center gap-2 mb-2">
                  <ArrowLeft className="w-4 h-4" /> Previous
                </span>
                <h3 className="font-display text-lg font-semibold group-hover:text-terra-600 transition-colors">
                  {prevPost.title}
                </h3>
              </div>
            </Link>
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className="group md:text-right md:ml-auto">
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-ink-500 flex items-center gap-2 mb-2 md:justify-end">
                  Next <ArrowRight className="w-4 h-4" />
                </span>
                <h3 className="font-display text-lg font-semibold group-hover:text-terra-600 transition-colors">
                  {nextPost.title}
                </h3>
              </div>
            </Link>
          )}
        </motion.nav>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-ink-900 rounded-2xl p-8 text-center text-cloud-100"
        >
          <h2 className="heading-sm mb-4">Want to apply these ideas with support?</h2>
          <p className="body-md text-cloud-400 mb-6">
            Design therapy sessions put these frameworks into practice with personalized guidance.
          </p>
          <Link href="/#schedule" className="btn-primary bg-terra-500 hover:bg-terra-600 border-none">
            Book a Session
          </Link>
        </motion.div>
      </article>
    </div>
  );
}
