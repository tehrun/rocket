"use client";

import { useMemo, useState } from "react";
import { Bot, Image, Loader2, MessageSquareText, PlaySquare, Sparkles, type LucideIcon } from "lucide-react";

import { MessageBubble } from "@/components/message-bubble";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DemoScenario = {
  id: string;
  label: string;
  icon: LucideIcon;
  userMessage: string;
  assistantMessage: string;
  outputLabel: string;
  outputDescription: string;
};

const demoScenarios: DemoScenario[] = [
  {
    id: "image-generation",
    label: "Image generation",
    icon: Image,
    userMessage: "Can you create product image concepts for a new eco bottle launch?",
    assistantMessage:
      "Yes. I would generate three visual directions: studio hero shots, lifestyle desk scenes, and social-ready detail crops with your brand colors locked in.",
    outputLabel: "3 concept boards queued",
    outputDescription: "Prompt templates, brand guardrails, and review steps are prepared.",
  },
  {
    id: "video-generation",
    label: "Video generation",
    icon: PlaySquare,
    userMessage: "We need short videos for a feature announcement. What should the AI make first?",
    assistantMessage:
      "Start with a 15-second storyboard, script, caption set, and shot plan. Once approved, the generation workflow can produce variants for paid social and product pages.",
    outputLabel: "Storyboard draft ready",
    outputDescription: "Scenes, narration, and campaign variants are structured.",
  },
  {
    id: "simple-questions",
    label: "Simple questions",
    icon: MessageSquareText,
    userMessage: "Can customers ask simple shipping and return questions?",
    assistantMessage:
      "Absolutely. The assistant can answer from your policies, show source-backed responses, and escalate low-confidence questions to your team.",
    outputLabel: "Knowledge assistant mapped",
    outputDescription: "FAQs, policy documents, and fallback rules are connected.",
  },
  {
    id: "workflow-automation",
    label: "Workflow automation",
    icon: Bot,
    userMessage: "Can AI summarize sales calls and update our CRM automatically?",
    assistantMessage:
      "Yes. The workflow can transcribe calls, extract action items, draft follow-ups, and update CRM fields after a quick human approval step.",
    outputLabel: "Automation flow designed",
    outputDescription: "CRM fields, approval points, and notifications are defined.",
  },
];

export function ChatDemo() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(demoScenarios[0].id);
  const [activeScenarioId, setActiveScenarioId] = useState(demoScenarios[0].id);
  const [isGenerating, setIsGenerating] = useState(false);

  const activeScenario = useMemo(
    () => demoScenarios.find((scenario) => scenario.id === activeScenarioId) ?? demoScenarios[0],
    [activeScenarioId],
  );

  function runScenario(scenarioId: string) {
    setSelectedScenarioId(scenarioId);
    setIsGenerating(true);

    window.setTimeout(() => {
      setActiveScenarioId(scenarioId);
      setIsGenerating(false);
    }, 900);
  }

  return (
    <section id="chat" className="px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Interactive demo
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Watch practical AI answers for everyday workflows.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose a scenario to see how an AI assistant could respond to image
            generation, video generation, simple questions, and automation requests.
          </p>
        </div>

        <Card className="overflow-hidden p-4 sm:p-6">
          <div className="mb-4 grid gap-2 sm:grid-cols-2" aria-label="Demo scenarios">
            {demoScenarios.map((scenario) => {
              const Icon = scenario.icon;
              const isSelected = selectedScenarioId === scenario.id;

              return (
                <button
                  key={scenario.id}
                  type="button"
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors disabled:cursor-wait disabled:opacity-70",
                    isSelected
                      ? "border-primary/60 bg-primary/15 text-foreground"
                      : "border-border bg-secondary/40 text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                  )}
                  onClick={() => runScenario(scenario.id)}
                  disabled={isGenerating}
                >
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {scenario.label}
                </button>
              );
            })}
          </div>

          <div className="flex min-h-[360px] flex-col gap-4 rounded-3xl border border-border/70 bg-background/55 p-4">
            <div className="flex flex-1 flex-col gap-3" aria-live="polite">
              <MessageBubble role="user" content={activeScenario.userMessage} />
              {isGenerating ? (
                <div className="flex justify-start">
                  <div className="flex max-w-[82%] items-center gap-3 rounded-2xl border border-border/80 bg-muted/70 px-4 py-3 text-sm leading-6 text-foreground shadow-sm">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" aria-hidden="true" />
                    Generating answer...
                  </div>
                </div>
              ) : (
                <MessageBubble role="assistant" content={activeScenario.assistantMessage} />
              )}
            </div>

            <div className="rounded-3xl border border-primary/30 bg-primary/10 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-primary/20 p-2 text-primary">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {isGenerating ? "Preparing AI direction..." : activeScenario.outputLabel}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {isGenerating
                      ? "Loading the right workflow steps, guardrails, and next-best action."
                      : activeScenario.outputDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
