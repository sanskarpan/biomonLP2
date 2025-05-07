import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = BLOG_POSTS.find(post => post.slug === slug);
  
  useEffect(() => {
    // If post not found, navigate to blog list
    if (!post) {
      navigate('/blog');
      return;
    }
    
    // Update page title
    document.title = `${post.title} | Biomon Insights`;
  }, [post, navigate]);
  
  if (!post) return null;
  
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="pt-16">
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-muted/30 py-10">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Insights
              </Link>
              
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {post.title}
              </motion.h1>
              
              <motion.div 
                className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {formattedDate}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {post.readTime} read
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="w-full aspect-video rounded-xl overflow-hidden mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="prose prose-lg dark:prose-invert max-w-none mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="lead">
                {post.excerpt} This is extended content for the blog post. Since we don't have the full content, this is a placeholder text that would normally contain the full article.
              </p>
              
              <h2>Understanding the Importance of {post.title.split(' ').slice(-2).join(' ')}</h2>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <h3>Key Takeaways</h3>
              
              <ul>
                <li>Important point about {post.category} and its impact on health</li>
                <li>Research-backed insights related to {post.title.toLowerCase()}</li>
                <li>Practical strategies you can implement today</li>
                <li>How Biomon can help you track and optimize this aspect of your health</li>
              </ul>
              
              <blockquote>
                <p>
                  "The future of healthcare is personalized, proactive, and powered by data. When used correctly, your health data becomes your greatest asset for longevity and performance."
                </p>
              </blockquote>
              
              <h3>What This Means For You</h3>
              
              <p>
                By understanding and tracking these metrics, you can make informed decisions about your health and wellness journey. Biomon helps you connect these dots and see the bigger picture of your health.
              </p>
            </motion.div>
            
            <div className="flex items-center justify-between py-6 border-t">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
              
              <Button variant="outline" size="sm" asChild>
                <Link to="/contact">Join Biomon</Link>
              </Button>
            </div>
            
            <div className="mt-16">
              <h3 className="text-xl font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3).map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="aspect-video rounded-lg overflow-hidden mb-3">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-medium group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default BlogPost;