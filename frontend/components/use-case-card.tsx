import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";

type UseCaseCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function UseCaseCard({ title, description, icon: Icon }: UseCaseCardProps) {
  return (
    <Card className="flex h-full gap-4 p-5 transition duration-300 hover:border-accent/50 hover:bg-card/90">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground ring-1 ring-accent/25">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
}
