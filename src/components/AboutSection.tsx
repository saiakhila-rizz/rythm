import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import trinityLogo from "@/assets/trinity-logo.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding relative staff-lines" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <p className="text-primary/60 tracking-[0.4em] uppercase text-xs font-body mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-6xl font-light gold-gradient-text italic">
            Where Music Meets Excellence
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-foreground/60 text-base md:text-lg leading-[1.9] font-body font-light mb-8">
              Rhythm Path Music School is a professional music academy dedicated to building strong musical foundations. We focus on rhythm, technique, and creative expression to help every student discover their unique musical voice.
            </p>
            <p className="text-foreground/60 text-base md:text-lg leading-[1.9] font-body font-light">
              Our structured curriculum takes students from beginners to advanced performers, nurturing discipline, confidence, and artistic growth at every stage of their journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 gold-border-glow">
              <div className="flex items-start gap-5">
                <Award className="text-primary shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-display text-xl font-medium text-foreground/90 mb-2 italic">Trinity College London</h3>
                  <p className="text-foreground/50 text-sm font-body font-light leading-relaxed">
                    We follow the Trinity College London syllabus, providing internationally recognized certification for all students.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center justify-center">
              <img
                src={trinityLogo}
                alt="Trinity College London"
                className="h-16 object-contain opacity-80"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["Rhythm", "Technique", "Expression", "Discipline"].map((v, i) => (
                <motion.div
                  key={v}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                  className="glass-card py-4 text-center text-primary/80 text-sm font-body tracking-wider"
                >
                  {v}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
