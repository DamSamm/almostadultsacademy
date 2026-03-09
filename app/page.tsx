import Link from "next/link";
import Image from "next/image";
import FadeIn from "./components/FadeIn";

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

const testimonials = [
  {
    quote: "The confidence my daughter has gained is remarkable. She now talks about money, budgets and even writes her own little programs!",
    name: "Sarah Lim",
    relation: "Parent of 8-year-old",
    stars: 5,
  },
  {
    quote: "The curriculum is brilliantly designed. My son comes home every week excited to share what he built or experimented with.",
    name: "Ahmad Fauzi",
    relation: "Parent of 6-year-old",
    stars: 5,
  },
  {
    quote: "After just two terms, my daughter is more independent, creative and curious. This academy truly lives up to its name.",
    name: "Priya Narayanan",
    relation: "Parent of 10-year-old",
    stars: 5,
  },
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

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight: 0 }}>
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-16 sm:h-20"
            fill="#1e1b2e"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: "#1e1b2e" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1} className="text-center">
              <p
                className="text-4xl font-extrabold"
                style={{ color: "#ff6b35" }}
              >
                {s.value}
              </p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="section-stripe py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
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
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
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
          </FadeIn>
        </div>
      </section>

      {/* ── PROGRAMS PREVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
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

          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 pb-4 sm:pb-0">
            <div className="flex gap-6 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((p) => (
                <div
                  key={p.title}
                  className="card-hover rounded-2xl p-6 shadow-sm flex-shrink-0 w-72 sm:w-auto snap-start"
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
          </FadeIn>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section className="py-20" style={{ backgroundColor: "#1e1b2e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ffd166" }}
            >
              Life at the Academy
            </span>
            <h2 className="text-4xl font-extrabold mt-2 text-white">
              See It for Yourself
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              A glimpse into the fun, hands-on learning that happens every day
              at The Almost Adults Academy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg" style={{ height: "360px" }}>
              <Image
                src="/Tuitionpic1.jpg"
                alt="Students learning at The Almost Adults Academy"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,27,46,0.6) 0%, transparent 60%)" }} />
              <p className="absolute bottom-5 left-5 text-white font-semibold text-sm">
                🎓 Hands-on learning in action
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg" style={{ height: "360px" }}>
              <Image
                src="/Tuitionpic2.jpg"
                alt="Students engaged in enrichment activities"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,27,46,0.6) 0%, transparent 60%)" }} />
              <p className="absolute bottom-5 left-5 text-white font-semibold text-sm">
                ✨ Enrichment that makes a difference
              </p>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="py-20" style={{ backgroundColor: "#1e1b2e" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
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
          </FadeIn>
        </div>
      </section>

      {/* ── UPCOMING INITIATIVES ── */}
      <section className="section-stripe py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
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
          </FadeIn>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 section-stripe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#ff6b35" }}
            >
              What Parents Say
            </span>
            <h2
              className="text-4xl font-extrabold mt-2"
              style={{ color: "#1e1b2e" }}
            >
              Trusted by Families Across Singapore
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="card-hover bg-white rounded-2xl p-7 shadow-sm border"
                style={{ borderColor: "#ffe0d0" }}
              >
                <div
                  className="text-6xl font-serif leading-none mb-2"
                  style={{ color: "#ff6b35", opacity: 0.25 }}
                >
                  &ldquo;
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  {t.quote}
                </p>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} style={{ color: "#ffd166" }}>★</span>
                  ))}
                </div>
                <p className="font-bold text-sm" style={{ color: "#1e1b2e" }}>{t.name}</p>
                <p className="text-xs text-gray-500">{t.relation}</p>
              </div>
            ))}
          </div>
          </FadeIn>
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
