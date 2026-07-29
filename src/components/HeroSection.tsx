import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "COURSES" },
  { value: 100, suffix: "+", label: "TEACHERS" },
  { value: 5000, suffix: "+", label: "STUDENTS" },
  { value: 10, suffix: "+", label: "YEARS EXPERIENCE" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl lg:text-6xl font-light gold-gradient-text">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

/* SVG sound wave that spans the hero */
const SoundWave = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="absolute w-[200%] h-full left-[-50%] top-0 opacity-[0.06]" viewBox="0 0 2000 600" preserveAspectRatio="none">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.path
          key={i}
          d={`M0 ${300 + i * 20} Q 250 ${250 + i * 30} 500 ${300 + i * 20} T 1000 ${300 + i * 20} T 1500 ${300 + i * 20} T 2000 ${300 + i * 20}`}
          fill="none"
          stroke="hsl(43, 66%, 52%)"
          strokeWidth={1.5 - i * 0.2}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: i * 0.3, ease: "easeOut" }}
        />
      ))}
    </svg>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SoundWave />

      {/* Animated piano keys silhouette */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[2px] h-[30vh] opacity-[0.03] pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => {
          const isBlack = [1, 3, 6, 8, 10].includes(i % 12);
          return (
            <motion.div
              key={i}
              className="rounded-t-sm"
              style={{
                width: isBlack ? "12px" : "18px",
                background: isBlack
                  ? "hsl(43, 66%, 52%)"
                  : "hsl(0, 0%, 95%)",
                opacity: isBlack ? 0.6 : 0.3,
              }}
              initial={{ height: "10%" }}
              animate={{
                height: [
                  `${15 + Math.sin(i * 0.5) * 10}%`,
                  `${25 + Math.cos(i * 0.3) * 15}%`,
                  `${15 + Math.sin(i * 0.5) * 10}%`,
                ],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.08,
              }}
            />
          );
        })}
      </div>

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsla(43, 66%, 52%, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-primary/70 font-body font-light uppercase text-xs md:text-sm mb-8"
          >
            ♪ Rhythm Path Music School ♪
          </motion.p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-8 tracking-wide">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-foreground/90 italic"
            >
              Find Your Rhythm,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="block gold-gradient-text"
              style={{ filter: "drop-shadow(0 0 40px hsla(43, 66%, 52%, 0.3))" }}
            >
              Follow Your Path
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-xl text-foreground/50 font-body font-light max-w-xl mx-auto mb-12 tracking-wide"
          >
            Professional music training with international certification
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-5 justify-center mb-20"
        >
          <a
            href="#contact"
            className="btn-glow px-10 py-4 rounded-full bg-primary text-primary-foreground font-body font-medium text-base tracking-wide hover:scale-105 transition-transform duration-500 relative z-10"
          >
            Enroll Now
          </a>
          <a
            href="#contact"
            className="px-10 py-4 rounded-full border border-primary/30 text-primary font-body font-light text-base tracking-wide hover:bg-primary/5 hover:border-primary/50 transition-all duration-500"
          >
            Book a Free Demo
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + i * 0.2, duration: 0.6 }}
              className="glass-card p-6 md:p-8 text-center group hover:border-primary/20 transition-all duration-700"
            >
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-muted-foreground text-[10px] md:text-xs tracking-[0.25em] font-body mt-3 uppercase">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-body uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-primary/20 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-primary/60"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
