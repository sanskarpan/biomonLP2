import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: 'Please enter your email address',
        variant: 'destructive',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: 'Success!',
        description: 'You\'ve been added to our early access list.',
        variant: 'default',
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl opacity-50" />
      
      <div className="container max-w-5xl relative z-10">
        <motion.div 
          className="p-8 md:p-12 lg:p-16 bg-card border rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Health?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Sign up now and get early access to Biomon Premium Free for 3 months.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="md:flex-1"
              required
            />
            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
              {isSubmitting ? (
                <>Processing<span className="ml-2 animate-spin">⟳</span></>
              ) : (
                <>
                  Join the Beta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Free 3-month premium access</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>No credit card required</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;