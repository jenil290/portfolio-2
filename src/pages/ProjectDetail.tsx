import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Download, ExternalLink, X, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";

// Import projects data
const projects = [
  {
    id: "sci-fi-sniper-rifle",
    title: "Sci-Fi Sniper Rifle",
    category: "3D Art & Animation",
    description: "Futuristic sniper rifle prop with intricate detailing, hexagonal patterns, and metallic textures created in Autodesk Maya and Substance Painter.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784442392/ChatGPT_Image_Jul_19_2026_11_51_12_AM_ml6lic.png",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784442392/ChatGPT_Image_Jul_19_2026_11_51_12_AM_ml6lic.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784441492/3979e38a-af1d-4b3a-91e5-dd23c48f0581_jb4bud.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784441574/ChatGPT_Image_Jul_19_2026_11_37_58_AM_altjme.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784441575/ChatGPT_Image_Jul_19_2026_11_37_47_AM_p3savv.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784441721/90c1b2ea-67e5-41b0-8d08-841ff08b31ae_mocui8.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784441570/4bcec1fc-2420-4318-bf77-a86dddba0962_og5cg8.png",
    ],
    year: "2024",
    role: "3D Asset Artist",
    software: ["Maya", "Substance Painter", "Marmoset Toolbag"],
    workflow: ["High Poly Modeling", "Baking", "PBR Texturing", "Lighting & Rendering"],
    behance: "https://www.behance.net/pateljenil1",
    artstation: "",
  },
  {
    id: "military-bomb-device",
    title: "Military Bomb Device Prop",
    category: "3D Art & Animation",
    description: "Realistic military bomb device prop featuring weathered textures, detailed control panel, and industrial design elements.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784442849/ChatGPT_Image_Jul_19_2026_11_56_45_AM_cha07t.png",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784442849/ChatGPT_Image_Jul_19_2026_11_56_45_AM_cha07t.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784442850/bomb_1_twaszy.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784442851/bomb_2_io11j3.jpg",
    ],
    year: "2024",
    role: "Hard Surface Artist",
    software: ["Maya", "Substance Painter", "Marmoset Toolbag"],
    workflow: ["Hard Surface Modeling", "UV Unwrapping", "Texture Development", "Final Render"],
    behance: "https://www.behance.net/pateljenil1",
    artstation: "",
  },
  {
    id: "steampunk-computer",
    title: "Steampunk Computer Machine",
    category: "3D Art & Animation",
    description: "Vintage steampunk-inspired computer with brass gears, wooden cabinet, and Victorian-era aesthetic. Modeled and textured with attention to period authenticity.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784443252/ChatGPT_Image_Jul_19_2026_12_10_10_PM_ykrpow.png",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443252/ChatGPT_Image_Jul_19_2026_12_10_10_PM_ykrpow.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443235/vintage_laptop_1_iqedvv.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443236/vintage_laptop_2_n5gsir.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443236/vintage_laptop_3_jovjgp.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443236/vintage_laptop_4_d9hgd0.jpg",
    ],
    year: "2025",
    role: "Hard Surface Artist",
    software: ["Maya", "Substance Painter", "Marmoset Toolbag"],
    workflow: ["Concept Design", "Asset Modeling", "Material Creation", "Composition"],
    behance: "https://www.behance.net/pateljenil1",
    artstation: "",
  },
  {
    id: "rustic-tata-truck",
    title: "Rustic Tata Cargo Truck",
    category: "3D Art & Animation",
    description: "High-detail photogrammetry scan of a truck textured for close-up renders and compositing.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784443068/ChatGPT_Image_Jul_19_2026_12_01_39_PM_ukthax.png",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443068/ChatGPT_Image_Jul_19_2026_12_01_39_PM_ukthax.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443079/tata_truck_qtprqf.webp",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443079/tata_truck_3_cwxmgm.webp",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443078/tata_truck_2_j0489s.webp",
    ],
    year: "2025",
    role: "Hard Surface Artist",
    software: ["Maya", "Substance Painter", "Marmoset Toolbag"],
    workflow: ["Photogrammetry", "Retopology", "Texturing", "Rendering"],
    behance: "https://www.behance.net/pateljenil1",
    artstation: "",
  },
];

