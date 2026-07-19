import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const coreSkills = [
  "Art Direction",
  "Visual Storytelling",
  "Brand Identity",
  "3D Modeling",
  "VFX & Compositing",
  "Digital Design",
];

const softwareSkills = [
  { name: "Adobe Photoshop", level: 95 },
  { name: "Autodesk Maya", level: 90 },
  { name: "Substance Painter", level: 85 },
  { name: "After Effects", level: 88 },
];

export function SkillsPreview() {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
            My Expertise
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Proficiencies</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to deliver exceptional creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-glass p-6 md:p-8 rounded-2xl"
          >
            <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-foreground hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Software Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-glass p-6 md:p-8 rounded-2xl"
          >
            <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">
              Software Expertise
            </h3>
            <div className="space-y-5">
              {softwareSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-foreground">{skill.name}</span>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="skill-bar-fill"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" asChild>
            <Link to="/skills">
              View All Skills
              <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
