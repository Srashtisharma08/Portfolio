import { useEffect, useRef } from 'react';
import { User, Sparkles } from 'lucide-react';

const AboutSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = sectionRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="relative py-24 md:py-32 overflow-hidden bg-background/50">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 reveal opacity-0">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Photo Placeholder */}
                    <div className="reveal opacity-0 delay-100 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse-slow" />
                            <div className="relative w-full h-full bg-card border border-border rounded-2xl overflow-hidden flex items-center justify-center">
                                {/* Placeholder Content */}
                                <div className="text-center p-6">
                                    <User className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">Add your photo here</p>
                                    <p className="text-xs text-muted-foreground/50 mt-2">(Replace with actual image)</p>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-primary rounded-tr-lg" />
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-secondary rounded-bl-lg" />
                        </div>
                    </div>

                    {/* Bio Content */}
                    <div className="reveal opacity-0 delay-200">
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I am a Computer Science Engineering student with a strong focus on <span className="text-primary font-medium">Artificial Intelligence</span> and <span className="text-primary font-medium">Machine Learning</span>, backed by solid foundations in core computer science subjects. I enjoy building meaningful technology by combining logical problem-solving, clean code practices, and thoughtful system design.
                            </p>

                            <p>
                                Through academic projects, technical leadership, and hands-on development, I have gained experience working across the full development lifecycle — from idea and design to implementation and optimization. I am particularly interested in learning-driven environments where innovation, collaboration, and impact go hand in hand.
                            </p>

                            <p>
                                I believe in continuous growth, clear communication, and taking ownership of challenges. My goal is to contribute to impactful projects while constantly improving as a developer, problem solver, and technology leader.
                            </p>

                            <div className="pt-4 flex gap-2 items-center text-foreground font-heading font-semibold">
                                <Sparkles className="w-5 h-5 text-secondary" />
                                <span>Let's build something amazing together!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
