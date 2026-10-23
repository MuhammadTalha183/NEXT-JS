
import Link from "next/link";
import { getProducts } from "../../lib/api";

export default async function ProductsPage() {
  const { products, total } = await getProducts(12, 0);

  return (
    <section className="min-h-screen bg-[#F5F3EB] px-5 py-12 text-[#244A3A] sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="border-b border-[#DCE0D4] pb-8 sm:pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7F9A76]">
            The NovaMart collection
          </p>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h1 className="font-serif text-5xl tracking-tight sm:text-6xl">
              All the good things.
            </h1>

            <p className="max-w-sm text-sm leading-6 text-[#687166]">
              Everyday finds, considered essentials, and pieces
              worth making room for.
            </p>
          </div>

          <p className="mt-6 text-sm text-[#7B8376]">
            Showing {products.length} of {total} products
          </p>
        </div>

        {/* Product grid */}
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="group min-w-0">
              <Link
                href={`/products/${product.id}`}
                className="block"
              >
                <div className="relative flex aspect-[4/4.5] items-center justify-center overflow-hidden rounded-sm bg-white p-5 sm:p-8">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-2 top-2 bg-[#E8EADD] px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#355D49] sm:left-3 sm:top-3 sm:text-[10px]">
                    {product.category.replaceAll("-", " ")}
                  </span>
                </div>

                <div className="pt-3">
                  <h2 className="line-clamp-2 min-h-10 text-sm font-medium leading-5 sm:text-base">
                    {product.title}
                  </h2>

                  <p className="mt-2 text-xs text-[#7B8376]">
                    ★ {product.rating.toFixed(1)} / 5
                  </p>

                  <p className="mt-2 text-base font-semibold sm:text-lg">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </Link>

              <Link
                href={`/products/${product.id}`}
                className="mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-full border border-[#244A3A] px-3 text-xs font-semibold transition hover:bg-[#244A3A] hover:text-white sm:text-sm"
              >
                View product <span className="ml-2">↗</span>
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination will be added in the next step */}
        <div className="mt-14 border-t border-[#DCE0D4] pt-6 text-center">
          <p className="text-sm text-[#7B8376]">
            More to discover. Pagination is coming next.
          </p>
        </div>
      </div>
    </section>
  );
}
