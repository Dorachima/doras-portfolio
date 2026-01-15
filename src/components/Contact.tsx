import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download, Heart, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" id="contact">
      <div className="blob blob-1 w-[400px] h-[400px] -right-32 top-0 opacity-40" />
      <div className="blob blob-3 w-[300px] h-[300px] -left-20 bottom-20 opacity-30" />

      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/80 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">
              Let's connect
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-8">
            Let's create something{" "}
            <span className="text-gradient">amazing</span> together
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            I'm always excited to work on new projects and collaborate with
            creative minds. Whether you have an idea or just want to say hi,
            I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            size="lg"
            className="btn-glow text-lg px-8 py-6 rounded-2xl gap-2 group"
            onClick={()=>window.open("mailto:dcchris006@gmail.com")}
          >
            <Mail className="w-5 h-5" />
            Email Dora
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 rounded-2xl gap-2 border-2 hover:bg-secondary group"
            onClick={()=>window.open("https://www.linkedin.com/in/dorachima-onwusah-87057b3a5/","_blank")}
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 rounded-2xl gap-2 border-2 hover:bg-secondary"
            onClick={()=>window.open(import.meta.env.BASE_URL+"Dora_Onwusah_CV.pdf","_blank")}
          >
            <Download className="w-5 h-5" />
            Download CV
          </Button>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          className="flex items-center justify-center gap-3 text-muted-foreground/60"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="w-12 h-px bg-border" />
          <span className="text-sm">Built with passion by Dora</span>
          <span className="w-12 h-px bg-border" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
