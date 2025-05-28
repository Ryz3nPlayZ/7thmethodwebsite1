import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedElement, Card3D, ParallaxSection, Tilt3D } from '../../lib/animations';

export default function AboutSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.4, 0.9], [0, -150]); // Enhanced parallax effect
  const opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.8, 0.9], [0, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0.4, 0.9], [1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0.4, 0.9], [0, -2]);

  return (
    <section id="about" className="min-h-screen w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Enhanced 3D animated background elements */}
      <ParallaxSection baseVelocity={0.12} depth={350} className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 right-0 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"
          style={{ 
            scale: useTransform(scrollYProgress, [0.4, 0.9], [1, 1.25]),
            rotateZ: useTransform(scrollYProgress, [0.4, 0.9], [0, 20])
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl"
          style={{ 
            scale: useTransform(scrollYProgress, [0.4, 0.9], [1, 1.2]),
            rotateZ: useTransform(scrollYProgress, [0.4, 0.9], [0, -15])
          }}
        />
      </ParallaxSection>
      
      <motion.div 
        className="max-w-7xl mx-auto relative z-10" 
        style={{ 
          y, 
          opacity,
          scale,
          rotateX: rotate,
          transformPerspective: 1000,
          transformStyle: "preserve-3d"
        }}
      >
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
          {/* About content with enhanced 3D */}
          <AnimatedElement className="mb-12 md:mb-0">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-6"
              style={{
                transformStyle: "preserve-3d",
                z: useTransform(scrollYProgress, [0.4, 0.9], [0, 40])
              }}
            >
              About 7th Method
            </motion.h2>
            <motion.div 
              className="prose prose-lg text-gray-600"
              style={{
                transformStyle: "preserve-3d",
                z: useTransform(scrollYProgress, [0.4, 0.9], [0, 20])
              }}
            >
              <p className="mb-4">
                We're workflow architects for fast-moving HealthTech teams. If you're scaling and your ops still rely on Slack and spreadsheets — we help replace duct tape with structure.
              </p>
              <p className="mb-4">
                Founded by operations leaders with deep experience in healthcare compliance and automation, we understand the unique challenges of scaling operations in regulated environments.
              </p>
              <p>
                Our team specializes in creating seamless, compliant workflows that connect your existing tools and systems, allowing your team to focus on what matters most: delivering exceptional care.
              </p>
            </motion.div>
          </AnimatedElement>
          
          {/* Enhanced 3D abstract visualization */}
          <AnimatedElement delay={0.3}>
            <Card3D depth={60}>
              <motion.div 
                className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                  z: useTransform(scrollYProgress, [0.4, 0.9], [0, 30])
                }}
              >
                {/* Enhanced 3D animated gradient background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600"
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    repeatType: 'reverse',
                    ease: "linear"
                  }}
                  style={{ 
                    backgroundSize: '200% 200%',
                    transformStyle: "preserve-3d"
                  }}
                />
                
                {/* Enhanced 3D floating abstract elements */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white opacity-20"
                  animate={{ 
                    y: [0, -30, 0],
                    x: [0, 15, 0],
                    scale: [1, 1.2, 1],
                    rotateZ: [0, 15, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    z: 10
                  }}
                />
                <motion.div 
                  className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-white opacity-10"
                  animate={{ 
                    y: [0, 30, 0],
                    x: [0, -20, 0],
                    scale: [1, 1.3, 1],
                    rotateZ: [0, -20, 0]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    z: 20
                  }}
                />
                <motion.div 
                  className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-white opacity-15"
                  animate={{ 
                    y: [0, 20, 0],
                    x: [0, 25, 0],
                    scale: [1, 1.15, 1],
                    rotateZ: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    z: 30
                  }}
                />
                
                {/* Enhanced 3D connecting lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    d="M100,100 C150,150 200,50 250,150 S350,250 400,150" 
                    stroke="rgba(255,255,255,0.3)" 
                    strokeWidth="2" 
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.path 
                    d="M150,300 C200,250 250,350 300,250 S350,150 400,250" 
                    stroke="rgba(255,255,255,0.3)" 
                    strokeWidth="2" 
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </svg>
                
                {/* Enhanced 3D text overlay */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transformStyle: "preserve-3d",
                    z: 40
                  }}
                >
                  <div className="text-center text-white p-6 backdrop-blur-sm bg-black/10 rounded-lg">
                    <h3 className="text-2xl font-medium mb-2">Workflow Architecture</h3>
                    <p className="text-sm opacity-80">Building connected systems that scale with your organization</p>
                  </div>
                </motion.div>
              </motion.div>
            </Card3D>
          </AnimatedElement>
        </div>
      </motion.div>
    </section>
  );
}
