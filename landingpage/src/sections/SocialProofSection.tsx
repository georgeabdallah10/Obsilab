"use client"
import { motion } from "framer-motion";

export const SocialProofSection = () => {
  const logos = [
    "Startup A",
    "Company B",
    "Platform C",
    "Service D",
    "Product E",
  ];

  return (
    <section className="py-16 border-y border-border/50 bg-midnight-abyss/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <p className="text-shade-frost text-sm uppercase tracking-wider">
            Trusted by developers, startups, and SaaS teams
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-3 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 transition-colors"
              >
                <span className="text-antique-pearl font-medium">{logo}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
