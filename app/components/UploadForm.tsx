'use client';

import type { UploadFormProps } from "@/app/types";
import { useState } from "react";

export default function UploadForm({ majors, courses }: UploadFormProps) {
    const [selectedMajorId, setSelectedMajorId] = useState<string | null>(null);

    const filteredCourses = selectedMajorId 
    ? courses.filter(course => course.majorIds?.includes(selectedMajorId)) 
    : courses;
    return (
            <form className="w-full max-w-md bg-[var(--card)] p-6 rounded-xl shadow-sm">
                <div className="mb-4">
                    <label htmlFor="major" className="block text-sm font-medium mb-1">Major</label>
                    <select id="major" name="major" className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]" onChange={(e) => setSelectedMajorId(e.target.value)}>
                        <option value="">Select a major</option>
                        {majors.map((major) => (
                            <option key={major.id} value={major.id}>
                                {major.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="courseId" className="block text-sm font-medium mb-1">Course</label>
                    <select id="course" name="courseid" className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]" required>
                        <option value="">Select a course</option>
                        {filteredCourses.map((course) => (
                            <option key={course.id} value={course.id}>
                                {course.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
                    <select id="category" name="category" className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]" required>
                        <option value="">Select a category</option>
                        <option value="notes">Lecture Notes / Summaries</option>
                        <option value="exams">Past Papers / Test Banks</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium mb-1">File</label>
                    <input type="file" id="file" name="file" className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]" required />
                </div>
                <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">Upload</button>
            </form>     
    );
} 