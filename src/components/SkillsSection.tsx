import { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    emoji: '💻',
    color: 'border-indigo-100 bg-white',
    badge: 'text-indigo-700 bg-indigo-50 border-indigo-100 hover:bg-indigo-100',
    skills: ['Python', 'JavaScript / TypeScript', 'Java', 'C / C++', 'SQL', 'HTML5 / CSS3'],
  },
  {
    title: 'Frameworks & Web Tech',
    emoji: '⚙️',
    color: 'border-purple-100 bg-white',
    badge: 'text-purple-700 bg-purple-50 border-purple-100 hover:bg-purple-100',
    skills: ['React', 'Node.js / Express', 'FastAPI / Django', 'Streamlit', 'TensorFlow / NumPy', 'RESTful APIs'],
  },
  {
    title: 'Tools, Testing & Cloud',
    emoji: '🛠️',
    color: 'border-sky-100 bg-white',
    badge: 'text-sky-700 bg-sky-50 border-sky-100 hover:bg-sky-100',
    skills: ['Git & GitHub', 'Software Testing / QA', 'Postman', 'Linux / Shell', 'Google Cloud Platform', 'Vercel'],
  },
];

const additionalCompetencies = [
  'Software Development Lifecycle (SDLC)',
  'Software Testing & Quality Assurance',
  'Full-Stack Web Development',
  'Python Development',
  'Agile & Scrum Methodologies',
  'Object-Oriented Programming (OOP)',
  'Data Structures & Algorithms',
  'Database Management (SQL & NoSQL)',
  'Operating Systems',
  'Computer Networks',
  'System Design & Architecture',
  'Problem Solving & Debugging',
  'Team Collaboration & Technical Communication',
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
    <section ref={sectionRef} id="skills" className="relative py-24 md:py-32 bg-slate-50/60 border-b border-slate-200/60">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-indigo-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal opacity-0">
          <p className="text-xs font-bold text-indigo-600 tracking-widest uppercase mb-2">What I Know</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            <span className="gradient-text-blue">Skills</span> & Technical Expertise
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            A comprehensive toolkit across software engineering, full-stack development, testing, and modern platforms
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto reveal mb-20">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`skill-card opacity-0 relative group rounded-2xl ${category.color} border border-slate-200/80 shadow-sm p-8 hover:shadow-md hover:border-indigo-200 transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <span className="text-2xl">{category.emoji}</span>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span key={skill} className={`tech-pill ${category.badge} border`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Competencies */}
        <div className="max-w-4xl mx-auto reveal opacity-0">
          <h3 className="text-center font-heading text-xl md:text-2xl font-bold mb-8 text-slate-900">
            Core Engineering Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-3.5">
            {additionalCompetencies.map((skill) => (
              <div
                key={skill}
                className="competency-pill opacity-0 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-medium hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-300 cursor-default"
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
