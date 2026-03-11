import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "../../components/FadeIn";

type Section = { heading: string; body: string };

type BlogPost = {
  slug: string;
  tag: string;
  tagColor: string;
  date: string;
  readTime: string;
  title: string;
  image: string;
  intro: string;
  sections: Section[];
  pullQuote: string;
  takeaways: string[];
  programSlug: string;
  programLabel: string;
};

const posts: BlogPost[] = [
  /* ─────────────────────────────────────────────────────────── CODING ── */
  {
    slug: "coding-new-literacy-for-kids",
    tag: "Coding",
    tagColor: "#7b2d8b",
    date: "28 Jan 2026",
    readTime: "5 min read",
    title: "Why Coding Is the New Literacy for Kids",
    image: "/CodingClass.png",
    intro:
      "Reading, writing, and arithmetic shaped the 20th century. Coding is shaping the 21st. As software continues to touch every corner of modern life — from healthcare to entertainment to the food on our tables — teaching children to understand and create with technology is no longer optional. It is foundational.",
    sections: [
      {
        heading: "The Language of the Future",
        body: "Just as learning to read unlocks access to knowledge, learning to code unlocks the ability to create and shape the digital world. Children who understand how software works are not passive consumers of technology — they are active participants. They can look at an app or a game and think: 'I could build something like that.' That shift in mindset is extraordinarily powerful at a young age.",
      },
      {
        heading: "It's Not About Becoming a Developer",
        body: "One of the biggest misconceptions parents have is that a coding class is only useful if their child wants to become a software engineer. In reality, coding teaches transferable thinking skills that benefit every career path. Problem-breaking — the ability to split a large challenge into smaller, solvable steps — is a skill that doctors, architects, writers, and business owners rely on every day. Coding is simply one of the best ways to develop it early.",
      },
      {
        heading: "How We Make Coding Click for Kids",
        body: "At The Almost Adults Academy, we use game-based, project-driven learning. Children are not staring at lines of abstract text — they are building things they are genuinely proud of: playable mini-games, interactive stories, and animated characters. We use beginner-friendly programming environments that introduce real concepts like sequences, loops, and conditionals through colourful, drag-and-drop interfaces before progressing to typed code. Every child leaves each session having made something.",
      },
      {
        heading: "The Results We See Every Term",
        body: "Parents regularly tell us they notice a difference in how their children approach problems at home after joining our Coding programme. Instead of giving up when something is difficult, children start debugging — testing, adjusting, trying again. That persistence, combined with the pride of seeing their own creation on screen, builds a growth mindset that carries across every subject at school.",
      },
    ],
    pullQuote:
      "Coding teaches children not just to use technology — but to think with it.",
    takeaways: [
      "Coding builds logical thinking and problem-solving that transfers to every subject.",
      "Game-based projects keep children engaged and motivated to persist through challenges.",
      "Children as young as 5 can learn the concepts behind programming through visual tools.",
      "Knowing how software works gives children confidence and agency in a digital world.",
      "A growth mindset developed through coding carries into school, sport, and social life.",
    ],
    programSlug: "coding",
    programLabel: "Coding Programme",
  },

  /* ──────────────────────────────────────────────────── LIFE SKILLS ── */
  {
    slug: "life-skills-every-child-should-learn",
    tag: "Life Skills",
    tagColor: "#ff6b35",
    date: "12 Feb 2026",
    readTime: "4 min read",
    title: "5 Life Skills Every Child Should Learn Before 13",
    image: "/LifeSkills.jpeg",
    intro:
      "School curriculums are excellent at teaching children what they need to know — but there is a growing gap between academic knowledge and practical capability. Many children reach their teenage years and beyond without knowing how to sew a loose button, manage a simple budget, or safely cook a meal. These are not small omissions. They are the building blocks of independence.",
    sections: [
      {
        heading: "1. Managing Money",
        body: "Financial literacy begins with understanding that money is a resource with limits. Children who learn to save, budget, and distinguish between 'wants' and 'needs' grow into adults who are far less likely to struggle with debt or impulse spending. In our programme, children work through real-life budgeting scenarios with their own pocket money amounts — practising decisions they will face for the rest of their lives.",
      },
      {
        heading: "2. Basic Sewing and Mending",
        body: "A missing button or a small tear does not need to be a ruined piece of clothing. Teaching children to sew by hand develops fine motor skills, precision, patience, and the deeply satisfying feeling of fixing something yourself. It also builds respect for material things — a value that extends far beyond any craft class.",
      },
      {
        heading: "3. Kitchen Safety and Cooking Fundamentals",
        body: "Knowing how to prepare simple, nutritious food is one of the most direct routes to independence and good health. We introduce children to kitchen safety rules, measuring, reading simple recipes, and the basics of heat and food preparation. A child who can cook breakfast is a child who will never go hungry because no one else is there to feed them.",
      },
      {
        heading: "4. Household Problem-Solving",
        body: "What do you do when a drain is slow, a fuse is tripped, or a squeaky door won't close? Practical household knowledge — once passed down between generations — is increasingly being lost. We give children a foundation in everyday home tasks so they can recognise problems, understand basic fixes, and know when to ask for help.",
      },
      {
        heading: "5. Respectful Communication and Conflict Resolution",
        body: "The ability to express disagreement calmly and listen actively is one of the most underrated life skills of all. Through group activities and role-play scenarios, children practise navigating disagreements, asking for what they need, and working through problems with peers and adults alike.",
      },
    ],
    pullQuote:
      "A child who can sew a button, manage their pocket money, and cook a simple meal has a head start on adulthood.",
    takeaways: [
      "Financial literacy taught young becomes a lifelong habit, not just a school subject.",
      "Sewing, cooking, and household tasks build independence and self-confidence.",
      "Practical skills create a sense of competence that translates into academic confidence too.",
      "Children thrive when they are trusted with real responsibility and real tasks.",
      "Life skills cannot be crammed — they need repeated, hands-on practice over time.",
    ],
    programSlug: "essential-life-skills",
    programLabel: "Essential Life Skills Programme",
  },

  /* ──────────────────────────────────────────────────── OUTDOOR ── */
  {
    slug: "outdoor-education-builds-resilience",
    tag: "Outdoor Classes",
    tagColor: "#2d6a4f",
    date: "10 Jan 2026",
    readTime: "4 min read",
    title: "How Outdoor Education Builds Resilience in Young Learners",
    image: "/OutdoorClasses.jpg",
    intro:
      "Resilience — the ability to face setbacks without falling apart — is one of the traits parents most want to cultivate in their children. Yet it cannot be taught through a workbook or a lecture. It is built through experience: specifically, through being placed in situations that are slightly uncomfortable, slightly uncertain, and completely real.",
    sections: [
      {
        heading: "What Resilience Really Means",
        body: "Resilience is not about never being discouraged. It is about recovering from discouragement. A child who tries to build a shelter, fails, and tries again with a different approach is practising exactly the mental muscle that will serve them in their hardest moments at school, at work, and in their personal lives. Outdoor education creates these miniature failure-and-recovery cycles in a safe, supported environment.",
      },
      {
        heading: "Why Nature Is the Best Classroom",
        body: "The natural environment offers challenges that cannot be replicated indoors. Reading a real map, navigating terrain, adapting shelter plans to the wind, or cleaning up a nature reserve requires a child to engage every part of their mind and body. There are no 'right answers' handed out by a teacher — children must observe, decide, and act. That autonomy is deeply developmental.",
      },
      {
        heading: "From Tent Building to Teamwork",
        body: "Almost every outdoor activity we run involves collaboration. Putting up a tent alone is a puzzle; doing it with three others requires communication, compromise, and clear roles. Children discover their own strengths — who is the planner, who is the doer, who keeps morale up when things go wrong — in a way that classroom group projects rarely reveal. These discoveries are lasting.",
      },
      {
        heading: "Our Partnership with Mandai and Focus Adventure",
        body: "Through our collaborations with Mandai Wildlife Reserve and Focus Adventure, children experience outdoor learning that goes beyond our academy walls. At Mandai, students participate in conservation activities and guided wildlife scavenger hunts. With Focus Adventure, certified facilitators run obstacle courses and nature challenges designed specifically to build resilience, communication, and teamwork in a measurable, intentional way.",
      },
    ],
    pullQuote:
      "Children who learn to navigate a forest learn to navigate life.",
    takeaways: [
      "Resilience grows through supported challenge — not through shielding children from difficulty.",
      "Outdoor settings remove the 'right answer' dynamic and force genuine independent thinking.",
      "Teamwork in nature reveals strengths and roles that classroom work often misses.",
      "Conservation activities build empathy and social responsibility alongside physical skills.",
      "Children do not need expensive equipment to benefit from outdoor learning — they need space and challenge.",
    ],
    programSlug: "outdoor-classes",
    programLabel: "Outdoor Classes Programme",
  },

  /* ──────────────────────────────────────────────── CREATIVE ARTS ── */
  {
    slug: "inside-creative-arts-classes",
    tag: "Creative Arts",
    tagColor: "#06d6a0",
    date: "20 Dec 2025",
    readTime: "3 min read",
    title: "A Look Inside Our Creative Arts Classes",
    image: "/CreativeArts.jpg",
    intro:
      "Walk into our Creative Arts classroom mid-session and you might see one child pressing a linoleum block into orange ink, another sculpting a clay figure with intense concentration, and a third layering tissue paper and glue into a construction that defies easy categorisation. That variety is intentional. Art, in all its forms, helps children develop capabilities that no standardised test can measure.",
    sections: [
      {
        heading: "More Than Just Pretty Pictures",
        body: "Creative arts education is frequently underestimated because the output looks like 'just crafts.' But behind every watercolour painting or clay bowl is a series of decisions — about colour, proportion, texture, and meaning — that develop the same analytical and creative thinking skills that engineers and designers rely on. We treat art as a serious discipline, not a break from learning.",
      },
      {
        heading: "A Typical Session at the Academy",
        body: "Our sessions begin with a short introduction to the medium or theme of the day — perhaps the Impressionists for a painting session, or local architecture for a paper mache build. Children are then given open-ended briefs: not 'copy this image,' but 'use these techniques to tell your own story.' Guided exploration is balanced with genuine creative freedom so that every child produces work that is distinctly their own.",
      },
      {
        heading: "The Developmental Benefits of Art",
        body: "Fine motor development, spatial reasoning, emotional expression, cultural literacy, and the ability to sit with a difficult task and see it through — creative arts develops all of these. For children who struggle to express themselves verbally, art can be a genuinely liberating outlet. We see quieter children blossom in the creative arts studio in ways that surprise even their parents.",
      },
      {
        heading: "What Your Child Will Create",
        body: "Over a term, children work across multiple disciplines: drawing, watercolour painting, clay modelling and sculpting, paper mache constructions, collage, printmaking, and textile art. By the end, each child has a portfolio of diverse work they are proud of — a tangible, visible record of their imagination and growth.",
      },
    ],
    pullQuote:
      "Art gives children a language that words cannot — a way to say what they feel.",
    takeaways: [
      "Creative arts develops spatial reasoning, fine motor skills, and analytical thinking.",
      "Open-ended projects build confidence and ownership in children of all abilities.",
      "Art is an especially powerful outlet for children who struggle with verbal expression.",
      "Working across multiple media keeps children engaged and broadens their creative vocabulary.",
      "A portfolio of finished work gives children tangible evidence of their own capability.",
    ],
    programSlug: "creative-arts",
    programLabel: "Creative Arts Programme",
  },

  /* ─────────────────────────────────────────────────────── STEM ── */
  {
    slug: "stem-curiosity-foundation",
    tag: "STEM",
    tagColor: "#cc8800",
    date: "5 Dec 2025",
    readTime: "5 min read",
    title: "Building Scientific Curiosity: Why STEM Starts Young",
    image: "/STEM.jpeg",
    intro:
      "Every toddler is a natural scientist. They drop things to see if they fall, mix foods to observe what happens, and ask 'why?' incessantly. The challenge for educators and parents is not to create scientific curiosity — it is to protect it. Our STEM programme is designed to do exactly that, keeping children's love of discovery alive well into their primary school years.",
    sections: [
      {
        heading: "The Curiosity Window",
        body: "Research in developmental psychology consistently shows that the habits of mind formed between ages 5 and 12 — particularly attitudes toward learning and problem-solving — tend to persist into adulthood. A child who is taught to embrace uncertainty and ask good questions in primary school is significantly more likely to approach challenges with confidence as a teenager and adult. That is what STEM education, done well, is designed to build.",
      },
      {
        heading: "What Hands-On Science Looks Like in Our Classrooms",
        body: "Our STEM sessions are structured around real experiments with real outcomes. Children test the water-resistance of different materials, build the tallest freestanding tower from limited resources, create chemical reactions with safe household compounds, and troubleshoot why their circuit won't light up. These are not demonstrations they watch — they are problems they solve. The difference in engagement is immediate and dramatic.",
      },
      {
        heading: "Engineering and Robotics for Primary Schoolers",
        body: "Through our partnership with Science Centre Singapore, children have access to robot-building workshops and guided engineering challenges run by certified facilitators. Using platforms like micro:bit, children learn to programme physical objects — a toy car that stops before a wall, a temperature sensor that triggers an alarm — bridging the gap between physical and digital thinking. Many children who call themselves 'not a computer person' discover a genuine love for robotics.",
      },
      {
        heading: "From Experiments to Everyday Life",
        body: "One of our core goals is helping children make the connection between what they do in the lab and what they see in the world. Why does bread rise? How does a bridge hold weight? Why does your phone screen crack in a certain pattern? When children start asking these questions about their own environment, we know the programme is working. STEM is not a set of subjects — it is a way of paying attention.",
      },
    ],
    pullQuote:
      "Every child is born a scientist. Our job is to make sure they stay one.",
    takeaways: [
      "Scientific habits of mind formed before age 12 tend to be remarkably durable.",
      "Hands-on experiments produce far deeper learning than demonstrations or videos.",
      "Robotics and engineering activities bridge digital and physical thinking in a way few other subjects do.",
      "Connecting STEM to everyday life makes the learning feel relevant and meaningful.",
      "Children who struggle in conventional school subjects often thrive in STEM project environments.",
    ],
    programSlug: "stem",
    programLabel: "STEM Programme",
  },

  /* ──────────────────────────────────────────── PERFORMING ARTS ── */
  {
    slug: "performing-arts-confidence",
    tag: "Performing Arts",
    tagColor: "#e63946",
    date: "18 Nov 2025",
    readTime: "4 min read",
    title: "From Shy to Shining: How Performing Arts Transforms Confidence",
    image: "/PerformingArts.jpg",
    intro:
      "Parents whose children are quiet, reserved, or anxious in social settings often look for interventions that will help — extra tutoring, social skills groups, therapy. Many are surprised to discover that one of the most consistently effective confidence-builders for children is performing arts: drama, music, and movement within a safe, creative community.",
    sections: [
      {
        heading: "The Quiet Child Phenomenon",
        body: "Many children who hold back in classrooms and social settings are not lacking confidence — they are lacking the right kind of space. The performing arts studio is fundamentally different from a regular classroom. There are no wrong answers in improvisation. There is no competition to be the quickest to speak. The emphasis is on presence, expression, and collaboration — and those are skills that quieter children often have in abundance, just waiting for the right outlet.",
      },
      {
        heading: "Why the Stage Is Different",
        body: "Performance creates a unique psychological dynamic that psychologists call 'positive stress' — a level of challenge just above a child's comfort zone that promotes growth. When a child delivers a line in front of peers and hears laughter or applause, the neurological reward is significant. That experience — of doing something scary and being received warmly — is one of the most effective ways to rewire a child's relationship with public attention.",
      },
      {
        heading: "Drama, Music, and Movement: How Each Contributes",
        body: "Drama develops empathy and communication by placing children in other people's perspectives. Music builds pattern recognition, emotional regulation, and the ability to work in rhythm with others. Movement and stage presence training teaches children that their body is an expressive instrument — how they stand, breathe, and move communicates as much as their words. Together, these three disciplines create a child who can hold a room.",
      },
      {
        heading: "What Parents Tell Us",
        body: "We hear the same story regularly: 'She used to refuse to speak in front of her class. After one term in performing arts, she volunteered to present at the school assembly.' Or: 'He was so nervous at his cousin's birthday party he cried. Now he's the one entertaining everyone.' These are not isolated cases. The structured, progressive, encouraging environment of our performing arts programme creates the conditions for genuine transformation, one session at a time.",
      },
    ],
    pullQuote:
      "The stage doesn't make children perform. It gives them permission to be fully themselves.",
    takeaways: [
      "Performing arts works especially well for quiet or anxious children who need the right kind of space.",
      "Positive stress — challenge at the edge of comfort — is one of the most powerful confidence builders.",
      "Drama builds empathy; music builds emotional regulation; movement builds self-awareness.",
      "The non-competitive, collaborative nature of our sessions removes the fear of being 'wrong.'",
      "Confidence built on stage transfers directly to the classroom, social settings, and everyday life.",
    ],
    programSlug: "performing-arts",
    programLabel: "Performing Arts Programme",
  },
];

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative" style={{ minHeight: "420px" }}>
        <div className="relative w-full" style={{ height: "420px" }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(30,27,46,0.45) 0%, rgba(30,27,46,0.82) 100%)" }}
          />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12 w-full">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 mb-5 transition-opacity"
            >
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full text-white"
                style={{ backgroundColor: post.tagColor }}
              >
                {post.tag}
              </span>
              <span className="text-xs text-white opacity-60">
                {post.date} · {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ── ARTICLE ── */}
      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Intro */}
          <FadeIn>
            <p className="text-lg text-gray-700 leading-relaxed mb-10 font-medium">
              {post.intro}
            </p>
          </FadeIn>

          {/* Sections */}
          {post.sections.map((section, i) => (
            <FadeIn key={section.heading} delay={i * 0.07}>
              <div className="mb-10">
                <h2
                  className="text-xl font-extrabold mb-3"
                  style={{ color: post.tagColor === "#cc8800" ? "#cc8800" : post.tagColor }}
                >
                  {section.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed">{section.body}</p>
              </div>
            </FadeIn>
          ))}

          {/* Pull Quote */}
          <FadeIn>
            <blockquote
              className="my-12 border-l-4 pl-6 py-2"
              style={{ borderColor: post.tagColor }}
            >
              <p
                className="text-xl font-semibold italic leading-relaxed"
                style={{ color: "#1e1b2e" }}
              >
                &ldquo;{post.pullQuote}&rdquo;
              </p>
            </blockquote>
          </FadeIn>

          {/* Key Takeaways */}
          <FadeIn>
            <div
              className="rounded-2xl p-8 mb-10"
              style={{ backgroundColor: post.tagColor + "12", border: `2px solid ${post.tagColor}30` }}
            >
              <h3
                className="text-sm font-bold uppercase tracking-widest mb-5"
                style={{ color: post.tagColor === "#cc8800" ? "#cc8800" : post.tagColor }}
              >
                Key Takeaways
              </h3>
              <ul className="space-y-3">
                {post.takeaways.map((t) => (
                  <li key={t} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: post.tagColor }}
                    >
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* CTA to programme */}
          <FadeIn>
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: `linear-gradient(135deg, ${post.tagColor}22, ${post.tagColor}08)`, border: `2px solid ${post.tagColor}30` }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: post.tagColor }}>
                Interested?
              </p>
              <h3 className="text-2xl font-extrabold mb-3" style={{ color: "#1e1b2e" }}>
                Explore Our {post.programLabel}
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                See what happens in every session, the outcomes we aim for, and how to get your child started.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={`/programs/${post.programSlug}`}
                  className="inline-block px-7 py-3 rounded-full font-bold text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: post.tagColor }}
                >
                  View Programme →
                </Link>
                <Link
                  href="/enroll"
                  className="inline-block px-7 py-3 rounded-full font-bold transition-transform hover:scale-105"
                  style={{ backgroundColor: "#1e1b2e", color: "#fff" }}
                >
                  Book a Trial Class →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </article>

      {/* ── MORE ARTICLES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-2xl font-extrabold mb-8" style={{ color: "#1e1b2e" }}>
              More Articles
            </h2>
            <div className="flex flex-col gap-4">
              {posts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    href={`/blog/${p.slug}`}
                    key={p.slug}
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 border transition-shadow hover:shadow-md"
                    style={{ borderColor: "#e5e7eb" }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex-shrink-0 relative overflow-hidden"
                    >
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: p.tagColor }}
                      >
                        {p.tag}
                      </span>
                      <p className="text-sm font-bold mt-1 leading-snug truncate" style={{ color: "#1e1b2e" }}>
                        {p.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{p.readTime}</p>
                    </div>
                    <span className="text-gray-400 flex-shrink-0 text-sm">→</span>
                  </Link>
                ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-block px-7 py-3 rounded-full font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: "#ff6b35", color: "#fff" }}
              >
                View All Articles →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
