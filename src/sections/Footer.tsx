import Link from "next/link";
import { Github } from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Demo", href: "/#hero" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#hero" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "mailto:careers@obsilab.com", external: true },
      { label: "Contact", href: "mailto:hello@obsilab.com", external: true },
    ],
  },
  /*{
    title: "Resources",
    links: [
      { label: "Docs", href: "https://docs.obsilab.com", external: true },
      {
        label: "API Reference",
        href: "https://developers.obsilab.com",
        external: true,
      },
      { label: "Status", href: "https://status.obsilab.com", external: true },
      { label: "GitHub", href: "https://github.com/obsilab", external: true },
    ],
  },*/
  {
    title: "Legal",
    links: [
      { label: "Terms of Services", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Security", href: "/security" },
      { label: "DPA", href: "/dpa" },
      { label: "Testing Policy", href: "/testing-policy" },

    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-obsidian-void">
      <div className="container mx-auto px-6 py-16">
        <div className="mb-12 grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Obsilab
            </h3>
            <p className="text-sm leading-relaxed text-shade-frost">
              Stress-test your backend with AI-powered diagnostics.
            </p>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.label}`}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-antique-pearl transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-antique-pearl transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 md:flex-row">
          <p className="text-sm text-shade-frost">
            © {new Date().getFullYear()} Obsilab. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/obsilab"
              className="text-antique-pearl transition-colors hover:text-primary"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
