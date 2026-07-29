import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, Smartphone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  // Updated state to include common enquiry fields for a music school
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    message: "",
    instrument: "Keyboard" // Default selection
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Business Phone Number (International format without '+' or '00')
    const businessNumber = "916366372370"; 

    // 2. Construct the Message Template
    // %0A represents a new line in URL encoding
    const text = `*New Music School Enquiry*%0A` +
                 `--------------------------%0A` +
                 `*Name:* ${form.name}%0A` +
                 `*Phone:* ${form.phone}%0A` +
                 `*Email:* ${form.email}%0A` +
                 `*Instrument:* ${form.instrument}%0A` +
                 `*Message:* ${form.message}`;

    // 3. Create and Open the WhatsApp Link
    const whatsappUrl = `https://wa.me/${businessNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");

    // Optional: Reset form
    setForm({ name: "", email: "", phone: "", message: "", instrument: "Keyboard" });
  };

  return (
    <section id="contact" className="section-padding relative py-20 bg-[#0B1F3A]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-[#D4AF37]/60 tracking-[0.4em] uppercase text-xs font-body mb-4">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-6xl font-light italic text-[#D4AF37]">
            Start Your Journey
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            {[
              { icon: MapPin, label: "Classes Conducted At", value: "Your Place (Club House)" },
              { icon: Phone, label: "Call Now", value: "6366372370", href: "tel:6366372370" },
              { icon: Mail, label: "Email Address", value: "rhythmpathmusicschool@gmail.com", href: "mailto:rhythmpathmusicschool@gmail.com" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl group hover:border-[#D4AF37]/40 transition-all duration-700"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors duration-500">
                    <item.icon className="text-[#D4AF37]" size={18} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-body tracking-wider uppercase mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="text-white/80 hover:text-[#D4AF37] transition-colors duration-300 text-sm font-body font-light break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/80 text-sm font-body font-light">{item.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3 bg-white/5 border border-[#D4AF37]/20 p-8 md:p-10 rounded-2xl space-y-5 backdrop-blur-sm"
          >
            <h3 className="font-display text-2xl font-light text-white/90 italic mb-2">Send an Enquiry</h3>
            
            {[
              { key: "name", label: "Your Name", type: "text" },
              { key: "email", label: "Email Address", type: "email" },
              { key: "phone", label: "Phone Number", type: "tel" },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-xs text-white/30 font-body tracking-wider uppercase mb-2 block">{f.label}</label>
                <input
                  type={f.type}
                  required
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all duration-500 text-sm font-body font-light"
                />
              </div>
            ))}

            <div>
              <label className="text-xs text-white/30 font-body tracking-wider uppercase mb-2 block">Instrument of Interest</label>
              <select 
                value={form.instrument}
                onChange={(e) => setForm({ ...form, instrument: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all text-sm font-body font-light appearance-none cursor-pointer"
              >
                <option value="Keyboard" className="bg-[#0B1F3A]">Keyboard</option>
                <option value="Guitar" className="bg-[#0B1F3A]">Guitar</option>
                <option value="Other" className="bg-[#0B1F3A]">Other</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-white/30 font-body tracking-wider uppercase mb-2 block">Additional Message</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:bg-white/10 transition-all duration-500 text-sm font-body font-light resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#D4AF37] text-[#0B1F3A] font-body font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform duration-500 relative z-10 tracking-widest uppercase text-sm"
            >
              <Send size={16} />
              Enquire via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;