import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1e1b2e" }} className="text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.svg"
              alt="The Almost Adults Academy logo"
              width={44}
              height={44}
              className="flex-shrink-0"
            />
            <p className="text-white font-bold text-base leading-tight">
              The Almost Adults Academy
            </p>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#ffd166" }}>
            "Small Humans, Big Plans"
          </p>
          <p className="text-sm leading-relaxed text-gray-400">
            An after-school enrichment centre for children aged 5–12, helping
            them build real-world skills in a safe, holistic environment.
          </p>
          <div className="flex gap-3 mt-5">
            {["Instagram", "TikTok", "Facebook"].map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: "#ff6b35" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/programs", label: "Our Programs" },
              { href: "/partners", label: "Partners" },
              { href: "/promotions", label: "Promotions" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors duration-150"
                  style={{ color: "#9ca3af" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Programs */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Our Programs
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              "Coding Classes",
              "Essential Life Skills",
              "Creative Arts",
              "STEM",
              "Performing Arts",
              "Outdoor Classes",
            ].map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Our Centres
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { name: "City Hall", note: "HQ" },
              { name: "Punggol" },
              { name: "Tampines" },
              { name: "Jurong East" },
            ].map((loc) => (
              <li key={loc.name} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#ff6b35" }} />
                <span className="text-gray-400">
                  {loc.name}
                  {loc.note && (
                    <span
                      className="ml-2 px-2 py-0.5 rounded-full text-xs text-white"
                      style={{ backgroundColor: "#7b2d8b" }}
                    >
                      {loc.note}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-gray-500">
            105 employees across 4 centres
          </p>
        </div>
      </div>

      <div
        className="border-t text-center py-5 text-xs text-gray-500"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <p>
          © {new Date().getFullYear()} The Almost Adults Academy. All rights
          reserved. · Est. 2015 · Singapore
        </p>
        <p className="mt-1">
          🏆 Top 10 Education Centres 2020–2025 · MOE Inspiring Young Minds
          Award 2021, 2023 &amp; 2024
        </p>
      </div>
    </footer>
  );
}
