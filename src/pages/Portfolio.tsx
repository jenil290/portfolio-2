import React, { useEffect, useMemo, useState, useTransition } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ExternalLink, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import useWindowSize from "@/hooks/use-window-size";

// 3D Art & Animation
import sniperRifle from "@/assets/portfolio/3d-sniper-rifle.png";
import bombDevice from "@/assets/portfolio/3d-bomb-device.png";
import steampunkComputer from "@/assets/portfolio/3d-steampunk-computer.png";
import modularCityImg from "@/assets/project/3d/low poly  city/low poly  city.jpg";
import tataTruckImg from "@/assets/project/3d/tata truck/tata truck-Camera.jpg";
import lowPolyCityImg from "@/assets/project/3d/camera/camera  (2).png";
import launcher from "@/assets/project/3d/loncher/1.png";

// Brand Identity
import aaharBranding from "@/assets/portfolio/branding-aahar-spices.png";
import FabullaBranding from "@/assets/project/branding/Fabulla.jpeg";
import LotuscafeBranding from "@/assets/project/branding/Lotus cafe.png";

// Illustration's
import wizard1 from "@/assets/portfolio/character-wizard-1.png";
import wizard2 from "@/assets/project/illustation/7564727.jpg";
import wizard3 from "@/assets/project/illustation/7595238.jpg";
import wizard4 from "@/assets/project/illustation/drowing3.png";
import wizard5 from "@/assets/project/illustation/drowing2.png";
import wizard6 from "@/assets/project/illustation/animal mandala.jpg";
import wizard7 from "@/assets/project/illustation/digital painting.png";

//Graphics and social media design
import graphics1 from "@/assets/project/graphics/Mockup.jpg";
import graphics2 from "@/assets/project/graphics/packging.jpg";
import graphics3 from "@/assets/project/graphics/5page.jpg";
import graphics4 from "@/assets/project/graphics/3 page.jpg";
import graphics5 from "@/assets/project/graphics/social media poster.png";
import graphics6 from "@/assets/project/graphics/packging2.jpeg";
import graphics7 from "@/assets/project/graphics/Poster D_Adajan_CM_Surat _Jenil Patel.jpg";

const categories = [
  "3D Art & Animation",
  "Brand Identity",
  "Illustration's",
  "Graphics and social media design",
  "All",
];

