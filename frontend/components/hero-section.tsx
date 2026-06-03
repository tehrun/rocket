import { ArrowRight, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-16 pt-20 sm:pt-28 lg:px-8">
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl animate-glow" />
      <div className="absolute right-8 top-36 -z-10 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground shadow-2xl shadow-primary/10 backdrop-blur">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Practical AI systems for modern teams
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Build smarter workflows with{" "}
            <span className="bg-gradient-to-r from-primary via-cyan-300 to-violet-300 bg-clip-text text-transparent">
              AI
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            We help businesses create AI assistants, automation tools, chatbots,
            and internal productivity solutions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#chat" className={cn(buttonVariants({ size: "lg" }))}>
              Talk to our AI
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#use-cases"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              View use cases
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-primary/10 backdrop-blur-xl">
          <div className="absolute inset-6 rounded-[1.5rem] bg-gradient-to-br from-primary/20 via-transparent to-cyan-400/10" />
          <div className="relative grid h-full content-center gap-4">
            {[
              "AI assistant design",
              "Workflow mapping",
              "Data + API integration",
              "Launch-ready automation",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/70 p-4 shadow-lg backdrop-blur"
              >
                <span className="text-sm font-medium text-foreground">{item}</span>
                <span className="text-xs text-muted-foreground">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
