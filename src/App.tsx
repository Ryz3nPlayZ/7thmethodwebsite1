import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from './components/layout/Layout';
import HeroHeader from './components/sections/HeroHeader';
import CapabilitiesSection from './components/sections/CapabilitiesSection';
import ComplianceSection from './components/sections/ComplianceSection';
import ApproachSection from './components/sections/ApproachSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TermsOfService from './pages/TermsOfService';

function App() {
  const { scrollYProgress } = useScroll();
  
  // Enhanced 3D floating cursor effect
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = React.useState("default");
  
  React.useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener("mousemove", mouseMove);
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.5
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 40,
      width: 40,
      opacity: 0.8,
      backgroundColor: "rgba(79, 70, 229, 0.5)",
      mixBlendMode: "difference" as "difference"
    }
  };
  
  const handleLinkEnter = () => setCursorVariant("hover");
  const handleLinkLeave = () => setCursorVariant("default");
  
  React.useEffect(() => {
    const links = document.querySelectorAll("a, button");
    
    links.forEach(link => {
      link.addEventListener("mouseenter", handleLinkEnter);
      link.addEventListener("mouseleave", handleLinkLeave);
    });
    
    return () => {
      links.forEach(link => {
        link.removeEventListener("mouseenter", handleLinkEnter);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);
  
  const HomePage = () => (
    <>
      {/* Custom cursor for desktop */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-indigo-500 pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />
      
      {/* Removed scroll progress indicator as requested */}
      
      <HeroHeader />
      <CapabilitiesSection />
      <ComplianceSection />
      <ApproachSection />
      <AboutSection />
      <ContactSection />
    </>
  );
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