const projects = [
  {
    title: "Sci-Fi Concept Rifle",
    category: "3D Art & Animation",
    description: "A high-quality futuristic sci-fi energy rifle designed to showcase advanced hard-surface modeling, material creation, and realistic texturing.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784442392/ChatGPT_Image_Jul_19_2026_11_51_12_AM_ml6lic.png",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784442392/ChatGPT_Image_Jul_19_2026_11_51_12_AM_ml6lic.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784441492/3979e38a-af1d-4b3a-91e5-dd23c48f0581_jb4bud.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784441574/ChatGPT_Image_Jul_19_2026_11_37_58_AM_altjme.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784441575/ChatGPT_Image_Jul_19_2026_11_37_47_AM_p3savv.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784441721/90c1b2ea-67e5-41b0-8d08-841ff08b31ae_mocui8.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784441575/ChatGPT_Image_Jul_19_2026_11_37_47_AM_p3savv.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784441570/4bcec1fc-2420-4318-bf77-a86dddba0962_og5cg8.png",

    ],
    year: "2024",
    role: "3D Asset Artist",
    software: ["Maya", "Substance Painter", "Marmoset Toolbag"],
  },
  {
    title: "Military Bomb Device Prop",
    category: "3D Art & Animation",
    description: "A high-quality futuristic explosive device prop created to showcase advanced hard-surface modeling, PBR texturing, and cinematic rendering.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784442849/ChatGPT_Image_Jul_19_2026_11_56_45_AM_cha07t.png",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784442849/ChatGPT_Image_Jul_19_2026_11_56_45_AM_cha07t.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784442850/bomb_1_twaszy.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784442851/bomb_2_io11j3.jpg",
    ],
    year: "2024",
    role: "Hard Surface Artist",
    software: ["Maya", "Substance Painter", "Marmoset Toolbag"],
  },
  {
    title: "Steampunk Computer Machine",
    category: "3D Art & Animation",
    description: "A retro-futuristic vintage computer concept showcasing intricate hard-surface modeling, premium PBR texturing, and cinematic rendering.",
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
  },
  {
    title: "Rustic Tata Cargo Truck",
    category: "3D Art & Animation",
    description: "A highly detailed vintage Tata cargo truck showcasing realistic hard-surface modeling, authentic weathering, and production-quality PBR texturing.",
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
  },
  {
    title: "IAF O71 FIGHTER JET",
    category: "3D Art & Animation",
    description: "A futuristic fighter jet concept showcasing advanced hard-surface modeling, precision detailing, and cinematic PBR rendering.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784443504/ChatGPT_Image_Jul_19_2026_11_19_24_AM_jkpdzw.png",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443504/ChatGPT_Image_Jul_19_2026_11_19_24_AM_jkpdzw.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443874/IAF_071_4_vhnedm.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443875/IAF_071_2_wrhwwv.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443865/IAF_071_1_dakwmi.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443813/IAF_071_3_k9dscj.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443868/4-Camera_2_tsxpyu.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443867/7-Camera_2_pp8qoe.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443819/3-Camera_2_zmxxnd.png",
    ],
    year: "2026",
    role: "Hard Surface Artist",
    software: ["Maya", "Substance Painter", "Marmoset Toolbag"],
  },
  {
    title: "Pushpak Viman ",
    category: "3D Art & Animation",
    description: "A highly detailed Pushpak Viman concept inspired by Indian mythology, showcasing intricate hard-surface modeling, ornamental craftsmanship, and cinematic PBR rendering.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784445104/111_etqz0z.png",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784445104/111_etqz0z.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443079/tata_truck_qtprqf.webp",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443079/tata_truck_3_cwxmgm.webp",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784443078/tata_truck_2_j0489s.webp",
    ],
    year: "2025",
    role: "Hard Surface Artist",
    software: ["Maya", "Substance Painter", "Marmoset Toolbag"],
  },
  {
    title: "Twin-Barrel Mechanical Turret",
    category: "3D Art & Animation",
    description: "A highly detailed fictional twin-barrel mechanical turret created to showcase advanced hard-surface modeling, layered weathering, and cinematic PBR rendering.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784447045/ChatGPT_Image_Jul_19_2026_01_11_55_PM_gmvgrl.png",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447045/ChatGPT_Image_Jul_19_2026_01_11_55_PM_gmvgrl.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447044/Machine_Gun_2_ocutuo.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447044/Machine_Gun_2_ocutuo.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447043/Machine_Gun_3_hikhzs.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447045/Machine_Gun_5_oxkq33.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447047/Machine_Gun_4_jxwaxn.png",
    ],
    year: "2025",
    role: "Hard Surface Artist",
    software: ["Maya", "Substance Painter", "Marmoset Toolbag"],
  },
  {
    title: "VINTAGE LARGE FORMAT CAMERA",
    category: "3D Art & Animation",
    description: "A highly detailed vintage large-format camera created to showcase precision hard-surface modeling, authentic materials, and cinematic PBR rendering.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784447649/ChatGPT_Image_Jul_19_2026_01_18_02_PM_xivtwi.png",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447649/ChatGPT_Image_Jul_19_2026_01_18_02_PM_xivtwi.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447303/IMG_20260201_222855_331_y7whcs.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447646/IMG_20260201_222852_628_hby8ea.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447646/IMG_20260201_222848_481_t3omlx.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447646/IMG_20260201_222850_321_c3lsc1.jpg",
    ],
    year: "2025",
    role: "Hard Surface Artist",
    software: ["Maya", "Substance Painter", "Marmoset Toolbag"],
  },
  {
    title: "Aetherlock MK-I",
    category: "3D Art & Animation",
    description: "A high-detail steampunk sci-fi rifle concept showcasing intricate hard-surface modeling, mechanical detailing, and cinematic PBR rendering.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784447926/ChatGPT_Image_Jul_19_2026_01_26_48_PM_bxb58w.png",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447926/ChatGPT_Image_Jul_19_2026_01_26_48_PM_bxb58w.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447925/mechanical_sniper2_qt3uxm.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447923/mechanical_sniper1_xhoo8b.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447921/mechanical_sniper6_rgtal6.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447920/mechanical_sniper4_afjika.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447924/mechanical_sniper3_pkghbh.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784447922/mechanical_sniper5_jiaqpz.jpg",
    ],
    year: "2025",
    role: "Hard Surface Artist",
    software: ["Maya", "Substance Painter", "Marmoset Toolbag"],
  },

  {
    title: "Aahar Organic Spices Branding",
    category: "Brand Identity",
    description: "Complete brand identity design for Aahar Organic Spices including logo variations, typography system, color palette, and brand guidelines featuring traditional Indian motifs.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771158588/Aahar_hkmrdx.jpg",
    images: ["https://res.cloudinary.com/dywgvus16/image/upload/v1771158588/Aahar_hkmrdx.jpg"],
    year: "2024",
    role: "Brand Designer",
    software: ["Illustrator", "Photoshop", "InDesign"],
  },
  {
    title: "Fbulla Diamond Branding",
    category: "Brand Identity",
    description: "Complete brand identity design for Fbulla Diamond including logo variations, typography system, color palette, and brand guidelines featuring traditional Indian motifs.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771158583/Fabulla_slj7kf.jpg",
    images: ["https://res.cloudinary.com/dywgvus16/image/upload/v1771158583/Fabulla_slj7kf.jpg"],
    year: "2024",
    role: "Visual Identity Designer",
    software: ["Illustrator", "Photoshop"],
  },
  {
    title: "Lotus Cafe Branding",
    category: "Brand Identity",
    description: "Complete brand identity design for Lotus Cafe including logo variations, typography system, color palette, and brand guidelines featuring traditional Indian motifs.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771158585/Lotus_cafe_sxubwx.png",
    images: ["https://res.cloudinary.com/dywgvus16/image/upload/v1771158585/Lotus_cafe_sxubwx.png"],
    year: "2023",
    role: "Brand Designer",
    software: ["Illustrator", "Photoshop"],
  },
  {
    title: "Chromatic Harmony",
    category: "Illustration's",
    description: "A vibrant abstract portrait celebrating diversity, individuality, and modern geometric expression through bold colors, clean linework, and contemporary pop-art aesthetics.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771230496/7564727_nhmtqd.jpg",
    images: ["https://res.cloudinary.com/dywgvus16/image/upload/v1771230496/7564727_nhmtqd.jpg"],
    year: "2024",
    role: "Illustrator",
    software: ["Procreate", "Photoshop"],
  },
  {
    title: "Crimson Oni",
    category: "Illustration's",
    description: "A bold stylized Oni warrior illustration that fuses Japanese mythology with contemporary geometric design, vibrant colors, and dynamic visual storytelling.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771230496/drowing3_dzrzge.png",
    images: ["https://res.cloudinary.com/dywgvus16/image/upload/v1771230496/drowing3_dzrzge.png"],
    year: "2023",
    role: "Character Illustrator",
    software: ["Procreate", "Clip Studio Paint"],
  },
  {
    title: "Sacred Mosaic",
    category: "Illustration's",
    description: "A stylized geometric portrait series that blends spiritual symbolism, cultural heritage, and contemporary digital art through vibrant colors and mosaic-inspired compositions.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771230497/digital_painting_t7kuom.png",
    images: ["https://res.cloudinary.com/dywgvus16/image/upload/v1771230497/digital_painting_t7kuom.png"],
    year: "2023",
    role: "Illustrator",
    software: ["Photoshop", "Illustrator"],
  },
  {
    title: "Celestial Owl",
    category: "Illustration's",
    description: "A vibrant mandala-inspired owl illustration that combines intricate ornamental patterns, bold color harmony, and symmetrical design to symbolize wisdom, intuition, and creativity.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1771230497/animal_mandala_bcbhkn.jpg",
    images: ["https://res.cloudinary.com/dywgvus16/image/upload/v1771230497/animal_mandala_bcbhkn.jpg"],
    year: "2022",
    role: "Concept Artist",
    software: ["Photoshop", "Wacom"],
  },
  {
    title: "Silent Stalker",
    category: "Illustration's",
    description: "A stylized jungle predator illustration capturing the stealth, power, and elegance of a wild big cat through bold shapes, vibrant colors, and contemporary digital design.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784449164/drowing2_juznmd.png",
    images: ["https://res.cloudinary.com/dywgvus16/image/upload/v1784449164/drowing2_juznmd.png"],
    year: "2022",
    role: "Illustrator",
    software: ["Illustrator", "Photoshop"],
  },
  {
    title: "Rhythmic Harmony",
    category: "Illustration's",
    description: "A vibrant geometric illustration celebrating the harmony of music and human expression through bold shapes, contemporary linework, and playful modern color palettes.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784449162/7595238_vgqdjq.jpg",
    images: ["https://res.cloudinary.com/dywgvus16/image/upload/v1784449162/7595238_vgqdjq.jpg"],
    year: "2022",
    role: "Illustrator",
    software: ["Photoshop", "Procreate"],
  },
  {
    title: "Arcane Alchemist",
    category: "Illustration's",
    description: "A charming stylized wizard character blending whimsical fantasy, vibrant colors, and expressive cartoon design with magical storytelling and playful personality.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784449319/character-wizard-1_vdlvpd.png",
    images: ["https://res.cloudinary.com/dywgvus16/image/upload/v1784449319/character-wizard-1_vdlvpd.png"],
    year: "2023",
    role: "Digital Painter",
    software: ["Photoshop", "Procreate"],
  },
  {
    title: "Paper Bag Design",
    category: "Graphics and social media design",
    description: "Minimal eco-friendly paper bag design featuring herbal illustrations, clean layout, natural colors, and organic branding aesthetics.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784449783/Mockup_dgoaqs.jpg",
    images: ["https://res.cloudinary.com/dywgvus16/image/upload/v1784449783/Mockup_dgoaqs.jpg"],
    year: "2024",
    role: "Packaging Designer",
    software: ["Illustrator", "Photoshop"],
  },
  {
    title: "Packaging Design",
    category: "Graphics and social media design",
    description: "Premium pepper packaging design featuring clean typography, warm colors, product illustration, and modern retail shelf appeal.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784449775/packging2_frkoan.jpg",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784449775/packging2_frkoan.jpg",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784449776/packging_o98a20.jpg",
    ],
    year: "2024",
    role: "Packaging Designer",
    software: ["Illustrator", "Photoshop"],
  },
  {
    title: "Social Media Post Design",
    category: "Graphics and social media design",
    description: "Warm organic spice branding post highlighting natural ingredients, appetizing food, earthy tones, and inviting promotional message.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784449780/social_media_poster_ks8ngh.png",
    images: [
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784449780/social_media_poster_ks8ngh.png",
      "https://res.cloudinary.com/dywgvus16/image/upload/v1784449775/5page_jclfyx.jpg",
    ],
    year: "2023",
    role: "Social Media Designer",
    software: ["Photoshop", "Canva"],
  },
  {
    title: "Movie Poster Design",
    category: "Graphics and social media design",
    description: "Futuristic Atlas poster blending human and machine forms with geometric design, cinematic typography, aesthetics overall.",
    image: "https://res.cloudinary.com/dywgvus16/image/upload/v1784449776/Poster_D_Adajan_CM_Surat__Jenil_Patel_cp2wn2.jpg",
    images: ["https://res.cloudinary.com/dywgvus16/image/upload/v1784449776/Poster_D_Adajan_CM_Surat__Jenil_Patel_cp2wn2.jpg"],
    year: "2022",
    role: "Poster Designer",
    software: ["Photoshop", "Illustrator"],
  },
];

