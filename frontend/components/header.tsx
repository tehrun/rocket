import { Bot } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = ["Services", "Use Cases", "Pricing", "Contact"];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="AI Solutions home">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <Bot className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-base font-bold tracking-tight text-foreground">
            AI Solutions
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </nav>

        <a href="#chat" className={cn(buttonVariants({ size: "sm" }))}>
          Start Chat
        </a>
      </div>
    </header>
  );
}
