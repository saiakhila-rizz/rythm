import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import keyboardImg from "@/assets/keyboard.jpg";
import guitarImg from "@/assets/guitar.jpg";

const instruments = [
  {
    name: "Keyboard",
    description: "Master the piano and keyboard with structured lessons covering classical, contemporary, and improvisational techniques.",
    image: keyboardImg,
  },
  {
    name: "Guitar",
    description: "Learn acoustic and electric guitar from basics to advanced fingerstyle, strumming patterns, and music theory.",
    image: guitarImg,
  },
];

const InstrumentsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="instruments" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-primary/60 tracking-[0.4em] uppercase text-xs font-body mb-4">Instruments We Teach</p>
          <h2 className="font-display text-4xl md:text-6xl font-light gold-gradient-text italic">
            Choose Your Sound
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {instruments.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.25 }}
              className="group ripple-container glass-card-hover rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                {/* Sound ripple rings on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[0, 1, 2].map((ring) => (
                    <motion.div
                      key={ring}
                      className="absolute rounded-full border border-primary/30"
                      style={{
                        width: `${80 + ring * 60}px`,
                        height: `${80 + ring * 60}px`,
                      }}
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: [0.5, 1.2], opacity: [0.6, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: ring * 0.3,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-display text-3xl font-light text-foreground/90 mb-3 italic">{inst.name}</h3>
                <p className="text-foreground/50 font-body font-light text-sm leading-relaxed">{inst.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstrumentsSection;
