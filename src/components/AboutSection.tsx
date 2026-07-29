import { useEffect, useRef } from 'react';
import { Sparkles, Code, CheckCircle, Rocket } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Featured Projects' },
  { value: '3', label: 'Certifications' },
  { value: '2', label: 'Hackathons' },
  { value: 'B.Tech', label: 'CSE Graduate' },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-24 md:py-32 bg-white overflow-hidden border-b border-slate-100">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal opacity-0">
          <p className="text-xs font-bold text-indigo-600 tracking-widest uppercase mb-2">Who I Am</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            About <span className="gradient-text-blue">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo Container */}
          <div className="reveal opacity-0 delay-100 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-full h-full bg-white border-2 border-slate-200/80 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/profile-photo.jpeg"
                  alt="Srashti Sharma"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'bg-slate-50');
                      parent.innerHTML = '<div class="w-20 h-20 rounded-2xl bg-indigo-600 text-white font-heading text-5xl font-bold flex items-center justify-center shadow-md mb-2">S</div><p class="font-heading font-bold text-slate-800 text-lg">Srashti Sharma</p>';
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="reveal opacity-0 delay-200">
            <div className="space-y-5 text-base md:text-lg text-slate-600 leading-relaxed">
              <p>
                I am a <span className="text-slate-900 font-semibold">Computer Science Engineering Graduate</span> skilled across{' '}
                <span className="text-indigo-600 font-semibold">Software Development</span>,{' '}
                <span className="text-indigo-600 font-semibold">Full-Stack & Python Engineering</span>, and{' '}
                <span className="text-indigo-600 font-semibold">Software Testing & QA</span>. I combine analytical thinking, clean code principles, and structured system design to deliver high-quality software solutions.
              </p>

              <p>
                Through academic projects, technical leadership, and practical application, I have built experience across the entire Software Development Lifecycle (SDLC) — from architecture and coding to test case execution, debugging, and performance optimization.
              </p>

              <p>
                I am adaptable, fast at picking up new frameworks or tools, and dedicated to continuous professional growth. My goal is to add value in roles such as Software Engineer, Software Tester / QA, Full-Stack Developer, or Python Engineer in a dynamic tech environment.
              </p>

              <div className="pt-2 flex gap-2 items-center text-slate-900 font-heading font-bold">
                <Sparkles className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span>Ready to engineer reliable software for your team!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="reveal opacity-0 delay-300 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card group">
              <span className="font-heading text-2xl md:text-3xl font-extrabold text-indigo-600 mb-1 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-slate-600 text-center font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
