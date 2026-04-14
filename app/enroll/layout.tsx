import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enroll",
  description:
    "Enroll your child in The Almost Adults Academy — choose from Coding, Life Skills, Creative Arts, STEM, Performing Arts or Outdoor Classes. SGD $35 per session.",
  openGraph: {
    title: "Enroll | The Almost Adults Academy",
    description:
      "Enroll your child in enrichment classes at The Almost Adults Academy. SGD $35 per session, one-time or monthly billing.",
  },
};

export default function EnrollLayout({ children }: { children: React.ReactNode }) {
  return children;
}
