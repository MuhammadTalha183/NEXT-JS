'use client';
import React, { useState, FormEvent } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('User Logged in Successfully!');

      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-12">
      <ToastContainer theme="dark" position="top-right" />

      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          
          <div className="mb-7 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl text-white shadow-lg shadow-indigo-500/30">
              ✦
            </div>
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            <p className="mt-2 text-sm text-slate-400">Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Email Address</label>
              <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4 transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">
                <span className="mr-3 text-slate-400">✉</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-12 w-full bg-transparent text-white outline-none placeholder:text-slate-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
              <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4 transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">
                <span className="mr-3 text-slate-400">🔒</span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="h-12 w-full bg-transparent text-white outline-none placeholder:text-slate-500 text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-indigo-500/40 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {loading ? 'Signing in...' : 'Sign In'}
              {!loading && <span className="text-xl transition-transform group-hover:translate-x-1">→</span>}
            </button>
          </form>

          <div className="mt-7 text-center">
            <p className="text-sm text-slate-400">
              Don&apos;t have an account?
              <Link href="/signup" className="ml-1 font-semibold text-indigo-400 transition hover:text-indigo-300">
                Sign Up
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}