type Project = (typeof projects)[0];

const ProjectCard = React.memo(function ProjectCard({ project, onSelect, index }: { project: Project; onSelect: (p: Project) => void; index: number }) {
  const [imageAspect, setImageAspect] = React.useState<number>(4 / 3);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      type="button"
      onClick={() => onSelect(project)}
      className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-white/2 text-left shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
      style={{ aspectRatio: imageAspect }}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        onLoad={(e) => {
          const img = e.currentTarget;
          setImageAspect(img.naturalWidth / img.naturalHeight);
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 ease-out md:opacity-0 md:group-hover:opacity-100" />

      <div className="absolute bottom-4 left-4 z-20 pointer-events-none md:hidden">
        <span className="inline-flex w-fit items-center rounded-full border border-primary/35 bg-primary/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-primary/90 backdrop-blur-md">
          {project.category}
        </span>
      </div>

      <div className="absolute left-5 top-5 z-20 hidden pointer-events-none transition-all duration-300 ease-out md:block lg:left-5 lg:top-5 md:translate-y-[-8px] md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
        <span className="inline-flex w-fit items-center rounded-full border border-primary/35 bg-primary/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-primary/90 backdrop-blur-md">
          {project.category}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between p-4 transition-all duration-300 ease-out sm:p-5 md:p-6 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
        <div className="max-w-[92%]">
          <h3 className="font-heading line-clamp-2 text-lg font-bold leading-tight text-white sm:text-xl">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-end p-4 sm:p-5 md:p-6">
        <span className="rounded-full border border-white/25 bg-white/10 p-2.5 text-white/90 backdrop-blur-md transition group-hover:translate-x-1 group-hover:bg-white/20">
          <ArrowRight size={18} />
        </span>
      </div>
    </motion.button>
  );
});

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageAspect, setImageAspect] = useState(4 / 3);
  const [isPending, startTransition] = useTransition();
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const { width } = useWindowSize();

  const currentImages = useMemo(() => {
    if (!selectedProject) return [];
    return selectedProject.images && selectedProject.images.length > 0 ? selectedProject.images : [selectedProject.image];
  }, [selectedProject]);

  const closeViewer = () => {
    setSelectedProject(null);
    setSelectedProjectIndex(null);
    setActiveImageIndex(0);
    setIsFullscreen(false);
    setZoomLevel(1);
  };

  const handleSwipeImage = (direction: number) => {
    if (!selectedProject || currentImages.length <= 1) return;
    setActiveImageIndex((value) => {
      const nextValue = value + direction;
      if (nextValue < 0) return currentImages.length - 1;
      if (nextValue >= currentImages.length) return 0;
      return nextValue;
    });
    setIsFullscreen(false);
    setZoomLevel(1);
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

  const openProject = (project: Project) => {
    const index = filteredProjects.findIndex((item) => item.title === project.title);
    setSelectedProject(project);
    setSelectedProjectIndex(index >= 0 ? index : null);
    setActiveImageIndex(0);
    setIsFullscreen(false);
    setZoomLevel(1);
  };

  const navigateProject = (direction: number) => {
    if (selectedProjectIndex === null || filteredProjects.length === 0) return;
    const nextIndex = selectedProjectIndex + direction;
    if (nextIndex < 0 || nextIndex >= filteredProjects.length) return;
    const nextProject = filteredProjects[nextIndex];
    setSelectedProject(nextProject);
    setSelectedProjectIndex(nextIndex);
    setActiveImageIndex(0);
    setIsFullscreen(false);
    setZoomLevel(1);
  };

  useEffect(() => {
    if (!selectedProject) return;

    const stillVisible = filteredProjects.some((project) => project.title === selectedProject.title);
    if (!stillVisible) {
      closeViewer();
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeViewer();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        navigateProject(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigateProject(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredProjects, selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <Layout>
      <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute -left-1/2 -top-1/2 h-full w-full rounded-full bg-gradient-to-br from-primary/5 via-transparent to-transparent blur-3xl" />
          <div className="absolute -right-1/2 top-0 h-full w-full rounded-full bg-gradient-to-bl from-cyan-500/3 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-5 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary/90 backdrop-blur-sm sm:mb-6">
              ✨ My Work
            </span>

            <h1 className="font-heading mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
              Creative <span className="text-gradient">Portfolio</span>
            </h1>

            <p className="mx-auto max-w-3xl text-base leading-7 text-white/70 sm:text-lg md:text-xl">
              A curated collection of premium 3D assets, brand identities, character illustrations, and visual design work
              created with meticulous attention to detail and artistic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="section-container">
          {/* FILTER BUTTONS */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8 flex flex-wrap justify-center gap-2 px-1 sm:mb-12 sm:gap-3">
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => startTransition(() => setActiveCategory(category))}
                className={cn(
                  "min-h-[44px] rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-300 sm:px-6 sm:py-2.5",
                  activeCategory === category
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_0_24px_rgba(34,197,94,0.3)]"
                    : "border-white/15 bg-white/8 text-white/80 hover:border-white/30 hover:bg-white/12"
                )}
                aria-pressed={activeCategory === category}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-7">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} onSelect={openProject} index={index} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="mx-auto max-w-md rounded-[28px] border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-10 backdrop-blur-lg">
                  <h3 className="font-heading mb-3 text-2xl font-bold text-white">No projects yet</h3>
                  <p className="text-white/70">
                    There are no projects in this category right now. More work will be added soon.
                  </p>
                </div>
              </div>
            )}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-14 text-center sm:mt-20">
            <div className="mx-auto max-w-2xl rounded-[24px] border border-white/10 bg-gradient-to-br from-white/8 via-white/3 to-white/5 p-6 backdrop-blur-lg sm:p-10">
              <h3 className="font-heading mb-4 text-2xl font-bold text-white sm:text-3xl">Explore My Full Portfolio</h3>
              <p className="mb-8 text-base leading-7 text-white/70 sm:text-lg">
                This showcase highlights my most significant projects. Visit my Behance profile to see the complete collection of my work.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.behance.net/pateljenil1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[16px] border border-primary/40 bg-gradient-to-r from-primary/20 to-primary/10 px-6 py-3.5 font-semibold text-primary/90 backdrop-blur-sm transition hover:border-primary/60 hover:from-primary/30 sm:px-8"
              >
                View Full Behance Portfolio <ExternalLink size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/80 px-3 py-4 backdrop-blur-xl sm:px-6 lg:px-8"
            onClick={closeViewer}
          >
            <motion.div
              initial={{ y: 30, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 30, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mx-auto flex min-h-full max-w-6xl items-center justify-center"
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={`${selectedProject.title} project preview`}
                className="relative w-full overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/8 via-white/3 to-white/5 shadow-[0_40_150px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:rounded-[32px]"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1.2fr)_380px] xl:grid-cols-[minmax(0,1.2fr)_420px]">
                  {/* LEFT SIDE - IMAGE VIEWER */}
                  <div className="relative border-b border-white/10 bg-black/20 p-3 sm:p-5 lg:border-b-0 lg:border-r lg:p-8 xl:p-10">
                    {/* PROJECT COUNTER */}
                    <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3.5 py-2 text-sm font-medium text-white/80 backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:py-2.5">
                      <span className="text-primary font-semibold">{(selectedProjectIndex ?? 0) + 1}</span>
                      <span className="text-white/40">/</span>
                      <span>{filteredProjects.length}</span>
                    </div>

                    {/* CLOSE BUTTON */}
                    <button
                      type="button"
                      aria-label="Close project viewer"
                      className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80 backdrop-blur-md transition hover:bg-black/60 hover:text-white sm:right-6 sm:top-6 sm:h-12 sm:w-12"
                      onClick={closeViewer}
                    >
                      <X size={20} className="sm:size-24" />
                    </button>

                    {/* MAIN IMAGE */}
                    <div
                      className="mt-12 flex items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-black/35 p-2 sm:mt-14 sm:rounded-[28px] sm:p-3 lg:p-6"
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                    >
                      <div
                        className="relative flex w-full max-w-full items-center justify-center"
                        style={{ aspectRatio: imageAspect, maxHeight: "74vh", maxWidth: "100%" }}
                      >
                        <motion.img
                          key={currentImages[activeImageIndex] ?? selectedProject.image}
                          src={currentImages[activeImageIndex] ?? selectedProject.image}
                          alt={`${selectedProject.title} view ${activeImageIndex + 1}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="h-full w-full object-contain"
                          onLoad={(event) => {
                            const img = event.currentTarget;
                            const ratio = img.naturalWidth && img.naturalHeight
                              ? img.naturalWidth / img.naturalHeight
                              : 4 / 3;
                            setImageAspect(ratio);
                          }}
                        />
                      </div>
                    </div>

                    {/* THUMBNAIL GALLERY */}
                    {currentImages.length > 1 && (
                      <div className="mt-4 space-y-3 sm:mt-6">
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">Gallery</p>
                        <div className="flex gap-2 overflow-x-auto pb-2 sm:gap-3">
                          {currentImages.map((image, index) => (
                            <motion.button
                              key={`${selectedProject.title}-${image}`}
                              type="button"
                              whileHover={{ scale: 1.05 }}
                              onClick={() => {
                                setActiveImageIndex(index);
                                setIsFullscreen(false);
                                setZoomLevel(1);
                              }}
                              className={cn(
                                "relative h-20 w-24 flex-shrink-0 overflow-hidden rounded-[16px] border-2 transition-all duration-300 sm:h-24 sm:w-28 md:h-28 md:w-32",
                                activeImageIndex === index
                                  ? "border-primary shadow-[0_0_24px_rgba(34,197,94,0.35)]"
                                  : "border-white/15 hover:-translate-y-0.5 hover:border-white/30"
                              )}
                            >
                              <img src={image} alt={`${selectedProject.title} thumbnail ${index + 1}`} className="h-full w-full object-contain" />
                              {activeImageIndex === index && (
                                <div className="absolute inset-0 border-2 border-primary rounded-[16px]" />
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* NAVIGATION ARROWS */}
                    {currentImages.length > 1 && (
                      <div className="mt-4 flex items-center justify-between gap-3 sm:mt-6 sm:gap-4">
                        <button
                          type="button"
                          aria-label="Previous image"
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/80 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-black/55 hover:text-white sm:h-14 sm:w-14"
                          onClick={() => {
                            setActiveImageIndex((value) => (value === 0 ? currentImages.length - 1 : value - 1));
                            setIsFullscreen(false);
                            setZoomLevel(1);
                          }}
                        >
                          <ChevronLeft size={22} className="sm:size-[24px]" />
                        </button>
                        <span className="text-sm font-medium tracking-[0.2em] text-white/55">
                          {activeImageIndex + 1} / {currentImages.length}
                        </span>
                        <button
                          type="button"
                          aria-label="Next image"
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/80 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-black/55 hover:text-white sm:h-14 sm:w-14"
                          onClick={() => {
                            setActiveImageIndex((value) => (value === currentImages.length - 1 ? 0 : value + 1));
                            setIsFullscreen(false);
                            setZoomLevel(1);
                          }}
                        >
                          <ChevronRight size={22} className="sm:size-[24px]" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* RIGHT SIDE - PROJECT INFORMATION */}
                  <div className="flex flex-col justify-between overflow-y-auto p-4 sm:p-6 lg:max-h-[90vh] lg:p-8 xl:p-10">
                    {/* PROJECT DETAILS */}
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                      <div className="space-y-5 sm:space-y-7">
                        {/* CATEGORY & TITLE */}
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="h-1 w-8 rounded-full bg-primary" />
                            <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary/90">
                              {selectedProject.category}
                            </p>
                          </div>
                          <h2 className="font-heading text-2xl font-bold leading-[1.1] text-white sm:text-3xl lg:text-4xl">
                            {selectedProject.title}
                          </h2>
                          <p className="text-[15px] leading-7 text-white/72 sm:text-base">
                            {selectedProject.description}
                          </p>
                        </div>

                        {/* INFO GRID */}
                        <div className="grid grid-cols-1 gap-3">
                          <motion.div whileHover={{ scale: 1.01 }} className="rounded-[18px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">Year</p>
                            <p className="mt-2 text-lg font-semibold text-white">{selectedProject.year}</p>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.01 }} className="rounded-[18px] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">Role</p>
                            <p className="mt-2 text-lg font-semibold text-white">{selectedProject.role}</p>
                          </motion.div>
                        </div>

                        {/* SOFTWARE */}
                        <motion.div whileHover={{ scale: 1.01 }} className="rounded-[18px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-5">
                          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-white/50 sm:mb-4">Software & Tools</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.software.map((tool) => (
                              <span key={tool} className="rounded-full border border-primary/40 bg-primary/15 px-3.5 py-2 text-sm font-medium text-primary/90 backdrop-blur-sm">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* ACTION BUTTONS & NAVIGATION */}
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }} className="mt-6 space-y-4 border-t border-white/10 pt-5 sm:mt-8 sm:pt-6">
                      <div className="flex flex-col gap-3">
                        <a
                          href="https://www.behance.net/pateljenil1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[14px] border border-primary/40 bg-primary/20 px-5 py-3 text-sm font-semibold text-primary/90 backdrop-blur-sm transition duration-300 hover:border-primary/60 hover:bg-primary/30"
                        >
                          View on Behance <ExternalLink size={16} />
                        </a>
                        <button
                          type="button"
                          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[14px] border border-white/15 bg-white/8 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/12"
                        >
                          Download Assets
                        </button>
                      </div>

                      {/* PROJECT NAVIGATION */}
                      <div className="flex gap-3 pt-1 sm:pt-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          type="button"
                          aria-label="Previous project"
                          className="flex h-12 flex-1 items-center justify-center rounded-[14px] border border-white/15 bg-white/8 text-white/70 backdrop-blur-sm transition hover:bg-white/12 hover:text-white sm:h-14"
                          onClick={() => navigateProject(-1)}
                          disabled={selectedProjectIndex === 0}
                        >
                          <ArrowLeft size={20} className="mx-auto" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          type="button"
                          aria-label="Next project"
                          className="flex h-12 flex-1 items-center justify-center rounded-[14px] border border-white/15 bg-white/8 text-white/70 backdrop-blur-sm transition hover:bg-white/12 hover:text-white sm:h-14"
                          onClick={() => navigateProject(1)}
                          disabled={selectedProjectIndex === filteredProjects.length - 1}
                        >
                          <ArrowRight size={20} className="mx-auto" />
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Portfolio;
