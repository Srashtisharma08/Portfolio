import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, Code2 } from 'lucide-react';
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl float-delayed" />
        
        {/* Floating icons */}
        <div className="absolute top-1/3 left-[15%] float opacity-40">
          <Code2 size={32} className="text-primary" />
        </div>
        <div className="absolute top-1/2 right-[20%] float-delayed opacity-40">
          <Sparkles size={28} className="text-secondary" />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Avatar */}
        <div className="reveal opacity-0 mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary via-secondary to-primary p-1 pulse-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <div className="text-5xl md:text-6xl font-heading font-bold gradient-text">
                  S
                </div>
              </div>
            </div>
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10 animate-glow-pulse" />
          </div>
        </div>

        {/* Name */}
        <h1 className="reveal opacity-0 delay-200 font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="text-foreground">Srashti</span>{' '}
          <span className="gradient-text">Sharma</span>
        </h1>

        {/* Headline */}
        <p className="reveal opacity-0 delay-300 text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          <span className="text-primary">Future Innovator</span> | Building Meaningful Tech |{' '}
          <span className="text-secondary">Developer</span> | Problem Solver
        </p>

        {/* Subtext */}
        <p className="reveal opacity-0 delay-400 text-base md:text-lg text-muted-foreground/80 mb-10 max-w-xl mx-auto">
          Crafting intelligent solutions through code, AI, and creative innovation
        </p>

        {/* CTA Buttons */}
        <div className="reveal opacity-0 delay-500 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="neon"
            size="lg"
            onClick={() => scrollToSection('skills')}
            className="group"
          >
            <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
            View Skills
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
          >
            <Code2 className="mr-2 h-5 w-5" />
            View Projects
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="reveal opacity-0 delay-700 absolute bottom-10 left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection('skills')}
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
