
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-52">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-contain"
          />
        </div>

        <h3 className="font-semibold mt-4 line-clamp-2">
          {product.title}
        </h3>
      </Link>

      <p className="text-gray-500 text-sm mt-2">
        {product.brand || product.category}
      </p>

      <div className="flex justify-between mt-3">
        <span className="font-bold text-purple-700">
          ${product.price}
        </span>

        <span className="text-yellow-500">
          ★ {product.rating}
        </span>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-lg mt-4 font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}
