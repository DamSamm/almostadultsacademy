import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind The Almost Adults Academy — Singapore's award-winning after-school enrichment centre for children aged 5–12. Learn about our mission, departments, and values.",
  openGraph: {
    title: "About Us | The Almost Adults Academy",
    description:
      "Meet the team behind The Almost Adults Academy — Singapore's award-winning after-school enrichment centre for children aged 5–12.",
  },
};

const teamMembers = [
  {
    name: "Rohini",
    role: "Team Member",
    emoji: "🌸",
    color: "#ff6b35",
    strengths: [
      "Active listening",
      "Hard-working",
      "Stays on task",
      "Optimistic in challenging times",
    ],
    weaknesses: [
      "Lack of initiative",
      "Difficulty conveying ideas",
      "Public speaking",
    ],
  },
  {
    name: "Eustacia",
    role: "Team Member",
    emoji: "⭐",
    color: "#06d6a0",
    strengths: [
      "Supports team morale",
      "Considers all members' opinions",
      "Finishes tasks promptly",
    ],
    weaknesses: [
      "Fear of public speaking",
      "Needs more time to understand certain ideas",
    ],
  },
  {
    name: "Renee",
    role: "Team Member",
    emoji: "✍️",
    color: "#7b2d8b",
    strengths: [
      "Writing and formatting documents",
      "Keeps the group on task",
      "Leads discussions when needed",
    ],
    weaknesses: [
      "Too independent; hard to rely on others",
      "Not very flexible at times",
    ],
  },
  {
    name: "Kiara",
    role: "Team Member",
    emoji: "👑",
    color: "#ffd166",
    textDark: true,
    strengths: [
      "Leadership",
      "Task-oriented",
      "Steps up when necessary",
      "Ensures high quality work",
    ],
    weaknesses: [
      "Occasional procrastination",
      "Managing multiple tasks simultaneously",
    ],
  },
];

const departments = [
  {
    icon: "📋",
    name: "Management & Administration",
    desc: "Directs daily operations and ensures the company runs smoothly.",
  },
  {
    icon: "📚",
    name: "Education",
    desc: "Teachers and curriculum planners design lessons, guide student learning and ensure activities meet learning objectives.",
  },
  {
    icon: "🚚",
    name: "Logistics",
    desc: "Transports students, delivers and manages supplies and materials, and sets up events.",
  },
  {
    icon: "📢",
    name: "Marketing",
    desc: "Promotes the centre, manages communication and builds the company's brand.",
  },
  {
    icon: "🧹",
    name: "Maintenance",
    desc: "Cleans, repairs, and ensures the centres are well maintained and safe for the students.",
  },
];

