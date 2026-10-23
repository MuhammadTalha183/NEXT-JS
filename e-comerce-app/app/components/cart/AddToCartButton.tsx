
"use client";

import { useCart } from "../../context/CartContext";
import type { Product } from "../../lib/api";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    console.log("Product added to cart:", product.id);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#244A3A] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#355D49]"
    >
      + Add to Cart
    </button>
  );
}
