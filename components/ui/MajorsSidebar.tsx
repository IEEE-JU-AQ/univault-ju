"use client";

import { useState } from "react";
import majors from "@/app/data/majors.json";

export default function MajorsSidebar() {
  const [expandedFaculties, setExpandedFaculties] = useState<Set<string>>(new Set());

  const toggleFaculty = (facultyId: string) => {
    setExpandedFaculties((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(facultyId)) {
        newSet.delete(facultyId);
      } else {
        newSet.add(facultyId);
      }
      return newSet;
    });
  };

  return (
    <div className="max-h w-70 border-2 border-t-0 border-l-0 p-4 overflow-y-auto">
      {majors.map((faculty) => (
        <div key={faculty.id} className="mb-4">
          <button
            onClick={() => toggleFaculty(faculty.id)}
            className="flex items-center w-full p-2 hover:bg-gray-100 rounded font-semibold text-lg"
          >
            <span className="mr-2">{expandedFaculties.has(faculty.id) ? "▼" : "▶"}</span>
            {faculty.faculty_name}
          </button>
          {expandedFaculties.has(faculty.id) && (
            <ul className="space-y-1 ml-6 mt-2">
              {faculty.majors.map((major) => (
                <li key={major.id} className="text-sm cursor-pointer hover:text-green-600">
                  {major.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
