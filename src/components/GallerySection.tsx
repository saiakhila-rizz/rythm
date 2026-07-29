import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const images = [
  { src: gallery1, title: "Piano Lessons" },
  { src: gallery2, title: "Classroom Sessions" },
  { src: gallery3, title: "Young Pianists" },
  { src: gallery4, title: "Keyboard Practice" },
  { src: gallery5, title: "Student Performance" },
  { src: gallery6, title: "Music Together" },
  { src: gallery7, title: "Ensemble Learning" },
  { src: gallery8, title: "Stage Performance" },
  { src: gallery9, title: "Creative Expression" },
  { src: gallery10, title: "Guitar & Strings" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-primary/60 tracking-[0.4em] uppercase text-xs font-body mb-4">Gallery</p>
          <h2 className="font-display text-4xl md:text-6xl font-light gold-gradient-text italic">
            Moments of Music
          </h2>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
              className="group relative overflow-hidden rounded-xl break-inside-avoid cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-5">
                <div>
                  <p className="font-display text-lg italic text-foreground/90">{img.title}</p>
                  <div className="w-8 h-px bg-primary/50 mt-2" />
                </div>
              </div>
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30 transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
