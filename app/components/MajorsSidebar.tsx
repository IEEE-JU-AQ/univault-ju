"use client";

import { useState } from "react";
import Link from "next/link";
import type { Faculty } from "@/app/types";

export default function MajorsSidebar({ faculties }: { faculties: Faculty[] }) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    const next = new Set(expandedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedIds(next);
  };

  return (
    <nav className="fixed left-0 top-15 w-70 border-r border-border p-6 pb-17 overflow-y-auto h-full bg-layoutBackground dark:bg-layout-background">
      <h2 className="text-xl font-bold mb-6">Faculties & Majors</h2>

      {/* All Courses Link */}
      <button className="w-full">
        <Link
          href="/courses"
          className="flex items-center w-full h-full px-3 py-2 rounded-lg text-white font-semibold hover:bg-muted transition-colors duration-200"
        >
          <span className="mr-2">📚</span> All Courses
        </Link>
      </button>

      <div className="h-12 bg-gray-200 w-0 border-l"></div>

      {/* Faculties */}
      {faculties.map((faculty) => (
        <div key={faculty.id} className="mb-4">
          <button
            onClick={() => toggle(faculty.id)}
            className="flex items-center w-full px-3 py-2 rounded-lg font-semibold text-left hover:bg-muted transition-colors duration-200"
          >
            <span className="mr-2 text-xs text-accent">
              {expandedIds.has(faculty.id) ? "▼" : "▶"}
            </span>
            {faculty.name}
          </button>

          {expandedIds.has(faculty.id) && (
            <ul className="space-y-1 ml-6 mt-1 py-1 border-l border-border">
              {faculty.majors.map((major) => (
                <li key={major.id}>
                  <Link
                    href={`/courses/major/${major.id}`}
                    className="block text-sm text-muted-foreground px-4 py-1.5 hover:text-primary hover:bg-muted rounded-r-lg transition-colors duration-150"
                  >
                    {major.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  );
}