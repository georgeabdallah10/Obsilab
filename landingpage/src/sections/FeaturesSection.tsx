
"use client"
import { motion } from "framer-motion";
import { Card } from "../components/card";
import { Zap, Brain, Globe, BarChart3, GitBranch, Shield } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "One-click load testing",
      description: "No scripts, no code. Just paste your endpoint and start testing in seconds. Built for speed and simplicity.",
    },
    {
      icon: Brain,
      title: "AI analysis engine",
      description: "Our AI identifies performance bottlenecks, memory leaks, and database issues—then tells you exactly how to fix them.",
    },
    {
      icon: Globe,
      title: "Auto-scaled global workers",
      description: "Instantly deploy virtual users across multiple regions. Scale from 100 to 100K+ users without infrastructure hassle.",
    },
    {
      icon: BarChart3,
      title: "Real-time metrics dashboard",
      description: "Watch latency, throughput, error rates, and success metrics update live as your test runs.",
    },
    {
      icon: GitBranch,
      title: "Flow Builder (Pro+)",
      description: "Design multi-step user flows with authentication, form submissions, and complex API sequences.",
    },
    {
      icon: Shield,
      title: "Secure Mode (no code access)",
      description: "Your API keys and backend code stay private. We never access your source code or store credentials.",
    },
  ];

  return (
    <section className="py-24 bg-obsidian-void relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need to test at scale
          </h2>
          <p className="text-xl text-antique-pearl max-w-2xl mx-auto">
            From simple API tests to complex user flows, Obsilab has you covered
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(213,167,67,0.2)] transition-all duration-300 h-full group">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-antique-pearl leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
