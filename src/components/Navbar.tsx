import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm'
          : 'bg-white/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - Bold Name */}
        <a
          href="#home"
          className="font-heading text-lg md:text-xl font-extrabold text-slate-900 tracking-tight hover:text-indigo-600 transition-colors"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
        >
          Srashti Sharma
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`relative font-medium text-sm transition-colors duration-200 py-1 ${
                activeSection === link.href.substring(1)
                  ? 'text-indigo-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/srashti-sharma-2388833a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-all flex items-center justify-center"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100 hover:bg-indigo-100 transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-700 hover:text-indigo-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg mt-2 mx-4 rounded-2xl p-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`block py-2.5 px-4 rounded-xl font-medium text-sm transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'text-indigo-600 bg-indigo-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/srashti-sharma-2388833a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
