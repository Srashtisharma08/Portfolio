import { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    emoji: '💻',
    color: 'from-violet-500/20 to-violet-500/5 border-violet-500/30',
    badge: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    skills: ['Python', 'C / C++', 'Java', 'SQL', 'HTML / CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    emoji: '⚙️',
    color: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30',
    badge: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    skills: ['TensorFlow', 'React', 'Streamlit', 'NumPy'],
  },
  {
    title: 'Tools & Platforms',
    emoji: '🛠️',
    color: 'from-fuchsia-500/20 to-fuchsia-500/5 border-fuchsia-500/30',
    badge: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20',
    skills: ['Git & GitHub', 'Linux', 'Google Cloud Platform', 'Vercel'],
  },
];

const additionalCompetencies = [
  'SDLC',
  'Agile Methodology',
  'OOP Concepts',
  'Operating Systems',
  'Database Management',
  'Computer Networks',
  'Data Structures',
  'Algorithm Design',
  'System Design',
  'Problem Solving',
  'Critical Thinking',
  'Team Leadership',
  'Public Speaking',
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');

            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
                card.classList.remove('opacity-0');
              }, index * 120);
            });

            const pills = entry.target.querySelectorAll('.competency-pill');
            pills.forEach((pill, index) => {
              setTimeout(() => {
                pill.classList.add('animate-scale-in');
                pill.classList.remove('opacity-0');
              }, index * 50 + 500);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal opacity-0">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning programming languages, frameworks, and modern development platforms
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto reveal mb-20">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`skill-card opacity-0 relative group rounded-2xl bg-gradient-to-br ${category.color} border backdrop-blur-sm p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/5">
                <span className="text-2xl">{category.emoji}</span>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className={`tech-pill ${category.badge} border`}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Competencies */}
        <div className="max-w-4xl mx-auto reveal opacity-0">
          <h3 className="text-center font-heading text-xl md:text-2xl font-bold mb-8 text-foreground">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {additionalCompetencies.map((skill) => (
              <div
                key={skill}
                className="competency-pill opacity-0 px-4 py-2 rounded-full bg-card/60 border border-border/60 text-muted-foreground text-sm font-medium hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
