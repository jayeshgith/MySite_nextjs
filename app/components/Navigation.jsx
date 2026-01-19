"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-50 via-white to-slate-100 backdrop-blur-xl border-b border-slate-200 shadow-sm">
     
      <div className="hidden md:flex relative h-20 max-w-6xl mx-auto items-center px-8">
        <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-slate-900 to-orange-500 bg-clip-text text-transparent">
          WELCOME TO MYPAGE
        </h1>

        <div className="ml-auto flex items-center gap-4">
          <NavButton href="/">Home</NavButton>
          <NavButton href="/about">About</NavButton>
        </div>
      </div>

      
      <div className="md:hidden flex flex-col items-center gap-3 py-4 px-4">
        <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-slate-900 to-orange-500 bg-clip-text text-transparent text-center">
          WELCOME TO MYPAGE
        </h1>

        <div className="flex gap-3 w-full justify-center">
          <NavButton mobile href="/">
            Home
          </NavButton>
          <NavButton mobile href="/about">
            About
          </NavButton>
        </div>
      </div>
    </nav>
  );
}


function NavButton({ href, children, mobile }) {
  return (
    <Link
      href={href}
      className={`rounded-full text-sm font-medium transition-all duration-300 ${
        mobile
          ? "px-5 py-2 bg-white text-slate-700 border border-slate-300 flex-1 text-center hover:bg-slate-900 hover:text-white"
          : "px-6 py-2 bg-white/70 text-slate-700 border border-slate-300 hover:bg-slate-900 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
