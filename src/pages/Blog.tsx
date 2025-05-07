import { useEffect } from 'react';
import { BLOG_POSTS } from '@/lib/constants';
import BlogCard from '@/components/blog/BlogCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    // Update page title
    document.title = "Insights | Biomon";
  }, []);

  const categories = [...new Set(BLOG_POSTS.map(post => post.category))];

  return (
    <div className="pt-16">
      <section className="bg-muted/30 py-16">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">Biomon Insights</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert articles on health optimization, biodata, and personalized wellness
            </p>
            
            <div className="flex items-center gap-2 max-w-lg mx-auto">
              <Input placeholder="Search articles..." className="bg-background" />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <Button variant="outline" size="sm" className="rounded-full">
              All
            </Button>
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant="ghost" 
                size="sm" 
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest health insights and Biomon updates delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background flex-1"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;