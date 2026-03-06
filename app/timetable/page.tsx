import Link from "next/link";

const schedule = [
  {
    day: "Monday",
    short: "Mon",
    course: "Coding",
    icon: "💻",
    color: "#7b2d8b",
    slots: ["3:00 pm – 4:00 pm", "5:00 pm – 6:00 pm"],
  },
  {
    day: "Tuesday",
    short: "Tue",
    course: "Essential Life Skills",
    icon: "🧵",
    color: "#ff6b35",
    slots: ["3:00 pm – 4:00 pm", "5:00 pm – 6:00 pm"],
  },
  {
    day: "Wednesday",
    short: "Wed",
    course: "Creative Arts",
    icon: "🎨",
    color: "#06d6a0",
    slots: ["3:00 pm – 4:00 pm", "5:00 pm – 6:00 pm"],
  },
  {
    day: "Thursday",
    short: "Thu",
    course: "STEM",
    icon: "🔬",
    color: "#ffd166",
    textDark: true,
    slots: ["3:00 pm – 4:00 pm", "5:00 pm – 6:00 pm"],
  },
  {
    day: "Friday",
    short: "Fri",
    course: "Performing Arts",
    icon: "🎭",
    color: "#e63946",
    slots: ["3:00 pm – 4:00 pm", "5:00 pm – 6:00 pm"],
  },
  {
    day: "Saturday",
    short: "Sat",
    course: "Outdoor Classes",
    icon: "🌿",
    color: "#2d6a4f",
    slots: ["3:00 pm – 4:00 pm"],
  },
];

const timeRows = ["3:00 pm – 4:00 pm", "5:00 pm – 6:00 pm"];

export default function TimetablePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="py-20 text-center"
        style={{
          background: "linear-gradient(135deg, #1e1b2e 0%, #3a3560 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-widest opacity-70 text-white">
            Class Schedule
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-4 leading-tight">
            Weekly Timetable
          </h1>
          <p className="opacity-80 text-white text-lg leading-relaxed max-w-xl mx-auto">
            All classes run for <strong>1 hour</strong> and are offered at two
            convenient after-school time slots — Monday to Saturday.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span
              className="px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              📅 Mon – Fri: Weekday sessions
            </span>
            <span
              className="px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              📅 Saturday: Morning session only
            </span>
          </div>
        </div>
      </section>

      {/* ── DESKTOP TABLE ── */}
      <section className="py-16 bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-sm border" style={{ borderColor: "#e5e7eb" }}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1e1b2e" }}>
                  <th
                    className="px-5 py-4 text-left font-semibold"
                    style={{ color: "#ffd166", width: "160px" }}
                  >
                    Time
                  </th>
                  {schedule.map((s) => (
                    <th
                      key={s.day}
                      className="px-5 py-4 text-center font-semibold text-white"
                    >
                      {s.day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeRows.map((time, rowIdx) => (
                  <tr
                    key={time}
                    style={{ backgroundColor: rowIdx % 2 === 0 ? "#fafafa" : "#fff" }}
                  >
                    <td
                      className="px-5 py-5 font-semibold text-sm whitespace-nowrap"
                      style={{ color: "#ff6b35", borderRight: "1px solid #f3f4f6" }}
                    >
                      🕒 {time}
                    </td>
                    {schedule.map((s) => {
                      const hasSlot = s.slots.includes(time);
                      return (
                        <td key={s.day} className="px-4 py-4 text-center">
                          {hasSlot ? (
                            <div
                              className="rounded-xl px-3 py-3 mx-auto max-w-[160px]"
                              style={{
                                backgroundColor: s.color + "18",
                                border: `1.5px solid ${s.color}40`,
                              }}
                            >
                              <div className="text-2xl mb-1">{s.icon}</div>
                              <p
                                className="font-bold text-xs leading-tight"
                                style={{ color: s.textDark ? "#1e1b2e" : s.color }}
                              >
                                {s.course}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">1 hr</p>
                            </div>
                          ) : (
                            <span className="text-gray-200 text-sm">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            * Saturday Outdoor Classes run 3:00 pm – 4:00 pm only.
          </p>
        </div>
      </section>

      {/* ── MOBILE CARDS ── */}
      <section className="py-16 bg-white md:hidden">
        <div className="max-w-lg mx-auto px-4 space-y-4">
          {schedule.map((s) => (
            <div
              key={s.day}
              className="rounded-2xl overflow-hidden shadow-sm border"
              style={{ borderColor: "#e5e7eb" }}
            >
              {/* Day header */}
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ backgroundColor: s.color }}
              >
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p
                    className="font-extrabold text-base"
                    style={{ color: s.textDark ? "#1e1b2e" : "#fff" }}
                  >
                    {s.day}
                  </p>
                  <p
                    className="text-xs font-semibold opacity-80"
                    style={{ color: s.textDark ? "#1e1b2e" : "#fff" }}
                  >
                    {s.course}
                  </p>
                </div>
              </div>
              {/* Slots */}
              <div className="px-5 py-4 bg-white space-y-2">
                {s.slots.map((slot) => (
                  <div
                    key={slot}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <span style={{ color: "#ff6b35" }}>🕒</span>
                    <span>{slot}</span>
                    <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                      1 hr
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center text-xs text-gray-400 pt-2">
            * Saturday Outdoor Classes run 3:00 pm – 4:00 pm only.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #ff6b35, #ffd166)" }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Ready to book a spot?
          </h2>
          <p className="text-white opacity-90 mb-8">
            Submit an enrollment enquiry and our team will confirm your preferred
            session within 1–2 business days.
          </p>
          <Link
            href="/enroll"
            className="inline-block px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: "#1e1b2e", color: "#fff" }}
          >
            Enroll Now →
          </Link>
        </div>
      </section>
    </>
  );
}
