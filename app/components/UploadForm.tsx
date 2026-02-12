'use client';

import type { UploadFormProps } from "@/app/types";
import { useState } from "react";
import { uploadResource } from "@/lib/utils/UploadResource";

export default function UploadForm({ majors, courses }: UploadFormProps) {
    const [selectedMajorId, setSelectedMajorId] = useState<string | null>(null);
    const [fileUploaded, setFileUploaded] = useState(false);

    const filteredCourses = selectedMajorId
        ? courses.filter(course => course.majorIds?.includes(selectedMajorId))
        : courses;

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        try {
            await uploadResource(new FormData(form));
            alert("Upload successful!");
            form.reset();
        } catch (err: any) {
            alert(err.message);
        }
    };

    return (
        <form className="w-full max-w-md bg-[var(--card)] p-6 mb-8 rounded-xl shadow-sm" onSubmit={onSubmit}>
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
                <input type="file" id="file" name="file" className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]" required onChange={() => setFileUploaded(true)} />
            </div>
            {fileUploaded &&
                <>
                    <hr className="my-8 border-[var(--primary)]" />
                    <div className="mb-4">
                        <label htmlFor="uploader" className="block text-sm font-medium mb-1">Your Name</label>
                        <input type="text" id="uploader" name="uploader" placeholder="Your name" className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="fileTitle" className="block text-sm font-medium mb-1">File Title</label>
                        <input type="text" id="fileTitle" name="fileTitle" placeholder="eg. Lecture Notes Week 1" className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]" required />
                    </div>
                </>
            }
            <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors mt-2">Upload</button>
        </form>
    );
} 