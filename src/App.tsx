
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Skills from "./pages/Skills";
// import Process from "./pages/Process";
// import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// import Experience from "./pages/Experience";
// import Certifications from "./pages/Certifications";
import { lazy, Suspense } from "react";

const About = lazy(()=> import('./pages/About'))
const Projects = lazy(()=> import('./pages/Projects'))
const Experience = lazy(()=> import('./pages/Experience'))
const Skills = lazy(()=> import('./pages/Skills'))
const Certifications = lazy(()=> import('./pages/Certifications'))
const Process = lazy(()=> import('./pages/Process'))
const Contact = lazy(()=> import('./pages/Contact'))


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', fontWeight: '1000'}}>Is Loading....</div>}>
          
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
