
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Product } from "../../../lib/api";
// export const dynamic = "force-dynamic";
import AddToCartButton from "../../../components/cart/AddToCartButton";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

async function getProduct(id: string): Promise<Product | null> {
  if (!/^[1-9]\d*$/.test(id)) {
    return null;
  }

  try {
    const response = await fetch(
      `https://dummyjson.com/products/${id}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return null;
    }

    const product: Product = await response.json();

    if (!product.id || product.id.toString() !== id) {
      return null;
    }

    return product;
  } catch {
    return null;
  }
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-[#F5F3EB] px-5 py-10 text-[#244A3A] sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-[#687166] transition hover:text-[#244A3A]"
        >
          <span aria-hidden="true">←</span>
          Back to collection
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* Product image */}
          <div className="flex min-h-[320px] items-center justify-center bg-white p-8 sm:min-h-[450px] sm:p-12">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-[420px] w-full object-contain"
            />
          </div>

          {/* Product information */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7F9A76]">
              {product.category.replaceAll("-", " ")}
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              {product.title}
            </h1>

            <p className="mt-4 text-sm text-[#687166]">
              ★ {product.rating.toFixed(1)} / 5
            </p>

            <p className="mt-6 text-3xl font-semibold">
              ${product.price.toFixed(2)}
            </p>

            <div className="my-7 border-t border-[#DCE0D4]" />

            <h2 className="text-sm font-semibold uppercase tracking-wider">
              About this product
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#687166] sm:text-base">
              {product.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3 text-xs text-[#687166]">
              {product.brand && (
                <span className="rounded-full border border-[#DCE0D4] px-4 py-2">
                  Brand: {product.brand}
                </span>
              )}

              <span className="rounded-full border border-[#DCE0D4] px-4 py-2">
                Product ID: {product.id}
              </span>
            </div>

            <p className="mt-8 text-xs leading-6 text-[#7B8376]">
              Explore the details and discover whether this item is
              right for you.
            </p>

<AddToCartButton product={product} />
<Link
  href="/products"
  className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full border border-[#244A3A] px-7 py-3 text-sm font-semibold text-[#244A3A] transition hover:bg-[#E8EADD]"
>
  Continue shopping
</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
