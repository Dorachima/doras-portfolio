import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    title: "Technical Skills",
    color: "from-[#E8A46B]/40 to-[#E8A46B]/20",
    bgColor: "bg-[#FFF7F1]",

    skills: [
      { name: "HTML5", description: "Semantic markup & accessibility" },
      { name: "CSS3", description: "Animations, Grid, Flexbox" },
      { name: "JavaScript", description: "ES6+, DOM manipulation" },
      { name: "Responsive Design", description: "Mobile-first approach" },
      { name: "Website Styling", description: "Clean, modern aesthetics" },
    ],
  },
  {
    title: "Core Strengths",
    color: "from-highlight to-secondary",
    bgColor: "bg-secondary/50",
    skills: [
      { name: "Attention to Detail", description: "Pixel-perfect execution" },
      { name: "Communication", description: "Clear & collaborative" },
      { name: "Problem Solving", description: "Creative solutions" },
      { name: "Team Collaboration", description: "Works well with others" },
      { name: "Time Management", description: "Meets deadlines consistently" },
    ],
  },
  {
    title: "Personal Strengths",
    color: "from-[#6FAF8A]/40 TO-[#6FAF8A]/20",
    bgColor: "bg-[#F6FAF7]",
    skills: [
      { name: "Organized", description: "Structured & methodical" },
      { name: "Quick Learner", description: "Adapts to new tech fast" },
      { name: "Reliable", description: "Consistent & dependable" },
      { name: "Self-Motivated", description: "Driven by passion" },
      { name: "Eager to Learn", description: "Always growing" },
    ],
  },
];

const SkillBubble = ({
  skill,
  index,
  color,
}: {
  skill: { name: string; description: string };
  index: number;
  color: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer perspective-1000"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-24 md:h-28"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center p-4 backface-hidden shadow-lg`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-sm md:text-base font-semibold text-center text-foreground">
            {skill.name}
          </span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl bg-card border border-border flex items-center justify-center p-4 shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span className="text-xs md:text-sm text-muted-foreground text-center">
            {skill.description}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="section-padding relative overflow-hidden bg-muted/30"
      id="skills"
    >
      <div className="blob blob-1 w-[350px] h-[350px] -left-32 top-1/4 opacity-30" />
      <div className="blob blob-3 w-[300px] h-[300px] right-0 bottom-0 opacity-30" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-highlight text-highlight-foreground text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hover or tap on any skill to discover more about what I bring to the
            table
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h3 className="text-2xl font-display font-semibold mb-6 text-center md:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => (
                  <SkillBubble
                    key={skill.name}
                    skill={skill}
                    index={index}
                    color={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
