import { useEffect, useRef } from 'react';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'Machine Learning with Python',
    issuer: 'Coursera',
    issuerLogo: '📘',
    description: 'Comprehensive course covering regression, classification, clustering, and recommender systems using Python and Scikit-learn.',
    icon: Award,
    color: 'from-blue-500 to-indigo-600',
    badgeColor: 'bg-blue-50 border-blue-100 text-blue-700',
  },
  {
    title: 'Generative AI',
    issuer: 'Google',
    issuerLogo: '🔵',
    description: 'Deep dive into generative models, LLMs, and prompt engineering principles offered by Google Cloud.',
    icon: Award,
    color: 'from-purple-500 to-indigo-600',
    badgeColor: 'bg-purple-50 border-purple-100 text-purple-700',
  },
  {
    title: 'Fundamentals of Machine Learning',
    issuer: 'Microsoft Learn',
    issuerLogo: '🟦',
    description: 'Foundational concepts of machine learning, model training, and evaluation using Azure Machine Learning.',
    icon: CheckCircle,
    color: 'from-sky-500 to-blue-600',
    badgeColor: 'bg-sky-50 border-sky-100 text-sky-700',
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
    <section ref={sectionRef} id="certifications" className="relative py-20 md:py-32 bg-white overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-indigo-600 tracking-widest uppercase mb-2">Credentials</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Certifications & <span className="gradient-text-blue">Achievements</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
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
                <div className="h-full relative bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex flex-col">
                  {/* Issuer badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${cert.badgeColor}`}>
                      {cert.issuer}
                    </span>
                    <span className="text-xl">{cert.issuerLogo}</span>
                  </div>

                  {/* Icon */}
                  <div className={`mb-4 w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${cert.color} text-white shadow-md`}>
                    <cert.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {cert.description}
                  </p>
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
