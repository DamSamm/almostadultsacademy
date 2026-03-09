import Link from "next/link";
import FadeIn from "../components/FadeIn";

const posts = [
  {
    slug: "life-skills-every-child-should-learn",
    tag: "Life Skills",
    tagColor: "#ff6b35",
    date: "12 Feb 2026",
    readTime: "4 min read",
    title: "5 Life Skills Every Child Should Learn Before 13",
    excerpt:
      "From managing money to sewing on a button, these practical skills give children a real head start in life — and most of them are never covered in school.",
    icon: "🧵",
  },
  {
    slug: "coding-new-literacy-for-kids",
    tag: "Coding",
    tagColor: "#7b2d8b",
    date: "28 Jan 2026",
    readTime: "5 min read",
    title: "Why Coding Is the New Literacy for Kids",
    excerpt:
      "Reading, writing, and arithmetic shaped the 20th century. Coding is shaping the 21st. Here's why introducing programming to young children is one of the best things you can do for their future.",
    icon: "💻",
  },
  {
    slug: "outdoor-education-builds-resilience",
    tag: "Outdoor Classes",
    tagColor: "#2d6a4f",
    date: "10 Jan 2026",
    readTime: "4 min read",
    title: "How Outdoor Education Builds Resilience in Young Learners",
    excerpt:
      "There is something irreplaceable about learning outside. Maps, tents, mud and teamwork — discover how outdoor challenges prepare children for the unpredictability of real life.",
    icon: "🌿",
  },
  {
    slug: "inside-creative-arts-classes",
    tag: "Creative Arts",
    tagColor: "#06d6a0",
    date: "20 Dec 2025",
    readTime: "3 min read",
    title: "A Look Inside Our Creative Arts Classes",
    excerpt:
      "Clay, watercolour, paper mache and more — our Creative Arts classes are about more than making things. They're about building confidence, imagination and the ability to express what words cannot.",
    icon: "🎨",
  },
  {
    slug: "stem-curiosity-foundation",
    tag: "STEM",
    tagColor: "#cc8800",
    date: "5 Dec 2025",
    readTime: "5 min read",
    title: "Building Scientific Curiosity: Why STEM Starts Young",
    excerpt:
      "The habit of asking \"why?\" is one of the most powerful traits a child can develop. Our STEM programme is designed to keep that curiosity alive through hands-on experiments and real engineering challenges.",
    icon: "🔬",
  },
  {
    slug: "performing-arts-confidence",
    tag: "Performing Arts",
    tagColor: "#e63946",
    date: "18 Nov 2025",
    readTime: "4 min read",
    title: "From Shy to Shining: How Performing Arts Transforms Confidence",
    excerpt:
      "Many parents are surprised by how much their quiet child opens up after a term of drama and music. We explore how performing arts creates a safe space for children to find their voice.",
    icon: "🎭",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #1e1b2e 0%, #3a2d5c 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#ffd166" }}>
            From Our Academy
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-5 leading-tight">
            News &amp; Insights
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto">
            Tips for parents, activity highlights, and expert insights on
            raising curious, confident, capable children.
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div
              className="rounded-3xl overflow-hidden shadow-sm border flex flex-col lg:flex-row"
              style={{ borderColor: "#ffe0d0" }}
            >
              {/* Icon panel */}
              <div
                className="lg:w-64 flex-shrink-0 flex items-center justify-center py-16"
                style={{ backgroundColor: featured.tagColor + "20" }}
              >
                <span className="text-8xl">{featured.icon}</span>
              </div>
              {/* Content */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: featured.tagColor }}
                  >
                    {featured.tag}
                  </span>
                  <span className="text-xs text-gray-400">
                    ⭐ Featured · {featured.date} · {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#1e1b2e" }}>
                  {featured.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="inline-block self-start px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: "#ff6b35" }}
                >
                  Read More →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ALL POSTS ── */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-extrabold mb-8" style={{ color: "#1e1b2e" }}>
              More Articles
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.08}>
                <div
                  className="card-hover bg-white rounded-2xl border overflow-hidden h-full flex flex-col"
                  style={{ borderColor: "#e5e7eb" }}
                >
                  <div
                    className="py-10 flex items-center justify-center text-6xl"
                    style={{ backgroundColor: post.tagColor + "15" }}
                  >
                    {post.icon}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: post.tagColor }}
                      >
                        {post.tag}
                      </span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-extrabold text-base mb-2 leading-snug" style={{ color: "#1e1b2e" }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-semibold transition-colors hover:underline"
                        style={{ color: "#ff6b35" }}
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #ff6b35, #ffd166)" }}
      >
        <FadeIn>
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Want to see it in person?
            </h2>
            <p className="text-white opacity-90 mb-8">
              Book a free trial class for your child and experience The Almost
              Adults Academy first-hand.
            </p>
            <Link
              href="/enroll"
              className="inline-block px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "#1e1b2e", color: "#fff" }}
            >
              Book a Trial Class →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
