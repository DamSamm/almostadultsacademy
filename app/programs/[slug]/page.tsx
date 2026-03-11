import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "../../components/FadeIn";

const programs = [
  {
    slug: "coding",
    icon: "💻",
    title: "Coding",
    tagline: "Build. Create. Think.",
    color: "#7b2d8b",
    age: "Ages 5–12",
    day: "Monday",
    hero: "linear-gradient(135deg, #7b2d8b 0%, #4a1a6b 100%)",
    image: "/CodingClass.png",
    intro:
      "In a world driven by technology, coding is one of the most valuable skills a child can learn. Our Coding programme introduces children to the fundamentals of programming through interactive, game-based activities — making complex concepts approachable and exciting.",
    activities: [
      "Write programmes from scratch using beginner-friendly languages",
      "Build their own playable mini games",
      "Debug and problem-solve real code",
      "Learn sequences, loops, and conditionals through hands-on projects",
    ],
    outcomes: [
      "Logical and computational thinking",
      "Creativity and design through code",
      "Persistence and problem-solving skills",
      "Introduction to real-world software concepts",
    ],
    highlights: [
      { icon: "🎮", label: "Game-based learning" },
      { icon: "🧩", label: "Puzzle thinking" },
      { icon: "🤖", label: "Future-ready skills" },
      { icon: "👨‍💻", label: "Beginner-friendly" },
    ],
    partners: null,
  },
  {
    slug: "essential-life-skills",
    icon: "🧵",
    title: "Essential Life Skills",
    tagline: "Real Skills for Real Life.",
    color: "#ff6b35",
    age: "Ages 7–12",
    day: "Tuesday",
    hero: "linear-gradient(135deg, #ff6b35 0%, #cc4a1a 100%)",
    image: "/LifeSkills.jpeg",
    intro:
      "School curriculum rarely teaches children how to sew a button, manage a budget, or handle everyday household tasks. Our Essential Life Skills programme bridges that gap, preparing children with practical knowledge they will use for the rest of their lives.",
    activities: [
      "Hand sewing and basic machine sewing projects",
      "Managing simple personal budgets and understanding money",
      "Cooking and kitchen safety fundamentals",
      "Practical household problem-solving tasks",
    ],
    outcomes: [
      "Financial literacy and responsible spending habits",
      "Independence and self-sufficiency at home",
      "Responsibility, care, and attention to detail",
      "Confidence in tackling everyday tasks",
    ],
    highlights: [
      { icon: "💰", label: "Financial literacy" },
      { icon: "🪡", label: "Sewing & crafting" },
      { icon: "🏠", label: "Home independence" },
      { icon: "🍳", label: "Kitchen basics" },
    ],
    partners: null,
  },
  {
    slug: "creative-arts",
    icon: "🎨",
    title: "Creative Arts",
    tagline: "Imagine. Express. Create.",
    color: "#06d6a0",
    age: "Ages 5–12",
    day: "Wednesday",
    hero: "linear-gradient(135deg, #06d6a0 0%, #04a07a 100%)",
    image: "/CreativeArts.jpg",
    intro:
      "Art is more than drawing — it is a language. Our Creative Arts programme encourages children to express themselves through a wide range of media, developing their imagination and fine motor skills in a supportive, open environment.",
    activities: [
      "Drawing and watercolour painting",
      "Clay modelling and sculpting",
      "Paper mache constructions and mixed media",
      "Collage, printmaking, and textile art",
    ],
    outcomes: [
      "Creative confidence and self-expression",
      "Imaginative and divergent thinking",
      "Fine motor skill development",
      "Appreciation for art and different cultures",
    ],
    highlights: [
      { icon: "🖌️", label: "Painting & drawing" },
      { icon: "🏺", label: "Clay & sculpting" },
      { icon: "✂️", label: "Mixed media" },
      { icon: "🌈", label: "Colour & design" },
    ],
    partners: null,
  },
  {
    slug: "stem",
    icon: "🔬",
    title: "STEM",
    tagline: "Discover. Experiment. Innovate.",
    color: "#ffd166",
    textDark: true,
    age: "Ages 6–12",
    day: "Thursday",
    hero: "linear-gradient(135deg, #ffd166 0%, #cc9a00 100%)",
    image: "/STEM.jpeg",
    intro:
      "Science, Technology, Engineering, and Maths come to life in our STEM programme. Through exciting experiments and collaborative challenges, children develop a love for discovery and learn to think like scientists and engineers.",
    activities: [
      "Hands-on chemistry and physics experiments",
      "Group STEM engineering challenges",
      "Robot building and coding with micro:bit",
      "Mini game creation and app prototyping",
    ],
    outcomes: [
      "Scientific curiosity and observation skills",
      "Innovation and inventive thinking",
      "Structured problem-solving and analysis",
      "Teamwork through collaborative challenges",
    ],
    highlights: [
      { icon: "🧪", label: "Lab experiments" },
      { icon: "🤖", label: "Robotics" },
      { icon: "⚙️", label: "Engineering" },
      { icon: "📐", label: "Maths in action" },
    ],
    partners: [
      {
        name: "Science Centre Singapore",
        desc: "Students visit interactive exhibits, conduct STEM experiments, and engage in robot-building sessions under certified facilitators.",
      },
    ],
  },
  {
    slug: "performing-arts",
    icon: "🎭",
    title: "Performing Arts",
    tagline: "Speak. Sing. Shine.",
    color: "#e63946",
    age: "Ages 5–12",
    day: "Friday",
    hero: "linear-gradient(135deg, #e63946 0%, #a01a24 100%)",
    image: "/PerformingArts.jpg",
    intro:
      "Performing Arts goes far beyond the stage — it builds the confidence to speak up, the empathy to understand others, and the creativity to tell stories. Our programme uses drama, music, and movement to unlock every child's inner performer.",
    activities: [
      "Drama performances, role-play, and improvisation",
      "Music appreciation and rhythm activities",
      "Script writing and story creation",
      "Stage presence, voice projection, and public speaking",
    ],
    outcomes: [
      "Confident self-expression and public speaking",
      "Emotional intelligence and empathy",
      "Teamwork and collaboration on stage",
      "Communication skills for everyday life",
    ],
    highlights: [
      { icon: "🎤", label: "Voice & speech" },
      { icon: "🎵", label: "Music & rhythm" },
      { icon: "🎬", label: "Drama & role-play" },
      { icon: "🌟", label: "Stage confidence" },
    ],
    partners: null,
  },
  {
    slug: "outdoor-classes",
    icon: "🌿",
    title: "Outdoor Classes",
    tagline: "Explore. Collaborate. Grow.",
    color: "#2d6a4f",
    age: "Ages 7–12",
    day: "Saturday",
    hero: "linear-gradient(135deg, #2d6a4f 0%, #1a3d2e 100%)",
    image: "/OutdoorClasses.jpg",
    intro:
      "Children learn best when they step outside. Our Outdoor Classes take learning into nature, building resilience, teamwork, and environmental awareness through physical challenges and real-world exploration.",
    activities: [
      "Navigating maps and orienteering in nature settings",
      "Building tents and shelters",
      "Obstacle courses and nature teamwork challenges",
      "Environmental clean-up and conservation activities",
    ],
    outcomes: [
      "Teamwork, communication, and leadership",
      "Resilience and adaptability under pressure",
      "Respect for nature and social responsibility",
      "Physical fitness and outdoor confidence",
    ],
    highlights: [
      { icon: "🗺️", label: "Navigation & maps" },
      { icon: "⛺", label: "Tent building" },
      { icon: "🌳", label: "Nature exploration" },
      { icon: "🤝", label: "Team challenges" },
    ],
    partners: [
      {
        name: "Mandai Wildlife Reserve",
        desc: "Students engage in conservation activities, wildlife clean-ups and guided scavenger hunts to develop teamwork and social responsibility.",
      },
      {
        name: "Focus Adventure",
        desc: "Certified facilitators lead obstacle courses and nature-based challenges that build resilience and communication skills.",
      },
    ],
  },
];

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const accentColor = program.color === "#ffd166" ? "#cc8800" : program.color;

  return (
    <>
      {/* ── HERO ── */}
      <section className="py-24 text-center" style={{ background: program.hero }}>
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 mb-6 transition-opacity"
          >
            ← Back to all programmes
          </Link>
          <div className="text-7xl mb-4">{program.icon}</div>
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: program.textDark ? "#1e1b2e" : "rgba(255,255,255,0.7)" }}
          >
            {program.age} · Every {program.day}
          </span>
          <h1
            className="text-5xl font-extrabold mt-2 mb-3 leading-tight"
            style={{ color: program.textDark ? "#1e1b2e" : "#fff" }}
          >
            {program.title}
          </h1>
          <p
            className="text-2xl font-semibold italic mb-6"
            style={{ color: program.textDark ? "#1e1b2e" : "rgba(255,255,255,0.85)" }}
          >
            &ldquo;{program.tagline}&rdquo;
          </p>
          <Link
            href="/enroll"
            className="inline-block px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: program.textDark ? "#1e1b2e" : "#fff", color: program.textDark ? "#fff" : program.color }}
          >
            Enroll in This Programme →
          </Link>
        </div>
      </section>

      {/* ── HIGHLIGHTS BAR ── */}
      <section style={{ backgroundColor: "#1e1b2e" }} className="py-8">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {program.highlights.map((h) => (
            <div key={h.label}>
              <div className="text-3xl mb-1">{h.icon}</div>
              <p className="text-white text-sm font-semibold">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: accentColor }}>
              About This Programme
            </span>
            <h2 className="text-3xl font-extrabold mt-2 mb-6" style={{ color: "#1e1b2e" }}>
              What is {program.title}?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">{program.intro}</p>
          </FadeIn>
        </div>
      </section>

      {/* ── PROGRAMME IMAGE ── */}
      {program.image && (
        <section className="bg-white pb-4">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden shadow-lg" style={{ height: "360px" }}>
                <Image
                  src={program.image}
                  alt={`${program.title} class in action`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── ACTIVITIES & OUTCOMES ── */}
      <section className="py-20 section-stripe">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 gap-10">
          <FadeIn direction="left">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: accentColor }}>
              What Students Do
            </h3>
            <ul className="space-y-4">
              {program.activities.map((a) => (
                <li key={a} className="flex gap-3 text-gray-700">
                  <span
                    className="mt-1 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: accentColor }}
                  >
                    ✓
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5" style={{ color: "#06d6a0" }}>
              Learning Outcomes
            </h3>
            <ul className="space-y-4">
              {program.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-gray-700">
                  <span className="mt-0.5 flex-shrink-0">🌟</span>
                  {o}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── PARTNERS (if any) ── */}
      {program.partners && program.partners.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <div className="text-center mb-10">
                <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#ff6b35" }}>
                  Learning Partners
                </span>
                <h2 className="text-3xl font-extrabold mt-2" style={{ color: "#1e1b2e" }}>
                  Beyond Our Walls
                </h2>
              </div>
              <div className="space-y-6">
                {program.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="rounded-2xl p-7 border"
                    style={{ borderColor: "#ffe0d0", backgroundColor: "#fff9f7" }}
                  >
                    <h4 className="font-bold text-lg mb-2" style={{ color: "#1e1b2e" }}>
                      {partner.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{partner.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section
        className="py-20 text-center"
        style={{ background: `linear-gradient(135deg, ${program.color}, ${program.color}cc)` }}
      >
        <FadeIn>
          <div className="max-w-2xl mx-auto px-4">
            <h2
              className="text-3xl font-extrabold mb-3"
              style={{ color: program.textDark ? "#1e1b2e" : "#fff" }}
            >
              Ready to join {program.title}?
            </h2>
            <p
              className="mb-8 opacity-90"
              style={{ color: program.textDark ? "#1e1b2e" : "#fff" }}
            >
              Submit an enrolment enquiry and we will confirm your child&apos;s
              spot within 1–2 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/enroll"
                className="px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
                style={{ backgroundColor: program.textDark ? "#1e1b2e" : "#fff", color: program.textDark ? "#fff" : program.color }}
              >
                Enroll Now →
              </Link>
              <Link
                href="/programs"
                className="px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
                style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "#fff" }}
              >
                See All Programmes
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
