
import { useState } from "react";
import { Product } from "@/types/product";

interface Props {
  products: Product[];
  onFilter: (filtered: Product[]) => void;
}

export default function SearchBar({
  products,
  onFilter,
}: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const handleFilter = (value: string, selectedCategory: string) => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(value.toLowerCase()) ||
        product.brand?.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    onFilter(filtered);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <input
        type="text"
        placeholder="Search products, brands or categories..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleFilter(e.target.value, category);
        }}
        className="border rounded-lg p-3 flex-1 outline-purple-600"
      />

      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          handleFilter(search, e.target.value);
        }}
        className="border rounded-lg p-3"
      >
        <option value="all">All Categories</option>

        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
