import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/brochure-logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Instruments", href: "#instruments" },
  { label: "Courses", href: "#courses" },
  { label: "Trinity", href: "#trinity" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "linear-gradient(180deg, hsla(214, 70%, 8%, 0.95) 0%, hsla(214, 70%, 8%, 0.7) 100%)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid hsla(43, 66%, 52%, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img src={logoImg} alt="Rhythm Path" className="h-10 w-10 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="font-display text-lg font-semibold tracking-wider gold-gradient-text leading-tight">
              RHYTHM PATH
            </span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-body uppercase">Music School</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-light tracking-wide text-foreground/60 hover:text-primary transition-colors duration-500 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-body font-medium hover:bg-primary/20 transition-all duration-500"
          >
            Enroll Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground/70">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "hsla(214, 70%, 8%, 0.98)", borderTop: "1px solid hsla(43, 66%, 52%, 0.1)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-foreground/70 hover:text-primary transition-colors font-body text-sm tracking-wide"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-body font-medium text-center"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
