import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedElement, Card3D, ParallaxSection, Tilt3D } from '../../lib/animations';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react'; // Import useRef

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
  const sectionRef = useRef(null); // Create a ref for the section
  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ['start end', 'end start'] // 0 when start of section hits end of viewport, 1 when end of section hits start of viewport
  });

  // Main content block parallax
  const yMain = useTransform(scrollYProgress, [0, 1], [100, -250]); // Starts lower, moves up significantly
  const opacityMain = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0, 1, 1, 0]); // Fade in at start, out at end
  const scaleMain = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]); // Subtle scale up
  const rotateXMain = useTransform(scrollYProgress, [0, 1], [5, -5]); // Subtle rotation

  // Background decorative divs parallax
  const yBlur1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scaleBlur1 = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const rotateZBlur1 = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const yBlur2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const scaleBlur2 = useTransform(scrollYProgress, [0, 1], [0.8, 1.15]);
  const rotateZBlur2 = useTransform(scrollYProgress, [0, 1], [0, -10]);
  
  // Parallax for individual cards - they move into place as they become visible
  const yCard = useTransform(scrollYProgress, [0.1, 0.5], [60, 0]); // Cards start lower and move up

  // Timeline line draw animation
  const scaleYLine = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]); // Line draws from 15% to 85% of section scroll

  return (
    <section ref={sectionRef} id="approach" className="min-h-screen w-full py-24 md:py-40 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Enhanced 3D animated background elements */}
      <ParallaxSection scrollYProgress={scrollYProgress} depth={200} className="absolute inset-0">
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"
          style={{ y: yBlur1, scale: scaleBlur1, rotateZ: rotateZBlur1 }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-indigo-100 rounded-full opacity-30 blur-3xl"
          style={{ y: yBlur2, scale: scaleBlur2, rotateZ: rotateZBlur2 }}
        />
      </ParallaxSection>
      
      <motion.div 
        className="max-w-7xl mx-auto relative z-10" 
        style={{ 
          y: yMain, 
          opacity: opacityMain,
          scale: scaleMain,
          rotateX: rotateXMain,
          transformPerspective: 1000, // Keep for rotateX
          transformStyle: "preserve-3d" // Keep for rotateX
        }}
      >
        <AnimatedElement>
          <div className="text-center mb-24">
            <motion.h2 
              className="text-4xl md:text-5xl font-sans font-bold text-gray-800 mb-8"
              // Removed direct scrollYProgress transforms, will inherit from parent motion.div or have own simple animation
            >
              You Don't Need More Tools. You Need Better Flow Between Them.
            </motion.h2>
            <motion.p 
              className="text-lg font-sans text-gray-700 leading-relaxed max-w-3xl mx-auto"
              // Removed direct scrollYProgress transforms
            >
              Our systematic approach connects your existing systems into seamless, compliant workflows.
            </motion.p>
          </div>
        </AnimatedElement>
        
        {/* Fixed timeline with proper alignment - improved centering of dots and lines */}
        <div className="relative">
          {/* Timeline line with proper alignment - centered with dots, now with scroll-triggered draw */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 transform -translate-x-1/2 origin-top"
            style={{
              scaleY: scaleYLine, // Apply the scroll-linked scaleY transform
              transformStyle: "preserve-3d"
            }}
          />
          
          {/* Timeline steps with improved alignment */}
          <div className="space-y-12 md:space-y-0 relative">
            {approachSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div // Added motion.div for card parallax
                  key={index} 
                  className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center md:mb-16"
                  style={{ y: yCard }} // Apply parallax to each card container
                >
                  {/* Timeline dot with improved alignment - exactly centered */}
                  <motion.div 
                    className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center">
                      <div // Changed inner motion.div to static div - removing the pulse
                        className="w-3 h-3 rounded-full bg-indigo-600"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Content with enhanced 3D - adjusted spacing for better alignment with dots */}
                  <AnimatedElement 
                    delay={0.2 * index}
                    className={`md:col-span-1 ${isEven ? 'md:text-right md:pr-16' : 'md:pl-16 md:order-2'}`}
                  >
                    <Card3D> {/* depth prop removed */}
                      <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg h-full"> {/* Existing shadow-lg will be initial, hover is defined in Card3D */}
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color} text-white mb-5 shadow-md ${isEven ? 'ml-auto' : ''}`}>
                          <span className="text-sm font-sans font-semibold">{step.number}</span>
                        </div>
                        <h3 className="text-xl font-sans font-semibold text-gray-800 mb-2">{step.title}</h3>
                        <p className="text-base font-sans text-gray-700 leading-relaxed">{step.description}</p>
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
