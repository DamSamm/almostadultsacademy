"use client";

import { useState, FormEvent } from "react";
import { useAuth, SignInButton } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

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

type Status = "idle" | "loading" | "error";

function EnrollForm() {
  const { isSignedIn } = useAuth();
  const searchParams = useSearchParams();
  const paymentCancelled = searchParams.get("payment") === "cancelled";

  const [form, setForm] = useState({
    childName: "",
    childAge: "",
    courseInterested: "",
    preferredTime: "",
    billingType: "one_time" as "one_time" | "recurring",
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
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          childName: form.childName,
          childAge: form.childAge,
          course: form.courseInterested,
          preferredTime: form.preferredTime || null,
          billingType: form.billingType,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
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

  // ── Sign-in gate ──
  if (!isSignedIn) {
    return (
      <div
        className="rounded-3xl p-10 text-center shadow-sm border"
        style={{ backgroundColor: "#fff", borderColor: "#ffe0d0" }}
      >
        <div className="text-6xl mb-4">🔒</div>
        <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#1e1b2e" }}>
          Sign in to enroll
        </h2>
        <p className="text-gray-500 mb-6 leading-relaxed">
          Create a free parent account to enroll your child, track sessions, and manage payments — all in one place.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <SignInButton mode="modal">
            <button
              className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "#1e1b2e", color: "#fff" }}
            >
              Sign In
            </button>
          </SignInButton>
          <a
            href="/sign-up"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "#ff6b35", color: "#fff" }}
          >
            Create Account →
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-sm border p-8 sm:p-10 space-y-6"
      style={{ borderColor: "#ffe0d0" }}
    >
      {paymentCancelled && (
        <div
          className="text-sm px-4 py-3 rounded-xl"
          style={{ backgroundColor: "#fffbeb", color: "#b45309", border: "1px solid #fde68a" }}
        >
          ℹ️ Your payment was cancelled. You can try again below.
        </div>
      )}

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
              <a href="/timetable" className="underline" style={{ color: "#ff6b35" }}>
                View full timetable →
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ── Section: Payment type ── */}
      <div>
        <h2
          className="text-lg font-extrabold mb-4 pb-2 border-b"
          style={{ color: "#1e1b2e", borderColor: "#f3f4f6" }}
        >
          💳 Payment Plan
        </h2>
        <p className="text-sm text-gray-500 mb-3">All courses are <strong>SGD $35 per session</strong>.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          <label
            className="flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all"
            style={{
              borderColor: form.billingType === "one_time" ? "#ff6b35" : "#e5e7eb",
              backgroundColor: form.billingType === "one_time" ? "#fff7f4" : "#fff",
            }}
          >
            <input
              type="radio"
              name="billingType"
              value="one_time"
              checked={form.billingType === "one_time"}
              onChange={handleChange}
              className="mt-0.5"
            />
            <div>
              <p className="font-semibold text-sm" style={{ color: "#1e1b2e" }}>Pay per session</p>
              <p className="text-xs text-gray-500 mt-0.5">One-time payment of $35. No commitment.</p>
            </div>
          </label>
          <label
            className="flex items-start gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all"
            style={{
              borderColor: form.billingType === "recurring" ? "#ff6b35" : "#e5e7eb",
              backgroundColor: form.billingType === "recurring" ? "#fff7f4" : "#fff",
            }}
          >
            <input
              type="radio"
              name="billingType"
              value="recurring"
              checked={form.billingType === "recurring"}
              onChange={handleChange}
              className="mt-0.5"
            />
            <div>
              <p className="font-semibold text-sm" style={{ color: "#1e1b2e" }}>Monthly subscription</p>
              <p className="text-xs text-gray-500 mt-0.5">$35/month, billed automatically. Cancel anytime.</p>
            </div>
          </label>
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
          rows={3}
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

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 rounded-full font-bold text-lg text-white transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ backgroundColor: "#ff6b35" }}
      >
        {status === "loading" ? "Preparing checkout…" : "Proceed to Payment →"}
      </button>

      <p className="text-xs text-center text-gray-400">
        You&apos;ll be redirected to Stripe&apos;s secure checkout. We never store your card details.
      </p>
    </form>
  );
}

export default function EnrollPage() {
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
            Sign in or create an account, choose a course, and pay securely. Your spot is confirmed instantly.
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="py-16 section-stripe">
        <div className="max-w-2xl mx-auto px-4">
          <Suspense>
            <EnrollForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
