import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Music2, Users, TrendingUp, Mic, Shield } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Structured & International Curriculum", desc: "We follow the Trinity College London syllabus, providing globally recognised training and certification." },
  { icon: Music2, title: "Strong Musical Foundations", desc: "We focus deeply on rhythm, technique, and fundamentals — building confident and capable musicians." },
  { icon: Users, title: "Personalised Attention", desc: "Each student receives individual guidance to ensure steady progress and clarity in learning." },
  { icon: TrendingUp, title: "Progressive Learning Approach", desc: "Step-by-step structured lessons designed for beginners to advanced levels." },
  { icon: Mic, title: "Performance & Confidence Building", desc: "Students are encouraged to develop stage confidence and musical expression." },
  { icon: Shield, title: "Disciplined & Professional Environment", desc: "We promote consistency, practice habits, and musical excellence." },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="section-padding relative" ref={ref}>
      {/* Musical staff background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-primary/[0.04]"
            style={{ top: `${20 + i * 12}%` }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-primary/60 tracking-[0.4em] uppercase text-xs font-body mb-4">Why Choose Us</p>
          <h2 className="font-display text-4xl md:text-6xl font-light gold-gradient-text italic">
            The Rhythm Path Difference
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card-hover p-8 rounded-2xl group relative"
            >
              {/* Note indicator */}
              <div className="absolute top-6 right-6 text-primary/10 font-display text-2xl group-hover:text-primary/25 transition-colors duration-700">
                ♪
              </div>

              <div className="w-12 h-12 rounded-xl bg-primary/[0.08] border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/[0.15] group-hover:border-primary/25 transition-all duration-700">
                <f.icon className="text-primary/70" size={22} />
              </div>
              <h3 className="font-display text-xl font-light text-foreground/85 mb-3 italic leading-tight">{f.title}</h3>
              <p className="text-foreground/40 text-sm font-body font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
