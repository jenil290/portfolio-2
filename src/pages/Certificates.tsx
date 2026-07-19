import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Search, Sparkles, Trophy, Clock3, Layers3, Target, ExternalLink, RotateCcw, Maximize2 } from "lucide-react";
import certificatesData from "@/data/certificates.json";

type CertificateItem = (typeof certificatesData)[number];

const filters = ["All", "3D", "Animation", "Design", "Adobe", "Autodesk", "Programming", "Marketing", "Other"] as const;

const skillChips = [
  "3D Modeling",
  "Hard Surface",
  "UV Mapping",
  "Texturing",
  "PBR Workflow",
  "Lighting",
  "Rendering",
  "Photoshop",
  "Illustrator",
  "Motion Graphics",
  "Video Editing",
  "Brand Identity",
  "Responsive Design",
];

const timelineStats = [
  { label: "Years of Learning", value: 6, suffix: "+" },
  { label: "Certificates Completed", value: 24, suffix: "" },
  { label: "Software Mastered", value: 12, suffix: "" },
  { label: "Projects Created", value: 180, suffix: "+" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 900;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(value * eased);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <span>{count}{suffix}</span>;
}

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const pinchDistanceRef = useRef<number | null>(null);
  const dragOriginRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    document.title = "Certificates | Jenil Patel Portfolio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional certifications of Jenil Patel covering 3D modeling, animation, graphic design, Adobe software, Autodesk Maya, visual design, and digital skills."
      );
    }
  }, []);

  const filteredCertificates = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();
    return certificatesData.filter((certificate) => {
      const matchesFilter = activeFilter === "All" || certificate.category === activeFilter;
      const matchesSearch =
        normalizedQuery.length === 0 ||
        [certificate.title, certificate.organization, certificate.description, certificate.skills.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  useEffect(() => {
    if (!selectedCertificate) return;

    setIsImageLoading(true);
    setImageError(false);
    setZoom(1);
    setOffset({ x: 0, y: 0 });

    const nextImage = new Image();
    nextImage.src = selectedCertificate.image;
    nextImage.onload = () => setIsImageLoading(false);
    nextImage.onerror = () => {
      setIsImageLoading(false);
      setImageError(true);
    };
  }, [selectedCertificate]);

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }

      if (event.key === "ArrowRight") {
        const currentIndex = filteredCertificates.findIndex((certificate) => certificate.id === selectedCertificate.id);
        const nextItem = filteredCertificates[(currentIndex + 1) % filteredCertificates.length];
        if (nextItem) {
          setSelectedCertificate(nextItem);
        }
      }

      if (event.key === "ArrowLeft") {
        const currentIndex = filteredCertificates.findIndex((certificate) => certificate.id === selectedCertificate.id);
        const prevItem = filteredCertificates[(currentIndex - 1 + filteredCertificates.length) % filteredCertificates.length];
        if (prevItem) {
          setSelectedCertificate(prevItem);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCertificate, filteredCertificates]);

  const openCertificate = (certificate: CertificateItem) => {
    setSelectedCertificate(certificate);
  };

  const resetPreview = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const direction = event.deltaY < 0 ? 0.1 : -0.08;
    setZoom((currentZoom) => Math.min(Math.max(currentZoom + direction, 1), 3));
  };

  const handleDoubleClick = () => {
    setZoom((currentZoom) => (currentZoom > 1 ? 1 : 2));
    setOffset({ x: 0, y: 0 });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    dragOriginRef.current = {
      x: event.clientX - offset.x,
      y: event.clientY - offset.y,
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || zoom <= 1) return;
    setOffset({
      x: event.clientX - dragOriginRef.current.x,
      y: event.clientY - dragOriginRef.current.y,
    });
  };

  const handlePointerUp = () => setIsDragging(false);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 2) {
      pinchDistanceRef.current = Math.hypot(
        event.touches[0].clientX - event.touches[1].clientX,
        event.touches[0].clientY - event.touches[1].clientY
      );
      return;
    }

    if (zoom > 1) {
      setIsDragging(true);
      dragOriginRef.current = {
        x: event.touches[0].clientX - offset.x,
        y: event.touches[0].clientY - offset.y,
      };
    }
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 2 && pinchDistanceRef.current) {
      const nextDistance = Math.hypot(
        event.touches[0].clientX - event.touches[1].clientX,
        event.touches[0].clientY - event.touches[1].clientY
      );
      const ratio = nextDistance / pinchDistanceRef.current;
      pinchDistanceRef.current = nextDistance;
      setZoom((currentZoom) => Math.min(Math.max(currentZoom * ratio, 1), 3));
      return;
    }

    if (!isDragging || zoom <= 1 || event.touches.length !== 1) return;
    setOffset({
      x: event.touches[0].clientX - dragOriginRef.current.x,
      y: event.touches[0].clientY - dragOriginRef.current.y,
    });
  };

  const handleTouchEnd = () => {
    pinchDistanceRef.current = null;
    setIsDragging(false);
  };

  return (
    <Layout>
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_55%)]" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="secondary" className="border-primary/30 bg-primary/10 text-primary mb-6">
              <Trophy className="mr-2 h-4 w-4" />
              Professional Certifications
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
              My <span className="text-gradient">Certifications</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-8 max-w-3xl mx-auto">
              A collection of professional certifications showcasing my expertise in 3D Art, Design, Animation, Visual Communication, Software Skills, and Creative Technologies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="section-container">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "Total Certificates", value: "4", icon: Trophy },
              { label: "Learning Hours", value: "480+", icon: Clock3 },
              { label: "Platforms Completed", value: "3", icon: Layers3 },
              { label: "Skills Earned", value: "50+", icon: Target },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="card-glass rounded-2xl border border-border/60 p-5"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</p>
                    </div>
                    <div className="rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="section-container">
          <div className="card-glass rounded-3xl border border-border/70 p-4 md:p-6">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? "border-primary/40 bg-primary text-primary-foreground shadow-[0_0_20px_rgba(34,197,94,0.25)]"
                      : "border-border/70 bg-card/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
                <div className="flex items-center gap-3 text-foreground">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <p className="font-medium">Featured categories</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['3D Modeling', 'Texturing', 'Autodesk Maya', 'Substance Painter', 'Adobe Photoshop', 'Premiere Pro', 'After Effects', 'UI Design', 'Graphic Design', 'Branding', 'Digital Marketing', 'Programming'].map((item) => (
                    <span key={item} className="rounded-full border border-border/60 bg-card/70 px-3 py-1.5 text-sm text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Search</p>
                <div className="mt-3 flex items-center gap-3 rounded-xl border border-border/60 bg-card/70 px-4 py-3 text-sm text-muted-foreground">
                  <Search className="h-4 w-4 text-primary" />
                  <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search certifications"
                    className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCertificates.map((certificate, index) => (
              <motion.article
                key={certificate.id}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.03, boxShadow: "0 0 0 1px rgba(34,197,94,0.18), 0 18px 60px rgba(34,197,94,0.12)" }}
                className="group card-glass rounded-3xl border border-border/70 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-transparent">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                    {certificate.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{certificate.title}</h3>
                      <p className="mt-2 text-sm text-primary">{certificate.organization}</p>
                    </div>
                    <Badge variant="outline" className="border-border/70 text-muted-foreground">
                      {new Date(certificate.date).toLocaleDateString("en", { year: "numeric", month: "short" })}
                    </Badge>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{certificate.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {certificate.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button variant="hero" size="sm" onClick={() => openCertificate(certificate)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={certificate.downloadLink} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="section-container">
          <div className="card-glass rounded-3xl border border-border/70 p-8 md:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-primary">Learning Timeline</p>
                <h2 className="mt-3 text-3xl font-semibold text-foreground">Chronological growth in creative expertise</h2>
                <p className="mt-4 text-muted-foreground leading-7">Each certification reflects a milestone in my development across 3D work, visual communication, motion, and digital craft.</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/40 p-5 min-w-[260px]">
                <div className="space-y-3">
                  {timelineStats.map((item) => (
                    <div key={item.label} className="flex items-center justify-between border-b border-border/60 pb-2 last:border-b-0 last:pb-0">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="text-lg font-semibold text-foreground"><AnimatedCounter value={item.value} suffix={item.suffix} /></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-8">
              {certificatesData.slice().reverse().map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="relative pl-8 md:pl-10"
                >
                  <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
                  <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_16px_rgba(34,197,94,0.6)]" />
                  <div className="rounded-2xl border border-border/60 bg-card/70 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-sm text-primary">{new Date(certificate.date).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" })}</p>
                        <h3 className="mt-1 text-lg font-semibold text-foreground">{certificate.title}</h3>
                      </div>
                      <Badge variant="secondary" className="border-primary/20 bg-primary/10 text-primary">
                        {certificate.organization}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="section-container">
          <div className="card-glass rounded-3xl border border-border/70 p-8 md:p-10">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Skills Gained</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">A broad creative toolkit</h2>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {skillChips.map((skill) => (
                <span key={skill} className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="section-container">
          <div className="rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-background p-8 md:p-10 shadow-[0_20px_80px_rgba(34,197,94,0.12)]">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary">Achievement</p>
                <h2 className="mt-3 text-3xl font-semibold text-foreground">Committed to consistent growth</h2>
                <p className="mt-4 max-w-2xl text-muted-foreground leading-7">My learning path continues to evolve with every project, certification, and creative challenge.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {timelineStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border/60 bg-background/60 px-4 py-4">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="mt-1 text-2xl font-semibold text-foreground"><AnimatedCounter value={item.value} suffix={item.suffix} /></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedCertificate && (
          <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden border-border/80 bg-[#0b0b0b]/95 p-0 shadow-[0_24px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
              <div className="grid max-h-[90vh] overflow-hidden lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/15 via-card to-background p-4 sm:p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_70%)]" />
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(null)}
                    className="absolute right-4 top-4 z-10 rounded-full border border-border/70 bg-background/70 p-2 text-muted-foreground transition hover:text-foreground"
                    aria-label="Close certificate preview"
                  >
                    ✕
                  </button>

                  <div
                    className="relative z-10 flex max-h-[70vh] w-full items-center justify-center overflow-auto rounded-2xl border border-border/60 bg-background/60 p-3"
                    onWheel={handleWheel}
                    onDoubleClick={handleDoubleClick}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {isImageLoading && (
                      <div className="flex h-64 w-full items-center justify-center rounded-xl border border-border/50 bg-card/70">
                        <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
                      </div>
                    )}

                    {!isImageLoading && !imageError && (
                      <img
                        src={selectedCertificate.image}
                        alt={selectedCertificate.title}
                        loading="lazy"
                        className="max-h-[68vh] w-auto max-w-full rounded-xl object-contain transition-transform duration-200"
                        style={{ transform: `scale(${zoom}) translate(${offset.x}px, ${offset.y}px)` }}
                        onError={() => {
                          setIsImageLoading(false);
                          setImageError(true);
                        }}
                      />
                    )}

                    {!isImageLoading && imageError && (
                      <div className="flex h-64 w-full items-center justify-center rounded-xl border border-dashed border-border/60 bg-card/70 px-6 text-center text-sm text-muted-foreground">
                        No Certificate Preview Available
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-between overflow-auto p-6 md:p-8">
                  <div>
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-semibold text-foreground">{selectedCertificate.title}</DialogTitle>
                      <DialogDescription className="mt-3 text-muted-foreground">
                        {selectedCertificate.organization} • {new Date(selectedCertificate.date).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-6 space-y-6">
                      <p className="text-sm leading-7 text-muted-foreground">{selectedCertificate.description}</p>
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Skills</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {selectedCertificate.skills.map((skill) => (
                            <span key={skill} className="rounded-full border border-border/60 bg-card/70 px-3 py-1.5 text-sm text-muted-foreground">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" onClick={resetPreview}>
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Reset Zoom
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setZoom(1)}>
                        <Maximize2 className="mr-2 h-4 w-4" />
                        Fit Screen
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button variant="hero" asChild>
                        <a href={selectedCertificate.credentialLink} target="_blank" rel="noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Open Original
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={selectedCertificate.downloadLink} download>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Certificates;
