import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedElement, Card3D, ParallaxSection, Tilt3D } from '../../lib/animations';
import { ArrowRight, Send } from 'lucide-react';

export default function ContactSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.5, 1.0], [0, -150]); // Enhanced parallax effect
  const opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.9, 1.0], [0, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0.5, 1.0], [1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0.5, 1.0], [0, -2]);

  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormState({
          name: '',
          company: '',
          email: '',
          message: ''
        });
      }, 500);
    }, 1500);
  };

  return (
    <section id="contact" className="min-h-screen w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Enhanced 3D animated background elements */}
      <ParallaxSection depth={400} className="absolute inset-0"> {/* baseVelocity prop removed */}
        <motion.div 
          className="absolute top-1/3 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"
          style={{ 
            scale: useTransform(scrollYProgress, [0.5, 1.0], [1, 1.3]),
            rotateZ: useTransform(scrollYProgress, [0.5, 1.0], [0, 25])
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl"
          style={{ 
            scale: useTransform(scrollYProgress, [0.5, 1.0], [1, 1.25]),
            rotateZ: useTransform(scrollYProgress, [0.5, 1.0], [0, -20])
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
                z: useTransform(scrollYProgress, [0.5, 1.0], [0, 40])
              }}
            >
              Let's Map One System — and See What's Possible
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{
                transformStyle: "preserve-3d",
                z: useTransform(scrollYProgress, [0.5, 1.0], [0, 20])
              }}
            >
              Schedule a workflow review or reach out to learn how we can help streamline your operations.
            </motion.p>
          </div>
        </AnimatedElement>
        
        {/* Enhanced 3D contact form with glass morphism */}
        <AnimatedElement delay={0.3} className="max-w-2xl mx-auto">
          <Card3D> {/* depth prop removed */}
            <div className="backdrop-blur-sm bg-white/90 rounded-lg border border-white/20 shadow-xl p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formState.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                        placeholder="Tell us about a workflow you'd like to improve..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <Tilt3D>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 transition-all duration-300 shadow-lg ${
                            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Request a Workflow Review
                              <Send className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </button>
                      </Tilt3D>
                    </div>
                  </div>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Thank you!</h3>
                  <p className="text-gray-600 mb-6">We've received your message and will be in touch soon.</p>
                  <Tilt3D>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-neutral-200 hover:bg-neutral-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </Tilt3D>
                </motion.div>
              )}
            </div>
          </Card3D>
          
          {/* Alternative contact method with enhanced 3D */}
          <AnimatedElement delay={0.5} className="text-center mt-8 text-gray-600">
            <p>Prefer to schedule directly?</p>
            <Tilt3D>
              <a 
                href="mailto:zemuliu@7thmethod.com" 
                className="inline-flex items-center mt-2 text-indigo-700 font-medium hover:text-indigo-900 transition-colors"
              >
                Email us at zemuliu@7thmethod.com
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Tilt3D>
          </AnimatedElement>
        </AnimatedElement>
      </motion.div>
    </section>
  );
}
