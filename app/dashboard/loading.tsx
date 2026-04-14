export default function DashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Welcome skeleton */}
      <div className="bg-white rounded-2xl shadow-sm border p-6" style={{ borderColor: "#e5e7eb" }}>
        <div className="h-7 w-56 rounded-lg" style={{ backgroundColor: "#f3f4f6" }} />
        <div className="h-4 w-40 rounded-lg mt-2" style={{ backgroundColor: "#f3f4f6" }} />
      </div>

      {/* Stats skeleton */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border p-5" style={{ borderColor: "#e5e7eb" }}>
          <div className="h-3 w-28 rounded" style={{ backgroundColor: "#f3f4f6" }} />
          <div className="h-10 w-12 rounded-lg mt-3" style={{ backgroundColor: "#f3f4f6" }} />
        </div>
        <div className="bg-white rounded-2xl shadow-sm border p-5" style={{ borderColor: "#e5e7eb" }}>
          <div className="h-3 w-28 rounded" style={{ backgroundColor: "#f3f4f6" }} />
          <div className="h-10 w-20 rounded-lg mt-3" style={{ backgroundColor: "#f3f4f6" }} />
        </div>
      </div>

      {/* Enrollments skeleton */}
      <div className="bg-white rounded-2xl shadow-sm border p-6" style={{ borderColor: "#e5e7eb" }}>
        <div className="h-5 w-40 rounded-lg mb-5" style={{ backgroundColor: "#f3f4f6" }} />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between py-2">
              <div>
                <div className="h-4 w-32 rounded" style={{ backgroundColor: "#f3f4f6" }} />
                <div className="h-3 w-24 rounded mt-2" style={{ backgroundColor: "#f3f4f6" }} />
              </div>
              <div className="h-6 w-20 rounded-full" style={{ backgroundColor: "#f3f4f6" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
