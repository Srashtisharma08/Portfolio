
import { useEffect, useRef } from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

const certifications = [
    {
        title: 'Machine Learning with Python',
        issuer: 'Coursera',
        description: 'Comprehensive course covering regression, classification, clustering, and recommender systems using Python and Scikit-learn.',
        icon: Award,
        color: 'from-blue-500 to-cyan-400'
    },
    {
        title: 'Generative AI',
        issuer: 'Google',
        description: 'Deep dive into generative models, LLMs, and prompt engineering principles offered by Google Cloud.',
        icon: Award,
        color: 'from-red-500 to-yellow-500' // Google colors hint
    },
    {
        title: 'Fundamentals of Machine Learning',
        issuer: 'Microsoft Learn',
        description: 'Foundational concepts of machine learning, model training, and evaluation using Azure Machine Learning.',
        icon: CheckCircle,
        color: 'from-blue-600 to-blue-400' // Microsoft blue hint
    }
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
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                        Certifications & <span className="gradient-text">Achievements</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Professional credentials and technical milestones
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="cert-card opacity-0 transform translate-y-8 transition-all duration-700"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="h-full relative group">
                                {/* Glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                                <div className="h-full relative bg-card border border-primary/10 hover:border-primary/30 rounded-2xl p-6 glass-hover transition-all duration-300 flex flex-col items-center text-center">

                                    {/* Icon */}
                                    <div className={`mb-6 p-4 rounded-full bg-gradient-to-br ${cert.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/5`}>
                                        <cert.icon className="h-8 w-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm font-semibold text-secondary mb-4 uppercase tracking-wide">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                        {cert.description}
                                    </p>

                                    {/* External Link (Optional - could be added if links exist) */}
                                    <button className="text-muted-foreground hover:text-white transition-colors">
                                        <ExternalLink className="h-5 w-5" />
                                    </button>

                                    {/* Decorative corner */}
                                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${cert.color} opacity-10 rounded-bl-full`} />
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



