"use client";
import Link from "next/link";
import type { BreadCrumbsProps } from "@/app/types";

export default function BreadCrumbs({ courseId, CourseName }: BreadCrumbsProps) {
    return (
<nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
      <Link href="/courses" className="hover:text-primary transition-colors">
        Courses
      </Link>
      
      <i className="fa-solid fa-chevron-right text-[10px] text-gray-500"></i>
      
      {/* Dynamic Course ID with Orbitron for the 'Active' feel */}
      <span className="tracking-tighter text-gray-500">
        {CourseName ? CourseName : `Course ${courseId}`}
      </span>
    </nav>
    );
}