import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedElement, Card3D, ParallaxSection, Tilt3D } from '../../lib/animations';
import { ArrowRight } from 'lucide-react';

export default function HeroHeader() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 0.5], [0, -200]); // Enhanced parallax effect for background
  const y2 = useTransform(scrollYProgress, [0, 0.5], [0, -100]); // Slower parallax for content
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, -5]);

  // Animated gradient background
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setGradientPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Enhanced 3D parallax background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-neutral-50 to-indigo-50"
        style={{ 
          y: y1,
          backgroundPosition: `${gradientPosition.x * 100}% ${gradientPosition.y * 100}%`,
          backgroundSize: '200% 200%',
          scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
        }}
      />
      
      {/* Enhanced 3D decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{ 
          y: useTransform(scrollYProgress, [0, 0.5], [0, -250]),
          scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.2]),
          rotateZ: useTransform(scrollYProgress, [0, 0.5], [0, 5])
        }}
        className="absolute -bottom-16 -left-16 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        style={{ 
          y: useTransform(scrollYProgress, [0, 0.5], [0, -150]),
          scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.15]),
          rotateZ: useTransform(scrollYProgress, [0, 0.5], [0, -5])
        }}
        className="absolute -top-16 -right-16 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"
      />
      
      {/* Enhanced 3D floating abstract shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-400 rounded-full opacity-10 blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
          rotateZ: [0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          z: useTransform(scrollYProgress, [0, 0.5], [0, -50])
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-indigo-500 rounded-full opacity-10 blur-xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.3, 1],
          rotateZ: [0, -15, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{
          z: useTransform(scrollYProgress, [0, 0.5], [0, -30])
        }}
      />
      
      {/* Enhanced 3D content container with parallax */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32"
        style={{ 
          y: y2,
          opacity,
          scale,
          rotateX: rotate,
          transformPerspective: 1000,
          transformStyle: "preserve-3d"
        }}
      >
        <div className="text-center">
          {/* Enhanced 3D animated title */}
          <AnimatedElement delay={0.2}>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 mb-6"
              style={{
                transformStyle: "preserve-3d",
                z: useTransform(scrollYProgress, [0, 0.5], [0, 50])
              }}
            >
              HealthTech Operations Run Smoother<br className="hidden md:block" /> With Systems That Scale
            </motion.h1>
          </AnimatedElement>
          
          {/* Enhanced 3D animated subtitle */}
          <AnimatedElement delay={0.4}>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
              style={{
                transformStyle: "preserve-3d",
                z: useTransform(scrollYProgress, [0, 0.5], [0, 30])
              }}
            >
              We design and implement internal automations for growing HealthTech teams — with compliance and clarity from day one.
            </motion.p>
          </AnimatedElement>
          
          {/* Enhanced 3D animated CTA button */}
          <AnimatedElement delay={0.6}>
            <Tilt3D>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base md:text-lg font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg"
              >
                Request a Workflow Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Tilt3D>
          </AnimatedElement>
        </div>
      </motion.div>
      
      {/* Enhanced 3D bottom gradient fade */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"
        style={{
          y: useTransform(scrollYProgress, [0, 0.5], [0, -50])
        }}
      />
    </section>
  );
}
