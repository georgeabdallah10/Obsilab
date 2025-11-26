"use client";

import { motion } from "framer-motion";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { Badge } from "../components/badge";
import { LinkedinIcon, Mail, GithubIcon, Globe } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1] tracking-[-0.02em] text-[3.052rem] md:text-[3.815rem] lg:text-[4.768rem]">
            <span className="bg-gradient-to-r from-primary via-gold-gilded to-primary bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
          <p className="text-antique-pearl text-lg md:text-xl max-w-2xl mx-auto leading-[1.5]">
            Meet the people behind Obsilab who are passionate about revolutionizing API testing.
          </p>
        </motion.div>

        {/* CEO Profile Card */}
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Card className="p-8 bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(213,167,67,0.2)] transition-all duration-300">
            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">GA</span>
              </div>
            </div>

            {/* Name & Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2 leading-[1.1] text-[2.441rem]">
                George Abdallah
              </h2>
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-antique-pearl">CEO & Founder</span>
                <Badge variant="outline" className="border-primary/50 text-primary">
                  Engineer
                </Badge>
              </div>
              <p className="text-antique-pearl text-sm leading-[1.5]">
                Passionate engineer dedicated to building tools that make API testing seamless and intelligent for developers worldwide.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
                asChild
              >
                <a
                  href="https://linkedin.com/in/georgeabdallah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5 text-antique-pearl hover:text-primary" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
                asChild
              >
                <a
                  href="mailto:george..obsilab.com"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-antique-pearl hover:text-primary" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
                asChild
              >
                <a
                  href="https://github.com/georgeabdallah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5 text-antique-pearl hover:text-primary" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
                asChild
              >
                <a
                  href="https://georgeabdallah.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Portfolio"
                >
                  <Globe className="w-5 h-5 text-antique-pearl hover:text-primary" />
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
