"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// ─── Navbar ───────────────────────────────────────────────────────────────────

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6">

        {/* Brand */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground"
        >
          <span className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
            K
          </span>
          Keploy
        </Link>

        {/* Badge */}
        <span className="hidden sm:inline-flex items-center rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
          Go quickstart
        </span>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-1">
          <ThemeToggle />

          {/* GitHub */}
          <Link
            href="https://github.com/keploy/keploy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={cn(
              "inline-flex size-8 items-center justify-center rounded-md text-muted-foreground",
              "hover:bg-accent hover:text-accent-foreground transition-colors duration-150",
              "outline-none focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5.85a6.65 6.65 0 0 0-2.1 12.96c.33.06.45-.14.45-.32v-1.13C3.8 12.73 3.42 11.5 3.42 11.5c-.3-.77-.74-1-.74-1-.61-.42.05-.41.05-.41.67.05 1.02.69 1.02.69.6 1.03 1.57.73 1.95.56.06-.43.23-.73.42-.9-1.49-.17-3.06-.75-3.06-3.33 0-.73.26-1.33.69-1.8-.07-.17-.3-.85.07-1.78 0 0 .56-.18 1.84.69a6.4 6.4 0 0 1 3.34 0c1.28-.87 1.84-.69 1.84-.69.37.93.14 1.61.07 1.78.43.47.69 1.07.69 1.8 0 2.59-1.57 3.16-3.07 3.33.24.21.46.62.46 1.24v1.85c0 .18.12.38.46.32A6.65 6.65 0 0 0 7.5.85Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
            </svg>
          </Link>

          {/* Docs link */}
          <Link
            href="https://keploy.io/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden sm:inline-flex items-center justify-center",
              "h-8 rounded-md px-3 text-xs font-medium",
              "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150",
              "outline-none focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            Docs ↗
          </Link>
        </div>
      </div>
    </header>
  );
}