"use client"
import { motion } from "framer-motion";
import { Card } from "../../../src/components/card";
import { Button } from "../../../src/components/button";
import { Check } from "lucide-react";
import { useState } from "react";

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      monthlyPrice: 0,
      annualPrice: 0,
      tagline: "Try Obsilab risk-free",
      features: [
        "100 VUs",
        "3 tests/month",
        "Basic monitoring",
        "Community support",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Starter",
      monthlyPrice: 19,
      annualPrice: 190,
      tagline: "For solo developers",
      features: [
        "1,000 VUs",
        "50 tests/month",
        "5 parallel tests",
        "Email alerts",
        "3 regions",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      monthlyPrice: 89,
      annualPrice: 890,
      tagline: "For growing teams",
      features: [
        "10,000 VUs",
        "200 tests/month",
        "20 parallel tests",
        "Webhooks & Slack",
        "Global regions",
      ],
      cta: "Upgrade to Pro",
      highlighted: true,
    },
    {
      name: "Team",
      monthlyPrice: 349,
      annualPrice: 3490,
      tagline: "For larger orgs",
      features: [
        "100,000+ VUs",
        "Unlimited tests",
        "Unlimited parallel",
        "Dedicated support",
        "10 team seats",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const comparisonFeatures = [
    { name: "Virtual Users", free: "100", starter: "1K", pro: "10K", team: "100K+" },
    { name: "Tests/month", free: "3", starter: "50", pro: "200", team: "∞" },
    { name: "Parallel tests", free: "1", starter: "5", pro: "20", team: "∞" },
    { name: "Regions", free: "1", starter: "3", pro: "Global", team: "Global" },
    { name: "Team seats", free: "1", starter: "1", pro: "3", team: "10" },
  ];

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return "$0";
    if (isAnnual) {
      const monthly = Math.round(plan.annualPrice / 12);
      return `$${monthly}`;
    }
    return `$${plan.monthlyPrice}`;
  };

  const getPeriod = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return "/month";
    return isAnnual ? "/mo (billed yearly)" : "/month";
  };

  return (
    <section id="pricing" className="py-24 bg-[#050608]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, predictable pricing
          </h2>
          <p className="text-lg text-antique-pearl max-w-xl mx-auto">
            Start free, scale as you grow. No surprises.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center bg-card/50 rounded-full p-1 border border-border/30">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual
                  ? "bg-primary text-primary-foreground"
                  : "text-shade-frost hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual
                  ? "bg-primary text-primary-foreground"
                  : "text-shade-frost hover:text-foreground"
              }`}
            >
              Annual <span className="text-jade-obsidian">-20%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={plan.highlighted ? "lg:-mt-4" : ""}
            >
              <Card
                className={`p-6 h-full flex flex-col backdrop-blur-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-card via-card to-primary/5 border-primary/50 shadow-[0_0_30px_rgba(213,167,67,0.15)] hover:shadow-[0_0_40px_rgba(213,167,67,0.25)]"
                    : "bg-card/40 border-border/30 hover:border-border/50 hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-4 -mt-2">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-shade-frost text-sm">{plan.tagline}</p>
                </div>

                <div className="mb-6">
                  <motion.div
                    key={isAnnual ? "annual" : "monthly"}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="text-4xl font-bold text-foreground">{getPrice(plan)}</span>
                    <span className="text-shade-frost text-sm">{getPeriod(plan)}</span>
                  </motion.div>
                  {isAnnual && plan.annualPrice > 0 && (
                    <p className="text-xs text-jade-obsidian mt-1">
                      ${plan.annualPrice}/year
                    </p>
                  )}
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-jade-obsidian flex-shrink-0" />
                      <span className="text-antique-pearl text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    plan.highlighted
                      ? "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                      : "w-full bg-card hover:bg-card/80 text-foreground font-medium border border-border/50 hover:border-primary/30"
                  }
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-lg font-semibold text-foreground text-center mb-6">
            Compare plans
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-3 px-4 text-shade-frost font-medium">Feature</th>
                  <th className="text-center py-3 px-4 text-shade-frost font-medium">Free</th>
                  <th className="text-center py-3 px-4 text-shade-frost font-medium">Starter</th>
                  <th className="text-center py-3 px-4 text-primary font-medium">Pro</th>
                  <th className="text-center py-3 px-4 text-shade-frost font-medium">Team</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature) => (
                  <tr key={feature.name} className="border-b border-border/20">
                    <td className="py-3 px-4 text-antique-pearl">{feature.name}</td>
                    <td className="py-3 px-4 text-center text-shade-frost">{feature.free}</td>
                    <td className="py-3 px-4 text-center text-shade-frost">{feature.starter}</td>
                    <td className="py-3 px-4 text-center text-foreground font-medium">{feature.pro}</td>
                    <td className="py-3 px-4 text-center text-shade-frost">{feature.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-antique-pearl mb-4">
            Start testing in minutes — no credit card needed.
          </p>
          <Button
            className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30"
            size="lg"
          >
            Get Started Free
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
