import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Heart, Target, Zap } from "lucide-react";

const aboutCards = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "I'm deeply passionate about creating responsive, user-focused interfaces that delight and engage.",
    color: "bg-accent",
  },
  {
    icon: Target,
    title: "Focus",
    description:
      "Frontend Developer with hands-on experience in HTML, CSS, and JavaScript, building clean and modern websites.",
    color: "bg-secondary",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "B.Sc Computer Science at Babcock University with a stellar 4.32 GPA, constantly learning and growing.",
    color: "bg-highlight",
  },
  {
    icon: Zap,
    title: "Goal",
    description:
      "Seeking an internship or junior frontend role where I can contribute, learn, and build amazing things.",
    color: "bg-mint",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" id="about">
      <div className="blob blob-2 w-[400px] h-[400px] -right-48 top-1/3 opacity-40" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Nice to meet you! <span className="text-gradient">I'm Dora</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A creative soul who fell in love with the art of building beautiful
            digital experiences. Every line of code is an opportunity to create
            something meaningful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className={`glass rounded-3xl p-8 h-full card-hover ${card.color}/30`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className="w-7 h-7 text-foreground/80" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
