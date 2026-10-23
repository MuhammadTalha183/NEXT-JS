
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="text-2xl font-extrabold text-white">
            Nova<span className="text-indigo-400">Mart</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
            Discover quality products, explore new favorites, and enjoy a
            simple shopping experience.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Explore</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/products" className="hover:text-white">Products</Link>
            <Link href="/about" className="hover:text-white">About Us</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Customer Care</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link href="/contact" className="hover:text-white">Contact Us</Link>
            <Link href="/cart" className="hover:text-white">Shopping Cart</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Our Store</h3>
          <p className="mt-4 text-sm leading-6 text-gray-400">
            A modern shopping experience built with Next.js and DummyJSON.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 px-6 py-5 text-center text-sm text-gray-500">
© 2026 NovaMart. Portfolio project.      </div>
    </footer>
  );
};

export default Footer;
