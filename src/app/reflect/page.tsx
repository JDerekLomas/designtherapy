import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reflect",
};

const posts = [
  {
    title: "Corresponding Concepts in Systemic Therapy & Design Thinking",
    author: "Julika Lomas",
    date: "March 11, 2019",
    image: "/images/reflect/systemic-therapy-design-thinking.png",
    excerpt:
      "mapping corresponding concepts between two disciplines -- psychological therapy methods and creative, design thinking methods.",
    href: "/reflect/corresponding-concepts-in-systemic-therapy-design-thinking",
  },
  {
    title: "Learning To Care Less",
    author: "Julika Lomas",
    date: "March 11, 2019",
    image: "/images/reflect/learning-to-care-less.png",
    excerpt:
      "The majority of women are socialized and raised to care more about caring than their male counterparts.",
    href: "/reflect/learning-to-care-less",
  },
];

function PostCard({
  post,
}: {
  post: {
    title: string;
    author: string;
    date: string;
    image: string;
    excerpt: string;
    href: string;
  };
}) {
  return (
    <Link href={post.href} className="group block">
      <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-h4 font-light mb-2 group-hover:opacity-70 transition-opacity my-0">
        {post.title}
      </h3>
      <p className="text-small text-dark mb-1">
        {post.author} &mdash; {post.date}
      </p>
      <p className="text-small text-dark">{post.excerpt}</p>
    </Link>
  );
}

export default function ReflectPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-yellow py-16">
        <div className="container-site">
          <h1>Reflect</h1>
          <p className="text-large max-w-2xl">
            Essays and reflections on the intersection of therapy, design
            thinking, and intentional living.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section-white py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.map((post) => (
              <PostCard key={post.href} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
