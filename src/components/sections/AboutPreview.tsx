import { motion } from "framer-motion";
import { ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Briefcase,
    title: "Multimedia Expert",
    description: "Expert in visual storytelling and brand identity",
  },
  {
    icon: Award,
    title: "Creative Vision",
    description: "Transforming ideas into stunning visual experiences",
  },
  {
    icon: GraduationCap,
    title: "Certified Professional",
    description: "Animation & VFX from Arena Animation",
  },
];

export function AboutPreview() {
  return (
    <section id="about-preview" className="py-20 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
              About Me
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Crafting Digital{" "}
              <span className="text-gradient">Experiences</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              As a passionate Multimedia Expert based in Surat, Gujarat, I bring a unique 
              blend of artistic vision and technical expertise to every project. With 
              proficiency in industry-leading software like Adobe Creative Suite, Autodesk 
              Maya, and Substance Painter, I transform concepts into captivating visual 
              narratives.
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              My approach combines traditional artistry with cutting-edge technology, 
              delivering work that stands out in today's competitive creative landscape.
            </p>

            <Button variant="hero" asChild>
              <Link to="/about">
                Learn More
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>

          {/* Highlights Cards */}
          <div className="grid gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
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
}
