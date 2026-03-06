"use client";

import { useState, FormEvent } from "react";
import Script from "next/script";

// Get your free access key at https://web3forms.com
// Paste the key in .env.local as: NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const courses = [
  { label: "💻 Coding", value: "Coding" },
  { label: "🧵 Essential Life Skills", value: "Essential Life Skills" },
  { label: "🎨 Creative Arts", value: "Creative Arts" },
  { label: "🔬 STEM", value: "STEM" },
  { label: "🎭 Performing Arts", value: "Performing Arts" },
  { label: "🌿 Outdoor Classes", value: "Outdoor Classes" },
];

const timeSlots = [
  { label: "3:00 pm – 4:00 pm", value: "3:00 pm – 4:00 pm" },
  { label: "5:00 pm – 6:00 pm", value: "5:00 pm – 6:00 pm" },
  { label: "No preference", value: "No preference" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function EnrollPage() {
  const [form, setForm] = useState({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    childName: "",
    childAge: "",
    courseInterested: "",
    preferredTime: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `📋 New Enrollment Enquiry — ${form.childName} (${form.courseInterested})`,
        from_name: "Almost Adults Academy Website",
        // Form fields — all appear in the email Web3Forms sends
        "Parent Name": form.parentName,
        "Parent Email": form.parentEmail,
        "Parent Phone": form.parentPhone || "—",
        "Child Name": form.childName,
        "Child Age": form.childAge,
        "Course Interested": form.courseInterested,
        "Preferred Time": form.preferredTime || "No preference",
        "Additional Message": form.message || "—",
        replyto: form.parentEmail,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setErrorMsg(data.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all";
  const inputStyle = {
    borderColor: "#e5e7eb",
    color: "#1e1b2e",
    backgroundColor: "#fff",
  };
  const labelClass = "block text-sm font-semibold mb-1.5";
  const labelStyle = { color: "#1e1b2e" };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="py-20 text-center"
        style={{
          background: "linear-gradient(135deg, #7b2d8b 0%, #ff6b35 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-white opacity-80">
            Get Started
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-4 leading-tight">
            Enroll Your Child
          </h1>
          <p className="text-white opacity-90 text-lg leading-relaxed max-w-xl mx-auto">
            Fill in the form below and our team will reach out within{" "}
            <strong>1–2 business days</strong> to confirm your spot and answer
            any questions.
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="py-16 section-stripe">
        <div className="max-w-2xl mx-auto px-4">
          {status === "success" ? (
            <div
              className="rounded-3xl p-10 text-center shadow-sm border"
              style={{ backgroundColor: "#fff", borderColor: "#d1fae5" }}
            >
              <div className="text-6xl mb-4">🎉</div>
              <h2
                className="text-3xl font-extrabold mb-3"
                style={{ color: "#1e1b2e" }}
              >
                Enquiry Sent!
              </h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                Thank you for your interest! We&apos;ve received your enrollment
                enquiry and sent a confirmation to{" "}
                <strong>{form.parentEmail}</strong>.
              </p>
              <p className="text-gray-500 text-sm">
                Our team will be in touch within 1–2 business days.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setForm({
                    parentName: "",
                    parentEmail: "",
                    parentPhone: "",
                    childName: "",
                    childAge: "",
                    courseInterested: "",
                    preferredTime: "",
                    message: "",
                  });
                }}
                className="mt-8 px-6 py-3 rounded-full font-semibold text-white text-sm transition-transform hover:scale-105"
                style={{ backgroundColor: "#ff6b35" }}
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-sm border p-8 sm:p-10 space-y-6"
              style={{ borderColor: "#ffe0d0" }}
            >
              {/* ── Section: Parent info ── */}
              <div>
                <h2
                  className="text-lg font-extrabold mb-4 pb-2 border-b"
                  style={{ color: "#1e1b2e", borderColor: "#f3f4f6" }}
                >
                  👨‍👩‍👧 Parent / Guardian Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className={labelClass} style={labelStyle}>
                      Full Name <span style={{ color: "#e63946" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={form.parentName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Sarah Lim"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass} style={labelStyle}>
                        Email Address <span style={{ color: "#e63946" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="parentEmail"
                        value={form.parentEmail}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className={labelClass} style={labelStyle}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="parentPhone"
                        value={form.parentPhone}
                        onChange={handleChange}
                        placeholder="+65 9123 4567"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Section: Child info ── */}
              <div>
                <h2
                  className="text-lg font-extrabold mb-4 pb-2 border-b"
                  style={{ color: "#1e1b2e", borderColor: "#f3f4f6" }}
                >
                  🧒 Child&apos;s Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} style={labelStyle}>
                      Child&apos;s Name <span style={{ color: "#e63946" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="childName"
                      value={form.childName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Emma Lim"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={labelStyle}>
                      Child&apos;s Age <span style={{ color: "#e63946" }}>*</span>
                    </label>
                    <select
                      name="childAge"
                      value={form.childAge}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      style={inputStyle}
                    >
                      <option value="">Select age</option>
                      {Array.from({ length: 8 }, (_, i) => i + 5).map((age) => (
                        <option key={age} value={age}>
                          {age} years old
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* ── Section: Course ── */}
              <div>
                <h2
                  className="text-lg font-extrabold mb-4 pb-2 border-b"
                  style={{ color: "#1e1b2e", borderColor: "#f3f4f6" }}
                >
                  📚 Course & Schedule
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className={labelClass} style={labelStyle}>
                      Course Interested In <span style={{ color: "#e63946" }}>*</span>
                    </label>
                    <select
                      name="courseInterested"
                      value={form.courseInterested}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      style={inputStyle}
                    >
                      <option value="">Select a course</option>
                      {courses.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} style={labelStyle}>
                      Preferred Time Slot
                    </label>
                    <select
                      name="preferredTime"
                      value={form.preferredTime}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-400 mt-1.5">
                      All classes are 1 hour long.{" "}
                      <a
                        href="/timetable"
                        className="underline"
                        style={{ color: "#ff6b35" }}
                      >
                        View full timetable →
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Additional message ── */}
              <div>
                <label className={labelClass} style={labelStyle}>
                  Additional Message or Questions
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any questions, allergies, or other information we should know about..."
                  className={inputClass}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p
                  className="text-sm px-4 py-3 rounded-xl"
                  style={{ backgroundColor: "#fef2f2", color: "#e63946", border: "1px solid #fecaca" }}
                >
                  ⚠️ {errorMsg}
                </p>
              )}

              {/* hCaptcha — bot protection via Web3Forms */}
              <div className="h-captcha" data-captcha="true"></div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-full font-bold text-lg text-white transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#ff6b35" }}
              >
                {status === "loading" ? "Sending…" : "Submit Enrollment Enquiry →"}
              </button>

              <p className="text-xs text-center text-gray-400">
                By submitting this form you agree to be contacted by The Almost
                Adults Academy regarding your enrollment enquiry.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Web3Forms + hCaptcha script */}
      <Script src="https://web3forms.com/client/script.js" strategy="afterInteractive" />
    </>
  );
}
