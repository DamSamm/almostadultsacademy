import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about The Almost Adults Academy — class schedules, pricing, enrolment, safety, programmes and more.",
  openGraph: {
    title: "FAQ | The Almost Adults Academy",
    description:
      "Find answers to common questions about The Almost Adults Academy — class schedules, pricing, enrolment, safety, programmes and more.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What age groups do you cater to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our programmes are designed for children aged 5 to 12. Some programmes have slightly narrower age ranges — for example, Essential Life Skills and Outdoor Classes start from age 7.",
      },
    },
    {
      "@type": "Question",
      name: "Where are your centres located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have 4 centres across Singapore: City Hall (HQ), Punggol, Tampines, and Jurong East. Each centre runs the full set of programmes.",
      },
    },
    {
      "@type": "Question",
      name: "What programmes do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer 6 enrichment programmes: Coding, Essential Life Skills, Creative Arts, STEM, Performing Arts, and Outdoor Classes. Each is designed to build real-world skills in a fun, hands-on environment.",
      },
    },
    {
      "@type": "Question",
      name: "How long is each class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every class runs for 1 hour. Classes are offered at two after-school time slots — 3:00 pm to 4:00 pm and 5:00 pm to 6:00 pm — Monday to Friday, with Saturday sessions as well.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a trial class available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer a complimentary trial class for new students. Mention your interest in a trial when submitting your enrolment enquiry, or drop us a message on WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "How do I enrol my child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can submit an enrolment enquiry through our Enroll page. Fill in your child's details and preferred programme and time slot, and our team will confirm your spot within 1–2 business days.",
      },
    },
  ],
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
