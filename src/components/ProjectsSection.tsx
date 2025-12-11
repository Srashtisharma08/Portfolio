import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Sparkles, Glasses, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    number: '01',
    title: 'DreamQuill',
    subtitle: 'AI Story Generation Platform',
    description: 'An intelligent storytelling platform that brings narratives to life through advanced AI. Features GPT-2 & LLaMA-3 fine-tuning for text generation, BLIP-2 + Stable Diffusion for comic creation, and a Flask API for seamless text-to-image transformation.',
    tags: ['GPT-2', 'LLaMA-3', 'Stable Diffusion', 'Flask', 'BLIP-2'],
    icon: Sparkles,
    gradient: 'from-primary to-secondary',
  },
  {
    number: '02',
    title: 'MLens',
    subtitle: 'AR-based ML Learning System',
    description: 'An immersive augmented reality experience for learning machine learning concepts. Built with WebXR and Three.js for AR visualization, powered by TensorFlow backend for real-time ML algorithm visualization and interactive demonstrations.',
    tags: ['WebXR', 'Three.js', 'TensorFlow', 'AR', 'Real-time'],
    icon: Glasses,
    gradient: 'from-secondary to-neon-pink',
  },
  {
    number: '03',
    title: 'Quantum-AI Verse',
    subtitle: 'Intelligent Multi-Agent System',
    description: 'A research-driven intelligent system featuring multi-agent architecture for complex problem solving. Combines ML-centric design principles with cutting-edge research methodologies for professional-grade AI solutions.',
    tags: ['Multi-Agent', 'ML Design', 'Research', 'AI Systems'],
    icon: Cpu,
    gradient: 'from-neon-pink to-primary',
  },
];

const ProjectsSection = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.project-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative py-24 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-96 bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining AI, machine learning, and creative technology
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12 md:space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card opacity-0 relative"
            >
              <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
                {/* Number */}
                <div className="hidden md:block absolute -left-8 top-0">
                  <span className={`font-heading text-8xl font-bold bg-gradient-to-b ${project.gradient} bg-clip-text text-transparent opacity-20`}>
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className={`md:hidden font-heading text-4xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.number}
                    </span>
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient}`}>
                      <project.icon className="h-6 w-6 text-background" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary text-lg font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Visual placeholder */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className="relative aspect-video rounded-2xl bg-card border border-border/50 overflow-hidden glass-hover">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <project.icon className="h-16 w-16 text-muted-foreground/30" />
                      </div>
                      {/* Animated code lines */}
                      <div className="absolute inset-4 opacity-20">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="h-2 rounded mb-2"
                            style={{
                              width: `${Math.random() * 40 + 40}%`,
                              background: `linear-gradient(90deg, hsl(var(--primary) / 0.5), transparent)`,
                              animationDelay: `${i * 0.2}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              {index < projects.length - 1 && (
                <div className="mt-12 md:mt-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
