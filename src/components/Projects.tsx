import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronDown, Bus, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Transportation Service Website",
    icon: Bus,
    description:
      "An interactive ticket booking platform with dynamic form switching between One-Way and Round-Trip options.",
    features: [
      "Interactive ticket booking system",
      "Bus charter interface",
      "Dynamic form switching",
      "Clean UI with responsive design",
    ],
    learnings:
      "Learned how to handle complex form states and create intuitive user flows for booking systems.",
    gradient: "from-primary/20 to-accent/40",
    accentColor: "bg-primary",
  },
  {
    id: 2,
    title: "Tourism Website",
    icon: Globe,
    description:
      "A beautiful tourism website showcasing destinations with elegant navigation and fully responsive design.",
    features: [
      "Stunning destination showcases",
      "Smooth navigation",
      "Mobile-first responsive design",
      "Engaging visual storytelling",
    ],
    learnings:
      "Mastered responsive layouts and learned to create engaging visual experiences that work across all devices.",
    gradient: "from-highlight/20 to-secondary/40",
    accentColor: "bg-highlight",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
    >
      <div
        className={`glass rounded-3xl overflow-hidden card-hover bg-gradient-to-br ${project.gradient}`}
      >
        {/* Project Header */}
        <div className="p-8 md:p-10">
          <div className="flex items-start justify-between mb-6">
            <div
              className={`w-16 h-16 rounded-2xl ${project.accentColor} flex items-center justify-center`}
            >
              <project.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl gap-2 hover:bg-secondary"
            >
              <ExternalLink className="w-4 h-4" />
              View Project
            </Button>
          </div>

          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.features.map((feature, i) => (
              <motion.span
                key={feature}
                className="px-3 py-1.5 bg-card/80 rounded-full text-sm text-foreground/80"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                {feature}
              </motion.span>
            ))}
          </div>

          {/* Expandable Section */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            What I Learned
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.button>

          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-muted-foreground leading-relaxed border-t border-border/50 mt-4">
              {project.learnings}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" id="projects">
      <div className="blob blob-2 w-[400px] h-[400px] right-0 top-0 opacity-30" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint text-mint-foreground text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Things I've <span className="text-gradient">Built</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Each project is a learning journey, crafted with care and attention
            to detail
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
