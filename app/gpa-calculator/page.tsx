"use client";

import { useState } from "react";
import type { CompletedCourse } from "@/app/types";

const GRADE_SCALE: Record<string, number> = {
  "A": 4.0,
  "A-": 3.75,
  "B+": 3.5,
  "B": 3.0,
  "B-": 2.75,
  "C+": 2.5,
  "C": 2.0,
  "C-": 1.75,
  "D+": 1.5,
  "D": 1.0,
  "F": 0.0,
};

export default function Page() {
  const [courses, setCourses] = useState<CompletedCourse[]>([
    { id: "1", name: "", grade: "A", credits: 3 },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);

  const handleCourseChange = (id: string, field: keyof CompletedCourse, value: string | number) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, [field]: value } : course
      )
    );
  };

  const addCourse = () => {
    const newId = Date.now().toString();
    setCourses([...courses, { id: newId, name: "", grade: "A", credits: 3 }]);
  };

  const removeCourse = (id: string) => {
    if (courses.length > 1) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  const calculateGPA = () => {
    const validCourses = courses.filter(
      (course) => course.grade && course.credits > 0
    );

    if (validCourses.length === 0) {
      alert("Please add at least one course with a grade and credits");
      return;
    }

    let totalGradePoints = 0;
    let totalCredits = 0;

    for (const course of validCourses) {
      const gradePoint = GRADE_SCALE[course.grade];
      if (gradePoint === undefined) {
        alert(`Invalid grade: ${course.grade}`);
        return;
      }
      totalGradePoints += gradePoint * course.credits;
      totalCredits += course.credits;
    }

    const calculatedGPA = totalGradePoints / totalCredits;
    setGpa(parseFloat(calculatedGPA.toFixed(2)));
  };

  const resetCalculator = () => {
    setCourses([{ id: "1", name: "", grade: "A", credits: 3 }]);
    setGpa(null);
  };

  return (
    <div className="flex min-h-svh w-full flex-col items-center p-6 md:p-10 gap-10">
      <h1 className="mb-4 text-3xl font-bold">GPA Calculator</h1>
      <p className="mb-8 text-center text-lg">
        Calculate your GPA using the University of Jordan grading scale.
      </p>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Grading Scale</h2>
        <div className="grid grid-cols-3 gap-2 text-sm bg-gray-50 p-3 rounded w-70">
          {Object.entries(GRADE_SCALE).map(([grade, point]) => (
            <div key={grade} className="flex gap-1.5">
              <span>{grade}:</span>
              <span className="font-medium">{point.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-2xl border p-6 rounded-lg shadow-md">

        <form className="space-y-4">
          {courses.map((course, index) => (
            <div key={course.id} className="border p-4 rounded-lg bg-white">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block mb-1 font-medium text-sm">
                    Course Name
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 text-sm"
                    placeholder="e.g., Calculus 1"
                    value={course.name}
                    onChange={(e) =>
                      handleCourseChange(course.id, "name", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-sm">
                    Grade <span className="text-red-600">*</span>
                  </label>
                  <select
                    className="w-full border rounded px-3 py-2 text-sm"
                    value={course.grade}
                    onChange={(e) =>
                      handleCourseChange(course.id, "grade", e.target.value)
                    }
                  >
                    {Object.keys(GRADE_SCALE).map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-sm">
                    Credits <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    className="w-full border rounded px-3 py-2 text-sm"
                    placeholder="3"
                    min="1"
                    max="6"
                    value={course.credits}
                    onChange={(e) =>
                      handleCourseChange(
                        course.id,
                        "credits",
                        parseInt(e.target.value) || 0
                      )
                    }
                  />
                </div>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded text-sm"
                    onClick={() => removeCourse(course.id)}
                    disabled={courses.length === 1}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex gap-2">
            <button
              className="flex-1"
              onClick={addCourse}
            >
              + Add Course
            </button>
            <button
              className="flex-1"
              onClick={calculateGPA}
            >
              Calculate GPA
            </button>
          </div>

          {gpa !== null && (
            <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Your GPA</p>
                <p className="text-4xl font-bold text-blue-600">{gpa}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Based on {courses.filter((c) => c.grade && c.credits > 0).length} course(s)
                </p>
              </div>
              <button
                className="w-full mt-4"
                onClick={resetCalculator}
              >
                Reset Calculator
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}