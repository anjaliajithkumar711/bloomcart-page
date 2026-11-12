
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white mt-16 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold">
          Bloom<span className="text-yellow-400">Cart</span>
        </h2>

        <p className="text-gray-400 mt-3">
          Your one-stop destination for amazing shopping.
        </p>

        <div className="flex justify-center gap-6 mt-5">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          © 2026 BloomCart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
