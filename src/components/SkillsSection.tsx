import { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      'Python',
      'C / C++',
      'Java',
      'SQL',
      'HTML / CSS'
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      'TensorFlow',
      'React',
      'Streamlit',
      'NumPy'
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Git & GitHub',
      'Linux',
      'Google Cloud Platform (GCP)',
      'Vercel'
    ]
  }
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
  'Public Speaking'
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

            // Stagger scale-in for individual cards
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
                card.classList.remove('opacity-0');
              }, index * 100);
            });

            // Stagger fade-in for pills
            const pills = entry.target.querySelectorAll('.competency-pill');
            pills.forEach((pill, index) => {
              setTimeout(() => {
                pill.classList.add('animate-scale-in');
                pill.classList.remove('opacity-0');
              }, index * 50 + 500); // Start after cards
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
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning programming languages, frameworks, and modern development tools
          </p>
        </div>

        {/* Skills Grid - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto reveal mb-20">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="skill-card opacity-0 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="font-heading text-xl font-bold mb-6 text-foreground border-b border-border/50 pb-4">
                {category.title}
              </h3>

              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <span className="w-2 h-2 rounded-full bg-primary/70 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                    <span className="text-base">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Competencies - Pill Layout */}
        <div className="max-w-4xl mx-auto reveal opacity-0">
          <h3 className="text-center font-heading text-xl md:text-2xl font-bold mb-8 text-foreground">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {additionalCompetencies.map((skill) => (
              <div
                key={skill}
                className="competency-pill opacity-0 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-foreground text-sm md:text-base font-medium hover:bg-secondary/20 hover:border-secondary/40 transition-all duration-300 cursor-default"
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
