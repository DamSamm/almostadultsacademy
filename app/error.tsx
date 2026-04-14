"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-gray-600 mb-6">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
      >
        Try again
      </button>
    </main>
  );
}
