import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">404 — Page not found</h1>
      <p className="text-gray-600 mb-6">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
      >
        Go home
      </Link>
    </main>
  );
}
