"use client"

import { motion } from "framer-motion";
import { Rocket, Building2, Code2, User } from "lucide-react";
import { Card } from "../components/card";

export const AudienceSection = () => {
  const audiences = [
    {
      icon: Rocket,
      title: "Startups preparing for launch",
      description: "Validate your infrastructure before Product Hunt day. Make sure your backend won't crash when you hit the front page.",
    },
    {
      icon: Building2,
      title: "SaaS teams",
      description: "Ensure your platform can handle enterprise customers. Test auth flows, webhooks, and API integrations at scale.",
    },
    {
      icon: Code2,
      title: "API-first companies",
      description: "Guarantee 99.9% uptime. Catch issues before violating SLAs.",
    },
    {
      icon: User,
      title: "Indie developers",
      description: "Ship with confidence. No scripts, no DevOps — just test and deploy.",
    },
  ];

  return (
    <section className="py-24 bg-obsidian-void">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.1] text-[2.441rem] md:text-[3.052rem]">
            Built for modern teams
          </h2>
          <p className="text-xl text-antique-pearl max-w-2xl mx-auto leading-[1.5]">
            Whether you're launching your first product or scaling to millions of users
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="p-8 bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full group">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <audience.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-[-0.015em] text-[1.953rem]">
                  {audience.title}
                </h3>
                
                <p className="text-antique-pearl leading-[1.5]">
                  {audience.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
