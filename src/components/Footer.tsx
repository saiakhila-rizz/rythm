import logoImg from "@/assets/brochure-logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/20">
      {/* Animated equalizer */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[3px] h-12 overflow-hidden opacity-20 pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="w-1 bg-primary/60 rounded-t eq-bar"
            style={{
              "--duration": `${0.8 + Math.random() * 1.2}s`,
              "--max-height": `${8 + Math.random() * 25}px`,
              animationDelay: `${Math.random() * 2}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Wave line at top */}
      <div className="h-px w-full overflow-hidden">
        <div
          className="w-[200%] h-full animate-wave-horizontal"
          style={{ background: "linear-gradient(90deg, transparent, hsl(43, 66%, 52%, 0.4), transparent)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Rhythm Path" className="h-10 w-10 rounded-full" />
            <div>
              <span className="font-display text-lg font-semibold gold-gradient-text tracking-wider block">RHYTHM PATH</span>
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-body uppercase">Music School</span>
            </div>
          </div>
          <p className="text-muted-foreground/60 text-xs font-body font-light text-center tracking-wider">
            © {new Date().getFullYear()} Rhythm Path Music School. All rights reserved.
          </p>
          <div className="flex gap-8">
            {[
              { label: "About", href: "#about" },
              { label: "Courses", href: "#courses" },
              { label: "Gallery", href: "#gallery" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-xs text-muted-foreground/50 hover:text-primary transition-colors duration-500 font-body tracking-wider">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
