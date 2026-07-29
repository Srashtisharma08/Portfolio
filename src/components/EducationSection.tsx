import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [ 
    {
        type: 'university',
        degree: 'Bachelor of Technology (B.Tech) — Computer Science Engineering',
        institution: 'RGPV University',
        duration: '2022 – 2026 (Graduated)',
        score: 'CGPA: 7.96 / 10',
        highlights: [
            'Core Software Engineering & CS Fundamentals',
            'Full-Stack & Web Development Practices',
            'Software Testing, QA & Debugging Methods',
            'Database Systems, Algorithms & AI/ML'
        ]
    },
    {
        type: 'school',
        degree: '12th Standard (PCM)',
        institution: 'St. Arnold English Medium H.S. School',
        duration: '2022',
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
        duration: '2020',
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
        <section ref={sectionRef} id="education" className="relative py-24 md:py-32 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 reveal opacity-0">
                    <p className="text-xs font-bold text-indigo-600 tracking-widest uppercase mb-2">Academic Background</p>
                    <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        <span className="gradient-text-blue">Education</span> Journey
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        My academic qualifications and formal engineering education
                    </p>
                </div>

                <div className="space-y-8 max-w-4xl mx-auto reveal opacity-0">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="education-card opacity-0 relative group"
                        >
                            <div className="relative bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300">
                                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                                            <GraduationCap className="w-6 h-6 md:w-7 md:h-7" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-base text-indigo-600 font-semibold mt-1">
                                                {edu.institution}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                            <div className="flex items-center gap-1.5 font-medium">
                                                <Calendar className="w-4 h-4 text-indigo-500" />
                                                <span>{edu.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                                                <Award className="w-4 h-4 text-indigo-600" />
                                                <span className="font-bold">{edu.score}</span>
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t border-slate-100">
                                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">Key Focus Areas:</p>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {edu.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
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
