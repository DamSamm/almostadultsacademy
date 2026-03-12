import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import supabaseAdmin from "@/lib/supabase-admin";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ payment?: string }>;
}) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const params = await searchParams;
  const paymentSuccess = params.payment === "success";

  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("id, name, email")
    .eq("clerk_user_id", userId)
    .single();

  const profileId = profile?.id;

  const [{ data: enrollments }, { data: payments }] = await Promise.all([
    profileId
      ? supabaseAdmin
          .from("enrollments")
          .select("id, course, status, billing_type, created_at, children(name)")
          .eq("parent_id", profileId)
          .order("created_at", { ascending: false })
          .limit(3)
      : { data: [] },
    profileId
      ? supabaseAdmin
          .from("payments")
          .select("id, amount_sgd, status, billing_type, paid_at, created_at")
          .eq("parent_id", profileId)
          .order("created_at", { ascending: false })
          .limit(3)
      : { data: [] },
  ]);

  const confirmedCount = enrollments?.filter((e) => e.status === "confirmed").length ?? 0;
  const totalPaid =
    payments
      ?.filter((p) => p.status === "paid")
      .reduce((sum, p) => sum + (p.amount_sgd ?? 0), 0) ?? 0;

  return (
    <div className="space-y-6">
      {paymentSuccess && (
        <div
          className="rounded-2xl px-5 py-4 text-sm font-medium"
          style={{ backgroundColor: "#d1fae5", color: "#065f46", border: "1px solid #6ee7b7" }}
        >
          🎉 Payment confirmed! Your enrollment is active. See details below.
        </div>
      )}

      {/* Welcome */}
      <div className="bg-white rounded-2xl shadow-sm border p-6" style={{ borderColor: "#e5e7eb" }}>
        <h1 className="text-2xl font-extrabold" style={{ color: "#1e1b2e" }}>
          Welcome back{profile?.name ? `, ${profile.name.split(" ")[0]}` : ""}! 👋
        </h1>
        <p className="text-gray-500 text-sm mt-1">Here&apos;s a summary of your account.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border p-5" style={{ borderColor: "#e5e7eb" }}>
          <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Active Enrollments</p>
          <p className="text-4xl font-extrabold mt-2" style={{ color: "#ff6b35" }}>{confirmedCount}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border p-5" style={{ borderColor: "#e5e7eb" }}>
          <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Total Paid (SGD)</p>
          <p className="text-4xl font-extrabold mt-2" style={{ color: "#1e1b2e" }}>
            ${(totalPaid / 100).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Recent enrollments */}
      <div className="bg-white rounded-2xl shadow-sm border p-6" style={{ borderColor: "#e5e7eb" }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-extrabold" style={{ color: "#1e1b2e" }}>Recent Enrollments</h2>
          <Link href="/dashboard/enrollments" className="text-xs font-medium" style={{ color: "#ff6b35" }}>
            View all →
          </Link>
        </div>
        {!enrollments || enrollments.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-400 text-sm mb-4">No enrollments yet.</p>
            <Link
              href="/enroll"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#ff6b35" }}
            >
              Enroll Now →
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {enrollments.map((e) => (
              <div key={e.id} className="flex items-center justify-between py-2.5 border-b last:border-0" style={{ borderColor: "#f3f4f6" }}>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#1e1b2e" }}>{e.course}</p>
                  <p className="text-xs text-gray-400">
                    {(e.children as unknown as { name: string }[] | null)?.[0]?.name} · {e.billing_type === "recurring" ? "Monthly" : "One-time"}
                  </p>
                </div>
                <StatusBadge status={e.status} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick action */}
      <div
        className="rounded-2xl p-6 flex items-center justify-between"
        style={{ background: "linear-gradient(135deg, #7b2d8b 0%, #ff6b35 100%)" }}
      >
        <div>
          <p className="font-extrabold text-white">Enroll another child?</p>
          <p className="text-white text-sm opacity-80 mt-0.5">Add a new course for any of your children.</p>
        </div>
        <Link
          href="/enroll"
          className="px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:opacity-90 flex-shrink-0"
          style={{ backgroundColor: "#fff", color: "#ff6b35" }}
        >
          Enroll Now
        </Link>
      </div>
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
    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: s.bg, color: s.color }}>
      {s.label}
    </span>
  );
}
