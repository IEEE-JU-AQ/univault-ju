import type { Course } from "@/app/types";
import Link from "next/link";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="border border-border rounded-xl bg-white p-4 bg-card text-card-foreground shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Course Header: Category Badge */}
        <div className="flex justify-between items-start">
          <span className="text-[10px] uppercase tracking-wider font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-md">
            {course.code || "CIS-101"}
          </span>
          <span className="text-muted-foreground hover:text-primary transition-colors cursor-help">
            <span className="text-xs">📄 12 Files</span>
          </span>
        </div>

        {/* Course Title */}
        <h2 className="text-xl font-bold mt-4 mb-2 group-hover:text-primary transition-colors leading-tight">
          {course.name}
        </h2>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {course.description || "Access past papers, lecture slides, and midterms for this course."}
        </p>
      </div>

      {/* Action Button - Uses your refined Secondary color */}
      <button className="w-full mt-6 py-2.5 px-4 rounded-l font-semibold transition-all duration-200 flex items-center justify-center gap-2 opacity-70">
        <Link className="w-full h-full" href={`./courses/course/${course.id}`}>View Resources</Link>
        <span className="text-lg">→</span>
      </button>
    </div>
  );
}