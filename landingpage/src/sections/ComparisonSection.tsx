"use client"
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/table";

export const ComparisonSection = () => {
  const features = [
    { feature: "One-click load testing", obsilab: true, k6: false, locust: false, k6Cloud: false },
    { feature: "True no-code load tests", obsilab: true, k6: false, locust: false, k6Cloud: false },
    { feature: "No scripts required", obsilab: true, k6: false, locust: false, k6Cloud: false },
    { feature: "No infrastructure to manage", obsilab: true, k6: false, locust: false, k6Cloud: true },
    { feature: "No DevOps required", obsilab: true, k6: false, locust: false, k6Cloud: false },
    { feature: "AI-powered root-cause analysis", obsilab: true, k6: false, locust: false, k6Cloud: false },
    { feature: "Instant AI insights", obsilab: true, k6: false, locust: false, k6Cloud: false },
    { feature: "Beginner-friendly onboarding", obsilab: true, k6: false, locust: false, k6Cloud: false },
    { feature: "Modern dashboard", obsilab: true, k6: false, locust: false, k6Cloud: true },
    { feature: "API-first design", obsilab: true, k6: true, locust: false, k6Cloud: true },
    { feature: "Built for startups & indie devs", obsilab: true, k6: false, locust: false, k6Cloud: false },
    { feature: "Pro performance, simple UX", obsilab: true, k6: false, locust: false, k6Cloud: false },
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
            Why Obsilab <span className="bg-gradient-to-r from-primary to-gold-gilded bg-clip-text text-transparent">Dominates</span>
          </h2>
          <p className="text-xl text-antique-pearl max-w-3xl mx-auto mb-6">
            The only tool that combines all essentials. Every competitor fails at least two — most fail five or more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50 hover:bg-transparent">
                  <TableHead className="text-shade-frost font-semibold">Feature</TableHead>
                  <TableHead className="text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-primary font-bold text-lg">Obsilab</span>
                      <div className="h-1 w-full bg-primary rounded-full" />
                    </div>
                  </TableHead>
                  <TableHead className="text-center text-antique-pearl">k6</TableHead>
                  <TableHead className="text-center text-antique-pearl">Locust</TableHead>
                  <TableHead className="text-center text-antique-pearl">k6 Cloud</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-border/30 hover:bg-muted/30"
                  >
                    <TableCell className="font-medium text-foreground">{row.feature}</TableCell>
                    <TableCell className="text-center bg-primary/5">
                      {row.obsilab ? (
                        <Check className="w-6 h-6 text-jade-obsidian mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-shade-frost mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.k6 ? (
                        <Check className="w-6 h-6 text-jade-obsidian mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-shade-frost mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.locust ? (
                        <Check className="w-6 h-6 text-jade-obsidian mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-shade-frost mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {row.k6Cloud ? (
                        <Check className="w-6 h-6 text-jade-obsidian mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-shade-frost mx-auto" />
                      )}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        {/* Emotional closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl mx-auto leading-tight">
            <span className="text-foreground">Obsilab is the </span>
            <span className="bg-gradient-to-r from-primary via-gold-gilded to-primary bg-clip-text text-transparent">only</span>
            <span className="text-foreground"> load-testing platform designed for modern devs who </span>
            <span className="text-shade-frost line-through decoration-inferno-red/50">don't want to write scripts</span>
            <span className="text-foreground">, </span>
            <span className="text-shade-frost line-through decoration-inferno-red/50">build infrastructure</span>
            <span className="text-foreground">, or </span>
            <span className="text-shade-frost line-through decoration-inferno-red/50">decode charts</span>
            <span className="text-foreground">.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
