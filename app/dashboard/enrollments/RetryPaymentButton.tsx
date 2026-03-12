"use client";

import { useState } from "react";

export default function RetryPaymentButton({ enrollmentId }: { enrollmentId: string }) {
  const [loading, setLoading] = useState(false);

  async function handleRetry() {
    setLoading(true);
    const res = await fetch("/api/checkout/retry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enrollmentId }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Failed to resume payment. Please try again.");
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleRetry}
      disabled={loading}
      className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-90 disabled:opacity-50"
      style={{ backgroundColor: "#ff6b35", color: "#fff" }}
    >
      {loading ? "Loading…" : "Complete Payment →"}
    </button>
  );
}
