import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const grades = [
  "Grade 1", "Grade 2", "Grade 3", "Grade 4",
  "Grade 5", "Grade 6", "Grade 7", "Grade 8",
];

const TrinitySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="trinity" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-primary/60 tracking-[0.4em] uppercase text-xs font-body mb-4">Trinity College London</p>
          <h2 className="font-display text-4xl md:text-6xl font-light gold-gradient-text italic mb-5">
            Exam Grades
          </h2>
          <p className="text-foreground/40 font-body font-light max-w-lg mx-auto text-sm tracking-wide">
            Practical & Theory training for internationally recognized musical qualifications
          </p>
        </motion.div>

        {/* Musical staircase layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Staff lines behind */}
          <div className="absolute inset-0 pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-primary/[0.06]"
                style={{ top: `${15 + i * 18}%` }}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
            {grades.map((grade, i) => (
              <motion.div
                key={grade}
                initial={{ opacity: 0, y: 40 + (7 - i) * 8, scale: 0.85 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="group"
                style={{ marginTop: `${(7 - i) * 8}px` }}
              >
                <div className="glass-card-hover p-5 md:p-6 text-center relative overflow-hidden">
                  {/* Glowing orb */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full animate-pulse-soft pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, hsla(43, 66%, 52%, 0.15) 0%, transparent 70%)`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                  <div className="relative z-10">
                    <span className="font-display text-3xl text-primary/20 group-hover:text-primary/40 transition-colors duration-700">
                      {i + 1}
                    </span>
                    <p className="font-display text-base md:text-lg text-foreground/70 group-hover:text-foreground/90 transition-colors duration-500 mt-1 italic">
                      {grade}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrinitySection;
