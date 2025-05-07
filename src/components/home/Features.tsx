import { FEATURES } from '@/lib/constants';
import { motion } from 'framer-motion';
import { 
  Activity, 
  AlertTriangle, 
  Brain, 
  Lock, 
  MessageSquare, 
  Smartphone 
} from 'lucide-react';
import { Card3D } from '@/components/ui/card-3d';

const Features = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  // Map icons to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="h-6 w-6" />;
      case 'Brain':
        return <Brain className="h-6 w-6" />;
      case 'AlertTriangle':
        return <AlertTriangle className="h-6 w-6" />;
      case 'MessageSquare':
        return <MessageSquare className="h-6 w-6" />;
      case 'Lock':
        return <Lock className="h-6 w-6" />;
      case 'Smartphone':
        return <Smartphone className="h-6 w-6" />;
      default:
        return <Activity className="h-6 w-6" />;
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Your Complete Health Intelligence Platform
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Biomon connects your health data from multiple sources to deliver actionable insights and personalized recommendations.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {FEATURES.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <Card3D className="h-full">
                <div className="relative h-full bg-card border hover:border-primary/50 rounded-xl p-6 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                  
                  <div className="flex flex-col h-full">
                    <div className="mb-4 p-2 w-fit rounded-lg bg-primary/10 text-primary">
                      {getIcon(feature.icon)}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground flex-grow">{feature.description}</p>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;