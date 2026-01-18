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
    <div className="fixed left-0 top-0 w-70 border-r border-gray-200 p-6 overflow-y-auto bg-white h-screen">
      <h2 className="text-xl font-bold mb-6 text-gray-900">Faculties & Majors</h2>
      {majors.map((faculty) => (
        <div key={faculty.id} className="mb-5">
          <button
            onClick={() => toggleFaculty(faculty.id)}
            className="flex items-center w-full px-3 py-2 rounded-lg font-semibold bg-green-200 text-gray-900 hover:bg-green-100 transition-colors duration-200"
          >
            <span className="mr-2 text-sm text-orange-600">
              {expandedFaculties.has(faculty.id) ? "▼" : "▶"}
            </span>
            {faculty.faculty_name}
          </button>
          {expandedFaculties.has(faculty.id) && (
            <ul className="space-y-1 ml-6 mt-1 py-1">
              {faculty.majors.map((major) => (
                <li
                  key={major.id}
                  className="text-sm text-gray-800 cursor-pointer px-3 py-1.5 rounded hover:bg-green-100 hover:text-green-900 transition-colors duration-150"
                >
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
