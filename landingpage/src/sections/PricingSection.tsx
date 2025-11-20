"use client"
import { motion } from "framer-motion";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out Obsilab",
      features: [
        "100 VUs",
        "5 tests/month",
        "Basic AI insights",
        "5 min test duration",
        "1 region",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Starter",
      price: "$29",
      description: "For indie developers and small projects",
      features: [
        "1,000 VUs",
        "50 tests/month",
        "Full AI diagnostics",
        "30 min test duration",
        "3 regions",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$99",
      description: "For growing SaaS teams",
      features: [
        "10,000 VUs",
        "200 tests/month",
        "Advanced AI insights",
        "60 min test duration",
        "Global regions",
        "Flow Builder",
        "Priority support",
      ],
      cta: "Upgrade to Pro",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$299",
      description: "For enterprises and high-traffic apps",
      features: [
        "100,000+ VUs",
        "Unlimited tests",
        "Enterprise AI engine",
        "Unlimited duration",
        "All regions",
        "Flow Builder Pro",
        "Dedicated support",
        "10 team seats",
      ],
      cta: "Contact Sales",
      highlighted: false,
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
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-antique-pearl max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprise charges.
          </p>
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
                  <p className="text-shade-frost text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-shade-frost">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-jade-obsidian flex-shrink-0 mt-0.5" />
                      <span className="text-antique-pearl">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    plan.highlighted
                      ? "w-full bg-primary hover:bg-accent text-primary-foreground font-semibold"
                      : "w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold"
                  }
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
