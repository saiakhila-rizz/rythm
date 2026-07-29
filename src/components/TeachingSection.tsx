import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const approaches = [
  "Clear explanation of concepts",
  "Regular practice guidance",
  "Continuous progress evaluation",
  "Performance and confidence development",
  "Encouragement of creativity and expression",
];

const TeachingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-primary/60 tracking-[0.4em] uppercase text-xs font-body mb-4">Our Approach</p>
          <h2 className="font-display text-4xl md:text-6xl font-light gold-gradient-text italic">
            How We Teach
          </h2>
        </motion.div>

        <div className="glass-card p-10 md:p-14 rounded-2xl gold-border-glow relative overflow-hidden">
          {/* Subtle musical notation background */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center">
            <span className="font-display text-[300px] text-primary">𝄞</span>
          </div>

          <p className="text-foreground/40 text-sm font-body font-light mb-10 text-center italic">
            Our goal is to ensure steady growth at every stage of learning.
          </p>

          <div className="space-y-0 relative">
            {/* Vertical rhythm line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

            {approaches.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.18,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="flex items-center gap-6 py-5 group"
              >
                {/* Beat dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{
                    delay: 0.6 + i * 0.18,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="relative z-10 shrink-0"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-700">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors duration-500" />
                  </div>
                </motion.div>
                <p className="text-foreground/60 font-body font-light text-base md:text-lg group-hover:text-foreground/80 transition-colors duration-500">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
