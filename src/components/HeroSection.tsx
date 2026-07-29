import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Lightbulb, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 bg-slate-50/60"
    >
      {/* Light dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* Ambient background blur orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl float-delayed" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Available badge */}
            <div className="reveal opacity-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Available for Software Engineering & Full-Stack Roles
            </div>

            {/* Main Headline - Matches Reference Image */}
            <div className="reveal opacity-0 delay-100">
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Hi — I'm <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600">
                  Srashti Sharma
                </span>
              </h1>
            </div>

            {/* Sub-headline / Degree / Role - Matches Reference Image */}
            <p className="reveal opacity-0 delay-200 text-xl sm:text-2xl font-medium text-slate-600 leading-snug">
              B.Tech CSE — <span className="text-slate-900 font-semibold">Software Engineer</span> & <span className="text-indigo-600 font-semibold">Full-Stack Developer</span>
            </p>

            {/* Brief description */}
            <p className="reveal opacity-0 delay-300 text-base text-slate-600 max-w-xl leading-relaxed">
              Passionate about building scalable web applications, robust software architecture, clean code, and intuitive user experiences.
            </p>

            {/* CTA Buttons - Matches Reference Image */}
            <div className="reveal opacity-0 delay-400 flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="neon"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="rounded-xl px-7 font-semibold"
              >
                View Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="rounded-xl px-7 font-semibold"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Icon Pills - Matches Reference Image */}
            <div className="reveal opacity-0 delay-500 flex items-center gap-3 pt-4">
              <a
                href="https://github.com/Srashtisharma08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md transition-all flex items-center justify-center"
              >
                <Github size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/srashti-sharma-2388833a1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md transition-all flex items-center justify-center"
              >
                <Linkedin size={19} />
              </a>

              <a
                href="mailto:sharmasrashti09@gmail.com"
                aria-label="Email"
                className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md transition-all flex items-center justify-center"
              >
                <Mail size={19} />
              </a>
            </div>

          </div>

          {/* Right Column: Hero Profile Image Card - Matches Reference Image */}
          <div className="lg:col-span-5 reveal opacity-0 delay-300 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              {/* Photo / Fallback */}
              <img
                src="/profile-photo.jpeg"
                alt="Srashti Sharma"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-indigo-50', 'via-purple-50', 'to-slate-100');
                    parent.innerHTML = `
                      <div class="w-24 h-24 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-heading text-5xl font-extrabold shadow-lg mb-4">S</div>
                      <p class="font-heading text-xl font-bold text-slate-800">Srashti Sharma</p>
                      <p class="text-sm text-slate-500 font-medium mt-1">B.Tech CSE Graduate</p>
                    `;
                  }
                }}
              />

              {/* Bottom Badge overlay - Matches Reference Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-lg flex flex-col gap-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold w-fit shadow-sm">
                  <Lightbulb size={13} className="text-yellow-300 fill-yellow-300" />
                  Software Engineer & Developer
                </div>
                <p className="text-xs text-slate-600 font-medium pl-1 pt-0.5">
                  Presenting innovative software solutions
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
