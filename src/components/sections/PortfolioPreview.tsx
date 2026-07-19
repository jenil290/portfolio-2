import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sniperRifle from "@/assets/portfolio/3d-sniper-rifle.png";
import aaharBranding from "@/assets/portfolio/branding-aahar-spices.png";
import wizard1 from "@/assets/portfolio/character-wizard-1.png";
import steampunkComputer from "@/assets/portfolio/3d-steampunk-computer.png";

const featuredProjects = [
  {
    id: 1,
    title: "Sci-Fi Sniper Rifle",
    category: "3D Prop Modeling",
    image: sniperRifle,
  },
  {
    id: 2,
    title: "Aahar Organic Spices",
    category: "Branding",
    image: aaharBranding,
  },
  {
    id: 3,
    title: "Wizard Character",
    category: "Character Illustration",
    image: wizard1,
  },
  {
    id: 4,
    title: "Steampunk Computer",
    category: "3D Prop Modeling",
    image: steampunkComputer,
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
            Featured Work
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Selected <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            A showcase of my best creative works spanning 3D prop modeling, branding, and character illustration
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to="/portfolio"
                className="group relative rounded-xl overflow-hidden aspect-[4/5] card-glass block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <span className="text-xs text-primary font-medium mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="hero" asChild>
            <Link to="/portfolio">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
