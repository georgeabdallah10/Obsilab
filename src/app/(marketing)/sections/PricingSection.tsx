"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { Check, ChevronDown } from "lucide-react";

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const plans = [
    {
      name: "Free",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Explore the platform",
      whyText: "Run your first test in under a minute.",
      features: [
        "100 VUs",
        "5 tests/month",
        "5 min duration",
        "Basic charts",
        "7-day history",
      ],
      cta: "Start Free",
      ctaSubtext: "No credit card required.",
      highlighted: false,
    },
    {
      name: "Starter",
      monthlyPrice: 19,
      annualPrice: 190,
      description: "Ship with confidence",
      whyText: "For solo devs shipping weekly.",
      features: [
        "1,000 VUs",
        "75 tests/month",
        "30 min duration",
        "3 regions",
        "API access",
        "30-day history",
      ],
      cta: "Get Started",
      ctaSubtext: "",
      highlighted: false,
    },
    {
      name: "Pro",
      monthlyPrice: 89,
      annualPrice: 890,
      description: "Production-grade testing",
      whyText: "Find issues before users do.",
      features: [
        "10,000 VUs",
        "200 tests/month",
        "60 min duration",
        "10 parallel tests",
        "All regions",
        "Webhooks + Slack",
        "90-day history",
      ],
      cta: "Upgrade to Pro",
      ctaSubtext: "Most popular choice.",
      highlighted: true,
    },
    {
      name: "Team",
      monthlyPrice: 349,
      annualPrice: 3490,
      description: "Scale without limits",
      whyText: "For teams with strict SLAs.",
      features: [
        "100,000+ VUs",
        "1,000 tests/month",
        "Unlimited duration",
        "Unlimited parallel",
        "10 seats included",
        "Private projects",
        "Priority support",
      ],
      cta: "Contact Sales",
      ctaSubtext: "Custom plans available.",
      highlighted: false,
    },
  ];

  const comparisonData = [
    {
      category: "Core Testing",
      features: [
        { name: "Basic load tests", free: true, starter: true, pro: true, team: true },
        { name: "Spike & stress tests", free: false, starter: true, pro: true, team: true },
        { name: "Test history", free: "7 days", starter: "30 days", pro: "90 days", team: "1 year" },
        { name: "PDF reports", free: false, starter: true, pro: true, team: true },
        { name: "Custom configs", free: false, starter: true, pro: true, team: true },
      ],
    },
    {
      category: "Speed & Scale",
      features: [
        { name: "Virtual users", free: "100", starter: "1K", pro: "10K", team: "100K+" },
        { name: "Max duration", free: "5 min", starter: "30 min", pro: "60 min", team: "Unlimited" },
        { name: "Parallel tests", free: "1", starter: "3", pro: "10", team: "Unlimited" },
        { name: "Regions", free: "1", starter: "3", pro: "All", team: "All" },
      ],
    },
    {
      category: "Observability",
      features: [
        { name: "Real-time charts", free: true, starter: true, pro: true, team: true },
        { name: "Error breakdown", free: true, starter: true, pro: true, team: true },
        { name: "Endpoint insights", free: false, starter: true, pro: true, team: true },
        { name: "p95/p99 percentiles", free: false, starter: false, pro: true, team: true },
        { name: "Trend analytics", free: false, starter: false, pro: true, team: true },
      ],
    },
    {
      category: "Automation",
      features: [
        { name: "API access", free: false, starter: true, pro: true, team: true },
        { name: "GitHub Actions", free: false, starter: true, pro: true, team: true },
        { name: "Webhooks", free: false, starter: false, pro: true, team: true },
        { name: "Slack alerts", free: false, starter: false, pro: true, team: true },
      ],
    },
    {
      category: "Team",
      features: [
        { name: "Seats included", free: "1", starter: "1", pro: "5", team: "10" },
        { name: "Shared reports", free: false, starter: false, pro: true, team: true },
        { name: "Private projects", free: false, starter: false, pro: false, team: true },
        { name: "Workspaces", free: false, starter: false, pro: false, team: true },
      ],
    },
  ];

  const formatPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return "$0";
    return isAnnual ? `$${plan.annualPrice}` : `$${plan.monthlyPrice}`;
  };

  const getPeriod = () => {
    return isAnnual ? "/year" : "/month";
  };

  const getMonthlyEquivalent = (plan: typeof plans[0]) => {
    if (!isAnnual || plan.monthlyPrice === 0) return null;
    const monthly = Math.round(plan.annualPrice / 12);
    return `$${monthly}/mo`;
  };

  const renderCell = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-6 h-6 text-[#7dd3a0] mx-auto" />
      ) : (
        <span className="text-neutral-600 w-5 h-5 mx-auto">—</span>
      );
    }
    return <span className="text-neutral-300 text-xl">{value}</span>;
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050608]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.1] text-[2.441rem] md:text-[3.052rem]">
            Pricing that scales with you
          </h2>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto mb-6 leading-[1.5]">
            Start free. Upgrade when you're ready.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
            <span className="flex items-center gap-2 text-[#7dd3a0]">
              <Check className="w-4 h-4" /> No credit card required
            </span>
            <span className="flex items-center gap-2 text-[#7dd3a0]">
              <Check className="w-4 h-4" /> Cancel anytime
            </span>
            <span className="flex items-center gap-2 text-[#7dd3a0]">
              <Check className="w-4 h-4" /> No surprise charges
            </span>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex items-center bg-neutral-900/80 rounded-full p-1 border border-neutral-800">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  !isAnnual
                    ? "bg-[#D5A743] text-[#050608] shadow-md"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isAnnual
                    ? "bg-[#D5A743] text-[#050608] shadow-md"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                Annual <span className={isAnnual ? "text-[#050608]" : "text-[#7dd3a0]"}>-20%</span>
              </button>
            </div>
          </div>

        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card
                className={`p-8 h-full flex flex-col relative transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-[#0d0d0d] border-[#D5A743]/40 shadow-[0_0_30px_rgba(213,167,67,0.15)]"
                    : "bg-[#0d0d0d] border-neutral-800"
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded bg-[#D5A743] text-[#050608] text-xs font-bold uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-3xl font-bold text-foreground tracking-[-0.015em] text-[1.953rem]">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-500 text-sm mt-2 leading-[1.5]">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isAnnual ? "annual" : "monthly"}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-baseline gap-1"
                    >
                      <span className="text-5xl font-bold text-foreground">
                        {formatPrice(plan)}
                      </span>
                      <span className="text-neutral-500 text-base leading-[1.5]">{getPeriod()}</span>
                    </motion.div>
                  </AnimatePresence>
                  {getMonthlyEquivalent(plan) && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[#7dd3a0] text-sm mt-1 leading-[1.5]"
                    >
                      {getMonthlyEquivalent(plan)}
                    </motion.p>
                  )}
                  <p className="text-[#D5A743] text-sm mt-3 leading-[1.5]">{plan.whyText}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#7dd3a0] shrink-0" />
                      <span className="text-neutral-300 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    plan.highlighted
                      ? "w-full bg-[#D5A743] hover:bg-[#c49a3d] text-[#050608] font-semibold"
                      : "w-full bg-transparent hover:bg-neutral-800 text-neutral-400 font-medium border border-neutral-700"
                  }
                  size="lg"
                >
                  {plan.cta}
                </Button>

                {plan.ctaSubtext && (
                  <p className="text-xs text-neutral-500 text-center mt-3 leading-[1.5]">{plan.ctaSubtext}</p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto mt-16"
        >
          <h3 className="text-4xl font-bold text-foreground text-center mb-12 tracking-[-0.015em] text-[1.953rem]">
            Compare plans
          </h3>

          {/* Table Header - Always visible */}
          <div className="overflow-x-auto mb-4 rounded-2xl border-2 border-[#D5A743]/30 bg-gradient-to-r from-[#0d0d0d] via-[#1a1510] to-[#0d0d0d] shadow-[0_0_40px_rgba(213,167,67,0.12)]">
            <table className="w-full text-xl">
              <thead>
                <tr>
                  <th className="text-left py-6 px-10 text-[#D5A743] font-bold text-2xl w-1/3">Feature</th>
                  <th className="text-center py-6 px-8 text-neutral-400 font-bold text-2xl">Free</th>
                  <th className="text-center py-6 px-8 text-[#7dd3a0] font-bold text-2xl">Starter</th>
                  <th className="text-center py-6 px-8 text-[#D5A743] font-bold text-2xl">Pro</th>
                  <th className="text-center py-6 px-8 text-[#7dd3a0] font-bold text-2xl">Team</th>
                </tr>
              </thead>
            </table>
          </div>

          {/* Collapsible Sections */}
          <div className="space-y-4">
            {comparisonData.map((section) => {
              const isExpanded = expandedSection === section.category;
              return (
                <div
                  key={section.category}
                  className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#0d0d0d] to-[#0a0a0a] ${
                    isExpanded
                      ? "border-[#D5A743]/60 shadow-[0_0_40px_rgba(213,167,67,0.2)]"
                      : "border-neutral-800 hover:border-neutral-700"
                  }`}
                >
                  <button
                    onClick={() => setExpandedSection(isExpanded ? null : section.category)}
                    className={`w-full flex items-center justify-between px-8 py-6 transition-colors duration-200 ${
                      isExpanded ? "bg-[#D5A743]/10" : "hover:bg-neutral-800/50"
                    }`}
                  >
                    <span className={`text-xl font-bold uppercase tracking-wider transition-colors duration-200 ${
                      isExpanded ? "text-[#D5A743]" : "text-neutral-400"
                    }`}>
                      {section.category}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 transition-all duration-300 ${
                        isExpanded ? "rotate-180 text-[#D5A743]" : "text-neutral-500"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedSection === section.category && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="bg-[#050608]/80 backdrop-blur-sm border-t border-[#D5A743]/10">
                          <table className="w-full text-xl">
                            <tbody>
                              {section.features.map((feature, idx) => (
                                <tr
                                  key={feature.name}
                                  className={`${
                                    idx < section.features.length - 1 ? "border-b border-[#D5A743]/10" : ""
                                  } hover:bg-[#D5A743]/5 transition-colors duration-150 text-lg`}
                                >
                                  <td className="py-6 px-10 text-neutral-100 w-1/3 font-semibold text-xl">
                                    {feature.name}
                                  </td>
                                  <td className="text-center py-6 px-8 text-xl">{renderCell(feature.free)}</td>
                                  <td className="text-center py-6 px-8 text-xl">
                                    {renderCell(feature.starter)}
                                  </td>
                                  <td className="text-center py-6 px-8 bg-[#D5A743]/15 text-xl">
                                    {renderCell(feature.pro)}
                                  </td>
                                  <td className="text-center py-6 px-8 text-xl">{renderCell(feature.team)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
