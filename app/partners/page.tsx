import Link from "next/link";

const partners = [
  {
    icon: "🦁",
    name: "Mandai Wildlife Reserve",
    type: "Outdoor Program Partner",
    color: "#2d6a4f",
    highlights: [
      "Students engage in activities focused on conservation and sustainable practices, teaching social responsibility.",
      "Group clean-ups and scavenger hunts develop teamwork and communication skills.",
      "Connects classroom learning with real-world environmental awareness.",
    ],
  },
  {
    icon: "🧪",
    name: "Science Centre Singapore",
    type: "STEM Curriculum Partner",
    color: "#7b2d8b",
    highlights: [
      "Students explore interactive exhibits and STEM experiments that encourage discovery.",
      "Robot-building and mini game coding sessions develop problem-solving and innovative skills.",
      "Expert-guided experiences that bridge science with hands-on application.",
    ],
  },
  {
    icon: "🏕️",
    name: "Focus Adventure",
    type: "Outdoor Programme Partner",
    color: "#06d6a0",
    highlights: [
      "Certified facilitators provide safe, structured and enriching experiences for children.",
      "Obstacle courses and nature-based challenges promote resilience, adaptability and social skills.",
      "Programmes are thoughtfully designed to align with our learning objectives.",
    ],
  },
];

const competitors = [
  {
    name: "Newton Show Camp",
    icon: "🚀",
    description:
      "Themed camps (e.g. Christmas, Robotics) for children aged 3–12. Services include after-school lessons and birthday parties.",
    strengths: [
      "1:5 teacher to student ratio",
      "Extended hours for students",
      "Full-day holiday programs for a wider age range",
    ],
    weaknesses: [
      "Runs on an ad-hoc basis, mainly during school holidays",
      "Limited consistency throughout the academic year",
    ],
    color: "#e63946",
  },
  {
    name: "Art Wonderland",
    icon: "🎨",
    description:
      "Uses art to educate children aged 18 months to 12 years, working primarily with under-privileged communities.",
    strengths: [
      "Wider age range (18 months to 12 years)",
      "Longer operating hours",
    ],
    weaknesses: [
      "Specialises only in art",
      "Primarily targets under-privileged children — narrower market reach",
    ],
    color: "#ff6b35",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="py-24 text-center"
        style={{
          background: "linear-gradient(135deg, #06d6a0 0%, #2d6a4f 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-white opacity-80">
            Ecosystem
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-5 leading-tight">
            Partners &amp; Competitors
          </h1>
          <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto opacity-90">
            We work with industry-leading organisations to enrich our programs,
            and we understand the competitive landscape that drives us to keep
            innovating.
          </p>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#06d6a0" }}
            >
              Strategic Partners
            </span>
            <h2
              className="text-4xl font-extrabold mt-2"
              style={{ color: "#1e1b2e" }}
            >
              Who We Work With
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Our partnerships bring the real world into our classrooms, giving
              children enriching experiences beyond what textbooks can provide.
            </p>
          </div>

          <div className="space-y-8">
            {partners.map((partner, i) => (
              <div
                key={partner.name}
                className={`card-hover rounded-3xl overflow-hidden shadow-sm border flex flex-col lg:flex-row ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ borderColor: "#e5e7eb" }}
              >
                {/* Color panel */}
                <div
                  className="lg:w-56 flex-shrink-0 flex flex-col items-center justify-center py-12 px-8 text-center"
                  style={{ backgroundColor: partner.color }}
                >
                  <div className="text-6xl mb-4">{partner.icon}</div>
                  <span className="text-xs font-semibold text-white bg-white/20 px-3 py-1 rounded-full mb-3">
                    {partner.type}
                  </span>
                  <h3 className="text-xl font-extrabold text-white leading-snug">
                    {partner.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <h4
                    className="text-xs font-bold uppercase tracking-wider mb-3"
                    style={{ color: partner.color }}
                  >
                    What Our Students Gain
                  </h4>
                  <ul className="space-y-3">
                    {partner.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-gray-600">
                        <span
                          className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs"
                          style={{ backgroundColor: partner.color }}
                        >
                          ✓
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPETITIVE LANDSCAPE ── */}
      <section className="section-stripe py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ff6b35" }}
            >
              Market Overview
            </span>
            <h2
              className="text-4xl font-extrabold mt-2"
              style={{ color: "#1e1b2e" }}
            >
              Competitive Landscape
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Understanding our competition helps us continuously improve and
              deliver greater value to our families.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {competitors.map((comp) => (
              <div
                key={comp.name}
                className="card-hover bg-white rounded-3xl overflow-hidden shadow-sm border"
                style={{ borderColor: "#e5e7eb" }}
              >
                {/* Header */}
                <div
                  className="p-6 flex items-center gap-4"
                  style={{ backgroundColor: comp.color + "18" }}
                >
                  <div className="text-4xl">{comp.icon}</div>
                  <div>
                    <h3
                      className="text-xl font-extrabold"
                      style={{ color: "#1e1b2e" }}
                    >
                      {comp.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{comp.description}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 grid sm:grid-cols-2 gap-6">
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "#06d6a0" }}
                    >
                      ✅ Their Strengths
                    </p>
                    <ul className="space-y-2">
                      {comp.strengths.map((s) => (
                        <li key={s} className="flex gap-2 text-xs text-gray-600">
                          <span className="text-green-500 flex-shrink-0">+</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "#e63946" }}
                    >
                      ⚠️ Their Weaknesses
                    </p>
                    <ul className="space-y-2">
                      {comp.weaknesses.map((w) => (
                        <li key={w} className="flex gap-2 text-xs text-gray-600">
                          <span className="text-red-400 flex-shrink-0">−</span>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR EDGE ── */}
      <section style={{ backgroundColor: "#1e1b2e" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ffd166" }}
            >
              Why Choose Us
            </span>
            <h2 className="text-4xl font-extrabold mt-2 text-white">
              Our Competitive Advantage
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "📅",
                title: "Year-round programs",
                desc: "We operate consistently throughout the year — not just during holidays.",
              },
              {
                icon: "🎓",
                title: "6 diverse programs",
                desc: "From STEM to performing arts, we offer more variety than our competitors.",
              },
              {
                icon: "🏆",
                title: "Award-winning",
                desc: "Top 10 Education Centre 6 years running, plus multiple MOE and HoneyKids awards.",
              },
              {
                icon: "🤝",
                title: "Strong partnerships",
                desc: "We partner with Mandai Wildlife Reserve, Science Centre and Focus Adventure.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 text-center"
                style={{
                  backgroundColor: "rgba(255,107,53,0.12)",
                  border: "1.5px solid rgba(255,107,53,0.25)",
                }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3
                  className="font-bold mb-2 text-white"
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
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
          See How We Promote Ourselves
        </h2>
        <Link
          href="/promotions"
          className="inline-block px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
          style={{ backgroundColor: "#1e1b2e", color: "#fff" }}
        >
          View Our Promotions →
        </Link>
      </section>
    </>
  );
}
