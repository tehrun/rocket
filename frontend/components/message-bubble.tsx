import { cn } from "@/lib/utils";

type MessageBubbleProps = {
  role: "user" | "assistant";
  content: string;
};

export function MessageBubble({ role, content }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[82%] rounded-2xl border px-4 py-3 text-sm leading-6 shadow-sm",
          isUser
            ? "border-primary/30 bg-primary text-primary-foreground"
            : "border-border/80 bg-muted/70 text-foreground",
        )}
      >
        {content}
      </div>
    </div>
  );
}
