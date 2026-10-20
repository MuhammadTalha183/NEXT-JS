// "use client"
// import React, { useState } from 'react';

// interface NavLink {
//   name: string;
//   href: string;
// }

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   const toggleMenu = (): void => {
//     setIsOpen((prev) => !prev);
//   };

//   const navLinks: NavLink[] = [
//     { name: 'Home', href: '#' },
//     { name: 'About', href: '#' },
//     { name: 'Blogs', href: '#' },
//     { name: 'Dashboard', href: '#' },
//   ];

//   return (
//     <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
          
//           {/* Brand Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               DevBlog
//             </a>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Desktop Action Button */}
//           <div className="hidden md:flex items-center">
//             <a
//               href="#"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow"
//             >
//               Login
//             </a>
//           </div>

//           {/* Mobile Hamburger Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
//               aria-expanded={isOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
//               onClick={() => setIsOpen(false)}
//             >
//               {link.name}
//             </a>
//           ))}
//           <div className="pt-2">
//             <a
//               href="#"
//               className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium text-base px-4 py-2.5 rounded-lg transition-colors shadow-sm"
//               onClick={() => setIsOpen(false)}
//             >
//               Login
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
"use client"
import React, { useState } from 'react';
interface NavLink {
  name: string;
  href: string;
}

interface Stat {
  id: number;
  label: string;
  value: string;
  iconBg: string;
  icon: React.ReactNode;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsOpen((prev) => !prev);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-indigo-600 rounded-lg transform rotate-12 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <a href="#" className="text-2xl font-bold text-gray-900">
              Dev<span className="text-indigo-600">Blog</span>
            </a>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right hand buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/login" className="text-gray-700 hover:text-indigo-600 font-medium text-sm transition-colors px-4 py-2">
              Log in
            </a>
            <a
              href="/signup"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm shadow-indigo-100"
            >
              Sign Up
            </a>
          </div>

          {/* Responsive burger toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} type="button" className="text-gray-600 hover:text-indigo-600 p-2">
              <span className="sr-only">Menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile view drop menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">{link.name}</a>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <a href="/login" className="text-center text-gray-700 font-medium py-2 rounded-lg">Log in</a>
            <a href="/signup" className="text-center bg-indigo-600 text-white font-semibold py-2.5 rounded-lg">Sign Up</a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;