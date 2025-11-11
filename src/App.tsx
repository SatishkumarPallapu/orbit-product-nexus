
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import { lazy, Suspense, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen";
import { Footer } from "./components/Footer";
import { Breadcrumb } from "./components/Breadcrumb";
import { FloatingActionButton } from "./components/FloatingActionButton";
import { AnimatedGridBackground } from "./components/AnimatedGridBackground";
import { MagneticCursor } from "./components/MagneticCursor";
import { PageTransition } from "./components/PageTransition";

const About = lazy(()=> import('./pages/About'))
const Projects = lazy(()=> import('./pages/Projects'))
const Experience = lazy(()=> import('./pages/Experience'))
const Skills = lazy(()=> import('./pages/Skills'))
const Certifications = lazy(()=> import('./pages/Certifications'))
const Process = lazy(()=> import('./pages/Process'))
const Contact = lazy(()=> import('./pages/Contact'))
const NotFound = lazy(()=> import('./pages/NotFound'))


const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  
  return (
    <>
      <AnimatedGridBackground />
      <MagneticCursor />
      <Breadcrumb />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
          <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
          <Route path="/process" element={<PageTransition><Process /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <FloatingActionButton />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <AnimatedRoutes />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
