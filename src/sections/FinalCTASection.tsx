"use client"
import { motion } from "framer-motion";
import { Button } from "../components/button";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-midnight-abyss to-obsidian-void relative overflow-hidden">
      {/* Dramatic Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[2.441rem] md:text-[3.052rem] lg:text-[3.815rem]">
            <span className="text-foreground">Your backend has a </span>
            <span className="bg-gradient-to-r from-inferno-red via-ember-gold to-inferno-red bg-clip-text text-transparent">
              breaking point.
            </span>
          </h2>

          <p className="text-2xl md:text-3xl text-antique-pearl font-light leading-[1.5]">
            Find it before your customers do.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground px-10 py-7 text-xl font-bold glow-gold-hover transition-all"
            >
              Start Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 text-foreground px-10 py-7 text-xl font-semibold group"
            >
              Run a Test
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-shade-frost text-sm pt-4 leading-[1.5]">
            No credit card required • 5-minute setup • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};