const groundRules = [
  "AI tools may be used for ideation, but work cannot be copied wholesale.",
  "Everyone must contribute to the team — all ideas are to be respected and encouraged.",
  "When deadlines are set, all members are expected to follow through.",
  "Team meetings should start and end on time, and members are to attend regularly.",
  "Members are expected to communicate clearly and respectfully with each other.",
  "Members must raise concerns considerately and promptly when faced with scheduling conflicts or disagreements.",
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section
        className="py-24 text-center relative"
        style={{
          backgroundImage: "url('/WhoWeAre.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(30,27,46,0.72)" }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#ffd166" }}
          >
            About Us
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-5 leading-tight">
            Who We Are
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            The Almost Adults Academy is Singapore's award-winning after-school
            enrichment centre, helping children aged 5–12 build essential
            real-world skills since 2015.
          </p>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="section-stripe py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ff6b35" }}
            >
              Company Overview
            </span>
            <h2
              className="text-4xl font-extrabold mt-2 mb-6 leading-tight"
              style={{ color: "#1e1b2e" }}
            >
              The Almost Adults Academy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Categorised under <strong>education services</strong>, we are an
              after-school enrichment centre for children between{" "}
              <strong>ages 5 and 12</strong>. Our slogan — &#34;Small Humans,
              Big Plans&#34; — reflects our belief that every child is capable
              of great things.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We have been operating for <strong>10 years</strong> and have
              expanded to <strong>multiple locations</strong> across Singapore:
              Punggol, Tampines, City Hall (HQ) and Jurong East.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We employ <strong>105 staff</strong> across our 4 centres and are
              planning to expand further in the near future.
            </p>
          </div>

          {/* Location cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { city: "City Hall", tag: "HQ", color: "#ff6b35" },
              { city: "Punggol", tag: "North-East", color: "#06d6a0" },
              { city: "Tampines", tag: "East", color: "#7b2d8b" },
              { city: "Jurong East", tag: "West", color: "#ffd166", darkText: true },
            ].map((loc) => (
              <div
                key={loc.city}
                className="card-hover rounded-2xl p-6 text-center"
                style={{ backgroundColor: loc.color + "18", border: `2px solid ${loc.color}40` }}
              >
                <div className="text-2xl mb-2">📍</div>
                <p
                  className="font-bold text-lg"
                  style={{ color: loc.darkText ? "#1e1b2e" : loc.color }}
                >
                  {loc.city}
                </p>
                <p className="text-xs text-gray-500 mt-1">{loc.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PURPOSE ── */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: "url('/OurMissionOurPurpose.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark overlay for legibility */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(30,27,46,0.65)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ff6b35" }}
            >
              Our Mission
            </span>
            <h2
              className="text-4xl font-extrabold mt-2 text-white"
            >
              Our Purpose
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "🎯",
                text: "Equip children with essential life skills not conventionally taught in school.",
              },
              {
                icon: "🛡️",
                text: "Provide a safe and holistic learning environment to assist children in achieving self-sufficiency and independence.",
              },
              {
                icon: "🌱",
                text: "Simulate real-life and hands-on experiences to make learning fun and purposeful.",
              },
              {
                icon: "💪",
                text: "Guide children through practical activities that build confidence for real-world challenges.",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="card-hover rounded-2xl p-6 text-center shadow-sm border"
                style={{ borderColor: "rgba(255,255,255,0.2)", backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(6px)" }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="text-white text-sm leading-relaxed opacity-90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS ── */}
      <section className="section-stripe py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ff6b35" }}
            >
              Our Structure
            </span>
            <h2
              className="text-4xl font-extrabold mt-2"
              style={{ color: "#1e1b2e" }}
            >
              Our Teams
            </h2>
            <p className="text-gray-500 mt-3">
              105 employees across 5 departments, working together to deliver
              exceptional experiences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {departments.map((d) => (
              <div
                key={d.name}
                className="card-hover bg-white rounded-2xl p-6 text-center shadow-sm border"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ color: "#1e1b2e" }}
                >
                  {d.name}
                </h3>
                <p className="text-xs text-gray-500 leading-snug">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM MEMBERS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ff6b35" }}
            >
              Meet the Team
            </span>
            <h2
              className="text-4xl font-extrabold mt-2"
              style={{ color: "#1e1b2e" }}
            >
              Our Team Members
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Each member brings unique strengths to the team, and we grow by
              supporting one another through our challenges.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="card-hover rounded-2xl overflow-hidden shadow-sm border"
                style={{ borderColor: "#e5e7eb" }}
              >
                {/* Header */}
                <div
                  className="p-6 text-center"
                  style={{ backgroundColor: member.color, color: member.textDark ? "#1e1b2e" : "#fff" }}
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-3xl mb-3"
                    style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
                  >
                    {member.emoji}
                  </div>
                  <h3 className="font-extrabold text-xl">{member.name}</h3>
                  <p
                    className="text-sm mt-1 opacity-80"
                  >
                    {member.role}
                  </p>
                </div>

                {/* Strengths */}
                <div className="p-5">
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "#06d6a0" }}
                  >
                    ✅ Strengths
                  </p>
                  <ul className="space-y-1 mb-4">
                    {member.strengths.map((s) => (
                      <li key={s} className="text-xs text-gray-600 flex gap-2">
                        <span>•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "#e63946" }}
                  >
                    🔧 Areas to Grow
                  </p>
                  <ul className="space-y-1">
                    {member.weaknesses.map((w) => (
                      <li key={w} className="text-xs text-gray-600 flex gap-2">
                        <span>•</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROUND RULES ── */}
      <section
        className="py-20"
        style={{ backgroundColor: "#1e1b2e" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ffd166" }}
            >
              How We Work
            </span>
            <h2 className="text-4xl font-extrabold mt-2 text-white">
              Our Team Ground Rules
            </h2>
            <p className="text-gray-400 mt-3">
              A shared commitment to respect, accountability and collaboration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {groundRules.map((rule, i) => (
              <div
                key={i}
                className="rounded-xl p-5 flex gap-4 items-start"
                style={{ backgroundColor: "rgba(255,107,53,0.12)", border: "1.5px solid rgba(255,107,53,0.25)" }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 text-white"
                  style={{ backgroundColor: "#ff6b35" }}
                >
                  {i + 1}
                </span>
                <p className="text-gray-300 text-sm leading-relaxed">{rule}</p>
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
          Want to Know What We Teach?
        </h2>
        <Link
          href="/programs"
          className="inline-block px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
          style={{ backgroundColor: "#1e1b2e", color: "#fff" }}
        >
          Explore Our Programs →
        </Link>
      </section>
    </>
  );
}
