import Link from "next/link";

const programs = [
  {
    icon: "💻",
    title: "Coding",
    desc: "Write programs, build games and develop critical thinking skills.",
    color: "#7b2d8b",
  },
  {
    icon: "🧵",
    title: "Essential Life Skills",
    desc: "Practice sewing, manage budgets and foster financial literacy.",
    color: "#ff6b35",
  },
  {
    icon: "🎨",
    title: "Creative Arts",
    desc: "Explore drawing, clay modelling, paper mache and more.",
    color: "#06d6a0",
  },
  {
    icon: "🔬",
    title: "STEM",
    desc: "Conduct experiments that pique scientific curiosity.",
    color: "#ffd166",
    textDark: true,
  },
  {
    icon: "🎭",
    title: "Performing Arts",
    desc: "Drama and music activities to build confidence and self-expression.",
    color: "#e63946",
  },
  {
    icon: "🌿",
    title: "Outdoor Classes",
    desc: "Navigating maps and building tents to foster teamwork and resilience.",
    color: "#2d6a4f",
  },
];

const awards = [
  { year: "2020–2025", title: "Top 10 Education Centres", org: "Industry Recognition" },
  { year: "2021, 2023, 2024", title: "Inspiring Young Minds Award", org: "Ministry of Education" },
  { year: "2023, 2025", title: "Singapore Education Award", org: "HoneyKids Asia" },
];

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "4", label: "Centres in Singapore" },
  { value: "105", label: "Dedicated Employees" },
  { value: "5–12", label: "Age Range (years)" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #ff6b35 0%, #ff8c5a 40%, #ffd166 100%)",
          minHeight: "92vh",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full opacity-20"
          style={{ backgroundColor: "#1e1b2e" }}
        />
        <div
          className="absolute bottom-[-40px] left-[-40px] w-56 h-56 rounded-full opacity-20"
          style={{ backgroundColor: "#7b2d8b" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center py-32 gap-8">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: "rgba(30,27,46,0.4)" }}
          >
            ✨ Singapore's Award-Winning Enrichment Centre
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
            The Almost Adults <br />
            <span style={{ color: "#1e1b2e" }}>Academy</span>
          </h1>

          <p
            className="text-2xl sm:text-3xl font-semibold italic"
            style={{ color: "#1e1b2e" }}
          >
            "Small Humans, Big Plans"
          </p>

          <p className="max-w-2xl text-lg sm:text-xl text-white leading-relaxed">
            An after-school enrichment centre for children aged{" "}
            <strong>5 to 12</strong>. We equip young minds with essential life
            skills through fun, hands-on, real-world experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/programs"
              className="px-8 py-4 rounded-full font-bold text-white text-lg shadow-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "#1e1b2e" }}
            >
              Explore Programs →
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#ff6b35" }}
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: "#1e1b2e" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-4xl font-extrabold"
                style={{ color: "#ff6b35" }}
              >
                {s.value}
              </p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="section-stripe py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ff6b35" }}
            >
              Who We Are
            </span>
            <h2
              className="text-4xl font-extrabold mt-2 mb-6 leading-tight"
              style={{ color: "#1e1b2e" }}
            >
              Learning Beyond the Classroom
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Almost Adults Academy has been operating for over{" "}
              <strong>10 years</strong>, expanding to{" "}
              <strong>4 locations</strong> across Singapore — Punggol, Tampines,
              City Hall (HQ) and Jurong East.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We simulate real-life, hands-on experiences to make learning fun
              and purposeful. Our programmes build confidence and prepare
              children for real-world challenges through practical activities.
            </p>
            <Link
              href="/about"
              className="inline-block px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: "#ff6b35" }}
            >
              Learn More About Us →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🎯", text: "Essential life skills not taught in school" },
              { icon: "🌍", text: "Safe, holistic learning environment" },
              { icon: "🤝", text: "Real-life, hands-on experiences" },
              { icon: "💪", text: "Confidence for real-world challenges" },
            ].map((item) => (
              <div
                key={item.text}
                className="card-hover p-5 rounded-2xl shadow-sm border"
                style={{ backgroundColor: "#fff", borderColor: "#ffe0d0" }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-sm text-gray-600 leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS PREVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ff6b35" }}
            >
              What We Offer
            </span>
            <h2
              className="text-4xl font-extrabold mt-2"
              style={{ color: "#1e1b2e" }}
            >
              Our 6 Enrichment Programs
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Each program is designed to nurture curiosity, creativity and
              confidence in children aged 5 to 12.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div
                key={p.title}
                className="card-hover rounded-2xl p-6 shadow-sm"
                style={{ backgroundColor: p.color + "15", border: `2px solid ${p.color}30` }}
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: p.textDark ? "#1e1b2e" : p.color }}
                >
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/programs"
              className="inline-block px-8 py-4 rounded-full font-bold text-white text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "#ff6b35" }}
            >
              View All Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="py-20" style={{ backgroundColor: "#1e1b2e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ffd166" }}
            >
              Recognition
            </span>
            <h2 className="text-4xl font-extrabold mt-2 text-white">
              Our Accolades
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Years of consistent hard work and high-quality service — recognised
              by leading industry bodies in Singapore.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {awards.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl p-7 text-center card-hover"
                style={{ backgroundColor: "rgba(255,107,53,0.12)", border: "1.5px solid rgba(255,107,53,0.3)" }}
              >
                <div
                  className="text-4xl mb-1 font-extrabold"
                  style={{ color: "#ffd166" }}
                >
                  🏆
                </div>
                <p className="text-xs text-gray-400 mb-2 mt-3">{a.year}</p>
                <h3 className="text-lg font-bold text-white mb-1">{a.title}</h3>
                <p className="text-sm" style={{ color: "#ffd166" }}>
                  {a.org}
                </p>
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
              What's Next
            </span>
            <h2
              className="text-4xl font-extrabold mt-2"
              style={{ color: "#1e1b2e" }}
            >
              Upcoming Initiatives
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🎉",
                title: "Children's Day Celebration",
                desc: "Partnering with MOE and ECDA to host a vibrant Children's Day celebration, bringing learning activities to communities across the heartlands.",
                tag: "Coming Soon",
              },
              {
                icon: "🏢",
                title: "2 New Outlets",
                desc: "Expanding to the North and South of Singapore within the next 5 years, bringing our programmes to even more families.",
                tag: "5-Year Plan",
              },
              {
                icon: "🚀",
                title: "Bootcamps & Workshops",
                desc: "Introducing bootcamps and increasing parental involvement through dedicated parent workshops.",
                tag: "In Development",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-hover bg-white rounded-2xl p-7 shadow-sm border"
                style={{ borderColor: "#ffe0d0" }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full text-white mb-3 inline-block"
                  style={{ backgroundColor: "#ff6b35" }}
                >
                  {item.tag}
                </span>
                <h3
                  className="text-xl font-bold mt-2 mb-2"
                  style={{ color: "#1e1b2e" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-20 text-center"
        style={{
          background: "linear-gradient(135deg, #ff6b35, #ffd166)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Give Your Child a Head Start?
          </h2>
          <p className="text-lg text-white mb-8 opacity-90">
            Join hundreds of families across Singapore who trust The Almost Adults
            Academy to equip their children with the skills that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "#1e1b2e", color: "#fff" }}
            >
              See Our Programs
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#ff6b35" }}
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
