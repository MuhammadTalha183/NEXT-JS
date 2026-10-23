
"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cartItems, addToCart } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-[#F5F3EB] px-5 py-12 text-[#244A3A] sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7F9A76]">
          Your selection
        </p>

        <div className="mt-3 flex flex-col justify-between gap-3 border-b border-[#DCE0D4] pb-8 sm:flex-row sm:items-end">
          <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">
            Your shopping bag.
          </h1>

          <p className="text-sm text-[#687166]">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl">
              Your bag is taking a little break.
            </p>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#687166]">
              You haven't added anything yet. Explore our collection
              and find something you love.
            </p>

            <Link
              href="/products"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#244A3A] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#355D49]"
            >
              Explore the collection
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-14">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="flex gap-4 border-b border-[#DCE0D4] pb-6 sm:gap-6"
                >
                  <Link
                    href={`/products/${item.id}`}
                    className="flex h-28 w-28 shrink-0 items-center justify-center bg-white p-3 sm:h-36 sm:w-36"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </Link>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#7F9A76]">
                      {item.category.replaceAll("-", " ")}
                    </p>

                    <Link
                      href={`/products/${item.id}`}
                      className="mt-1 font-medium leading-6 hover:text-[#7F9A76]"
                    >
                      {item.title}
                    </Link>

                    <p className="mt-2 text-sm text-[#687166]">
                      ${item.price.toFixed(2)} each
                    </p>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.title}`}
                          disabled={item.quantity <= 1}
                          onClick={() => {
                            // Quantity controls will be connected next.
                          }}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DCE0D4] text-lg disabled:opacity-40"
                        >
                          −
                        </button>

                        <span className="min-w-4 text-center text-sm">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.title}`}
                          onClick={() => addToCart(item)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DCE0D4] text-lg transition hover:bg-[#E8EADD]"
                        >
                          +
                        </button>
                      </div>

                      <p className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit border border-[#DCE0D4] bg-white/60 p-6 sm:p-7">
              <h2 className="font-serif text-2xl">
                Order summary
              </h2>

              <div className="mt-6 flex justify-between gap-4 text-sm text-[#687166]">
                <span>Subtotal ({totalItems} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="mt-4 flex justify-between gap-4 border-b border-[#DCE0D4] pb-5 text-sm text-[#687166]">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <span className="font-semibold">Subtotal</span>
                <span className="text-xl font-semibold">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                disabled
                className="mt-6 min-h-12 w-full cursor-not-allowed rounded-full bg-[#244A3A] px-5 py-3 text-sm font-semibold text-white opacity-60"
              >
                Checkout coming soon
              </button>

              <Link
                href="/products"
                className="mt-4 block text-center text-sm text-[#687166] underline underline-offset-4 hover:text-[#244A3A]"
              >
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
