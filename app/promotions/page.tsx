import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Promotions & Marketing",
  description:
    "Current promotions, marketing strategies and upcoming initiatives at The Almost Adults Academy — including sibling discounts, seasonal offers and community events.",
  openGraph: {
    title: "Promotions & Marketing | The Almost Adults Academy",
    description:
      "Current promotions, marketing strategies and upcoming initiatives at The Almost Adults Academy.",
  },
};

const strategies = [
  {
    icon: "📱",
    title: "Social Media Campaigns",
    color: "#7b2d8b",
    channels: ["Instagram", "TikTok", "Facebook"],
    tactics: [
      "Post highlights including student projects and behind-the-scenes of outdoor activities on Instagram and TikTok.",
      "Utilise Facebook to reach more parents and promote our unique class offerings.",
      "Use paid targeted advertisements to reach specific age groups and neighbourhoods.",
    ],
  },
  {
    icon: "🤝",
    title: "Community Engagement & Partnerships",
    color: "#06d6a0",
    channels: ["Schools", "Partner Vendors", "Open Houses"],
    tactics: [
      "Collaborate with partner vendors and students' schools to help promote our centre.",
      "Offer complimentary workshops or trial classes for interested parents and children.",
      "Host biannual open houses featuring a 'Skills Showcase', inviting parents and media outlets to witness student accomplishments.",
    ],
  },
  {
    icon: "📰",
    title: "Traditional Media Advertising",
    color: "#ff6b35",
    channels: ["Print", "Out-of-Home", "Flyers"],
    tactics: [
      "Place advertisements in local publications including The Straits Times and parenting magazines.",
      "Advertise through MRT carriage panels, bus stop panels and station billboards.",
      "Distribute flyers at targeted areas including residential void decks and high foot-fall MRT stations.",
    ],
  },
];

const initiatives = [
  {
    icon: "🎉",
    title: "Children's Day Celebration",
    partner: "MOE & ECDA Partnership",
    timeline: "Upcoming Year",
    desc: "Partner with the Ministry of Education (MOE) and Early Childhood Development Agency (ECDA) to host a vibrant Children's Day celebration, bringing learning activities to communities across the heartlands.",
    color: "#ff6b35",
  },
  {
    icon: "🏢",
    title: "North & South Outlet Expansion",
    partner: "Internal Growth Initiative",
    timeline: "Within 5 Years",
    desc: "Build 2 more outlets in the North and South of Singapore to expand our reach and make our programmes accessible to more families island-wide.",
    color: "#7b2d8b",
  },
  {
    icon: "🚀",
    title: "Bootcamps & Parent Workshops",
    partner: "Program Development",
    timeline: "In Development",
    desc: "Expand class offerings by introducing intensive bootcamps and increase parental involvement through dedicated workshops that allow parents to participate in their child's learning journey.",
    color: "#06d6a0",
  },
];

