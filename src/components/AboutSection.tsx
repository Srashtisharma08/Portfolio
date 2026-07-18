import { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '3', label: 'Certifications' },
  { value: '2', label: 'Hackathons' },
  { value: '2026', label: 'Graduated' },
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
    <section ref={sectionRef} id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal opacity-0">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo */}
          <div className="reveal opacity-0 delay-100 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl blur-lg opacity-40 group-hover:opacity-65 transition-opacity duration-500 animate-pulse-slow" />
              <div className="relative w-full h-full bg-card border border-border rounded-2xl overflow-hidden">
                <img
                  src="/profile-photo.jpeg"
                  alt="Srashti Sharma"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center');
                      parent.innerHTML = '<span class="font-heading text-7xl font-extrabold" style="background:linear-gradient(135deg,hsl(var(--primary)),hsl(var(--secondary)));-webkit-background-clip:text;-webkit-text-fill-color:transparent">S</span>';
                    }
                  }}
                />
              </div>
              {/* Decorative corner brackets */}
              <div className="absolute -top-4 -right-4 w-10 h-10 border-t-2 border-r-2 border-primary/70 rounded-tr-lg" />
              <div className="absolute -bottom-4 -left-4 w-10 h-10 border-b-2 border-l-2 border-secondary/70 rounded-bl-lg" />
            </div>
          </div>

          {/* Bio Content */}
          <div className="reveal opacity-0 delay-200">
            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a <span className="text-foreground font-medium">Computer Science Engineering Graduate</span> with a strong focus on{' '}
                <span className="text-primary font-medium">Software Development</span> and{' '}
                <span className="text-primary font-medium">Machine Learning</span>, backed by solid foundations in core CS subjects. I enjoy building meaningful technology by combining logical problem-solving, clean code practices, and thoughtful system design.
              </p>

              <p>
                Through academic projects, technical leadership, and hands-on development, I have gained experience working across the full development lifecycle — from idea and design to implementation and optimization. I am particularly drawn to learning-driven environments where innovation, collaboration, and real-world impact go hand in hand.
              </p>

              <p>
                I believe in continuous growth, clear communication, and taking ownership of challenges. My goal is to contribute to impactful projects while constantly improving as a developer, problem solver, and technology leader.
              </p>

              <div className="pt-2 flex gap-2 items-center text-foreground font-heading font-semibold">
                <Sparkles className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Let's build something amazing together!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="reveal opacity-0 delay-300 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card group">
              <span className="font-heading text-3xl md:text-4xl font-extrabold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground text-center font-medium">
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
