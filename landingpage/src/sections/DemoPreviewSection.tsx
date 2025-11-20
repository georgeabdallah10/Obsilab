"use client"


import { motion } from "framer-motion";
import { Card } from "../components/card";
import { TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

export const DemoPreviewSection = () => {
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
            See it in action
          </h2>
          <p className="text-xl text-antique-pearl max-w-2xl mx-auto">
            Real-time metrics and AI-powered insights during your load tests
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 p-8 rounded-2xl shadow-2xl">
            {/* Metrics Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-midnight-abyss/50 rounded-xl p-6 border border-border/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-shade-frost text-sm">Response Time</span>
                  <TrendingUp className="w-5 h-5 text-jade-obsidian" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">24ms</div>
                <div className="text-xs text-jade-obsidian">↓ 12% from baseline</div>
              </div>

              <div className="bg-midnight-abyss/50 rounded-xl p-6 border border-border/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-shade-frost text-sm">Error Rate</span>
                  <AlertTriangle className="w-5 h-5 text-ember-gold" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">0.03%</div>
                <div className="text-xs text-ember-gold">3 errors / 10k requests</div>
              </div>

              <div className="bg-midnight-abyss/50 rounded-xl p-6 border border-border/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-shade-frost text-sm">Success Rate</span>
                  <CheckCircle2 className="w-5 h-5 text-jade-obsidian" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">99.97%</div>
                <div className="text-xs text-jade-obsidian">9,997 successful</div>
              </div>
            </div>

            {/* Latency Graph Placeholder */}
            <div className="bg-midnight-abyss/50 rounded-xl p-8 border border-border/30 mb-8">
              <h4 className="text-sm font-medium text-shade-frost mb-6">Latency Over Time</h4>
              <div className="h-48 flex items-end justify-between gap-2">
                {[45, 52, 38, 65, 48, 42, 58, 44, 39, 50, 46, 41, 55, 43, 38, 47, 44, 40, 52, 45].map(
                  (height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t-sm"
                    />
                  )
                )}
              </div>
              <div className="flex justify-between text-xs text-shade-frost mt-4">
                <span>0s</span>
                <span>30s</span>
                <span>60s</span>
              </div>
            </div>

            {/* AI Insights Panel */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🤖</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground mb-2">AI Insight</h4>
                  <p className="text-antique-pearl mb-3">
                    Your database connection pool is showing signs of saturation at 8,000+ concurrent users. 
                    Consider increasing max_connections from 100 to 200.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      Database
                    </span>
                    <span className="px-3 py-1 rounded-full bg-ember-gold/20 text-ember-gold text-xs font-medium">
                      High Priority
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
