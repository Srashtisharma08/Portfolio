import { useEffect, useRef } from 'react';
import { 
  Code, 
  Brain, 
  Wrench, 
  Sparkles,
  FileCode,
  Coffee,
  Terminal,
  Globe
} from 'lucide-react';

const skills = [
  { name: 'Programming', icon: Code, description: 'Clean & efficient code' },
  { name: 'ML & AI', icon: Brain, description: 'Intelligent systems' },
  { name: 'Tools', icon: Wrench, description: 'Dev environment mastery' },
  { name: 'AI Tools', icon: Sparkles, description: 'GPT, Claude & more' },
  { name: 'Python', icon: Terminal, description: 'Primary language' },
  { name: 'Java', icon: Coffee, description: 'Enterprise solutions' },
  { name: 'C/C++', icon: FileCode, description: 'Low-level programming' },
  { name: 'HTML/CSS', icon: Globe, description: 'Web fundamentals' },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit spanning programming languages, AI/ML technologies, and modern development tools
          </p>
        </div>

        {/* Skills Grid - Hexagonal Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card opacity-0 group relative"
            >
              <div className="aspect-square relative">
                {/* Hexagon background */}
                <div className="hexagon absolute inset-0 bg-card/50 border border-border/50 transition-all duration-300 group-hover:bg-card group-hover:border-primary/50" />
                
                {/* Glow effect on hover */}
                <div className="hexagon absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 neon-glow" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                  <div className="p-3 rounded-xl bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-6 w-6 md:h-8 md:w-8 text-primary group-hover:text-primary-glow transition-colors" />
                  </div>
                  <h3 className="font-heading text-sm md:text-base font-semibold text-foreground mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-muted-foreground hidden md:block">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default SkillsSection;
