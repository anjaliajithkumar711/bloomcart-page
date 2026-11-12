
import { Product } from "@/types/product";

const API_URL = "https://dummyjson.com/products";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}?limit=30`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  return data.products;
}

export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Product not found");
  }

  return response.json();
}
