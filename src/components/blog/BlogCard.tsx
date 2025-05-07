import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import type { BlogPostType } from '@/lib/types';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPostType;
  className?: string;
}

const BlogCard = ({ post, className }: BlogCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/blog/${post.slug}`}>
        <Card className={cn("overflow-hidden group h-full", className)}>
          <div className="aspect-video overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="outline" className="text-xs">
                {post.category}
              </Badge>
              <span className="text-xs text-muted-foreground">{formattedDate}</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            
            <p className="text-muted-foreground mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{post.readTime} read</span>
              <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-medium">
                Read Article
                <ArrowUpRight className="h-3 w-3" />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default BlogCard;