import { useEffect, useRef, useState } from 'react';
import { Trophy, Users, Award } from 'lucide-react';

const milestones = [
  {
    number: '01',
    title: 'Google Girls Hackathon',
    description: 'Participated in Google\'s prestigious hackathon for women in tech, developing innovative solutions and collaborating with talented developers.',
    icon: Trophy,
    year: '2024',
  },
  {
    number: '02',
    title: 'Walmart CodeHers',
    description: 'Competed in Walmart\'s coding competition focused on empowering women developers, showcasing problem-solving skills and technical expertise.',
    icon: Award,
    year: '2024',
  },
  {
    number: '03',
    title: 'Internal SIH Winner',
    description: 'Emerged victorious in the internal Smart India Hackathon round, demonstrating ability to create impactful solutions for real-world challenges.',
    icon: Trophy,
    year: '2023',
  },
  {
    number: '04',
    title: 'Community Engagement',
    description: 'Active contributor to GDG, WTM communities. Hosted multiple tech events and workshops, fostering learning and collaboration among developers.',
    icon: Users,
    year: 'Ongoing',
  },
];

const JourneySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !timelineRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - sectionTop) / (sectionHeight + windowHeight / 2), 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-left');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.milestone-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="journey" className="relative py-24 md:py-32 bg-slate-50/60 overflow-hidden border-b border-slate-200/60">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-indigo-600 tracking-widest uppercase mb-2">Milestones</p>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            My <span className="gradient-text-blue">Journey</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Key milestones and achievements that shaped my path as a software developer and innovator
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full">
            {/* Animated glow line */}
            <div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-300"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-12 md:space-y-20">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className={`milestone-card opacity-0 relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className={`bg-white border border-slate-200/80 shadow-sm p-6 rounded-2xl hover:shadow-md hover:border-indigo-200 transition-all duration-300 group ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  } max-w-md`}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                        <milestone.icon className="h-5 w-5 text-indigo-600" />
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">{milestone.year}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center pt-6 md:pt-8">
                  <div className="w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100 z-10" />
                </div>

                {/* Big number */}
                <div className={`hidden md:flex flex-1 items-center ${
                  index % 2 === 0 ? 'pl-16' : 'pr-16 justify-end'
                }`}>
                  <span className="font-heading text-7xl font-extrabold text-slate-200 select-none">
                    {milestone.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
