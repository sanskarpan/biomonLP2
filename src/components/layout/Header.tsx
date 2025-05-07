import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ModeToggle';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md py-2 shadow-md'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2"
          aria-label="Biomon Home"
        >
          <div className="relative z-10 h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">B</span>
          </div>
          <span className="font-bold text-xl">Biomon</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    'font-medium transition-colors hover:text-primary',
                    location.pathname === link.href ? 'text-primary' : 'text-foreground/80'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button variant="default" size="sm" asChild>
              <Link to="/contact">Join Beta</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-4">
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container py-4">
              <ul className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={cn(
                        'block py-2 font-medium transition-colors hover:text-primary',
                        location.pathname === link.href ? 'text-primary' : 'text-foreground/80'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Join Beta</Link>
                  </Button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;