import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const roles = [
  "Frontend Developer",
  "UI Lover",
  "Problem Solver",
  "Creative Builder",
  "Student @ Babcock University",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-accent/20">
      {/* Floating Blobs */}
      <div
        className="blob blob-1 w-[500px] h-[500px] -top-32 -right-32"
        style={{
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
        }}
      />
      <div
        className="blob blob-2 w-[400px] h-[400px] top-1/2 -left-48"
        style={{
          transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)`,
        }}
      />
      <div
        className="blob blob-3 w-[300px] h-[300px] bottom-20 right-1/4"
        style={{
          transform: `translate(${mousePosition.x * 1}px, ${mousePosition.y * 1}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Available for opportunities
            </span>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Hi, I'm{" "}
          <span className="text-gradient">Dora</span>{" "}
        </motion.h1>

        <motion.div
          className="h-16 md:h-20 flex items-center justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            key={currentRole}
            className="text-xl md:text-3xl text-muted-foreground font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {roles[currentRole]}
          </motion.p>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A frontend developer who loves turning ideas into beautiful,
          responsive websites. Let's create something amazing together.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="btn-glow text-lg px-8 py-6 rounded-2xl"
            onClick={()=>{
              document.getElementById("projects")?.scrollIntoView({behavior: "smooth"})
            }}
            >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 rounded-2xl border-2 hover:bg-secondary"
            onClick={()=>{
              document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})
            }}
          >
            Let's Build Something
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground/60"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
