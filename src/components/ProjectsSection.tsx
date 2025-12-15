import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Sparkles, Glasses, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'DreamQuill',
    subtitle: 'AI-Powered Creative Writing Assistant',
    description: 'An intelligent writing companion that leverages advanced AI to help users craft compelling stories, articles, and creative content with real-time suggestions and style enhancement.',
    technologies: ['Python', 'TensorFlow', 'React', 'Streamlit', 'OpenAI API'],
    keyContributions: [
      'Developed the core AI writing engine using transformer-based models',
      'Implemented real-time text generation with context-aware suggestions',
      'Built an intuitive UI for seamless writing experience',
      'Integrated multiple writing styles and tone adjustments'
    ],
    learningOutcomes: [
      'Learned advanced NLP techniques and transformer architectures',
      'Gained experience in building production-ready AI applications',
      'Improved understanding of user-centric AI design'
    ],
    icon: Sparkles,
    githubUrl: '#',
    liveUrl: '#',
    gradient: 'from-primary to-secondary'
  },
  {
    title: 'MLens',
    subtitle: 'AR-based ML Learning System',
    description: 'An immersive augmented reality experience for learning machine learning concepts. Built with WebXR and Three.js for AR visualization, powered by TensorFlow backend for real-time ML algorithm visualization.',
    technologies: ['WebXR', 'Three.js', 'TensorFlow.js', 'React', 'WebGL'],
    keyContributions: [
      'Designed 3D visualization components for complex neural networks',
      'Integrated TensorFlow.js for in-browser model inference',
      'Optimized rendering pipeline for stable 60fps performance',
      'Created interactive tutorials for ML concepts in AR'
    ],
    learningOutcomes: [
      'Mastered WebXR standards and 3D web development',
      'Deepened knowledge of client-side machine learning limitations and optimizations',
      'Enhanced UX design skills for spatial computing interfaces'
    ],
    icon: Glasses,
    githubUrl: '#',
    liveUrl: '#',
    gradient: 'from-secondary to-neon-pink'
  },
  {
    title: 'Quantum-AI Verse',
    subtitle: 'Intelligent Multi-Agent System',
    description: 'A research-driven intelligent system featuring multi-agent architecture for complex problem solving. Combines ML-centric design principles with cutting-edge research methodologies.',
    technologies: ['Python', 'PyTorch', 'Ray', 'FastAPI', 'React'],
    keyContributions: [
      'Architected the multi-agent communication protocol',
      'Implemented reinforcement learning algorithms for agent coordination',
      'Designed the dashboard for real-time system monitoring',
      'Concealed complex backend logic behind a clean API'
    ],
    learningOutcomes: [
      'Advanced understanding of distributed AI systems',
      'Experience in scalable backend synthesis and microservices',
      'Practical application of multi-agent reinforcement learning'
    ],
    icon: Cpu,
    githubUrl: '#',
    liveUrl: '#',
    gradient: 'from-neon-pink to-primary'
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-1/3 h-96 bg-secondary/5 blur-3xl pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        {/* Projects Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card opacity-0 transform translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="group relative rounded-2xl bg-card/40 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative p-8 md:p-10">
                  {/* Header: Icon + Title + Actions */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div className="flex items-start gap-5">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10 flex-shrink-0 mt-1 shadow-lg shadow-primary/10`}>
                        <project.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-primary text-lg font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-primary/20 text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-primary/20 text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-muted-foreground leading-relaxed text-lg max-w-4xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-10">
                    <h4 className="text-sm uppercase tracking-wider font-semibold text-foreground/80 mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary-glow border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Lists: Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Contributions */}
                    <div>
                      <h4 className="font-heading text-lg font-bold text-foreground mb-4 border-l-4 border-primary pl-3">
                        Key Contributions
                      </h4>
                      <ul className="space-y-3">
                        {project.keyContributions.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="font-heading text-lg font-bold text-foreground mb-4 border-l-4 border-secondary pl-3">
                        Learning Outcomes
                      </h4>
                      <ul className="space-y-3">
                        {project.learningOutcomes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
