"use client";
export const dynamic = 'force-dynamic';

import { useParams } from "next/navigation"

import { NotebookPen, FileClock, BookHeart, Upload } from "lucide-react"
import Link from "next/link"
export default function CourseOptions() {
    const params = useParams()
    const courseId = params.courseId

    return (
        <div className="flex flex-col items-center gap-15 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full px-4">
                <Link href={`/courses/course/${courseId}/notes`}>
                    <button className="flex flex-col items-center px-6 md:px-20 py-14 md:py-20 rounded-xl gap-8 w-full h-full">
                        <NotebookPen className="mb-2" size={40} />
                        <p className="text-xl font-bold">Lecture Notes / Summaries</p>
                    </button>
                </Link>
                <Link href={`/courses/course/${courseId}/exams`}>
                    <button className="flex flex-col items-center px-6 md:px-20 py-14 md:py-20 rounded-xl gap-8 w-full h-full">
                        <FileClock className="mb-2" size={40} />
                        <p className="text-xl font-bold">Past Papers / Test Banks</p>
                    </button>
                </Link>
                <Link href={`/courses/course/${courseId}/other`}>
                    <button className="flex flex-col items-center px-6 md:px-20 py-14 md:py-20 rounded-xl gap-8 w-full h-full">
                        <BookHeart className="mb-2" size={40} />
                        <p className="text-xl font-bold">Other</p>
                    </button>
                </Link>
            </div>
            <Link href={`/courses/upload`} className="w-full px-4">
                <button className="flex flex-col items-center px-6 md:px-20 py-14 md:py-20 rounded-xl gap-8 w-full max-w-200 mx-auto h-full">
                    <Upload className="mb-2" size={40} />
                    <p className="text-xl font-bold">Upload Material</p>
                </button>
            </Link>
        </div>
    );
}