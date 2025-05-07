import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SITE_CONFIG } from '@/lib/constants';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative z-10 h-8 w-8 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-base">B</span>
              </div>
              <span className="font-bold text-lg">Biomon</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              All your fitness metrics, labs, and health data – unified in one platform that tells you what your body needs.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/dashboard-preview" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/hipaa" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  HIPAA Compliance
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest updates and health insights.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Biomon. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Not medical advice. For health optimization only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;