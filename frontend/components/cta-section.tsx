import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/20 via-card/80 to-cyan-400/10 p-8 text-center shadow-2xl shadow-primary/10 backdrop-blur-xl sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Start today
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Ready to explore what AI can do for your business?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Bring us a process, a customer journey, or a data challenge. We will
          help shape it into an AI solution roadmap.
        </p>
        <a href="#chat" className={cn(buttonVariants({ size: "lg" }), "mt-8")}>
          Start a conversation
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
