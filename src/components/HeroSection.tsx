import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Code2, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roles = [
  'Software Developer',
  'AI / ML Developer',
  'Full-Stack Developer',
  'Problem Solver',
  'Open to Opportunities',
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Scroll reveal
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Background decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/15 rounded-full blur-3xl float-delayed" />
        <div className="absolute top-1/2 left-[10%] float opacity-30">
          <Code2 size={28} className="text-primary" />
        </div>
        <div className="absolute top-1/3 right-[15%] float-delayed opacity-30">
          <Github size={24} className="text-secondary" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">

        {/* Avatar */}
        <div className="reveal opacity-0 mb-8">
          <div className="relative inline-block">
            {/* Animated rotating ring */}
            <div className="absolute inset-0 rounded-full animate-spin-slow opacity-60"
              style={{
                background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))',
                padding: '3px',
                borderRadius: '9999px',
              }}
            />
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary via-secondary to-primary p-[3px] relative z-10">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <img
                  src="/profile-photo.jpeg"
                  alt="Srashti Sharma"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-5xl md:text-6xl font-heading font-bold" style="background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary))); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">S</span>';
                    }
                  }}
                />
              </div>
            </div>
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10 animate-glow-pulse" />
          </div>
        </div>

        {/* Available badge */}
        <div className="reveal opacity-0 delay-100 mb-4 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for Opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="reveal opacity-0 delay-200 font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight">
          <span className="text-foreground">Srashti</span>{' '}
          <span className="gradient-text">Sharma</span>
        </h1>

        {/* Typing role */}
        <div className="reveal opacity-0 delay-300 mb-3 h-9 md:h-10 flex items-center justify-center">
          <span className="text-lg md:text-2xl font-heading font-semibold text-primary">
            {displayed}
            <span className="border-r-2 border-primary ml-0.5 animate-pulse">&nbsp;</span>
          </span>
        </div>

        {/* Subtext */}
        <p className="reveal opacity-0 delay-400 text-base md:text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
          CS Engineer (RGPV '26) specialising in <span className="text-primary font-medium">AI & Machine Learning</span>.
          Building intelligent solutions with clean code and thoughtful design.
        </p>

        {/* Quick links */}
        <div className="reveal opacity-0 delay-500 flex items-center justify-center gap-4 mb-8">
          <a
            href="https://github.com/Srashtisharma08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="https://www.linkedin.com/in/srashti-sharma-2388833a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href="mailto:sharmasrashti09@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            sharmasrashti09@gmail.com
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="reveal opacity-0 delay-600 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="neon"
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="group font-semibold"
          >
            <Code2 className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <a href="/resume.pdf" download="Srashti_Sharma_Resume.pdf">
            <Button
              variant="outline"
              size="lg"
              className="w-full border-primary/40 text-primary hover:bg-primary/10 hover:border-primary font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="reveal opacity-0 delay-700 absolute bottom-10 left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
