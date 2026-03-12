import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";
import DashboardUserButton from "./DashboardUserButton";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: "🏠" },
  { href: "/dashboard/enrollments", label: "Enrollments", icon: "📚" },
  { href: "/dashboard/payments", label: "Payments", icon: "💳" },
];

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f9f7f4" }}>
      {/* Top bar */}
      <div className="border-b" style={{ backgroundColor: "#1e1b2e", borderColor: "#2d2a42" }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <p className="text-sm font-semibold" style={{ color: "#ffd166" }}>
            Parent Dashboard
          </p>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-gray-400 hover:text-white transition-colors">
              ← Back to site
            </Link>
            <DashboardUserButton />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-6 flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="md:w-52 flex-shrink-0">
            <nav className="bg-white rounded-2xl shadow-sm border p-3 flex flex-row md:flex-col gap-1" style={{ borderColor: "#e5e7eb" }}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-orange-50"
                  style={{ color: "#1e1b2e" }}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
