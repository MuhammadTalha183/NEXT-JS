
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useCart } from "../../context/CartContext";

// const { cartItems } = useCart();
// const cartCount = cartItems.reduce(
//   (total, item) => total + item.quantity,
//   0
// );
// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "Shop", href: "/products" },
//   { label: "About", href: "/about" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#E5E7DF] bg-[#F5F3EB]/95 text-[#244A3A] backdrop-blur-md">
//       <nav
//         aria-label="Main navigation"
//         className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6"
//       >
//         {/* Brand */}
//         <Link
//           href="/"
//           onClick={() => setIsOpen(false)}
//           className="shrink-0 text-2xl font-extrabold tracking-tight"
//         >
//           NovaMart<span className="text-[#7F9A76]">.</span>
//         </Link>

//         {/* Desktop navigation */}
//         <div className="hidden items-center gap-8 md:flex">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="text-sm font-medium transition-colors hover:text-[#7F9A76]"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* Actions */}
//         <div className="flex items-center gap-2">
//           <Link
//             href="/cart"
//             aria-label="Shopping cart"
//             onClick={() => setIsOpen(false)}
//             className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#E4EBDD]"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="21"
//               height="21"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.7"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               aria-hidden="true"
//             >
//               <path d="M6 7h12l1 13H5L6 7Z" />
//               <path d="M9 7a3 3 0 0 1 6 0" />
//             </svg>
//           </Link>

//           {/* Mobile menu button */}
//           <button
//             type="button"
//             aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
//             aria-expanded={isOpen}
//             aria-controls="mobile-navigation"
//             onClick={() => setIsOpen((previous) => !previous)}
//             className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#E4EBDD] md:hidden"
//           >
//             {isOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="23"
//                 height="23"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 aria-hidden="true"
//               >
//                 <path d="m18 6-12 12M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="23"
//                 height="23"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 aria-hidden="true"
//               >
//                 <path d="M4 7h16M4 12h16M4 17h16" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile navigation */}
//       {isOpen && (
//   <div
//     id="mobile-navigation"
//     className="border-t border-[#E5E7DF] bg-[#F5F3EB] px-5 py-3 md:hidden"
//   >
//           <div className="mx-auto flex max-w-7xl flex-col">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="border-b border-[#E5E7DF] py-3.5 text-sm font-medium transition-colors last:border-b-0 hover:text-[#7F9A76]"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7DF] bg-[#F5F3EB]/95 text-[#244A3A] backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6"
      >
        {/* Brand */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="shrink-0 text-2xl font-extrabold tracking-tight"
        >
          NovaMart<span className="text-[#7F9A76]">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-[#7F9A76]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Shopping cart */}
          <Link
            href="/cart"
            aria-label={`Shopping cart, ${cartCount} items`}
            onClick={() => setIsOpen(false)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#E4EBDD]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 7h12l1 13H5L6 7Z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>

            {/* Cart count badge */}
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#7F9A76] px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#E4EBDD] md:hidden"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="m18 6-12 12M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#E5E7DF] bg-[#F5F3EB] px-5 py-3 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#E5E7DF] py-3.5 text-sm font-medium transition-colors last:border-b-0 hover:text-[#7F9A76]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
