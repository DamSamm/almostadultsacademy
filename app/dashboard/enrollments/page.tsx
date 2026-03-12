import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import supabaseAdmin from "@/lib/supabase-admin";

export default async function EnrollmentsPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("id")
    .eq("clerk_user_id", userId)
    .single();

  const { data: enrollments } = profile
    ? await supabaseAdmin
        .from("enrollments")
        .select("id, course, preferred_time, status, billing_type, created_at, children(name, age)")
        .eq("parent_id", profile.id)
        .order("created_at", { ascending: false })
    : { data: [] };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold" style={{ color: "#1e1b2e" }}>Enrollments</h1>
        <Link
          href="/enroll"
          className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ backgroundColor: "#ff6b35" }}
        >
          + New Enrollment
        </Link>
      </div>

      {!enrollments || enrollments.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border p-10 text-center" style={{ borderColor: "#e5e7eb" }}>
          <p className="text-gray-400 text-sm mb-4">No enrollments yet.</p>
          <Link
            href="/enroll"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: "#ff6b35" }}
          >
            Enroll Now →
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {enrollments.map((e) => {
            const child = (e.children as unknown as { name: string; age: number }[] | null)?.[0] ?? null;
            return (
              <div
                key={e.id}
                className="bg-white rounded-2xl shadow-sm border p-5"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-extrabold" style={{ color: "#1e1b2e" }}>{e.course}</p>
                    {child && (
                      <p className="text-sm text-gray-500 mt-0.5">
                        {child.name}, {child.age} yrs old
                      </p>
                    )}
                    <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-400">
                      {e.preferred_time && <span>⏰ {e.preferred_time}</span>}
                      <span>💳 {e.billing_type === "recurring" ? "Monthly subscription" : "One-time payment"}</span>
                      <span>📅 Enrolled {new Date(e.created_at).toLocaleDateString("en-SG")}</span>
                    </div>
                  </div>
                  <StatusBadge status={e.status} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string; label: string }> = {
    confirmed: { bg: "#d1fae5", color: "#065f46", label: "Confirmed" },
    pending: { bg: "#fef3c7", color: "#b45309", label: "Pending" },
    cancelled: { bg: "#fee2e2", color: "#b91c1c", label: "Cancelled" },
  };
  const s = map[status] ?? map.pending;
  return (
    <span className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: s.bg, color: s.color }}>
      {s.label}
    </span>
  );
}
