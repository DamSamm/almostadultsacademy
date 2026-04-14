import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See photos and highlights from The Almost Adults Academy — hands-on learning, creative projects, STEM experiments and outdoor adventures.",
  openGraph: {
    title: "Gallery | The Almost Adults Academy",
    description:
      "See photos and highlights from The Almost Adults Academy — hands-on learning, creative projects, STEM experiments and outdoor adventures.",
  },
};

const photos = [
  {
    src: "/Tuitionpic1.jpg",
    alt: "Students engaged in hands-on learning",
    caption: "🎓 Hands-on learning in action",
    category: "Learning",
  },
  {
    src: "/Tuitionpic2.jpg",
    alt: "Students engaged in enrichment activities",
    caption: "✨ Enrichment that makes a difference",
    category: "Activities",
  },
];

const placeholders = [
  { icon: "💻", label: "Coding Class", slug: "coding", image: "/CodingClass.png", category: "Coding", color: "#7b2d8b" },
  { icon: "🧵", label: "Life Skills Workshop", slug: "essential-life-skills", image: "/LifeSkills.jpeg", category: "Life Skills", color: "#ff6b35" },
  { icon: "🎨", label: "Creative Arts Session", slug: "creative-arts", image: "/CreativeArts.jpg", category: "Creative Arts", color: "#06d6a0" },
  { icon: "🔬", label: "STEM Experiments", slug: "stem", image: "/STEM.jpeg", category: "STEM", color: "#ffd166", textDark: true },
  { icon: "🎭", label: "Performing Arts", slug: "performing-arts", image: "/PerformingArts.jpg", category: "Performing Arts", color: "#e63946" },
  { icon: "🌿", label: "Outdoor Adventure", slug: "outdoor-classes", image: "/OutdoorClasses.jpg", category: "Outdoor Classes", color: "#2d6a4f" },
];

export default function GalleryPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #06d6a0 0%, #04a07a 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-white opacity-80">
            Life at the Academy
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-5 leading-tight">
            Our Gallery
          </h1>
          <p className="text-white text-lg leading-relaxed max-w-xl mx-auto opacity-90">
            A glimpse into the everyday magic at The Almost Adults Academy — the
            experiments, the creativity, the laughter, and the growth.
          </p>
        </div>
      </section>

      {/* ── REAL PHOTOS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#ff6b35" }}>
                Recent Snapshots
              </span>
              <h2 className="text-3xl font-extrabold mt-2" style={{ color: "#1e1b2e" }}>
                From Our Centres
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {photos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative rounded-3xl overflow-hidden shadow-lg"
                  style={{ height: "380px" }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(30,27,46,0.65) 0%, transparent 55%)" }}
                  />
                  <span
                    className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: "rgba(255,107,53,0.85)" }}
                  >
                    {photo.category}
                  </span>
                  <p className="absolute bottom-5 left-5 text-white font-semibold text-sm">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PROGRAMME PREVIEWS (placeholders) ── */}
      <section className="py-12 pb-20" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#ff6b35" }}>
                More Photos Coming Soon
              </span>
              <h2 className="text-3xl font-extrabold mt-2" style={{ color: "#1e1b2e" }}>
                Each Programme in Action
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
                We&apos;re adding more photos regularly. In the meantime, explore
                each programme to learn what happens in every class.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {placeholders.map((p, i) => (
              <FadeIn key={p.label} delay={i * 0.07}>
                <Link href={`/programs/${p.slug}`}>
                  <div
                    className="rounded-2xl overflow-hidden shadow-sm border group cursor-pointer"
                    style={{ borderColor: "#e5e7eb" }}
                  >
                    <div className="relative overflow-hidden" style={{ height: "180px" }}>
                      <Image
                        src={p.image}
                        alt={p.label}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, 33vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)" }}
                      />
                      <span className="absolute top-3 left-3 text-2xl drop-shadow">{p.icon}</span>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="font-bold text-sm" style={{ color: "#1e1b2e" }}>
                        {p.label}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">View programme →</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #1e1b2e, #3a2d5c)" }}
      >
        <FadeIn>
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Want to see the academy in person?
            </h2>
            <p className="text-gray-400 mb-8">
              Book a free trial class and let your child experience it first-hand.
            </p>
            <Link
              href="/enroll"
              className="inline-block px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "#ff6b35", color: "#fff" }}
            >
              Book a Trial Class →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
