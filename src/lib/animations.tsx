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
  // depth prop is removed as the 3D z-transform is removed
}

export function Card3D({ 
  children, 
  className = ""
  // depth = 30 // No longer used
}: Card3DProps) {
  return (
    <motion.div
      className={`${className}`} // perspective-1000 removed
      initial={{ 
        scale: 1, 
        y: 0, 
        boxShadow: "0px 5px 15px rgba(0,0,0,0.08)" // Default subtle shadow
      }}
      whileHover={{ 
        scale: 1.03, 
        y: -5,       // Slight lift
        boxShadow: "0px 12px 25px rgba(0,0,0,0.12)", // Enhanced shadow on hover
        transition: { duration: 0.2, ease: "circOut" }
      }}
      style={{ 
        transformOrigin: "center center" // Keep for scale transform
        // transformStyle: "preserve-3d" removed
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
  // baseVelocity prop removed as it was unused
  depth?: number;
  scrollYProgress?: MotionValue<number>; // Allow passing scrollYProgress
}

export function ParallaxSection({ 
  children, 
  className = "",
  // baseVelocity = 0.05, // Removed
  depth = 100,
  scrollYProgress // Accept as a prop
}: ParallaxSectionProps) {
  // Use provided scrollYProgress or create an internal one if not provided
  const internalScrollHook = useScroll(); // Renamed to avoid conflict
  const effectiveScrollYProgress = scrollYProgress || internalScrollHook.scrollYProgress;
  
  const y = useTransform(effectiveScrollYProgress, [0, 1], [0, depth]);
  
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
