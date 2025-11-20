"use client"
import { motion } from "framer-motion";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { Check, Star } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      tagline: "Try Obsilab risk-free",
      whyThisPlan: "Test your first API in under a minute.",
      features: [
        "100 VUs",
        "5 tests/month",
        "Basic AI insights",
        "5 min duration",
      ],
      cta: "Start Free",
      ctaSubtext: "No credit card required.",
      highlighted: false,
    },
    {
      name: "Starter",
      price: "$29",
      tagline: "Ship with confidence",
      whyThisPlan: "Best for solo devs shipping weekly.",
      features: [
        "1,000 VUs",
        "75 tests/month",
        "Enhanced AI diagnostics",
        "30 min duration",
        "3 regions",
      ],
      cta: "Get Started",
      ctaSubtext: "",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$99",
      tagline: "Built for growing teams",
      whyThisPlan: "10× the power. Find issues before users do.",
      features: [
        "10,000 VUs",
        "200 tests/month",
        "Advanced AI insights",
        "60 min duration",
        "Global regions",
        "Flow Builder",
      ],
      cta: "Upgrade to Pro",
      ctaSubtext: "Chosen by 68% of teams.",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$349",
      tagline: "Enterprise-ready",
      whyThisPlan: "For teams with heavy traffic and strict SLAs.",
      features: [
        "100,000+ VUs",
        "1,000 tests/month",
        "AI Engine Pro",
        "Unlimited duration",
        "Dedicated support",
        "10 seats",
      ],
      cta: "Contact Sales",
      ctaSubtext: "Custom plans available.",
      highlighted: false,
    },
  ];

  const testimonials = [
    {
      quote: "We found a 3-second bottleneck in 10 minutes.",
      author: "Arjun",
      role: "SaaS Founder",
    },
    {
      quote: "Simpler than k6. AI insights are instant.",
      author: "Michael",
      role: "Full-stack dev",
    },
    {
      quote: "Upgraded to Pro after day one.",
      author: "Lindsay",
      role: "Backend lead",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-midnight-abyss to-obsidian-void">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pricing that scales with you
          </h2>
          <p className="text-xl text-antique-pearl max-w-2xl mx-auto mb-6">
            Start free. Upgrade when you're ready.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-1.5 text-jade-obsidian">
              <Check className="w-4 h-4" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5 text-jade-obsidian">
              <Check className="w-4 h-4" /> Cancel anytime
            </span>
            <span className="flex items-center gap-1.5 text-jade-obsidian">
              <Check className="w-4 h-4" /> No surprise charges
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={plan.highlighted ? "lg:-mt-4" : ""}
            >
              <Card
                className={`p-8 h-full flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-card via-card to-primary/5 border-primary shadow-[0_0_40px_rgba(213,167,67,0.3)]"
                    : "bg-card/40 border-border/50"
                } backdrop-blur-sm transition-all duration-300 hover:scale-105`}
              >
                {plan.highlighted && (
                  <div className="mb-4 -mt-4">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-antique-pearl text-sm italic">{plan.tagline}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-shade-frost">/month</span>
                  </div>
                  {/* Why this plan */}
                  <p className="text-jade-obsidian text-xs mt-2">{plan.whyThisPlan}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-jade-obsidian flex-shrink-0 mt-0.5" />
                      <span className="text-antique-pearl text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    plan.highlighted
                      ? "w-full bg-gradient-to-r from-primary to-gold-gilded hover:from-gold-gilded hover:to-primary text-primary-foreground font-semibold shadow-[0_0_20px_rgba(213,167,67,0.4)]"
                      : "w-full bg-muted hover:bg-primary/20 hover:text-primary hover:border-primary/50 text-muted-foreground font-semibold transition-all duration-300 border border-transparent"
                  }
                  size="lg"
                >
                  {plan.cta}
                </Button>

                {/* CTA Subtext */}
                {plan.ctaSubtext && (
                  <p className="text-xs text-shade-frost text-center mt-3">{plan.ctaSubtext}</p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-antique-pearl text-sm italic mb-3">"{testimonial.quote}"</p>
              <p className="text-shade-frost text-xs">
                — {testimonial.author}, {testimonial.role}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Pricing FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Pricing Questions</h3>
          <div className="space-y-6">
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <h4 className="font-semibold text-foreground mb-2">Will I get charged if I go over my test limits?</h4>
              <p className="text-antique-pearl text-sm">Never. We soft-limit tests and notify you when you hit your plan boundaries.</p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/30">
              <h4 className="font-semibold text-foreground mb-2">Can I downgrade anytime?</h4>
              <p className="text-antique-pearl text-sm">Yes — all changes take effect next billing cycle.</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA for hesitant users */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-antique-pearl mb-4">
            Still unsure? <span className="text-primary font-medium">Run a free test in under 10 seconds →</span>
          </p>
          <Button
            className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30"
            size="lg"
          >
            Try Free Test
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
