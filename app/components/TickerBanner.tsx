const items = [
  "🏆 Top 10 Education Centre 2020–2025",
  "✨ Enroll Now for 2026!",
  "🎓 6 Enrichment Programs for Ages 5–12",
  "🌟 100+ 5-Star Reviews from Parents",
  "📍 Centres at Bukit Timah · Clementi · Tampines",
  "🎉 Free Trial Class Available",
];

// Repeat items for a seamless infinite loop
const repeated = [...items, ...items];

export default function TickerBanner() {
  return (
    <div
      style={{ backgroundColor: "#1e1b2e" }}
      className="overflow-hidden py-2 border-b border-white/10"
      aria-hidden="true"
    >
      <div className="ticker-track">
        {repeated.map((item, i) => (
          <span key={i} className="text-xs sm:text-sm font-medium text-gray-200 mx-8">
            {item}
            <span className="ml-8 text-orange-400">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
