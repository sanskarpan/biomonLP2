import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AppleIcon, FitbitIcon, GarminIcon, OuraIcon } from '@/components/icons/DeviceIcons';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-background to-background/80 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient blur elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl opacity-20" />
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
              Now in Beta
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-orange-500"
          >
            Optimize Your Health with Data-Driven Insights
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            All your fitness metrics, labs, and health data – unified in one platform that tells you what your body needs.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" asChild>
              <Link to="/contact" className="group">
                Join the Biomon Beta 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/dashboard-preview">
                See the Dashboard
              </Link>
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-sm text-muted-foreground mb-4">
              Compatible with your favorite devices
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              <AppleIcon className="w-7 h-7" />
              <OuraIcon className="w-7 h-7" />
              <FitbitIcon className="w-7 h-7" />
              <GarminIcon className="w-7 h-7" />
              <span className="text-sm font-medium text-muted-foreground">+ More</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Hero wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-br from-background to-background overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto">
          <path
            fill="currentColor"
            fillOpacity="0.05"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,165.3C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;