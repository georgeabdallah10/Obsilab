"use client"
import { motion } from "framer-motion";
import { Card } from "../components/card";
import { Link, Gauge, Lightbulb } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Link,
      number: "01",
      title: "Enter your API",
      description: "Paste your endpoint URL. No code, no scripts, no configuration files.",
    },
    {
      icon: Gauge,
      number: "02",
      title: "Select traffic level",
      description: "Choose from 100 to 100,000+ virtual users. Scale instantly across regions.",
    },
    {
      icon: Lightbulb,
      number: "03",
      title: "Get AI-powered diagnostics",
      description: "Receive instant insights on bottlenecks, errors, and performance fixes.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-midnight-abyss to-obsidian-void">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-antique-pearl max-w-2xl mx-auto">
            From zero to stress-tested in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="relative p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full group">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-antique-pearl leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Connection Lines (Desktop only) */}
        <div className="hidden md:block relative -mt-[280px] pointer-events-none">
          <svg className="w-full h-64" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M 200 128 L 500 128 M 700 128 L 1000 128"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 8"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
