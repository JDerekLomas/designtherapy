"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PostIt, MarkerHighlight } from "@/components/ui/PostIt";
import { getAllPosts, BlogPost } from "@/lib/blog";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const categoryLabels = {
  "design-thinking": "Design Thinking",
  "relationships": "Relationships",
  "self-growth": "Self Growth",
  "tools": "Tools & Exercises",
};

export function BlogContent() {
  const posts = getAllPosts();
  const featuredPost = posts.find((p) => p.featured);
  const otherPosts = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#F5F0E8] dark:bg-ink-900 pt-32 pb-20">
      {/* Hero */}
      <section className="container-wide mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="heading-xl mb-6">
            <span className="font-handwriting text-4xl md:text-5xl text-terra-500 block mb-2">
              The Blog
            </span>
            Ideas for <MarkerHighlight color="yellow">Designing</MarkerHighlight> Your Life
          </h1>
          <p className="body-lg text-ink-600 dark:text-cloud-400">
            Practical insights at the intersection of design thinking, therapy, and
            personal growth. No fluff—just tools and ideas you can use.
          </p>
        </motion.div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="container-wide mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden hover:shadow-xl transition-shadow">
                {/* Tape decorations */}
                <div className="absolute -top-3 left-12 w-16 h-6 bg-[#F5F5DC]/90 rotate-[-3deg] shadow-sm" />
                <div className="absolute -top-3 right-12 w-16 h-6 bg-[#F5F5DC]/90 rotate-[2deg] shadow-sm" />

                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  <div className="lg:w-2/3">
                    <span className="inline-block font-handwriting text-lg text-terra-500 mb-3">
                      Featured
                    </span>
                    <h2 className="heading-md mb-4 group-hover:text-terra-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="body-md text-ink-600 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-ink-500">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-1/3 flex justify-center lg:justify-end">
                    <PostIt color={featuredPost.color} rotation={3} size="lg">
                      <span className="font-handwriting text-2xl">
                        {categoryLabels[featuredPost.category]}
                      </span>
                    </PostIt>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 font-handwriting text-xl text-terra-500 group-hover:gap-4 transition-all">
                  Read this <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </motion.div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="container-wide">
        <h2 className="font-handwriting text-3xl text-ink-600 mb-8">All Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="block group h-full">
                <article className="bg-white rounded-xl p-6 shadow-md h-full hover:shadow-lg transition-shadow relative">
                  {/* Pin */}
                  <div className="absolute -top-2 left-6 w-4 h-4 rounded-full bg-red-400 shadow-md" />

                  <div className="mb-4">
                    <PostIt color={post.color} rotation={-2} size="sm" hover={false}>
                      <span className="text-xs font-semibold uppercase tracking-wide">
                        {categoryLabels[post.category]}
                      </span>
                    </PostIt>
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-terra-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="body-sm text-ink-600 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-ink-500 mt-auto pt-4 border-t border-ink-100">
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container-wide mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ink-900 rounded-2xl p-8 md:p-12 text-cloud-100 relative overflow-hidden"
        >
          <div className="absolute top-4 right-8 rotate-6 hidden md:block">
            <PostIt color="pink" rotation={6} size="sm">
              <span className="font-handwriting">Stay curious</span>
            </PostIt>
          </div>

          <div className="max-w-xl">
            <h2 className="heading-md mb-4">
              Get new posts in your inbox
            </h2>
            <p className="body-md text-cloud-400 mb-6">
              No spam, just thoughtful ideas about design thinking and personal growth.
              Unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-ink-800 border border-ink-700 text-cloud-100 placeholder:text-ink-500 focus:border-terra-500 focus:outline-none"
              />
              <button
                type="submit"
                className="btn-primary bg-terra-500 hover:bg-terra-600 border-none whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
