import { ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// Enhanced 3D and parallax animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Enhanced 3D transform for depth
export const depthTransform = {
  hidden: { 
    opacity: 0, 
    y: 40,
    rotateX: 10,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// True parallax effect hook
export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Reusable animated element component with enhanced 3D
interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  variants?: any;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export function AnimatedElement({ 
  children, 
  className = "", 
  variants = fadeInUp, 
  delay = 0,
  threshold = 0.1,
  once = true
}: AnimatedElementProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: `-${threshold * 100}px` }}
      variants={variants}
      transition={{ 
        delay,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

// Hover element with enhanced 3D effect
interface HoverElementProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: any;
}

export function HoverElement({ 
  children, 
  className = "",
  hoverEffect = { 
    scale: 1.02, 
    y: -5,
    transition: { duration: 0.3 }
  }
}: HoverElementProps) {
  return (
    <motion.div
      className={className}
      whileHover={hoverEffect}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

// 3D Card component with depth and perspective
interface Card3DProps {
  children: ReactNode;
  className?: string;
  depth?: number;
}

export function Card3D({ 
  children, 
  className = "",
  depth = 30
}: Card3DProps) {
  return (
    <motion.div
      className={`${className} perspective-1000`}
      initial={{ rotateX: 5, rotateY: 0 }}
      whileHover={{ 
        rotateX: 0, 
        rotateY: 5, 
        z: depth,
        transition: { duration: 0.3 }
      }}
      style={{ 
        transformStyle: "preserve-3d",
        transformOrigin: "center center"
      }}
    >
      {children}
    </motion.div>
  );
}

// Realistic parallax section with depth
interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  baseVelocity?: number;
  depth?: number;
}

export function ParallaxSection({ 
  children, 
  className = "",
  baseVelocity = 0.05,
  depth = 100
}: ParallaxSectionProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, depth]);
  
  return (
    <motion.div
      className={`${className} relative overflow-hidden`}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
}

// 3D Tilt component for interactive elements
interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  tiltFactor?: number;
}

export function Tilt3D({ 
  children, 
  className = "",
  tiltFactor = 15
}: Tilt3DProps) {
  return (
    <motion.div
      className={`${className} cursor-pointer`}
      whileHover={{ scale: 1.02 }}
      style={{ transformStyle: "preserve-3d" }}
      whileTap={{ scale: 0.98 }}
      whileInView={{ 
        transition: { duration: 0.5 }
      }}
    >
      {children}
    </motion.div>
  );
}
