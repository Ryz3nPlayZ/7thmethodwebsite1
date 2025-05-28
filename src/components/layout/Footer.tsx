import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedElement, Tilt3D } from '../../lib/animations';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-1/4 w-64 h-64 bg-blue-800 rounded-full opacity-10 blur-3xl"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-800 rounded-full opacity-10 blur-3xl"
        animate={{
          y: [0, 10, 0],
          x: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-medium mb-4">7th Method</h3>
            <p className="text-gray-400 mb-4">
              Custom workflow automation for HealthTech teams with compliance and clarity from day one.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com/company/7thmethod" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-medium mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">
              <a 
                href="mailto:zemuliu@7thmethod.com" 
                className="hover:text-white transition-colors"
              >
                zemuliu@7thmethod.com
              </a>
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-medium mb-4">Legal</h3>
            <p className="text-gray-400 text-sm mb-2">
              We don't provide legal advice. All automation is scoped to internal, non-clinical workflows.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <a 
                href="/terms" 
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>
        
        <AnimatedElement delay={0.2}>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} 7th Method. All rights reserved.
            </p>
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
}
