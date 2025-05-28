import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedElement, Card3D, ParallaxSection, Tilt3D } from '../../lib/animations';
import { ShieldCheck, FileCheck, Layers } from 'lucide-react';

const complianceFeatures = [
  {
    title: "HIPAA-Aware",
    icon: <ShieldCheck className="h-10 w-10" />,
    description: "All workflows designed with HIPAA compliance in mind, ensuring proper data handling, access controls, and audit trails.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Audit-Ready",
    icon: <FileCheck className="h-10 w-10" />,
    description: "Built-in documentation and logging that makes compliance audits straightforward with clear evidence trails.",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Modular Buildouts",
    icon: <Layers className="h-10 w-10" />,
    description: "Flexible, component-based architecture that adapts as regulations change and your business scales.",
    color: "from-purple-500 to-blue-600"
  }
];

export default function ComplianceSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.2, 0.7], [0, -150]); // Enhanced parallax effect
  const opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.6, 0.7], [0, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0.2, 0.7], [1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0.2, 0.7], [0, -2]);

  return (
    <section id="compliance" className="min-h-screen w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Enhanced 3D animated background elements */}
      <ParallaxSection baseVelocity={0.08} depth={250} className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotateZ: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            z: useTransform(scrollYProgress, [0.2, 0.7], [0, -50])
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
            rotateZ: [0, -5, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{
            z: useTransform(scrollYProgress, [0.2, 0.7], [0, -30])
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
                z: useTransform(scrollYProgress, [0.2, 0.7], [0, 40])
              }}
            >
              Compliance Isn't a Department — It's in the Workflow Design
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{
                transformStyle: "preserve-3d",
                z: useTransform(scrollYProgress, [0.2, 0.7], [0, 20])
              }}
            >
              We build compliance into every automation from the ground up, so you can scale with confidence.
            </motion.p>
          </div>
        </AnimatedElement>
        
        {/* Enhanced 3D compliance features with glass morphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {complianceFeatures.map((feature, index) => (
            <AnimatedElement 
              key={index}
              delay={0.2 * index}
            >
              <Card3D depth={50}>
                <div className="backdrop-blur-sm bg-white/90 p-8 rounded-lg border border-white/20 shadow-lg text-center h-full">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} text-white mb-6 shadow-lg opacity-80`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card3D>
            </AnimatedElement>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
