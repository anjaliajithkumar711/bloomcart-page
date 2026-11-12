
import Link from "next/link";

export default function Custom404() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold text-purple-700">
        404
      </h1>

      <h2 className="text-2xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-3">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="bg-yellow-400 px-6 py-3 rounded-lg mt-6 font-bold"
      >
        Back to Home
      </Link>
    </main>
  );
}
