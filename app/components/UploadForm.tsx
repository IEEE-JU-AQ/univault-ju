'use client';

import type { UploadFormProps } from "@/app/types";

export default function UploadForm({ faculties, courses }: UploadFormProps) {
    return (
        <main className="flex flex-col items-center gap-10 mt-10">
            <h1 className="text-4xl font-bold">Upload Course Material</h1>
            <p className="text-lg mb-10">Share your notes, past papers, and other resources with the community!</p>
            <form className="w-full max-w-md bg-[var(--card)] p-6 rounded-xl shadow-sm">
                <div className="mb-4">
                    <label htmlFor="faculty" className="block text-sm font-medium mb-1">Faculty</label>
                    <select id="faculty" name="faculty" className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]" required>
                        <option value="">Select a faculty</option>
                        {faculties.map((faculty) => (
                            <option key={faculty.id} value={faculty.id}>
                                {faculty.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="courseId" className="block text-sm font-medium mb-1">Course</label>
                    <select id="course" name="courseid" className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]" required>
                        <option value="">Select a course</option>
                        {courses.map((course) => (
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
        </main>        
    );
} 