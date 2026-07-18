import { useEffect, useRef, useState } from 'react';
import { Mail, Github, Download, Send, Linkedin, MapPin } from 'lucide-react';
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
    <section ref={sectionRef} id="contact" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="reveal opacity-0 text-sm font-semibold text-primary tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="reveal opacity-0 font-heading text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="reveal opacity-0 delay-100 text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or have an opportunity in mind? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="reveal opacity-0 delay-200 space-y-4">
            {/* Email Card */}
            <a
              href="mailto:sharmasrashti09@gmail.com"
              className="group flex items-center gap-4 p-5 glass rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                <p className="text-foreground font-medium text-sm">sharmasrashti09@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/srashti-sharma-2388833a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 glass rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                <Linkedin className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">LinkedIn</p>
                <p className="text-foreground font-medium text-sm">Srashti Sharma</p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/Srashtisharma08"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 glass rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Github className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">GitHub</p>
                <p className="text-foreground font-medium text-sm">@Srashtisharma08</p>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-5 glass rounded-2xl">
              <div className="p-3 rounded-xl bg-secondary/10 flex-shrink-0">
                <MapPin className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                <p className="text-foreground font-medium text-sm">Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>

            {/* Resume Download */}
            <a href="/resume.pdf" download="Srashti_Sharma_Resume.pdf" className="w-full block">
              <Button variant="neon" size="lg" className="w-full font-semibold">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Contact Form */}
          <div className="reveal opacity-0 delay-300">
            <form className="space-y-4 p-6 glass rounded-2xl" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground text-sm placeholder:text-muted-foreground/50"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground text-sm placeholder:text-muted-foreground/50"
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none text-foreground text-sm placeholder:text-muted-foreground/50"
                  placeholder="Tell me about the opportunity or project..."
                />
              </div>

              <Button type="submit" variant="neon" size="lg" className="w-full font-semibold">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="reveal opacity-0 delay-400 mt-20 pt-8 border-t border-border/40 text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <a
              href="mailto:sharmasrashti09@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/srashti-sharma-2388833a1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Srashtisharma08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Srashti Sharma · Built with{' '}
            <span className="text-primary">♥</span> and React
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
