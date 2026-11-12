
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Product } from "@/types/product";
import { getProduct } from "@/lib/products";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product | null;
}

export default function ProductDetails({ product }: Props) {
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="text-center py-24">
        Product not found.
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 bg-white rounded-xl">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-6"
          />
        </div>

        <div>
          <p className="text-purple-700 font-medium">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mt-3">
            {product.title}
          </h1>

          <p className="text-gray-500 mt-4">
            {product.description}
          </p>

          <p className="text-3xl text-purple-700 font-bold mt-6">
            ${product.price}
          </p>

          <p className="mt-3">
            ★ {product.rating} | Stock: {product.stock}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-400 hover:bg-yellow-500 px-8 py-3 rounded-lg font-bold mt-7"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
}) => {
  try {
    const product = await getProduct(String(params?.id));

    return {
      props: { product },
    };
  } catch {
    return {
      props: { product: null },
    };
  }
};
