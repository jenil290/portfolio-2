import { Layout } from "@/components/layout/Layout";
import { GraduationCap, Briefcase, Award, Heart } from "lucide-react";
import profilePhoto from "@/assets/profile photo.jpeg";

const education = [
  {
    title: "3D Animation & VFX",
    institution: "Arena Animation",
    description: "Comprehensive training in 3D animation, visual effects, and digital media production.",
  },
  {
    title: "Diploma in IT",
    institution: "Bhagwan Mahavir University",
    description: "Foundation in information technology and digital systems.",
  },
  {
    title: "Secondary School Certificate",
    institution: "Mauni international School",
    description: "Completed secondary education with focus on arts and sciences.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Creativity",
    description: "Every project is an opportunity to push creative boundaries and deliver something extraordinary.",
  },
  {
    icon: Award,
    title: "Excellence in Craft",
    description: "Committed to the highest standards of quality in every aspect of my work.",
  },
  {
    icon: Briefcase,
    title: "Professional Approach",
    description: "Combining artistic vision with reliable project management and clear communication.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl" />
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-primary/30">
                  <img
                    src={profilePhoto}
                    alt="Profile Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-xl">
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                About Me
              </span>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                I'm <span className="text-gradient">Jenil Patel</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                A passionate Multimedia Expert based in Surat, Gujarat, India.
              </p>

              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With a unique blend of artistic vision and technical expertise, I specialize in 
                  transforming concepts into captivating visual narratives. My journey in the 
                  creative industry has equipped me with comprehensive skills in art direction, 
                  visual storytelling, and digital design.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  From brand identity development to 3D modeling and VFX compositing, I bring a 
                  holistic approach to every project. I believe in the power of visuals to 
                  communicate, inspire, and create lasting impressions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not crafting digital experiences, you'll find me exploring new 
                  technologies, experimenting with AI-powered visuals, and staying ahead of 
                  design trends to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
              Education
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Academic <span className="text-gradient">Background</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <div
                key={item.title}
                className="card-glass p-6 rounded-xl group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-primary mb-3">{item.institution}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
              My Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              What Drives <span className="text-gradient">My Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-glass p-8 rounded-xl text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
