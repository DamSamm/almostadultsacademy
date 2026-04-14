export default function PaymentsLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="bg-white rounded-2xl shadow-sm border p-6" style={{ borderColor: "#e5e7eb" }}>
        <div className="h-6 w-40 rounded-lg mb-5" style={{ backgroundColor: "#f3f4f6" }} />
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b last:border-0" style={{ borderColor: "#f3f4f6" }}>
              <div className="flex-1">
                <div className="h-4 w-28 rounded" style={{ backgroundColor: "#f3f4f6" }} />
                <div className="h-3 w-44 rounded mt-2" style={{ backgroundColor: "#f3f4f6" }} />
              </div>
              <div className="h-6 w-16 rounded-full" style={{ backgroundColor: "#f3f4f6" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
