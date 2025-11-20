"use client"
import { motion } from "framer-motion";
import { Database, Lock, Gauge, ListChecks, ShieldAlert, Activity } from "lucide-react";

export const PainPointsSection = () => {
  const painPoints = [
    { icon: Database, text: "Database saturation", detail: "Connection pool maxes out under 300+ concurrent requests" },
    { icon: Lock, text: "Auth timeouts", detail: "Login failures during peak traffic" },
    { icon: Gauge, text: "API throttling", detail: "Rate limits triggered without warning" },
    { icon: ListChecks, text: "Queue pileups", detail: "Delayed jobs and stuck messages" },
    { icon: ShieldAlert, text: "Uncaught 429/5xx spikes", detail: "Only visible under real load" },
    { icon: Activity, text: "Memory leaks", detail: "Only appear at scale, never locally" },
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
            Backends don't warn you —{" "}
            <span className="text-inferno-red">they fail suddenly.</span>
          </h2>
          <p className="text-xl text-antique-pearl max-w-3xl mx-auto mb-4">
            Real issues only appear under real load. By the time you notice them, users are dropping, errors are spiking, and dashboards are red.
          </p>
          <p className="text-lg text-shade-frost">
            The failures teams never catch in staging:
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
              <div>
                <p className="text-foreground font-semibold mb-1">{point.text}</p>
                <p className="text-shade-frost text-sm">{point.detail}</p>
              </div>
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
          <div className="text-center">
            <p className="text-foreground text-lg font-semibold mb-2">
              Obsilab finds these issues before your users ever see them.
            </p>
            <p className="text-primary font-bold text-xl">
              One click. Real load. Instant AI diagnosis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
