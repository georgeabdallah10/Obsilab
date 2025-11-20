"use client"
import { motion } from "framer-motion";
import { Database, Lock, Gauge, ListChecks, ShieldAlert, Activity } from "lucide-react";

export const PainPointsSection = () => {
  const painPoints = [
    { icon: Database, text: "Database overload" },
    { icon: Lock, text: "Auth timeouts" },
    { icon: Gauge, text: "API throttling" },
    { icon: ListChecks, text: "Queue backups" },
    { icon: ShieldAlert, text: "Rate-limit violations" },
    { icon: Activity, text: "Memory leaks" },
  ];

  return (
    <section className="py-24 bg-obsidian-void relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                         linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Backends fail silently —{" "}
            <span className="text-inferno-red">until they crash.</span>
          </h2>
          <p className="text-xl text-antique-pearl max-w-3xl mx-auto">
            These issues only appear under real load. By then, your users are already down.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-card/30 border border-border/50 hover:border-inferno-red/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-inferno-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-inferno-red/20 transition-colors">
                <point.icon className="w-6 h-6 text-inferno-red" />
              </div>
              <p className="text-antique-pearl leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
            <p className="text-primary font-semibold">
              Obsilab catches these before your users do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
