import { useState, useEffect } from 'react';
import { TESTIMONIALS } from '@/lib/constants';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<any>(null);

  // Update the current index when the carousel changes
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Users Say
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hear from health optimizers who have transformed their wellness journey with Biomon
          </motion.p>
        </div>
        
        <Carousel
          className="w-full max-w-4xl mx-auto"
          setApi={setApi}
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="p-8 md:p-10 bg-card/50 backdrop-blur-sm border">
                  <div className="flex flex-col items-center text-center md:text-left md:items-start md:flex-row gap-6">
                    <div className="md:w-1/4 flex flex-col items-center md:items-start">
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4 relative">
                      <QuoteIcon className="absolute -top-6 -left-6 h-12 w-12 text-primary/10" />
                      <p className="text-lg italic relative z-10">{testimonial.quote}</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-primary w-6' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;