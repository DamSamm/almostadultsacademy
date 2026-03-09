"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: 9998,
        backgroundColor: "#1e1b2e",
        borderTop: "2px solid rgba(255,107,53,0.4)",
        padding: "16px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "16px",
          justifyContent: "space-between",
        }}
      >
        <p style={{ color: "#d1d5db", fontSize: "14px", lineHeight: "1.5", flex: 1, minWidth: "240px" }}>
          🍪 We use cookies to improve your browsing experience on our website.
          By continuing to use this site, you consent to our use of cookies.{" "}
          <Link href="/faq" style={{ color: "#ff6b35", textDecoration: "underline" }}>
            Learn more
          </Link>
        </p>
        <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
          <button
            onClick={decline}
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              border: "1.5px solid rgba(255,255,255,0.2)",
              backgroundColor: "transparent",
              color: "#9ca3af",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              backgroundColor: "#ff6b35",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
