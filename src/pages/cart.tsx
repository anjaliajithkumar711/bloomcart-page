
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">My Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            Your cart is empty!
          </h2>

          <Link
            href="/products"
            className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg mt-6"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-sm rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-center"
              >
                <div className="relative w-28 h-28">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold">{item.title}</h3>

                  <p className="text-purple-700 font-semibold mt-2">
                    ${item.price}
                  </p>

                  <div className="flex gap-4 items-center mt-4">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="border px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="border px-3 py-1 rounded"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 ml-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <p className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white shadow-sm rounded-xl p-6 h-fit">
            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Items</span>
              <span>
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>

            <div className="flex justify-between border-t pt-4">
              <span className="font-bold">Total</span>
              <span className="font-bold text-purple-700 text-xl">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Demo cart – online payment is not implemented.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
