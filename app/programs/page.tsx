import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Explore 6 enrichment programmes for children aged 5–12: Coding, Essential Life Skills, Creative Arts, STEM, Performing Arts and Outdoor Classes. SGD $35 per session.",
  openGraph: {
    title: "Programmes | The Almost Adults Academy",
    description:
      "Explore 6 enrichment programmes for children aged 5–12: Coding, Essential Life Skills, Creative Arts, STEM, Performing Arts and Outdoor Classes.",
  },
};

const programs = [
  {
    slug: "coding",
    icon: "💻",
    title: "Coding",
    tagline: "Build. Create. Think.",
    color: "#7b2d8b",
    age: "Ages 5–12",
    activities: [
      "Write programs from scratch",
      "Build their own games",
      "Develop critical thinking and problem-solving skills",
    ],
    outcomes: [
      "Logical thinking",
      "Creativity through code",
      "Introduction to computational concepts",
    ],
  },
  {
    slug: "essential-life-skills",
    icon: "🧵",
    title: "Essential Life Skills",
    tagline: "Real Skills for Real Life.",
    color: "#ff6b35",
    age: "Ages 7–12",
    activities: [
      "Sewing projects (hand & machine)",
      "Managing simple budgets",
      "Practical household tasks",
    ],
    outcomes: [
      "Financial literacy",
      "Independence and self-sufficiency",
      "Responsibility and care",
    ],
  },
  {
    slug: "creative-arts",
    icon: "🎨",
    title: "Creative Arts",
    tagline: "Imagine. Express. Create.",
    color: "#06d6a0",
    age: "Ages 5–12",
    activities: [
      "Drawing and painting",
      "Clay modelling",
      "Paper mache and mixed media",
    ],
    outcomes: [
      "Creative expression",
      "Imaginative thinking",
      "Fine motor skills development",
    ],
  },
  {
    slug: "stem",
    icon: "🔬",
    title: "STEM",
    tagline: "Discover. Experiment. Innovate.",
    color: "#ffd166",
    textDark: true,
    age: "Ages 6–12",
    activities: [
      "Hands-on science experiments",
      "Group STEM projects",
      "Robot building and mini game coding",
    ],
    outcomes: [
      "Scientific curiosity",
      "Innovation and inventive thinking",
      "Structured problem-solving",
    ],
  },
  {
    slug: "performing-arts",
    icon: "🎭",
    title: "Performing Arts",
    tagline: "Speak. Sing. Shine.",
    color: "#e63946",
    age: "Ages 5–12",
    activities: [
      "Drama performances and role-play",
      "Music and rhythm activities",
      "Stage presence and scripting",
    ],
    outcomes: [
      "Confidence and self-expression",
      "Communication skills",
      "Emotional intelligence",
    ],
  },
  {
    slug: "outdoor-classes",
    icon: "🌿",
    title: "Outdoor Classes",
    tagline: "Explore. Collaborate. Grow.",
    color: "#2d6a4f",
    age: "Ages 7–12",
    activities: [
      "Navigating maps in nature",
      "Building tents and shelters",
      "Obstacle courses and nature challenges",
    ],
    outcomes: [
      "Teamwork and communication",
      "Resilience and adaptability",
      "Social responsibility",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="py-24 text-center"
        style={{
          background: "linear-gradient(135deg, #06d6a0 0%, #06b88a 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span
            className="text-sm font-semibold uppercase tracking-widest text-white opacity-80"
          >
            What We Offer
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-5 leading-tight">
            Our 6 Enrichment Programs
          </h1>
          <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto opacity-90">
            Designed for children aged <strong>5 to 12</strong>, every program
            is built around real-world experiences that make learning
            meaningful, exciting and impactful.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "💻 Coding",
              "🧵 Life Skills",
              "🎨 Creative Arts",
              "🔬 STEM",
              "🎭 Performing Arts",
              "🌿 Outdoor",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGE OVERVIEW ── */}
      <section style={{ backgroundColor: "#1e1b2e" }} className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <p className="text-white font-semibold text-lg">
            📅 All programs cater to children{" "}
            <span style={{ color: "#ffd166" }}>ages 5 to 12</span>
          </p>
          <span className="hidden sm:block text-gray-600">·</span>
          <p className="text-gray-400 text-sm">
            Small class sizes · Experienced instructors · Curriculum-aligned activities
          </p>
        </div>
      </section>

      {/* ── PROGRAMS GRID ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className={`card-hover rounded-3xl overflow-hidden shadow-sm border flex flex-col lg:flex-row ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
              style={{ borderColor: "#e5e7eb" }}
            >
              {/* Colour panel */}
              <div
                className="lg:w-64 flex-shrink-0 flex flex-col items-center justify-center py-12 px-8 text-center"
                style={{ backgroundColor: p.color }}
              >
                <div className="text-6xl mb-4">{p.icon}</div>
                <h2
                  className="text-2xl font-extrabold mb-1"
                  style={{ color: p.textDark ? "#1e1b2e" : "#ffffff" }}
                >
                  {p.title}
                </h2>
                <p
                  className="text-sm italic opacity-80 mb-3"
                  style={{ color: p.textDark ? "#1e1b2e" : "#ffffff" }}
                >
                  {p.tagline}
                </p>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: p.textDark ? "rgba(30,27,46,0.15)" : "rgba(255,255,255,0.25)",
                    color: p.textDark ? "#1e1b2e" : "#fff",
                  }}
                >
                  {p.age}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 grid sm:grid-cols-2 gap-8">
                <div>
                  <h3
                    className="text-sm font-bold uppercase tracking-wider mb-3"
                    style={{ color: p.color === "#ffd166" ? "#cc8800" : p.color }}
                  >
                    What Students Do
                  </h3>
                  <ul className="space-y-2">
                    {p.activities.map((a) => (
                      <li key={a} className="flex gap-3 text-sm text-gray-600">
                        <span
                          className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs"
                          style={{ backgroundColor: p.color === "#ffd166" ? "#cc8800" : p.color }}
                        >
                          ✓
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3
                    className="text-sm font-bold uppercase tracking-wider mb-3"
                    style={{ color: "#06d6a0" }}
                  >
                    Learning Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex gap-3 text-sm text-gray-600">
                        <span className="mt-0.5 text-green-500 flex-shrink-0">🌟</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* View Details link */}
              <div className="px-8 pb-6 flex items-center sm:col-span-2">
                <Link
                  href={`/programs/${p.slug}`}
                  className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: p.color === "#ffd166" ? "#cc8800" : p.color }}
                >
                  View Full Programme →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PARTNERS IN LEARNING ── */}
      <section className="section-stripe py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ff6b35" }}
            >
              Enriched by Our Partners
            </span>
            <h2
              className="text-4xl font-extrabold mt-2"
              style={{ color: "#1e1b2e" }}
            >
              Learning Beyond Our Walls
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🦁",
                name: "Mandai Wildlife Reserve",
                program: "Outdoor Program",
                desc: "Students engage in conservation activities, clean-ups and scavenger hunts to develop teamwork and social responsibility.",
              },
              {
                icon: "🧪",
                name: "Science Centre Singapore",
                program: "STEM Program",
                desc: "Interactive exhibits, STEM experiments, robot-building and mini game coding that spark curiosity and innovation.",
              },
              {
                icon: "🏕️",
                name: "Focus Adventure",
                program: "Outdoor Program",
                desc: "Certified facilitators deliver obstacle courses and nature-based challenges that promote resilience and teamwork.",
              },
            ].map((partner) => (
              <div
                key={partner.name}
                className="card-hover bg-white rounded-2xl p-7 shadow-sm border text-center"
                style={{ borderColor: "#ffe0d0" }}
              >
                <div className="text-5xl mb-4">{partner.icon}</div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full text-white mb-3 inline-block"
                  style={{ backgroundColor: "#ff6b35" }}
                >
                  {partner.program}
                </span>
                <h3
                  className="text-xl font-bold mt-3 mb-2"
                  style={{ color: "#1e1b2e" }}
                >
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #ff6b35, #ffd166)" }}
      >
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Find the perfect program for your child
        </h2>
        <p className="text-white mb-8 opacity-90">
          Trial classes and open houses available — no commitment required.
        </p>
        <Link
          href="/promotions"
          className="inline-block px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
          style={{ backgroundColor: "#1e1b2e", color: "#fff" }}
        >
          See Upcoming Events →
        </Link>
      </section>
    </>
  );
}
