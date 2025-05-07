import { TIMELINE_STEPS } from '@/lib/constants';
import { motion } from 'framer-motion';
import { 
  Activity,
  ArrowUpRight,
  Database,
  LineChart
} from 'lucide-react';

const HowItWorks = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Map icons to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="h-6 w-6" />;
      case 'LineChart':
        return <LineChart className="h-6 w-6" />;
      case 'ArrowUpRight':
        return <ArrowUpRight className="h-6 w-6" />;
      case 'Activity':
        return <Activity className="h-6 w-6" />;
      default:
        return <Database className="h-6 w-6" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How Biomon Works
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your journey to optimized health in four simple steps
          </motion.p>
        </div>
        
        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline connector */}
          <div className="absolute left-8 top-10 bottom-10 w-1 bg-gradient-to-b from-primary via-orange-500 to-pink-500 rounded-full hidden md:block"></div>
          
          {TIMELINE_STEPS.map((step) => (
            <motion.div 
              key={step.id} 
              className="mb-12 last:mb-0"
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-orange-500 text-primary-foreground relative z-10">
                    <span className="text-2xl font-bold">{step.id}</span>
                  </div>
                </div>
                
                <div className="flex-1 p-6 rounded-xl bg-card border">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {getIcon(step.icon)}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;