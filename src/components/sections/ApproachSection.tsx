import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedElement, Card3D, ParallaxSection, Tilt3D } from '../../lib/animations';
import { ArrowRight } from 'lucide-react';

const approachSteps = [
  {
    number: "01",
    title: "Workflow Discovery",
    description: "We map your current processes, identify bottlenecks, and document compliance requirements.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    number: "02",
    title: "System Design",
    description: "We architect automated workflows that integrate your existing tools with compliance built in.",
    color: "from-indigo-500 to-purple-600"
  },
  {
    number: "03",
    title: "Implementation",
    description: "We build and test each workflow component, ensuring seamless operation and proper documentation.",
    color: "from-purple-500 to-blue-600"
  },
  {
    number: "04",
    title: "Training & Handoff",
    description: "We train your team and provide comprehensive documentation for ongoing management.",
    color: "from-blue-600 to-indigo-700"
  }
];

export default function ApproachSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.3, 0.8], [0, -150]); // Enhanced parallax effect
  const opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.7, 0.8], [0, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0.3, 0.8], [1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0.3, 0.8], [0, -2]);
  
  return (
    <section id="approach" className="min-h-screen w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Enhanced 3D animated background elements */}
      <ParallaxSection baseVelocity={0.1} depth={300} className="absolute inset-0">
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"
          style={{ 
            scale: useTransform(scrollYProgress, [0.3, 0.8], [1, 1.2]),
            rotateZ: useTransform(scrollYProgress, [0.3, 0.8], [0, 15])
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-indigo-100 rounded-full opacity-30 blur-3xl"
          style={{ 
            scale: useTransform(scrollYProgress, [0.3, 0.8], [1, 1.15]),
            rotateZ: useTransform(scrollYProgress, [0.3, 0.8], [0, -10])
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
        <AnimatedElement>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-6"
              style={{
                transformStyle: "preserve-3d",
                z: useTransform(scrollYProgress, [0.3, 0.8], [0, 40])
              }}
            >
              You Don't Need More Tools. You Need Better Flow Between Them.
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{
                transformStyle: "preserve-3d",
                z: useTransform(scrollYProgress, [0.3, 0.8], [0, 20])
              }}
            >
              Our systematic approach connects your existing systems into seamless, compliant workflows.
            </motion.p>
          </div>
        </AnimatedElement>
        
        {/* Fixed timeline with proper alignment - improved centering of dots and lines */}
        <div className="relative">
          {/* Timeline line with proper alignment - centered with dots */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 transform -translate-x-1/2 origin-top"
            style={{
              transformStyle: "preserve-3d",
              z: useTransform(scrollYProgress, [0.3, 0.8], [0, 10])
            }}
          />
          
          {/* Timeline steps with improved alignment */}
          <div className="space-y-12 md:space-y-0 relative">
            {approachSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center md:mb-16">
                  {/* Timeline dot with improved alignment - exactly centered */}
                  <motion.div 
                    className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-indigo-600"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Content with enhanced 3D - adjusted spacing for better alignment with dots */}
                  <AnimatedElement 
                    delay={0.2 * index}
                    className={`md:col-span-1 ${isEven ? 'md:text-right md:pr-16' : 'md:pl-16 md:order-2'}`}
                  >
                    <Card3D depth={30}>
                      <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-md h-full">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color} text-white mb-4 shadow-md ${isEven ? 'ml-auto' : ''}`}>
                          <span className="text-sm font-mono font-bold">{step.number}</span>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </Card3D>
                  </AnimatedElement>
                  
                  {/* Empty space for timeline alignment */}
                  <div className={`hidden md:block md:col-span-1 ${!isEven && 'md:order-1'}`}></div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Enhanced 3D CTA Button */}
        <AnimatedElement delay={0.8} className="mt-16 text-center">
          <Tilt3D>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
            >
              Let's Scope a System Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Tilt3D>
        </AnimatedElement>
      </motion.div>
    </section>
  );
}
