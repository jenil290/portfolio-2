import { Layout } from "@/components/layout/Layout";
import { Check } from "lucide-react";

const coreSkills = [
  "Art Direction",
  "Visual Storytelling",
  "Concept Development",
  "Digital Design",
  "AI-powered Visuals",
  "Photo Manipulation",
  "Social Media Design",
  "Brand Identity",
  "Studio & Shoot Supervision",
  "Team Leadership",
  "Moodboarding",
  "3D Modeling",
  "Retouching",
  "Video Production",
];

const softwareSkills = [
  { name: "Adobe Photoshop", level: 95 },
  { name: "Adobe Illustrator", level: 90 },
  { name: "Adobe Premiere Pro", level: 85 },
  { name: "Adobe After Effects", level: 88 },
  { name: "Adobe Fresco", level: 80 },
  { name: "Autodesk Maya", level: 90 },
  { name: "Maxon Zbrush", level: 70 },
  { name: "Substance Painter", level: 85 },
];

const masterSkills = [
  {
    title: "Brand Identity",
    description: "Creating cohesive visual identities that communicate brand values and resonate with target audiences.",
  },
  {
    title: "Storytelling",
    description: "Crafting compelling narratives through visual media that engage and inspire viewers.",
  },
  {
    title: "3D Modeling (Maya)",
    description: "Building detailed 3D models with precision and artistic flair for various applications.",
  },
  {
    title: "Texturing (Substance)",
    description: "Creating realistic and stylized textures that bring 3D models to life.",
  },
  {
    title: "Rendering",
    description: "Producing high-quality renders with attention to lighting, materials, and composition.",
  },
  {
    title: "Compositing",
    description: "Seamlessly blending elements to create stunning final compositions.",
  },
  {
    title: "Typography",
    description: "Mastering the art of type design and layout for impactful visual communication.",
  },
  {
    title: "Color Correction",
    description: "Fine-tuning colors to achieve the perfect mood and visual consistency.",
  },
];

const Skills = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="section-container relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
            My Skills
          </span>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit developed through years of practice, 
            enabling me to deliver exceptional creative solutions across multiple disciplines.
          </p>
        </div>
      </section>

      {/* Core Skills */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Core <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The fundamental abilities that drive my creative process
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {coreSkills.map((skill) => (
              <div
                key={skill}
                className="card-glass p-4 rounded-xl flex items-center gap-3 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Skills */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Software <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proficiency in industry-leading creative software
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {softwareSkills.map((skill) => (
              <div key={skill.name} className="card-glass p-6 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="skill-bar h-3 rounded-full bg-secondary">
                  <div
                    className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Skills */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Master <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Areas of deep expertise and specialization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {masterSkills.map((skill, index) => (
              <div
                key={skill.title}
                className="card-glass p-6 rounded-xl group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
