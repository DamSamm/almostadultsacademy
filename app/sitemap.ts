import { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://almostadultsacademy.vercel.app";

const programSlugs = [
  "coding",
  "essential-life-skills",
  "creative-arts",
  "stem",
  "performing-arts",
  "outdoor-classes",
];

const blogSlugs = [
  "life-skills-every-child-should-learn",
  "coding-new-literacy-for-kids",
  "outdoor-education-builds-resilience",
  "inside-creative-arts-classes",
  "stem-curiosity-foundation",
  "performing-arts-confidence",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/programs`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/timetable`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/enroll`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/faq`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${BASE_URL}/gallery`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/partners`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/promotions`, priority: 0.7, changeFrequency: "weekly" },
  ];

  const programRoutes: MetadataRoute.Sitemap = programSlugs.map((slug) => ({
    url: `${BASE_URL}/programs/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...programRoutes, ...blogRoutes];
}
