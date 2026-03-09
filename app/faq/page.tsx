"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "../components/FadeIn";

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What age groups do you cater to?",
        a: "Our programmes are designed for children aged 5 to 12. Some programmes have slightly narrower age ranges — for example, Essential Life Skills and Outdoor Classes start from age 7. Check each programme's page for specifics.",
      },
      {
        q: "Where are your centres located?",
        a: "We have 4 centres across Singapore: City Hall (HQ), Punggol, Tampines, and Jurong East. Each centre runs the full set of programmes.",
      },
      {
        q: "How long has The Almost Adults Academy been operating?",
        a: "We have been operating for over 10 years since 2015, growing from 1 centre to 4 locations across Singapore.",
      },
    ],
  },
  {
    category: "Classes & Programmes",
    items: [
      {
        q: "What programmes do you offer?",
        a: "We offer 6 enrichment programmes: Coding, Essential Life Skills, Creative Arts, STEM, Performing Arts, and Outdoor Classes. Each is designed to build real-world skills in a fun, hands-on environment.",
      },
      {
        q: "How long is each class?",
        a: "Every class runs for 1 hour. Classes are offered at two after-school time slots — 3:00 pm to 4:00 pm and 5:00 pm to 6:00 pm — Monday to Friday, with Saturday running the morning slot only.",
      },
      {
        q: "How many students are in each class?",
        a: "We keep our class sizes small to ensure every child receives personalised attention from our instructors. Class sizes are typically capped at 12–15 students.",
      },
      {
        q: "Can my child switch programmes after enrolling?",
        a: "Yes! If your child would like to try a different programme, simply reach out to us via the enrolment form or WhatsApp and we will do our best to accommodate the request.",
      },
    ],
  },
  {
    category: "Enrolment & Pricing",
    items: [
      {
        q: "How do I enrol my child?",
        a: "You can submit an enrolment enquiry through our Enroll page. Fill in your child's details and preferred programme and time slot, and our team will confirm your spot within 1–2 business days.",
      },
      {
        q: "Is there a trial class available?",
        a: "Yes, we offer a complimentary trial class for new students. Mention your interest in a trial when submitting your enrolment enquiry, or drop us a message on WhatsApp.",
      },
      {
        q: "Are there any current promotions?",
        a: "We run seasonal promotions and sibling discounts from time to time. Check our Promotions page for the latest offers, or follow us on Instagram and Facebook for updates.",
      },
    ],
  },
  {
    category: "Safety & Environment",
    items: [
      {
        q: "What safety measures are in place at the centres?",
        a: "All our centres are staffed by trained educators and assistants. We conduct regular safety checks, maintain low student-to-teacher ratios, and ensure a secure environment at all times.",
      },
      {
        q: "Are your instructors qualified?",
        a: "Yes. All our instructors are experienced educators who undergo thorough vetting and training before joining the academy. Many hold relevant certifications in their area of expertise.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  function toggle(key: string) {
    setOpenIndex((prev) => (prev === key ? null : key));
  }

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="py-24 text-center"
        style={{ background: "linear-gradient(135deg, #7b2d8b 0%, #3a1a5c 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-white opacity-70">
            Help Centre
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-5 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Can&apos;t find your answer here? Chat with us on WhatsApp or submit
            an enquiry through our enrolment form.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/enroll"
              className="px-6 py-3 rounded-full font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: "#ff6b35" }}
            >
              Enroll Now →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.1}>
              <div className="mb-10">
                <h2
                  className="text-xs font-bold uppercase tracking-widest mb-4 pb-2 border-b"
                  style={{ color: "#ff6b35", borderColor: "#ffe0d0" }}
                >
                  {group.category}
                </h2>
                <div className="space-y-3">
                  {group.items.map((item, ii) => {
                    const key = `${gi}-${ii}`;
                    const isOpen = openIndex === key;
                    return (
                      <div
                        key={key}
                        className="rounded-2xl border overflow-hidden transition-all"
                        style={{ borderColor: isOpen ? "#ff6b35" : "#e5e7eb" }}
                      >
                        <button
                          className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-sm"
                          style={{ color: "#1e1b2e" }}
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                        >
                          <span>{item.q}</span>
                          <span
                            className="text-xl flex-shrink-0 transition-transform duration-300"
                            style={{
                              color: "#ff6b35",
                              transform: isOpen ? "rotate(45deg)" : "none",
                            }}
                          >
                            +
                          </span>
                        </button>
                        {isOpen && (
                          <div
                            className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t"
                            style={{ borderColor: "#ffe0d0", backgroundColor: "#fff9f7" }}
                          >
                            <p className="pt-4">{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS ── */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #ff6b35, #ffd166)" }}
      >
        <FadeIn>
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Still have questions?
            </h2>
            <p className="text-white opacity-90 mb-8">
              Our team is happy to help. Reach out via WhatsApp or submit an
              enrolment enquiry and we will get back to you within 1–2 business days.
            </p>
            <Link
              href="/enroll"
              className="inline-block px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: "#1e1b2e", color: "#fff" }}
            >
              Contact Us →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
