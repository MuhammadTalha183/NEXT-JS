'use client';

import React from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../context/AuthContext';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">User Dashboard</span>
              <h1 className="text-3xl font-black text-white mt-1">
                Welcome back, {user?.displayName || 'Developer'}!
              </h1>
              <p className="text-slate-400 text-sm mt-1">{user?.email}</p>
            </div>

            <button
              onClick={logout}
              className="bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 font-bold px-6 py-2.5 rounded-full text-sm transition-colors self-start sm:self-auto"
            >
              Sign Out
            </button>
          </div>

          {/* Quick Actions / Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <p className="text-slate-400 text-xs font-semibold uppercase">Account UID</p>
              <p className="text-sm font-mono text-indigo-300 mt-2 truncate">{user?.uid}</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <p className="text-slate-400 text-xs font-semibold uppercase">Auth Provider</p>
              <p className="text-base font-bold text-white mt-2">Email & Password</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <p className="text-slate-400 text-xs font-semibold uppercase">Status</p>
              <span className="inline-flex items-center gap-1.5 text-emerald-400 text-sm font-bold mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Active Authenticated Session
              </span>
            </div>
          </div>

        </div>
      </div>
    </ProtectedRoute>
  );
}