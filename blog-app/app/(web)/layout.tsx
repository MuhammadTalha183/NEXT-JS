import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path if using relative imports
import Footer from '../components/Footer';

export default function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fbfafd] text-gray-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}