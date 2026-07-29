import { useEffect, useRef, useState } from 'react';
import { Mail, Github, Download, Send, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:sharmasrashti09@gmail.com?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
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
    <section ref={sectionRef} id="contact" className="relative py-24 md:py-32 bg-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-96 bg-indigo-50/60 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="reveal opacity-0 text-xs font-bold text-indigo-600 tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="reveal opacity-0 font-heading text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Let's <span className="gradient-text-blue">Connect</span>
          </h2>
          <p className="reveal opacity-0 delay-100 text-slate-600 max-w-2xl mx-auto text-base">
            Interested in collaborating or hiring for software engineering, full-stack, testing, or python roles? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="reveal opacity-0 delay-200 space-y-4">
            {/* Email Card */}
            <a
              href="mailto:sharmasrashti09@gmail.com"
              className="group flex items-center gap-4 p-5 bg-white border border-slate-200/80 shadow-sm rounded-2xl hover:border-indigo-300 hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-0.5">Email</p>
                <p className="text-slate-900 font-bold text-sm">sharmasrashti09@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/srashti-sharma-2388833a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-white border border-slate-200/80 shadow-sm rounded-2xl hover:border-indigo-300 hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-0.5">LinkedIn</p>
                <p className="text-slate-900 font-bold text-sm">Srashti Sharma</p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/Srashtisharma08"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-white border border-slate-200/80 shadow-sm rounded-2xl hover:border-indigo-300 hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-slate-100 text-slate-800 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors flex-shrink-0">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-0.5">GitHub</p>
                <p className="text-slate-900 font-bold text-sm">@Srashtisharma08</p>
              </div>
            </a>

            {/* Resume Download */}
            <a href="/resume.pdf" download="Srashti_Sharma_Resume.pdf" className="w-full block pt-2">
              <Button variant="neon" size="lg" className="w-full font-semibold rounded-xl">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Contact Form */}
          <div className="reveal opacity-0 delay-300">
            <form className="space-y-4 p-6 bg-white border border-slate-200/80 shadow-sm rounded-2xl" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-slate-900 text-sm placeholder:text-slate-400 font-medium"
                  placeholder="Recruiter or Hiring Manager"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-slate-900 text-sm placeholder:text-slate-400 font-medium"
                  placeholder="hiring@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none text-slate-900 text-sm placeholder:text-slate-400 font-medium"
                  placeholder="Tell me about the role or opportunity..."
                />
              </div>

              <Button type="submit" variant="neon" size="lg" className="w-full font-semibold rounded-xl">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="reveal opacity-0 delay-400 mt-20 pt-8 border-t border-slate-100 text-center">
          <div className="flex items-center justify-center gap-5 mb-4">
            <a
              href="mailto:sharmasrashti09@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all flex items-center justify-center"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/srashti-sharma-2388833a1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all flex items-center justify-center"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/Srashtisharma08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all flex items-center justify-center"
            >
              <Github size={16} />
            </a>
          </div>
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Srashti Sharma · Built with{' '}
            <span className="text-indigo-600">♥</span> and React
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
