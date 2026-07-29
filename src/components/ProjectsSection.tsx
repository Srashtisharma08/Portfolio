import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Sparkles, Glasses, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'DreamQuill',
    subtitle: 'AI-Powered Creative Writing Assistant',
    description: 'An intelligent writing companion that leverages advanced NLP and transformer models to help users craft compelling stories, articles, and creative content with real-time suggestions and style enhancement.',
    technologies: ['Python', 'TensorFlow', 'React', 'Streamlit', 'OpenAI API'],
    keyContributions: [
      'Developed the core AI writing engine using transformer-based models',
      'Implemented real-time text generation with context-aware suggestions',
      'Built an intuitive UI for seamless writing experience',
      'Integrated multiple writing styles and tone adjustments',
    ],
    learningOutcomes: [
      'Learned advanced NLP techniques and transformer architectures',
      'Gained experience in building production-ready software applications',
      'Improved understanding of user-centric web interface design',
    ],
    icon: Sparkles,
    githubUrl: 'https://github.com/Srashtisharma08/DreamQuill-1',
    liveUrl: null,
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'MLens',
    subtitle: 'AR-based ML Learning System',
    description: 'An immersive augmented reality web experience for learning machine learning concepts. Built with WebXR and Three.js for 3D visualization, powered by TensorFlow backend for real-time ML algorithm rendering.',
    technologies: ['WebXR', 'Three.js', 'TensorFlow.js', 'React', 'WebGL'],
    keyContributions: [
      'Designed 3D visualization components for complex neural networks',
      'Integrated TensorFlow.js for in-browser model inference',
      'Optimized rendering pipeline for stable 60fps performance',
      'Created interactive tutorials for ML concepts in AR',
    ],
    learningOutcomes: [
      'Mastered WebXR standards and 3D web development',
      'Deepened knowledge of client-side performance optimizations',
      'Enhanced UX design skills for spatial computing interfaces',
    ],
    icon: Glasses,
    githubUrl: 'https://github.com/Srashtisharma08',
    liveUrl: null,
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Quantum-AI Verse',
    subtitle: 'Intelligent Multi-Agent System',
    description: 'A research-driven intelligent system featuring multi-agent architecture for complex problem solving. Combines ML-centric design principles with scalable backend APIs and real-time dashboard analytics.',
    technologies: ['Python', 'PyTorch', 'Ray', 'FastAPI', 'React'],
    keyContributions: [
      'Architected the multi-agent communication protocol',
      'Implemented reinforcement learning algorithms for agent coordination',
      'Designed the dashboard for real-time system monitoring',
      'Concealed complex backend logic behind a clean REST API',
    ],
    learningOutcomes: [
      'Advanced understanding of distributed AI & backend systems',
      'Experience in scalable microservices architecture',
      'Practical application of multi-agent coordination',
    ],
    icon: Cpu,
    githubUrl: 'https://github.com/Srashtisharma08/Quantum-AI-Verse',
    liveUrl: null,
    gradient: 'from-indigo-600 to-sky-500',
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
    <section ref={sectionRef} id="projects" className="relative py-24 md:py-32 bg-slate-50/60 border-b border-slate-200/60">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-indigo-50/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-96 bg-purple-50/50 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-indigo-600 tracking-widest uppercase mb-2">What I've Built</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Featured <span className="gradient-text-blue">Projects</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Software engineering & full-stack applications built with modern tools and frameworks
          </p>
        </div>

        {/* Projects Cards */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card opacity-0 transform translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="group relative rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* Top gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

                <div className="relative p-7 md:p-10">
                  {/* Header: Icon + Title + Actions */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div className="flex items-start gap-5">
                      <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${project.gradient} text-white flex-shrink-0 mt-1 shadow-md`}>
                        <project.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-indigo-600 text-base font-semibold">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 flex-shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 border-slate-200 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-all font-semibold"
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </Button>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                        >
                          <Button
                            variant="default"
                            size="sm"
                            className="gap-2 bg-indigo-600 text-white hover:bg-indigo-700 transition-all font-semibold"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-slate-600 leading-relaxed text-base md:text-lg max-w-4xl font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100/80 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Lists: Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-4 border-t border-slate-100">
                    {/* Contributions */}
                    <div>
                      <h4 className="font-heading text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-4 rounded-full bg-indigo-600 inline-block" />
                        Key Contributions
                      </h4>
                      <ul className="space-y-2.5">
                        {project.keyContributions.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="font-heading text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-4 rounded-full bg-purple-600 inline-block" />
                        Learning Outcomes
                      </h4>
                      <ul className="space-y-2.5">
                        {project.learningOutcomes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
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

        {/* View all on GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Srashtisharma08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors group"
          >
            <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
            View all repositories on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
