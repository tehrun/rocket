"use client";

import Link from "next/link";
import { FormEvent, KeyboardEvent, useMemo, useState } from "react";
import { History, Menu, PanelLeftClose, Send } from "lucide-react";

import { MessageBubble } from "@/components/message-bubble";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type ChatHistoryItem = {
  id: string;
  title: string;
  preview: string;
};

const initialMessages: Message[] = [
  {
    id: "assistant-welcome",
    role: "assistant",
    content:
      "Welcome. Tell me what you want to build, automate, generate, or improve, and I’ll map the next practical AI step.",
  },
];

const chatHistory: ChatHistoryItem[] = [
  {
    id: "support-agent",
    title: "Support AI assistant",
    preview: "Ticket triage, answer drafting, and escalation routing.",
  },
  {
    id: "creative-studio",
    title: "Creative generation workflow",
    preview: "Image concepts, video storyboards, and brand-safe prompts.",
  },
  {
    id: "ops-automation",
    title: "Operations automation",
    preview: "Daily reporting, vendor follow-ups, and Slack alerts.",
  },
];

const suggestionPrompts = [
  "Create an image generation workflow for product photos",
  "Plan a video generation pipeline for ads",
  "Answer customer questions from our help docs",
  "Automate weekly sales reporting",
];

function buildAssistantResponse(message: string) {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("image")) {
    return "For image generation, start with a prompt template, brand rules, review queue, and storage flow. A strong MVP can generate product-scene concepts, let your team approve the best outputs, then export production-ready variants.";
  }

  if (normalizedMessage.includes("video")) {
    return "For video generation, split the workflow into script, shot list, voiceover, visual style, and final QA. The practical direction is a guided pipeline that creates storyboard options before producing short-form ad or training clips.";
  }

  if (normalizedMessage.includes("question") || normalizedMessage.includes("docs")) {
    return "For simple questions, use a retrieval assistant connected to approved documents. It should cite source material, ask clarifying questions when confidence is low, and hand off edge cases to your team.";
  }

  if (normalizedMessage.includes("report") || normalizedMessage.includes("sales")) {
    return "For reporting automation, connect the data sources, define the weekly summary format, add anomaly detection, and deliver the result through email or Slack with a human approval step.";
  }

  return "A practical AI direction is to define the user journey, connect the right data sources, prototype the highest-volume task first, and add human review before production rollout.";
}

export default function ChatPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  function sendMessage(content: string) {
    const trimmedContent = content.trim();

    if (!trimmedContent || isLoading) {
      return;
    }

    setMessages((current) => [
      ...current,
      {
        id: `user-${Date.now()}`,
        role: "user",
        content: trimmedContent,
      },
    ]);
    setInput("");
    setIsLoading(true);

    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: buildAssistantResponse(trimmedContent),
        },
      ]);
      setIsLoading(false);
    }, 900);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute left-1/2 top-16 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-10 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-80 border-r border-white/10 bg-card/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl transition-transform duration-300",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
        aria-label="Chat history"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <History className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="text-lg font-semibold">Chat history</h2>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close chat history sidebar"
          >
            <PanelLeftClose className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-6 space-y-3">
          {chatHistory.map((item) => (
            <button
              key={item.id}
              type="button"
              className="w-full rounded-2xl border border-border/70 bg-background/50 p-4 text-left transition-colors hover:bg-secondary/70"
            >
              <span className="block text-sm font-semibold text-foreground">{item.title}</span>
              <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                {item.preview}
              </span>
            </button>
          ))}
        </div>
      </aside>

      <div className="flex min-h-screen flex-col px-5 py-5 sm:px-8">
        <div className="mx-auto flex w-full items-center justify-between lg:w-[60%] lg:max-w-5xl">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open chat history sidebar"
          >
            <Menu className="h-4 w-4" aria-hidden="true" />
            History
          </Button>
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Back home
          </Link>
        </div>

        <section className="mx-auto flex w-full flex-1 flex-col py-5 lg:w-[60%] lg:max-w-5xl">
          <div className="flex flex-1 flex-col gap-4 rounded-[2rem] border border-border/70 bg-card/50 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-6">
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto pb-4" aria-live="polite">
              {messages.map((message) => (
                <MessageBubble key={message.id} role={message.role} content={message.content} />
              ))}
              {isLoading ? <MessageBubble role="assistant" content="Generating answer..." /> : null}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-border/70 pt-4" aria-label="Suggested prompts">
              {suggestionPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="rounded-full border border-border bg-secondary/50 px-3 py-2 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary disabled:opacity-50"
                  onClick={() => sendMessage(prompt)}
                  disabled={isLoading}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="sticky bottom-0 space-y-3 rounded-3xl border border-border/80 bg-background/85 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <label htmlFor="chat-message" className="sr-only">
                Message for AI Solutions assistant
              </label>
              <Textarea
                id="chat-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about image generation, video generation, simple Q&A, automation..."
                disabled={isLoading}
                className="min-h-[72px] border-0 bg-transparent focus-visible:ring-0"
              />
              <div className="flex justify-end">
                <Button type="submit" disabled={!canSend} aria-label="Send chat message">
                  Send
                  <Send className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