type Project = (typeof projects)[0];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const project = useMemo(() => {
    return projects.find((p) => p.id === slug);
  }, [slug]);

  const projectIndex = useMemo(() => {
    return projects.findIndex((p) => p.id === slug);
  }, [slug]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const currentImages = useMemo(() => {
    if (!project) return [];
    return project.images && project.images.length > 0 ? project.images : [project.image];
  }, [project]);

  if (!project) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <button
              onClick={() => navigate("/portfolio")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition"
            >
              <ArrowLeft size={20} /> Back to Portfolio
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const navigateProject = (direction: number) => {
    const nextIndex = projectIndex + direction;
    if (nextIndex < 0 || nextIndex >= projects.length) return;
    navigate(`/portfolio/${projects[nextIndex].id}`);
    setActiveImageIndex(0);
    setIsFullscreen(false);
    setZoomLevel(1);
  };

  const handleImageMouseDown = (e: React.MouseEvent) => {
    if (!isFullscreen) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panX, y: e.clientY - panY });
  };

  const handleImageMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanX(e.clientX - dragStart.x);
    setPanY(e.clientY - dragStart.y);
  };

  const handleImageMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!isFullscreen) return;
    e.preventDefault();
    const newZoom = Math.min(3, Math.max(1, zoomLevel + (e.deltaY < 0 ? 0.2 : -0.2)));
    setZoomLevel(newZoom);
  };

  const handleSwipeImage = (direction: number) => {
    if (currentImages.length <= 1) return;
    setActiveImageIndex((value) => {
      const nextValue = value + direction;
      if (nextValue < 0) return currentImages.length - 1;
      if (nextValue >= currentImages.length) return 0;
      return nextValue;
    });
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.touches[0]?.clientX ?? null);
    setTouchEndX(null);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const endX = event.changedTouches[0]?.clientX ?? null;
    setTouchEndX(endX);
    if (touchStartX === null || endX === null) return;

    const delta = touchStartX - endX;
    if (Math.abs(delta) < 50) return;
    handleSwipeImage(delta > 0 ? 1 : -1);
    setTouchStartX(null);
    setTouchEndX(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
          setZoomLevel(1);
          setPanX(0);
          setPanY(0);
        } else {
          navigate("/portfolio");
        }
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((i) => (i === currentImages.length - 1 ? 0 : i + 1));
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((i) => (i === 0 ? currentImages.length - 1 : i - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, currentImages.length, navigate]);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-b from-white/5 via-black to-black"
      >
        {/* BACK BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/portfolio")}
          className="fixed left-4 top-4 z-40 flex min-h-[48px] items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3.5 py-2.5 text-white/80 backdrop-blur-md transition hover:bg-black/60 hover:text-white sm:left-6 sm:top-6 sm:px-4"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back</span>
        </motion.button>

        {/* HERO IMAGE SECTION */}
        <section className="relative w-full overflow-hidden bg-black/50 px-3 py-5 sm:px-5 sm:py-8 md:min-h-[90vh]">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex w-full items-center justify-center px-0 sm:p-6"
          >
            <div
              className={cn(
                "relative w-full max-w-none sm:max-w-7xl mx-auto",
                isDragging && "cursor-grabbing",
                !isDragging && isFullscreen && "cursor-zoom-out",
                !isDragging && !isFullscreen && "cursor-zoom-in"
              )}
              onWheel={handleWheel}
              onMouseDown={handleImageMouseDown}
              onMouseMove={handleImageMouseMove}
              onMouseUp={handleImageMouseUp}
              onMouseLeave={handleImageMouseUp}
            >
              <motion.img
                key={currentImages[activeImageIndex]}
                src={currentImages[activeImageIndex]}
                alt={`${project.title} - View ${activeImageIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mx-auto h-auto w-full rounded-[20px] object-contain shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:rounded-[24px]"
                style={{
                  scale: isFullscreen ? zoomLevel : 1,
                  x: isFullscreen ? panX : 0,
                  y: isFullscreen ? panY : 0,
                }}
                onDoubleClick={() => {
                  setIsFullscreen(!isFullscreen);
                  if (isFullscreen) {
                    setZoomLevel(1);
                    setPanX(0);
                    setPanY(0);
                  }
                }}
                onClick={() => {
                  if (!isDragging && !isFullscreen) {
                    setIsFullscreen(true);
                  }
                }}
              />
            </div>

            {/* ZOOM INDICATOR */}
            <AnimatePresence>
              {isFullscreen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-3 top-3 flex flex-col gap-2 sm:right-6 sm:top-6"
                >
                  <div className="rounded-lg border border-white/20 bg-black/60 px-3 py-2 text-sm text-white/80 backdrop-blur-md font-mono">
                    {Math.round(zoomLevel * 100)}%
                  </div>
                  <button
                    onClick={() => {
                      setZoomLevel(Math.min(3, zoomLevel + 0.5));
                    }}
                    className="rounded-lg border border-white/20 bg-black/60 p-3 min-w-[48px] min-h-[48px] text-white/80 backdrop-blur-md transition hover:bg-black/80 hover:text-white"
                  >
                    <ZoomIn size={18} />
                  </button>
                  <button
                    onClick={() => {
                      setZoomLevel(Math.max(1, zoomLevel - 0.5));
                    }}
                    className="rounded-lg border border-white/20 bg-black/60 p-3 min-w-[48px] min-h-[48px] text-white/80 backdrop-blur-md transition hover:bg-black/80 hover:text-white"
                  >
                    <ZoomOut size={18} />
                  </button>
                  <button
                    onClick={() => {
                      setIsFullscreen(false);
                      setZoomLevel(1);
                      setPanX(0);
                      setPanY(0);
                    }}
                    className="rounded-lg border border-white/20 bg-black/60 p-3 min-w-[48px] min-h-[48px] text-white/80 backdrop-blur-md transition hover:bg-black/80 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* IMAGE COUNTER */}
            {currentImages.length > 1 && (
              <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/60 px-3.5 py-2 text-sm font-mono text-white/80 backdrop-blur-md sm:bottom-6 sm:left-6 sm:px-4">
                {activeImageIndex + 1} / {currentImages.length}
              </div>
            )}

            {/* NAVIGATION ARROWS */}
            {currentImages.length > 1 && !isFullscreen && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveImageIndex((i) => (i === 0 ? currentImages.length - 1 : i - 1))}
                  className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur-md transition hover:bg-black/80 hover:text-white sm:left-4 sm:h-14 sm:w-14"
                >
                  <ChevronLeft size={28} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveImageIndex((i) => (i === currentImages.length - 1 ? 0 : i + 1))}
                  className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 backdrop-blur-md transition hover:bg-black/80 hover:text-white sm:right-4 sm:h-14 sm:w-14"
                >
                  <ChevronRight size={28} />
                </motion.button>
              </>
            )}
          </motion.div>
        </section>

        {/* THUMBNAIL GALLERY */}
        {currentImages.length > 1 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-white/10 bg-black/30 px-4 py-8 sm:px-8 sm:py-10"
          >
            <div className="mx-auto max-w-7xl">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-sm uppercase tracking-[0.3em] text-white/50 font-medium">Gallery</h3>
                <span className="text-xs text-white/30">{currentImages.length} views</span>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-3 sm:gap-4">
                {currentImages.map((image, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.08 }}
                    onClick={() => setActiveImageIndex(idx)}
                    className={cn(
                      "relative h-24 w-28 flex-shrink-0 overflow-hidden rounded-[16px] border-2 transition-all duration-300 sm:h-28 sm:w-36 md:h-32 md:w-44",
                      activeImageIndex === idx
                        ? "border-primary shadow-[0_0_24px_rgba(34,197,94,0.45)]"
                        : "border-white/15 hover:border-white/30"
                    )}
                  >
                    <img
                      src={image}
                      alt={`View ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                    {activeImageIndex === idx && (
                      <div className="absolute inset-0 border-2 border-primary rounded-lg" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* PROJECT INFORMATION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 bg-gradient-to-b from-black/50 to-black px-4 py-8 sm:px-8 sm:py-16"
        >
          <div className="mx-auto max-w-3xl space-y-8 sm:space-y-10">
            {/* TITLE & CATEGORY */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-1 w-8 rounded-full bg-primary" />
                <span className="text-xs uppercase tracking-[0.4em] text-primary/80 font-bold">
                  {project.category}
                </span>
              </div>
              <h1 className="font-heading text-[28px] font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-[15px] leading-7 text-white/70 sm:text-lg sm:leading-8">
                {project.description}
              </p>
            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <motion.div whileHover={{ y: -2 }} className="space-y-2 rounded-[18px] border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">Year</p>
                <p className="text-xl font-semibold text-white">{project.year}</p>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="space-y-2 rounded-[18px] border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">Role</p>
                <p className="text-lg font-semibold text-white/90">{project.role}</p>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="space-y-2 rounded-[18px] border border-white/10 bg-black/20 p-4 sm:col-span-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">Software & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {project.software.map((tool, idx) => (
                    <span key={idx} className="inline-flex min-h-[42px] items-center justify-center rounded-[12px] border border-primary/30 bg-primary/10 px-3.5 py-2 text-sm font-medium text-primary/90">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* WORKFLOW */}
            <div className="space-y-4 border-t border-white/10 pt-6 sm:pt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium">Workflow Process</p>
              <div className="flex flex-wrap gap-2">
                {project.workflow.map((step, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center gap-2"
                  >
                    <span className="rounded-[12px] border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/80 min-h-[40px]">
                      {step}
                    </span>
                    {idx < project.workflow.length - 1 && (
                      <span className="text-white/30">•</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:gap-4 sm:pt-8">
              {project.behance && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-14 flex items-center justify-center gap-2 rounded-[12px] border border-primary/40 bg-primary/20 font-semibold text-primary/90 backdrop-blur-sm transition hover:border-primary/60 hover:bg-primary/30"
                >
                  View on Behance <ExternalLink size={18} />
                </motion.a>
              )}
              {project.artstation && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.artstation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-14 flex items-center justify-center gap-2 rounded-[12px] border border-primary/40 bg-primary/20 font-semibold text-primary/90 backdrop-blur-sm transition hover:border-primary/60 hover:bg-primary/30"
                >
                  View on ArtStation <ExternalLink size={18} />
                </motion.a>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[14px] border border-white/20 bg-white/8 px-5 py-3 font-semibold text-white/90 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/12 sm:w-auto"
              >
                <Download size={18} /> Download Assets
              </motion.button>
            </div>

            {/* PROJECT NAVIGATION */}
            <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:gap-4 sm:pt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigateProject(-1)}
                disabled={projectIndex === 0}
                className={cn(
                  "flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[14px] border px-5 py-3 font-semibold transition sm:w-auto",
                  projectIndex === 0
                    ? "border-white/10 bg-white/5 text-white/30 cursor-not-allowed"
                    : "border-white/20 bg-white/8 text-white/80 hover:border-white/30 hover:bg-white/12"
                )}
              >
                <ArrowLeft size={18} /> Previous
              </motion.button>

              <div className="text-center">
                <p className="text-sm text-white/50">
                  <span className="text-primary font-bold">{projectIndex + 1}</span>
                  <span className="text-white/30"> / </span>
                  <span className="text-white/70">{projects.length}</span>
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigateProject(1)}
                disabled={projectIndex === projects.length - 1}
                className={cn(
                  "flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[14px] border px-5 py-3 font-semibold transition sm:w-auto",
                  projectIndex === projects.length - 1
                    ? "border-white/10 bg-white/5 text-white/30 cursor-not-allowed"
                    : "border-white/20 bg-white/8 text-white/80 hover:border-white/30 hover:bg-white/12"
                )}
              >
                Next <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </Layout>
  );
};

export default ProjectDetail;
