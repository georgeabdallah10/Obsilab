"use client"

import { motion } from "framer-motion";
import { Button } from "../components/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "../../assets/hero-dashboard.jpg";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-void via-midnight-abyss to-obsidian-void" />

      {/* Gold Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="bg-linear-to-r from-ivory-quartz via-antique-pearl to-ivory-quartz bg-clip-text text-transparent">
              Stress-test your backend
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold-24k via-gold-gilded to-gold-24k bg-clip-text text-transparent">
              in seconds.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-antique-pearl max-w-3xl mx-auto leading-relaxed"
          >
            Obsilab simulates thousands of virtual users hitting your API at once — then AI finds bottlenecks and tells you exactly how to fix them.
          </motion.p>

          {/* Credibility Microline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm text-shade-frost"
          >
            Trusted by startups, indie devs, and SaaS teams shipping weekly.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-6 text-lg font-semibold glow-gold-hover transition-all"
            >
              Start Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 text-foreground px-8 py-6 text-lg font-semibold group"
            >
              Run a Test
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Hero Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-16 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 glow-gold-hover">
              <Image
                src={heroDashboard}
                alt="Obsilab Dashboard - Load Testing Interface"
                className="w-full h-auto"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-void/80 via-transparent to-transparent" />
            </div>

            {/* Floating Metrics */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="absolute -left-4 top-1/4 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg p-4 shadow-2xl"
            >
              <p className="text-shade-frost text-sm">Latency</p>
              <p className="text-2xl font-bold text-jade-obsidian">12ms</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              className="absolute -right-4 top-1/3 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg p-4 shadow-2xl"
            >
              <p className="text-shade-frost text-sm">Virtual Users</p>
              <p className="text-2xl font-bold text-primary">10,000</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
