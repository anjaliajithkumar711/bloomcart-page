
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cart } = useCart();

  const count = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold text-purple-700">
          Bloom<span className="text-yellow-500">Cart</span>
        </Link>

        <div className="flex gap-6 items-center font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/cart"
            className="bg-purple-700 text-white px-4 py-2 rounded-lg"
          >
            Cart ({count})
          </Link>
        </div>
      </nav>
    </header>
  );
}
