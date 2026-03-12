import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import supabaseAdmin from "@/lib/supabase-admin";

export default async function PaymentsPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("id")
    .eq("clerk_user_id", userId)
    .single();

  const { data: payments } = profile
    ? await supabaseAdmin
        .from("payments")
        .select("id, amount_sgd, status, billing_type, paid_at, created_at, enrollments(course)")
        .eq("parent_id", profile.id)
        .order("created_at", { ascending: false })
    : { data: [] };

  const totalPaid =
    payments
      ?.filter((p) => p.status === "paid")
      .reduce((sum, p) => sum + (p.amount_sgd ?? 0), 0) ?? 0;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold" style={{ color: "#1e1b2e" }}>Payment History</h1>

      {/* Total */}
      <div className="bg-white rounded-2xl shadow-sm border p-5" style={{ borderColor: "#e5e7eb" }}>
        <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Total Paid (SGD)</p>
        <p className="text-4xl font-extrabold mt-1" style={{ color: "#1e1b2e" }}>
          ${(totalPaid / 100).toFixed(2)}
        </p>
      </div>

      {!payments || payments.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border p-10 text-center" style={{ borderColor: "#e5e7eb" }}>
          <p className="text-gray-400 text-sm">No payment history yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden" style={{ borderColor: "#e5e7eb" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "#f9fafb", borderBottom: "1px solid #f3f4f6" }}>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Course</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Type</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Amount</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Date</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => {
                const enrollment = (p.enrollments as unknown as { course: string }[] | null)?.[0] ?? null;
                const date = p.paid_at ?? p.created_at;
                return (
                  <tr key={p.id} className="border-b last:border-0" style={{ borderColor: "#f3f4f6" }}>
                    <td className="px-5 py-3.5 font-medium" style={{ color: "#1e1b2e" }}>
                      {enrollment?.course ?? "—"}
                    </td>
                    <td className="px-5 py-3.5 text-gray-500">
                      {p.billing_type === "recurring" ? "Monthly" : "One-time"}
                    </td>
                    <td className="px-5 py-3.5 font-semibold" style={{ color: "#1e1b2e" }}>
                      SGD ${((p.amount_sgd ?? 0) / 100).toFixed(2)}
                    </td>
                    <td className="px-5 py-3.5 text-gray-500">
                      {new Date(date).toLocaleDateString("en-SG")}
                    </td>
                    <td className="px-5 py-3.5">
                      <PaymentBadge status={p.status} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function PaymentBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string; label: string }> = {
    paid: { bg: "#d1fae5", color: "#065f46", label: "Paid" },
    pending: { bg: "#fef3c7", color: "#b45309", label: "Pending" },
    failed: { bg: "#fee2e2", color: "#b91c1c", label: "Failed" },
    refunded: { bg: "#e0e7ff", color: "#3730a3", label: "Refunded" },
  };
  const s = map[status] ?? map.pending;
  return (
    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: s.bg, color: s.color }}>
      {s.label}
    </span>
  );
}
