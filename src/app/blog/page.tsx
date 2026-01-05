import { Metadata } from "next";
import { BlogContent } from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | Design Therapy",
  description: "Thoughts on design thinking, relationships, and personal growth. Practical ideas you can use today.",
};

export default function BlogPage() {
  return <BlogContent />;
}
