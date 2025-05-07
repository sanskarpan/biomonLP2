import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PhoneIcon, MailIcon, MapPinIcon, BrainIcon, HeartPulseIcon, LightbulbIcon } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Update page title
    document.title = "About Biomon | Personal Health Intelligence";
  }, []);

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

  return (
    <div className="pt-16">
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              About Biomon
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-10"
              variants={itemVariants}
            >
              Creating the check engine light for the human body
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Biomon, we're on a mission to make proactive health mainstream by giving people
                clear, actionable insights from their health data.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that by unifying data from wearables, lab tests, and other sources,
                we can help people better understand their bodies and make informed decisions about
                their health before problems arise.
              </p>
              <p className="text-lg text-muted-foreground">
                Our platform acts as a personal health intelligence system that learns from your data
                and provides personalized recommendations to optimize your wellbeing.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-4 bg-background border rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">1,000+</h3>
                <p className="text-muted-foreground">Beta waitlist signups</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-card border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-3 bg-primary/10 w-fit rounded-lg mb-4">
                <HeartPulseIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User-Centered Health</h3>
              <p className="text-muted-foreground">
                We put users in control of their health data and decisions, providing guidance without being prescriptive.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-card border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-3 bg-primary/10 w-fit rounded-lg mb-4">
                <BrainIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Evidence-Based Approach</h3>
              <p className="text-muted-foreground">
                We combine cutting-edge research with personalized data analysis to deliver insights that are scientifically sound.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-card border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-3 bg-primary/10 w-fit rounded-lg mb-4">
                <LightbulbIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Improvement</h3>
              <p className="text-muted-foreground">
                We're constantly learning and improving our algorithms and recommendations based on new research and user feedback.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Team</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Biomon was founded by a team of health tech innovators, data scientists, and wellness 
                experts who saw a gap in how health data was being utilized. 
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our diverse team combines expertise in artificial intelligence, medicine, nutrition, 
                fitness, and user experience design to create a platform that's both powerful and 
                accessible.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We're backed by leading investors in health technology and advised by experts in 
                preventive medicine, biohacking, and personalized health.
              </p>
              
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact">Join Our Team</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100" 
                        alt="Sarah Chen" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Chen</h4>
                      <p className="text-sm text-muted-foreground">CEO & Co-founder</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Former health tech executive with expertise in AI and preventive medicine.
                  </p>
                </div>
                
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100" 
                        alt="Michael Torres" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Michael Torres</h4>
                      <p className="text-sm text-muted-foreground">CTO & Co-founder</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Data scientist with background in biomedical engineering and machine learning.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100" 
                        alt="Alex Williams" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Alex Williams</h4>
                      <p className="text-sm text-muted-foreground">Head of Product</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Former product lead at a major wearable company with expertise in UX design.
                  </p>
                </div>
                
                <div className="bg-card border rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100" 
                        alt="Layla Johnson" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Layla Johnson</h4>
                      <p className="text-sm text-muted-foreground">Chief Medical Officer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Board-certified physician with specialization in integrative and functional medicine.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about Biomon? We'd love to hear from you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-6 bg-card border rounded-xl">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <MailIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">hello@biomon.health</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-card border rounded-xl">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+1 (800) 555-1234</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-card border rounded-xl">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
            
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;