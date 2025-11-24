"use client"
import { motion } from "framer-motion";
import { Check, Minus, Zap } from "lucide-react";

export const ComparisonSection = () => {
  const competitors = ["Obsilab", "k6", "JMeter", "Locust", "Gatling", "Artillery", "LoadForge"];

  const comparisonData = [
    {
      category: "Zero-setup, UI-first",
      Obsilab: true,
      k6: false,
      JMeter: false,
      Locust: false,
      Gatling: false,
      Artillery: false,
      LoadForge: true,
    },
    {
      category: "Visual test builder",
      Obsilab: true,
      k6: false,
      JMeter: false,
      Locust: false,
      Gatling: false,
      Artillery: false,
      LoadForge: true,
    },
    {
      category: "1-click parallel tests",
      Obsilab: true,
      k6: false,
      JMeter: false,
      Locust: true,
      Gatling: false,
      Artillery: false,
      LoadForge: true,
    },
    {
      category: "Auto-scaling cloud",
      Obsilab: true,
      k6: false,
      JMeter: false,
      Locust: false,
      Gatling: false,
      Artillery: true,
      LoadForge: true,
    },
    {
      category: "Real-time p95/p99 metrics",
      Obsilab: true,
      k6: true,
      JMeter: false,
      Locust: false,
      Gatling: true,
      Artillery: false,
      LoadForge: false,
    },
   
    {
      category: "Slack alerts",
      Obsilab: true,
      k6: false,
      JMeter: false,
      Locust: false,
      Gatling: false,
      Artillery: false,
      LoadForge: true,
    },
    {
      category: "Affordable for small teams",
      Obsilab: true,
      k6: false,
      JMeter: true,
      Locust: true,
      Gatling: false,
      Artillery: true,
      LoadForge: false,
    },
    {
      category: "No scripting required",
      Obsilab: true,
      k6: false,
      JMeter: false,
      Locust: false,
      Gatling: false,
      Artillery: false,
      LoadForge: true,
    },
    {
      category: "Modern dashboard",
      Obsilab: true,
      k6: false,
      JMeter: false,
      Locust: false,
      Gatling: true,
      Artillery: false,
      LoadForge: true,
    },
  ];

  const uniqueAdvantages = [
    "Built for startups & indie devs",
    "Zero config required",
    "Instant cloud tests",
    "Modern, clean UI",
    "Predictable pricing",
    "Visual builder + code mode",
  ];

  const renderCell = (value: boolean) => {
    return value ? (
      <Check className="w-5 h-5 text-[#7dd3a0] mx-auto" />
    ) : (
      <Minus className="w-4 h-4 text-neutral-600 mx-auto" />
    );
  };

  return (
    <section id="comparison" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050608]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Obsilab <span className="text-[#D5A743]">Wins</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            See exactly where Obsilab outperforms other load-testing tools.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="overflow-x-auto rounded-2xl border-2 border-[#D5A743]/30 bg-[#0d0d0d]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#D5A743]/20">
                  <th className="text-left py-4 px-6 text-neutral-400 font-semibold">
                    Feature
                  </th>
                  {competitors.map((comp) => (
                    <th
                      key={comp}
                      className={`text-center py-4 px-3 font-bold text-sm whitespace-nowrap ${
                        comp === "Obsilab"
                          ? "text-[#D5A743] bg-[#D5A743]/10"
                          : "text-neutral-500"
                      }`}
                    >
                      {comp}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <motion.tr
                    key={row.category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className={idx < comparisonData.length - 1 ? "border-b border-neutral-800/50" : ""}
                  >
                    <td className="py-4 px-6 text-neutral-200 text-sm font-medium">
                      {row.category}
                    </td>
                    {competitors.map((comp) => (
                      <td
                        key={comp}
                        className={`text-center py-4 px-3 ${
                          comp === "Obsilab" ? "bg-[#D5A743]/10" : ""
                        }`}
                      >
                        {renderCell(row[comp as keyof typeof row] as boolean)}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Obsilab Unique Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border-2 border-[#D5A743]/40 bg-gradient-to-r from-[#1a1510] to-[#0d0d0d] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-[#D5A743]" />
              <h3 className="text-2xl font-bold text-[#D5A743]">Why Obsilab</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {uniqueAdvantages.map((advantage, idx) => (
                <motion.div
                  key={advantage}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-[#7dd3a0] shrink-0" />
                  <span className="text-sm text-neutral-200">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-xl md:text-2xl font-semibold text-neutral-300 max-w-3xl mx-auto">
            Stop writing scripts. Stop managing infrastructure.{" "}
            <span className="text-[#D5A743]">Start testing.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
