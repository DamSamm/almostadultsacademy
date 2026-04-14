import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timetable",
  description:
    "View the weekly class schedule for The Almost Adults Academy — Coding, Life Skills, Creative Arts, STEM, Performing Arts and Outdoor Classes. Monday to Saturday.",
  openGraph: {
    title: "Timetable | The Almost Adults Academy",
    description:
      "View the weekly class schedule for The Almost Adults Academy — Monday to Saturday, with after-school time slots.",
  },
};

export default function TimetableLayout({ children }: { children: React.ReactNode }) {
  return children;
}
