
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useState } from "react";

import { Product } from "@/types/product";
import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";

interface Props {
  products: Product[];
}

export default function Home({ products }: Props) {
  const [filteredProducts, setFilteredProducts] =
    useState(products);

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-purple-800 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold">
            Welcome to BloomCart
          </h1>

          <p className="text-lg mt-5 text-purple-100">
            Discover amazing products at amazing prices.
          </p>

          <Link
            href="/products"
            className="inline-block bg-yellow-400 text-black px-7 py-3 rounded-lg mt-7 font-bold"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold mb-8">
          Featured Products
        </h2>

        <SearchBar
          products={products}
          onFilter={setFilteredProducts}
        />

        {filteredProducts.length === 0 ? (
          <p className="text-center py-10 text-gray-500">
            No products found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const products = await getProducts();

    return {
      props: { products },
    };
  } catch {
    return {
      props: { products: [] },
    };
  }
};
