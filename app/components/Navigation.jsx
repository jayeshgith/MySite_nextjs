"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="relative w-full h-20 flex items-center justify-between px-8 md:px-14 bg-gradient-to-r from-blue-50 via-white to-slate-100 backdrop-blur-xl border-b border-slate-200 shadow-sm">
       
        <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-slate-900 to-orange-500 bg-clip-text text-transparent">
          WELCOME TO MYPAGE
        </h1>

       
        <div className="ml-auto flex items-center gap-4">
          <Link
            href="/"
            className="rounded-full px-6 py-2 text-sm font-medium text-slate-700 border border-slate-300 bg-white/70 backdrop-blur transition-all duration-300 hover:bg-slate-900 hover:text-white hover:shadow-md"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="rounded-full px-6 py-2 text-sm font-medium text-slate-700 border border-slate-300 bg-white/70 backdrop-blur transition-all duration-300 hover:bg-slate-900 hover:text-white hover:shadow-md"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
