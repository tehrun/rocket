import {
  BarChart3,
  Bot,
  Boxes,
  Code2,
  Headphones,
  LineChart,
  Megaphone,
  PlugZap,
  Repeat,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Workflow,
} from "lucide-react";

import { ChatDemo } from "@/components/chat-demo";
import { CTASection } from "@/components/cta-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServiceCard } from "@/components/service-card";
import { UseCaseCard } from "@/components/use-case-card";

const services = [
  {
    title: "AI Chatbots",
    description:
      "Conversational assistants that qualify leads, answer questions, and guide customers across channels.",
    icon: Bot,
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive handoffs, reporting loops, and operational tasks with reliable AI-enhanced systems.",
    icon: Workflow,
  },
  {
    title: "Data Analysis",
    description:
      "Turn raw business data into summaries, insights, alerts, and executive-ready reporting workflows.",
    icon: BarChart3,
  },
  {
    title: "Internal AI Assistants",
    description:
      "Give teams a secure assistant for policies, documents, SOPs, and internal knowledge discovery.",
    icon: Sparkles,
  },
  {
    title: "Product Recommendation AI",
    description:
      "Create personalized discovery experiences that match customers with the right products faster.",
    icon: Search,
  },
  {
    title: "Custom AI Integrations",
    description:
      "Connect AI into your CRM, help desk, data warehouse, product, or back-office tools.",
    icon: PlugZap,
  },
];

const useCases = [
  {
    title: "Ecommerce",
    description: "Product search, shopping assistants, merchandising insights, and post-purchase support.",
    icon: ShoppingCart,
  },
  {
    title: "Customer Support",
    description: "Ticket triage, suggested replies, self-service bots, and quality monitoring.",
    icon: Headphones,
  },
  {
    title: "Marketing",
    description: "Campaign planning, content operations, lead enrichment, and audience research.",
    icon: Megaphone,
  },
  {
    title: "Finance",
    description: "Forecasting support, reconciliations, variance summaries, and financial research workflows.",
    icon: LineChart,
  },
  {
    title: "Operations",
    description: "SOP assistants, report automation, vendor workflows, and process visibility.",
    icon: Boxes,
  },
  {
    title: "Developer Tools",
    description: "Documentation assistants, codebase search, release summaries, and internal tooling copilots.",
    icon: Code2,
  },
];

function ServicesSection() {
  return (
    <section id="services" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            AI systems built around real business outcomes.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section id="use-cases" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Use Cases
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Adaptable AI patterns for every team.
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            Designed for secure internal and customer-facing workflows
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.title} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-card/70 p-8 text-center shadow-2xl shadow-black/10 backdrop-blur-xl">
        <Repeat className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-bold text-foreground">Flexible project scopes</h2>
        <p className="mt-3 text-muted-foreground">
          Start with a discovery sprint, prototype a proof of concept, or build a
          production workflow in phases.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ChatDemo />
      <ServicesSection />
      <UseCasesSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
