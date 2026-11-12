
import { GetServerSideProps } from "next";
import { useState } from "react";

import { Product } from "@/types/product";
import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";

interface Props {
  products: Product[];
}

export default function ProductsPage({ products }: Props) {
  const [filteredProducts, setFilteredProducts] =
    useState(products);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">
        All Products
      </h1>

      <p className="text-gray-500 mb-8">
        Explore our collection of amazing products.
      </p>

      <SearchBar
        products={products}
        onFilter={setFilteredProducts}
      />

      {filteredProducts.length === 0 ? (
        <p className="text-center py-10">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const products = await getProducts();

    return { props: { products } };
  } catch {
    return { props: { products: [] } };
  }
};
