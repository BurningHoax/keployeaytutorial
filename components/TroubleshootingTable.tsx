"use client";

import * as React from "react";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TroubleshootingItem {
  problem: string;
  fix: React.ReactNode;
}

const troubleshootingData: TroubleshootingItem[] = [
  {
    problem: "`keploy: command not found`",
    fix: "Restart your shell or re-run the install script",
  },
  {
    problem: "Container name conflict",
    fix: "Run `docker compose down -v` before recording to clean up old containers",
  },
  {
    problem: "Postgres connection refused",
    fix: "Check the container is running: `docker ps`",
  },
  {
    problem: "`failed to unmarshal a mock yaml doc of unknown type`",
    fix: "Ensure you're using the latest Keploy version: `keploy --version`",
  },
  {
    problem: "All tests failing",
    fix: "Run `keploy test` from the same directory you recorded in",
  },
  {
    problem: "Build timeout",
    fix: "Increase the delay with `--build-delay 60` or higher",
  },
  {
    problem: "Port 8082 already in use",
    fix: "Free the port: `lsof -i :8082` or increase the delay to allow proper startup",
  },
  {
    problem: "Schema errors on replay",
    fix: "Postgres state is mocked — no live DB needed during `keploy test`",
  },
  {
    problem: "Asked for API key / Authentication failed",
    fix: (
      <>
        Create a free account at{" "}
        <a
          href="https://keploy.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 hover:text-blue-800"
        >
          https://keploy.io/
        </a>{" "}
        and retry
      </>
    ),
  },
];

export default function TroubleshootingTable() {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Problem</TableHead>
            <TableHead className="font-bold">Fix</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {troubleshootingData.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-mono text-sm">
                {item.problem}
              </TableCell>
              <TableCell className="text-sm">{item.fix}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
