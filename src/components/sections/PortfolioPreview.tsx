import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const showreelVideo = "/showreel.mp4";

export function PortfolioPreview() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-10 md:py-16 lg:py-18">
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-4 max-w-3xl text-center md:mb-5"
        >
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:text-sm">
            Featured Work
          </span>

          <h2 className="font-heading mb-2 text-3xl font-bold sm:text-4xl lg:text-[2.75rem]">
            <span className="text-gradient">2026 Showreel</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-[15px] md:text-base lg:text-[17px]">
            A collection of my best 3D modeling, texturing, and rendering projects, showcasing my skills in creating high-quality game-ready and cinematic assets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -4, scale: 1.01, boxShadow: "0 0 0 1px rgba(34,197,94,0.18), 0 24px 70px rgba(0,0,0,0.45)" }}
          className="mx-auto w-full max-w-[780px]"
        >
          <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#111111]/90 p-1.5 shadow-[0_16px_50px_rgba(0,0,0,0.3)] backdrop-blur-sm sm:p-2 md:p-3">
            <div className="group relative overflow-hidden rounded-[16px] bg-black">
              {!isPlaying ? (
                <>
                  <img
                    src="/placeholder.svg"
                    alt="3D artist showreel preview"
                    loading="lazy"
                    className="block aspect-video w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85 backdrop-blur-sm">
                    2026 Showreel
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center transition-all duration-300 hover:bg-black/10"
                    aria-label="Play showreel"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_0_35px_rgba(0,0,0,0.35)] transition duration-300 group-hover:scale-105 sm:h-20 sm:w-20">
                      <Play size={28} className="ml-1 sm:size-32" />
                    </span>
                  </button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  <video
                    className="block aspect-video w-full rounded-[16px] object-cover"
                    src={showreelVideo}
                    autoPlay
                    muted
                    loop
                    controls
                    playsInline
                    preload="metadata"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-4 flex max-w-[780px] flex-col gap-2 rounded-[14px] border border-white/10 bg-white/5 px-3 py-3 text-center text-xs text-muted-foreground backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-sm"
        >
          <div>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/55">Software</p>
            <p className="text-foreground">Maya • Substance Painter • Marmoset • Photoshop</p>
          </div>
          <div className="h-px w-full bg-white/10 sm:hidden" />
          <div>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/55">Duration</p>
            <p className="text-foreground">01:42</p>
          </div>
          <div className="h-px w-full bg-white/10 sm:hidden" />
          <div>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/55">Projects</p>
            <p className="text-foreground">18+</p>
          </div>
          <div className="h-px w-full bg-white/10 sm:hidden" />
          <div>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/55">Category</p>
            <p className="text-foreground">3D Artist & 3D Modeler</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
