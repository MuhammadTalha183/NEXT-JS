
import Link from "next/link";

const categories = [
  {
    number: "01",
    name: "Everyday Style",
    description: "Pieces worth reaching for.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    href: "/products",
  },
  {
    number: "02",
    name: "Living Spaces",
    description: "Make room for good things.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    href: "/products",
  },
  {
    number: "03",
    name: "Daily Essentials",
    description: "Small things, better days.",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85",
    href: "/products",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#F5F3EB] text-[#244A3A]">
      {/* Hero */}
      <section className="px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12 lg:px-12 lg:pb-20 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="relative z-10">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#617A62] sm:text-xs">
              <span className="h-px w-8 bg-[#7F9A76]" />
              Objects for everyday living
            </p>

            <h1 className="mt-6 max-w-xl font-serif text-[3.5rem] leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[5.5rem]">
              Good things.
              <br />
              <span className="italic text-[#7F9A76]">
                Better living.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#687166] sm:text-base sm:leading-8">
              A thoughtful collection of everyday finds, personal
              essentials and little things that make life feel more
              like your own.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-[#244A3A] px-7 py-3 text-sm font-medium text-[#F5F3EB] transition hover:bg-[#355D49] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244A3A]"
              >
                Explore the collection
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-12 items-center px-2 text-sm font-medium text-[#244A3A] underline decoration-[#B5C2AD] underline-offset-8 transition hover:decoration-[#244A3A]"
              >
                Our point of view
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-[#DCE0D4] pt-5">
              <div className="flex -space-x-2">
                <span className="h-7 w-7 rounded-full border-2 border-[#F5F3EB] bg-[#A6B59A]" />
                <span className="h-7 w-7 rounded-full border-2 border-[#F5F3EB] bg-[#D9CDB9]" />
                <span className="h-7 w-7 rounded-full border-2 border-[#F5F3EB] bg-[#789078]" />
              </div>
              <p className="text-xs leading-5 text-[#687166]">
                Less noise. <span className="font-semibold text-[#244A3A]">More considered choices.</span>
              </p>
            </div>
          </div>

          {/* Editorial hero image */}
          <div className="relative">
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full border border-[#B5C2AD] sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative h-[340px] overflow-hidden rounded-t-[45%] rounded-b-2xl bg-[#D9DCCD] sm:h-[470px] lg:h-[570px]">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=90"
                alt="A calm, naturally styled living space with warm textures and greenery"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#182D22]/45 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/80 sm:text-xs">
                    The everyday edit
                  </p>
                  <p className="mt-2 font-serif text-2xl sm:text-3xl">
                    Find your kind of good.
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 text-xl">
                  ↗
                </span>
              </div>
            </div>

            <p className="mt-3 text-right text-[10px] uppercase tracking-[0.2em] text-[#7B8376]">
              Thoughtfully found · Made for everyday
            </p>
          </div>
        </div>
      </section>

      {/* Brand ticker */}
      <section className="border-y border-[#DCE0D4]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-5 py-5 text-[10px] font-medium uppercase tracking-[0.17em] text-[#617A62] sm:gap-x-10 sm:py-6 sm:text-xs">
          <span>Considered essentials</span>
          <span className="text-[#A6B59A]">✳</span>
          <span>Everyday discoveries</span>
          <span className="text-[#A6B59A]">✳</span>
          <span>Simple pleasures</span>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7F9A76] sm:text-xs">
              A place to begin
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              Find your everyday.
            </h2>
          </div>

          <Link
            href="/products"
            className="w-fit border-b border-[#7F9A76] pb-1 text-sm font-medium transition hover:border-[#244A3A]"
          >
            Browse everything <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-7">
          {categories.map((category) => (
            <Link
              key={category.number}
              href={category.href}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-sm bg-[#E4E7DB]">
                <div className="aspect-[4/4.5] overflow-hidden sm:aspect-[4/5]">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F3EB]/90 text-xs text-[#244A3A]">
                  {category.number}
                </span>

                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F3EB] text-lg text-[#244A3A] transition group-hover:bg-[#244A3A] group-hover:text-white">
                  ↗
                </span>
              </div>

              <div className="flex items-start justify-between gap-3 pt-4">
                <div>
                  <h3 className="font-serif text-2xl">{category.name}</h3>
                  <p className="mt-1 text-sm text-[#7B8376]">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-xs leading-6 text-[#7B8376]">
          Explore links currently lead to the full product catalogue.
          Category-specific filtering will be connected when we build
          the products page.
        </p>
      </section>

      {/* Editorial brand statement */}
      <section className="bg-[#E8EADD]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#617A62] sm:text-xs">
              A little about us
            </p>

            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Not more stuff.
              <br />
              <span className="italic text-[#7F9A76]">
                Better finds.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#687166] sm:text-base sm:leading-8">
              We believe shopping should feel less like scrolling
              through endless options and more like discovering
              something that belongs in your life.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-4 border-b border-[#7F9A76] pb-2 text-sm font-semibold transition hover:border-[#244A3A]"
            >
              Get to know NovaMart <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <div className="mt-8 overflow-hidden rounded-t-full bg-[#D5DDCC] sm:mt-12">
              <img
                src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=700&q=85"
                alt="Thoughtfully arranged everyday objects"
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80"
              />
            </div>

            <div className="overflow-hidden rounded-t-full bg-[#D5DDCC]">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85"
                alt="Warm, inviting contemporary home interior"
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-2xl bg-[#244A3A] px-6 py-10 text-[#F5F3EB] sm:px-10 sm:py-14 lg:flex-row lg:items-center lg:px-14">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B9CBB1] sm:text-xs">
              Your next good find
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              A good place to start looking.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-[#D5E0CE]">
              Take a look around. You might find something you didn't
              know you needed.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-5 rounded-full bg-[#F5F3EB] px-7 py-3 text-sm font-semibold text-[#244A3A] transition hover:bg-[#DDE5D6]"
          >
            Shop the collection <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
