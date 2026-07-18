import { useEffect, useRef } from 'react';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'Machine Learning with Python',
    issuer: 'Coursera',
    issuerLogo: '📘',
    description: 'Comprehensive course covering regression, classification, clustering, and recommender systems using Python and Scikit-learn.',
    icon: Award,
    color: 'from-blue-500 to-cyan-400',
    badgeColor: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  },
  {
    title: 'Generative AI',
    issuer: 'Google',
    issuerLogo: '🔵',
    description: 'Deep dive into generative models, LLMs, and prompt engineering principles offered by Google Cloud.',
    icon: Award,
    color: 'from-red-500 to-yellow-400',
    badgeColor: 'bg-red-500/10 border-red-500/20 text-red-400',
  },
  {
    title: 'Fundamentals of Machine Learning',
    issuer: 'Microsoft Learn',
    issuerLogo: '🟦',
    description: 'Foundational concepts of machine learning, model training, and evaluation using Azure Machine Learning.',
    icon: CheckCircle,
    color: 'from-blue-600 to-blue-400',
    badgeColor: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
  },
];

const CertificationsSection = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.cert-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional credentials and technical milestones from industry-leading platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card opacity-0 transform translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-full relative group">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500 rounded-2xl`} />

                <div className="h-full relative bg-card border border-primary/10 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 flex flex-col">
                  {/* Issuer badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${cert.badgeColor}`}>
                      {cert.issuer}
                    </span>
                    <span className="text-xl">{cert.issuerLogo}</span>
                  </div>

                  {/* Icon */}
                  <div className={`mb-5 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${cert.color} shadow-lg`}>
                    <cert.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {cert.description}
                  </p>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-14 h-14 bg-gradient-to-bl ${cert.color} opacity-8 rounded-bl-full rounded-tr-2xl`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
