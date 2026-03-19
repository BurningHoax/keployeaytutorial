import * as React from "react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "tip" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const config: Record<
  CalloutType,
  { icon: string; classes: string; titleClasses: string }
> = {
  info: {
    icon: "ℹ",
    classes: "border-border bg-muted/50 text-muted-foreground",
    titleClasses: "text-foreground",
  },
  tip: {
    icon: "✦",
    classes:
      "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300",
    titleClasses: "text-emerald-900 dark:text-emerald-200",
  },
  warning: {
    icon: "⚠",
    classes:
      "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-300",
    titleClasses: "text-amber-900 dark:text-amber-200",
  },
  danger: {
    icon: "✕",
    classes:
      "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300",
    titleClasses: "text-red-900 dark:text-red-200",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const { icon, classes, titleClasses } = config[type];

  return (
    <div
      className={cn(
        "my-5 flex gap-3 rounded-lg border px-4 py-3 text-sm leading-relaxed",
        classes,
      )}
    >
      <span className="mt-0.5 shrink-0 text-base leading-none" aria-hidden>
        {icon}
      </span>
      <div className="min-w-0">
        {title && (
          <p className={cn("mb-1 font-semibold", titleClasses)}>{title}</p>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}