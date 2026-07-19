import { Layout } from "@/components/layout/Layout";
import { Palette, Video, Box, Sparkles, Users, Share2 } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Logo & Brand Identity",
    description: "Comprehensive brand identity solutions including logo design, visual guidelines, and cohesive design systems that capture your brand essence.",
  },
  {
    icon: Users,
    title: "Brand Strategy & Design",
    description: "We craft strategic brand identities that help businesses grow consistently.",
  },
  {
    icon: Box,
    title: "3D Modeling & Animation",
    description: "Professional 3D modeling, texturing, and animation services for product visualization, architectural renders, and creative projects.",
  },
  {
    icon: Sparkles,
    title: "Visual Effects",
    description: "Stunning visual effects and compositing for films, commercials, and digital content that brings imagination to life.",
  },
  {
    icon: Video,
    title: " Video Editing & Post-Production",
    description: "End-to-end video production services from concept and storyboarding to post-production, color grading, and final delivery.",
  },
  {
    icon: Share2,
    title: "Social Media Creatives",
    description: "Scroll-stopping social media creatives that boost engagement, strengthen branding, and drive audience interaction across platforms.",
  },
  
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="section-container relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
            Services
          </span>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Services I <span className="text-gradient">Offer</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to elevate your brand and bring your vision to life through expert design and production.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-lg border border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="mb-6 p-3 w-fit rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        
        <div className="section-container relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's create something amazing. Get in touch to discuss your project and find the perfect service solution.
          </p>
          
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
