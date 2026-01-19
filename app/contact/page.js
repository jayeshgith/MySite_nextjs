"use client";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";

const LINKEDIN = "https://www.linkedin.com/in/manish-kunthoor-99ba00279";
const GITHUB = "https://github.com/jayeshgith";
const EMAIL = "manishkunthoor@gmail.com";
const PHONE = "+917019974493";
const WEBSITE = "https://mysitemani.netlify.app/";

export default function ContactPage() {
  return (
    <main
      className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-1 via-white to-yellow-100 via-black to-top-red"
    >
      <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-white/80 backdrop-blur-lg border border-slate-200 p-12 shadow-xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Let’s Connect
        </h1>
        <br />

        {/* <p className="mt-4 mb-10 text-base text-slate-600">
          You can reach me anytime using the platforms below
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ContactCard href={LINKEDIN} label="LinkedIn">
            <FaLinkedin />
          </ContactCard>

          <ContactCard href={GITHUB} label="GitHub">
            <FaGithub />
          </ContactCard>

          <ContactCard href={`mailto:${EMAIL}`} label="Email">
            <FaEnvelope />
          </ContactCard>

          <ContactCard href={`tel:${PHONE}`} label="Phone">
            <FaPhone />
          </ContactCard>

          <ContactCard href={WEBSITE} label="My Website" full>
            <FaGlobe />
          </ContactCard>
        </div>
      </div>
    </main>
  );
}

function ContactCard({ href, children, label, full }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`flex items-center justify-center gap-4 rounded-xl px-6 py-4 bg-white border border-slate-200 text-slate-700 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:scale-[1.03] hover:shadow-lg ${full ? "sm:col-span-2" : ""}`}
    >
      <span className="text-2xl">{children}</span>
      <span className="text-lg font-medium">{label}</span>
    </a>
  );
}
