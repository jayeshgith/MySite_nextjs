"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-500 via-white to-slate-90 text-slate-900 overflow-hidden">
     
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
     
        <div className="w-full max-w-2xl rounded-3xl bg-white/60 backdrop-blur-xl shadow-2xl p-10 md:p-14 text-center">
         
          <div className="group mx-auto mb-8 w-fit relative">
         
            <div className="absolute inset-0 rounded-full bg-sky-400/40 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div
              className="relative rounded-full bg-gradient-to-tr from-emerald-400 via-sky-400 to-indigo-400 p-[3px] shadow-lg transition-transform duration-300 group-hover:scale-[1.05] group-hover:shadow-2xl"
            >
              <div className="rounded-full bg-white p-[3px]">
                <Image
                  src="/photo1.jpg"
                  alt="Manish Kunthoor"
                  width={180}
                  height={180}
                  className="rounded-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  priority
                />
              </div>
            </div>
          </div>

        
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Manish Kunthoor
          </h1>

       
          <p className="mt-3 text-base md:text-lg text-slate-600">
            Full-Stack Developer | MERN Stack | Next.js | React.js
          </p>

         
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Let’s Connect
          </Link>
        </div>
      </section>
    </main>
  );
}
