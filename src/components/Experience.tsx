import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Babcock University New Horizon Tech-Hub",
    period: "2025 – Present",
    type: "Part-Time",
    description:
      "Building and maintaining responsive web interfaces, collaborating with teams, and contributing to real-world projects.",
    color: "bg-primary",
  },
  {
    id: 2,
    title: "Industrial Trainee",
    company: "New Horizons Computer Learning Center",
    period: "2025 – 2026",
    type: "Training",
    description:
      "Gaining hands-on experience in modern web development practices and professional workflows.",
    color: "bg-highlight",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="section-padding relative overflow-hidden bg-muted/30"
      id="experience"
    >
      <div className="blob blob-1 w-[300px] h-[300px] -left-20 top-1/3 opacity-30" />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every step of my journey has been a chance to grow and learn
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full ${exp.color} -translate-x-1/2 z-10 ring-4 ring-background`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                  }}
                />

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-40px)] ml-16 md:ml-0">
                  <div className="glass rounded-2xl p-6 md:p-8 card-hover">
                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <span className="text-sm text-muted-foreground">
                          {exp.period}
                        </span>
                        <span className="ml-2 px-2 py-0.5 bg-secondary rounded-full text-xs text-secondary-foreground">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-display font-semibold mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
