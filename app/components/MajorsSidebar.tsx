"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Faculty } from "@/app/types";

export default function MajorsSidebar({ faculties }: { faculties: Faculty[] }) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggle = (id: string) => {
    const next = new Set(expandedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedIds(next);
  };

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger toggle button — mobile only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
        className="fixed top-18 left-4 z-50 md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-background border border-border shadow-md"
      >
        <span
          className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-foreground mt-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-foreground mt-1 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
        />
      </button>

      {/* Overlay — mobile only */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed left-0 top-15 w-70 border-r border-border bg-background p-6 py-12 pb-17 overflow-y-auto h-full z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0`}
      >
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
    </>
  );
}