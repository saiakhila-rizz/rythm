import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const courses = [
  {
    title: "Beginner's Course",
    duration: "2 Months",
    description: "Build a strong foundation in music theory, rhythm, and basic playing techniques.",
    features: ["Music fundamentals", "Basic technique", "Rhythm training", "First performances"],
    note: "♩",
  },
  {
    title: "Intermediate Course",
    duration: "3 Months",
    description: "Deepen your skills with advanced techniques, music reading, and expressive playing.",
    features: ["Advanced theory", "Sight reading", "Ensemble playing", "Exam preparation"],
    note: "♫",
    featured: true,
  },
  {
    title: "Advanced Course",
    duration: "4 Months",
    description: "Master complex compositions, improvisation, and performance artistry.",
    features: ["Complex repertoire", "Improvisation", "Stage performance", "Professional skills"],
    note: "𝄞",
  },
];

const CoursesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="courses" className="section-padding relative staff-lines" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-primary/60 tracking-[0.4em] uppercase text-xs font-body mb-4">Our Courses</p>
          <h2 className="font-display text-4xl md:text-6xl font-light gold-gradient-text italic">
            Structured Learning Paths
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.2, ease: [0.23, 1, 0.32, 1] }}
              className={`glass-card-hover p-8 rounded-2xl relative overflow-hidden group ${
                course.featured ? "gold-border-glow" : ""
              }`}
              style={{ perspective: "1000px" }}
            >
              {/* Musical note watermark */}
              <div className="absolute top-4 right-4 font-display text-6xl text-primary/[0.06] select-none">
                {course.note}
              </div>

              {course.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              )}

              <div className="relative z-10">
                <span className="text-primary/50 text-xs tracking-[0.3em] font-body uppercase">{course.duration}</span>
                <h3 className="font-display text-2xl font-light text-foreground/90 mt-3 mb-4 italic">{course.title}</h3>
                <p className="text-foreground/45 text-sm font-body font-light leading-relaxed mb-8">{course.description}</p>

                <div className="space-y-3">
                  {course.features.map((f, fi) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: -15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.2 + fi * 0.08 }}
                      className="flex items-center gap-3 text-sm text-foreground/50 font-body font-light"
                    >
                      <span className="text-primary/60 text-xs">♪</span>
                      {f}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
