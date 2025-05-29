import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedElement, Card3D, ParallaxSection } from '../../lib/animations'; // Tilt3D removed

const capabilities = [
  {
    title: "Provider Onboarding Automation",
    description: "Streamline credentialing and system access with compliant, automated workflows.",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Cross-System Data Synchronization",
    description: "Keep patient, provider, and operational data in sync across your tech stack.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Document Generation & Management",
    description: "Automate creation and routing of contracts, reports, and compliance documentation.",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Operational Alerts & Monitoring",
    description: "Build intelligent notification systems that route issues to the right teams.",
    color: "from-blue-600 to-indigo-700"
  },
  {
    title: "Compliance Documentation Automation",
    description: "Generate audit-ready documentation and maintain compliance records automatically.",
    color: "from-indigo-600 to-purple-700"
  },
  {
    title: "Custom Reporting Workflows",
    description: "Automate data collection and reporting across departments and systems.",
    color: "from-purple-600 to-blue-700"
  }
];

export default function CapabilitiesSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.1, 0.6], [0, -150]); // Enhanced parallax effect
  const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.5, 0.6], [0, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0.1, 0.6], [1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.6], [0, -2]);

  return (
    <section id="capabilities" className="min-h-screen w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Enhanced 3D background elements */}
      <ParallaxSection depth={200} className="absolute inset-0"> {/* baseVelocity prop removed */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"
          style={{ 
            scale: useTransform(scrollYProgress, [0.1, 0.6], [1, 1.2]),
            rotateZ: useTransform(scrollYProgress, [0.1, 0.6], [0, 10])
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"
          style={{ 
            scale: useTransform(scrollYProgress, [0.1, 0.6], [1, 1.15]),
            rotateZ: useTransform(scrollYProgress, [0.1, 0.6], [0, -5])
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
                z: useTransform(scrollYProgress, [0.1, 0.6], [0, 40])
              }}
            >
              Custom Workflow Automation for HealthTech Teams Scaling Fast
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{
                transformStyle: "preserve-3d",
                z: useTransform(scrollYProgress, [0.1, 0.6], [0, 20])
              }}
            >
              We build the operational backbone that lets your team focus on patients and providers, not paperwork and processes.
            </motion.p>
          </div>
        </AnimatedElement>
        
        {/* Enhanced 3D capabilities cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <AnimatedElement 
              key={index}
              delay={0.1 * index}
            >
              <Card3D> {/* depth prop removed */}
                <div className="bg-white p-6 rounded-lg border border-neutral-100 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${capability.color} text-white opacity-80`}>
                        <span className="text-xs font-semibold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{capability.title}</h3>
                      <p className="mt-2 text-gray-600">{capability.description}</p>
                    </div>
                  </div>
                </div>
              </Card3D>
            </AnimatedElement>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
