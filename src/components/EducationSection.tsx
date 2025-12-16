
import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const educationData = [
    {
        type: 'university',
        degree: 'Bachelor of Technology (B.Tech) — Computer Science Engineering',
        institution: 'RGPV University',
        location: 'Bhopal, Madhya Pradesh',
        duration: '2022 – May 2026',
        score: 'CGPA: 6.89 / 10',
        highlights: [
            'Core CS fundamentals & advanced topics',
            'AI/ML specialization courses',
            'Software engineering practices',
            'System design & architecture'
        ]
    },
    {
        type: 'school',
        degree: '12th Standard (PCM)',
        institution: 'St. Arnold English Medium H.S. School',
        location: 'Meghnagar, MP',
        duration: 'July 2022',
        score: 'Grade: 65%',
        highlights: [
            'Strong mathematics foundation',
            'Physics & analytical thinking',
            'Problem-solving skills'
        ]
    },
    {
        type: 'school',
        degree: '10th Standard',
        institution: 'St. Arnold English Medium H.S. School',
        location: 'Meghnagar, MP',
        duration: 'July 2020',
        score: 'Grade: 73.4%',
        highlights: [
            'Academic excellence',
            'Leadership development',
            'Extracurricular participation'
        ]
    }
];

const EducationSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        entry.target.classList.remove('opacity-0');

                        const cards = entry.target.querySelectorAll('.education-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('animate-scale-in');
                                card.classList.remove('opacity-0');
                            }, index * 100);
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
        <section ref={sectionRef} id="education" className="relative py-24 md:py-32 bg-secondary/5">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 reveal opacity-0">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Education</span> Journey
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My academic path and qualifications
                    </p>
                </div>

                <div className="space-y-8 max-w-4xl mx-auto reveal opacity-0">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="education-card opacity-0 relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative bg-card border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                            <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-lg text-primary font-medium mt-1">
                                                {edu.institution}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-4 h-4 text-secondary" />
                                                <span>{edu.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4 text-secondary" />
                                                <span>{edu.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary">
                                                <Award className="w-4 h-4" />
                                                <span className="font-semibold">{edu.score}</span>
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t border-border/50">
                                            <p className="text-sm font-semibold text-muted-foreground mb-2">Key Highlights:</p>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {edu.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground/80">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                                        {highlight}
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

export default EducationSection;
