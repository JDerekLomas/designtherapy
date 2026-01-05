import { Metadata } from "next";
import { ResourcesContent } from "./ResourcesContent";

export const metadata: Metadata = {
  title: "Resources | Design Therapy",
  description: "Design thinking tools, frameworks, and exercises for personal growth and relationship development. Practical resources you can use today.",
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
