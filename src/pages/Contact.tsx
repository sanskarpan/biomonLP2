import { useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import FAQ from '@/components/contact/FAQ';
import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    // Update page title
    document.title = "Contact Us | Biomon";
  }, []);

  return (
    <div className="pt-16">
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about Biomon? Want to join our beta? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <ul className="space-y-6">
                  <motion.li 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a 
                        href="mailto:hello@biomon.health" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        hello@biomon.health
                      </a>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a 
                        href="tel:+18005551234" 
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +1 (800) 555-1234
                      </a>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <address className="text-muted-foreground not-italic">
                        123 Health Tech Way<br />
                        San Francisco, CA 94103
                      </address>
                    </div>
                  </motion.li>
                </ul>
              </div>
              
              <FAQ />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Join the Biomon Beta</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Early adopters get 3 months of premium access completely free. Spots are limited!
            </p>
            <div className="bg-card border rounded-xl p-8">
              <form className="max-w-md mx-auto">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-transparent border rounded-md"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 bg-transparent border rounded-md"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="device" className="block mb-2 text-sm font-medium">
                      Primary Wearable Device
                    </label>
                    <select
                      id="device"
                      className="w-full px-3 py-2 bg-transparent border rounded-md"
                      required
                    >
                      <option value="">Select your device</option>
                      <option value="apple">Apple Watch</option>
                      <option value="oura">Oura Ring</option>
                      <option value="fitbit">Fitbit</option>
                      <option value="garmin">Garmin</option>
                      <option value="whoop">Whoop</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-2 mt-4 font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Join the Waitlist
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;