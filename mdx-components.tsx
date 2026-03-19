import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // ── Headings ──────────────────────────────────────────────────────────────
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "mt-2 scroll-m-20 text-3xl font-semibold tracking-tight text-foreground",
          className,
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "mt-10 scroll-m-20 border-b border-border pb-2 text-xl font-semibold tracking-tight text-foreground first:mt-0",
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-foreground",
          className,
        )}
        {...props}
      />
    ),

    // ── Body text ─────────────────────────────────────────────────────────────
    p: ({ className, ...props }) => (
      <p
        className={cn(
          "leading-7 text-muted-foreground not-first:mt-4",
          className,
        )}
        {...props}
      />
    ),

    // ── Lists ─────────────────────────────────────────────────────────────────
    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "my-4 ml-6 list-disc space-y-1 text-muted-foreground",
          className,
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn(
          "my-4 ml-6 list-decimal space-y-1 text-muted-foreground",
          className,
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("leading-7", className)} {...props} />
    ),

    // ── Inline code ───────────────────────────────────────────────────────────
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "relative rounded-sm bg-muted px-[0.35rem] py-[0.15rem] font-mono text-[0.8em] text-foreground",
          "in-data-rehype-pretty-code-figure:bg-transparent in-data-rehype-pretty-code-figure:p-0",
          className,
        )}
        {...props}
      />
    ),

    // ── Code blocks ───────────────────────────────────────────────────────────
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "my-5 overflow-x-auto rounded-lg border border-border bg-muted/50 px-4 py-4",
          "text-sm leading-relaxed font-mono",
          "[&>code]:bg-transparent [&>code]:p-0 [&>code]:text-foreground",
          className,
        )}
        {...props}
      />
    ),

    // ── Table ─────────────────────────────────────────────────────────────────
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
        <table className={cn("w-full text-sm", className)} {...props} />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead className={cn("bg-muted/50", className)} {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <tbody
        className={cn("[&_tr:last-child]:border-0", className)}
        {...props}
      />
    ),
    tr: ({ className, ...props }) => (
      <tr
        className={cn(
          "border-b border-border transition-colors hover:bg-muted/30",
          className,
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "px-4 py-3 text-left font-medium text-foreground",
          className,
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn("px-4 py-3 text-muted-foreground", className)}
        {...props}
      />
    ),

    // ── Blockquote ────────────────────────────────────────────────────────────
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "mt-6 border-l-2 border-border pl-4 italic text-muted-foreground",
          className,
        )}
        {...props}
      />
    ),

    // ── Horizontal rule ───────────────────────────────────────────────────────
    hr: ({ ...props }) => <hr className="my-8 border-border" {...props} />,

    // ── Links ─────────────────────────────────────────────────────────────────
    a: ({ className, ...props }) => (
      <a
        className={cn(
          "font-medium text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity",
          className,
        )}
        {...props}
      />
    ),

    // ── Strong ────────────────────────────────────────────────────────────────
    strong: ({ className, ...props }) => (
      <strong
        className={cn("font-semibold text-foreground", className)}
        {...props}
      />
    ),

    ...components,
  };
}
