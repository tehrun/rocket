"use client";

import { FormEvent, KeyboardEvent, useMemo, useState } from "react";
import { Send } from "lucide-react";

import { MessageBubble } from "@/components/message-bubble";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const assistantGreeting: Message = {
  id: "assistant-greeting",
  role: "assistant",
  content: "Hi, tell me what kind of AI solution you need.",
};

const examplePrompts = [
  "Customer support chatbot",
  "Automate reports",
  "AI product search",
  "Internal knowledge assistant",
];

const mockAssistantResponse =
  "That sounds like a great fit for a custom AI workflow. We can help define the data sources, user journey, and integration points to build a practical solution.";

export function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([assistantGreeting]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  function appendMockAssistantResponse() {
    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: mockAssistantResponse,
        },
      ]);
      setIsLoading(false);
    }, 800);
  }

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

    // Future API integration can replace this mock response timeout.
    appendMockAssistantResponse();
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
    <section id="chat" className="px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Interactive demo
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Describe your workflow. Get a practical AI direction.
          </h2>
          <p className="mt-4 text-muted-foreground">
            This frontend-only chat demo is wired for local state today and ready
            for a future API-backed assistant tomorrow.
          </p>
        </div>

        <Card className="overflow-hidden p-4 sm:p-6">
          <div className="mb-4 flex flex-wrap gap-2" aria-label="Example prompts">
            {examplePrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="rounded-full border border-border bg-secondary/60 px-3 py-2 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary disabled:opacity-50"
                onClick={() => setInput(prompt)}
                disabled={isLoading}
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="flex min-h-[320px] flex-col gap-4 rounded-3xl border border-border/70 bg-background/55 p-4">
            <div className="flex flex-1 flex-col gap-3" aria-live="polite">
              {messages.map((message) => (
                <MessageBubble key={message.id} role={message.role} content={message.content} />
              ))}
              {isLoading ? (
                <MessageBubble role="assistant" content="Typing..." />
              ) : null}
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <label htmlFor="ai-chat-message" className="sr-only">
                Message for AI Solutions assistant
              </label>
              <Textarea
                id="ai-chat-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tell us about the workflow you want to improve..."
                disabled={isLoading}
              />
              <div className="flex justify-end">
                <Button type="submit" disabled={!canSend} aria-label="Send chat message">
                  Send
                  <Send className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}
