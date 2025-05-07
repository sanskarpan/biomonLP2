import { useState, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  speed?: number;
}

export function Card3D({
  children,
  className,
  depth = 10,
  speed = 500,
}: Card3DProps) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  // Setup spring animation for smoother movement
  const springConfig = { damping: 25, stiffness: 300 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  
  // Transform mouse position to rotation values
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !mouseEnter) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    // Get mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate normalized position (-1 to 1)
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (centerY - e.clientY) / (rect.height / 2);
    
    // Update rotation values
    rotateX.set(y * depth);
    rotateY.set(x * depth);
  };
  
  const handleMouseEnter = () => {
    setMouseEnter(true);
  };
  
  const handleMouseLeave = () => {
    setMouseEnter(false);
    rotateX.set(0);
    rotateY.set(0);
  };
  
  // Derived values for card and shine effect
  const transform = useTransform(
    [rotateX, rotateY],
    ([latestRotateX, latestRotateY]) =>
      `perspective(1000px) rotateX(${latestRotateX}deg) rotateY(${latestRotateY}deg)`
  );
  
  const glarePosition = {
    x: useTransform(rotateY, [-depth, depth], [-100, 100], { clamp: false }),
    y: useTransform(rotateX, [-depth, depth], [100, -100], { clamp: false }),
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-200",
        mouseEnter ? "z-10" : "z-0",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ transform }}
      transition={{ duration: speed / 1000 }}
    >
      {children}
      
      {/* Glare/shine effect */}
      {mouseEnter && (
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 pointer-events-none"
          style={{
            opacity: 0.15,
            backgroundPosition: `${glarePosition.x}% ${glarePosition.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}