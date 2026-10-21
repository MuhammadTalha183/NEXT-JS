'use client';

import React from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar'; // Your existing main Navbar

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col bg-slate-950 text-white">
        {/* Your Existing Main Navbar at Top */}
        <Navbar />

        {/* Body Section with Sidebar and Dashboard Content */}
        <div className="flex-1 flex min-w-0">
          <Sidebar isOpen={false} />

          <main className="flex-1 p-6 md:p-10 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}