export default function PromotionsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="py-24 text-center"
        style={{
          background: "linear-gradient(135deg, #7b2d8b 0%, #4a1a58 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-white opacity-70">
            Marketing Strategy
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-5 leading-tight">
            Promotions &amp; Initiatives
          </h1>
          <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto opacity-90">
            Our multi-channel promotional strategy is designed to maintain our
            strong standing and increase visibility across Singapore.
          </p>
        </div>
      </section>

      {/* ── STRATEGY OVERVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ff6b35" }}
            >
              How We Reach Families
            </span>
            <h2
              className="text-4xl font-extrabold mt-2"
              style={{ color: "#1e1b2e" }}
            >
              Our Promotional Strategies
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              We reach families through a combination of digital, community-led
              and traditional media approaches.
            </p>
          </div>

          <div className="space-y-10">
            {strategies.map((s, i) => (
              <div
                key={s.title}
                className={`card-hover rounded-3xl overflow-hidden shadow-sm border flex flex-col lg:flex-row ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ borderColor: "#e5e7eb" }}
              >
                {/* Color panel */}
                <div
                  className="lg:w-60 flex-shrink-0 flex flex-col items-center justify-center py-10 px-8 text-center gap-4"
                  style={{ backgroundColor: s.color }}
                >
                  <div className="text-6xl">{s.icon}</div>
                  <h3 className="text-xl font-extrabold text-white leading-snug">
                    {s.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {s.channels.map((ch) => (
                      <span
                        key={ch}
                        className="text-xs px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <h4
                    className="text-xs font-bold uppercase tracking-wider mb-4"
                    style={{ color: s.color }}
                  >
                    Key Tactics
                  </h4>
                  <ul className="space-y-4">
                    {s.tactics.map((t, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span
                          className="mt-0.5 w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: s.color }}
                        >
                          {idx + 1}
                        </span>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {t}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANNEL OVERVIEW ── */}
      <section style={{ backgroundColor: "#1e1b2e" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-10">
            Our Marketing Channels at a Glance
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "📸", label: "Instagram" },
              { icon: "🎵", label: "TikTok" },
              { icon: "👥", label: "Facebook" },
              { icon: "📰", label: "Straits Times" },
              { icon: "🚇", label: "MRT Ads" },
              { icon: "📄", label: "Flyers" },
            ].map((ch) => (
              <div
                key={ch.label}
                className="rounded-2xl p-4 text-center"
                style={{ backgroundColor: "rgba(255,107,53,0.12)", border: "1.5px solid rgba(255,107,53,0.25)" }}
              >
                <div className="text-3xl mb-2">{ch.icon}</div>
                <p className="text-white text-sm font-semibold">{ch.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING INITIATIVES ── */}
      <section className="section-stripe py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ff6b35" }}
            >
              Future Plans
            </span>
            <h2
              className="text-4xl font-extrabold mt-2"
              style={{ color: "#1e1b2e" }}
            >
              Upcoming Initiatives
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              We are always planning ahead to grow our reach and continue
              delivering exceptional enrichment to children across Singapore.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {initiatives.map((item) => (
              <div
                key={item.title}
                className="card-hover bg-white rounded-3xl overflow-hidden shadow-sm border"
                style={{ borderColor: "#e5e7eb" }}
              >
                {/* Top banner */}
                <div
                  className="h-3"
                  style={{ backgroundColor: item.color }}
                />
                <div className="p-7">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.timeline}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold mt-3 mb-1"
                    style={{ color: "#1e1b2e" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs font-semibold mb-3"
                    style={{ color: item.color }}
                  >
                    {item.partner}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCOLADES USED IN MARKETING ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#ff6b35" }}
          >
            Trust & Credibility
          </span>
          <h2
            className="text-3xl font-extrabold mt-2 mb-8"
            style={{ color: "#1e1b2e" }}
          >
            Awards That Back Our Brand
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: "Top 10 Education Centres", years: "2020–2025", icon: "🥇" },
              { label: "Inspiring Young Minds Award (MOE)", years: "2021, 2023, 2024", icon: "🎓" },
              { label: "Singapore Education Award (HoneyKids Asia)", years: "2023, 2025", icon: "🏅" },
            ].map((award) => (
              <div
                key={award.label}
                className="card-hover rounded-2xl p-6 border"
                style={{
                  borderColor: "#ffe0d0",
                  backgroundColor: "#fff9f5",
                }}
              >
                <div className="text-4xl mb-3">{award.icon}</div>
                <p
                  className="font-bold mb-1"
                  style={{ color: "#1e1b2e" }}
                >
                  {award.label}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#ff6b35" }}
                >
                  {award.years}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #7b2d8b, #ff6b35)" }}
      >
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Interested in a Trial Class?
        </h2>
        <p className="text-white mb-8 opacity-90">
          Come visit us at one of our 4 centres or attend an open house event.
        </p>
        <Link
          href="/programs"
          className="inline-block px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
          style={{ backgroundColor: "#ffd166", color: "#1e1b2e" }}
        >
          Explore Our Programs →
        </Link>
      </section>
    </>
  );
}
