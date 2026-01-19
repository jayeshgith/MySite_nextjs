"use client";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 px-4 flex items-start md:items-center bg-gradient-to-br from-blue-50 via-white to-slate-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-slate-900">
          About Me
        </h2>

        <div className="max-w-3xl lg:max-w-4xl mx-auto p-6 sm:p-8 md:p-12 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg transition-transform duration-300 hover:scale-[1.01]">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 text-slate-700">
            I am an enthusiastic student with a strong foundation in web
            technologies and an aspiring{" "}
            <span className="font-semibold text-slate-900">
              Full-Stack Developer
            </span>{" "}
            passionate about building responsive and user-friendly web
            applications. I have hands-on experience with Node.js, Next.js,
            HTML, CSS, JavaScript, React.js, MongoDB, SQL, REST APIs, and Git.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-700">
            I enjoy exploring and mastering new technologies to create impactful
            solutions. Through internships and real-world projects, I have
            improved my hands-on (real-world) skills in building websites and
            integrating AI features into applications.
          </p>

          <div className="w-20 h-1 mx-auto mt-8 rounded-full bg-gradient-to-r from-blue-400 to-slate-900"></div>
        </div>
      </div>
    </section>
  );
}
