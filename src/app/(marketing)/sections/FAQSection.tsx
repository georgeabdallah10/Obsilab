"use client"

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does Obsilab protect my data and API keys?",
      answer: "We use end-to-end encryption for all credentials and never store your API keys in plain text. Your backend code and database schemas remain completely private—we only test the endpoints you specify.",
    },
    {
      question: "How accurate are the load test results?",
      answer: "Our tests simulate real user behavior from distributed global regions. Results are accurate within 5-10ms variance, matching production traffic patterns. We use industry-standard protocols and timing measurements.",
    },
    {
      question: "Do I need to write code or scripts?",
      answer: "No. Obsilab is completely no-code for basic load testing. Just paste your API endpoint and configure the load level. For advanced flows (Pro+), we offer a visual Flow Builder—still no coding required.",
    },
    {
      question: "Can I test authenticated endpoints?",
      answer: "Yes. You can provide authentication tokens, API keys, or use our Flow Builder to simulate login sequences. All credentials are encrypted and never logged.",
    },
    {
      question: "What happens if my API fails during a test?",
      answer: "Our AI engine analyzes the failure patterns and provides specific recommendations. We'll show you error rates, response codes, latency spikes, and suggest fixes like scaling databases or adjusting rate limits.",
    },
    {
      question: "How does the AI analysis work?",
      answer: "Our AI correlates performance metrics (latency, throughput, errors) with infrastructure patterns. It identifies common bottlenecks—database saturation, memory leaks, rate-limiting issues—and provides actionable fixes based on best practices.",
    },
    {
      question: "Can I test staging or localhost environments?",
      answer: "Yes. You can test any publicly accessible endpoint, including staging servers. For localhost testing, you'll need to expose your local server via tunneling (we recommend ngrok).",
    },
    {
      question: "What's the difference between VUs and requests?",
      answer: "Virtual Users (VUs) simulate concurrent users, each making multiple requests over time. For example, 1,000 VUs might generate 50,000 total requests during a 5-minute test, depending on your API response times.",
    },
  ];

  return (
    <section className="py-24 bg-obsidian-void">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.1] text-[2.441rem] md:text-[3.052rem]">
            Frequently asked questions
          </h2>
          <p className="text-xl text-antique-pearl max-w-2xl mx-auto leading-[1.5]">
            Everything you need to know about load testing with Obsilab
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-antique-pearl pb-6 leading-[1.5] text-lg ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
