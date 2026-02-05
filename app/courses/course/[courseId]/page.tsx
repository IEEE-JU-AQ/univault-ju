"use client";

import { useParams } from "next/navigation"

import { NotebookPen, FileClock, BookHeart } from "lucide-react"
import Link from "next/link"
export default function CourseOptions() {
    const params = useParams()
    const courseId = params.courseId
    
    return (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link href={`/courses/course/${courseId}/notes`}>
            <button className="flex flex-col items-center px-20 py-20 rounded-xl gap-8 w-full">
                <NotebookPen className="mb-2" size={40} />
                <p className="text-xl font-bold">Lecture Notes / Summaries</p>
            </button>
            </Link>
            <Link href={`/courses/course/${courseId}/exams`}>
            <button className="flex flex-col items-center px-20 py-20 rounded-xl gap-8 w-full">
                <FileClock className="mb-2" size={40} />
                <p className="text-xl font-bold">Past Papers / Test Banks</p>
            </button>
            </Link>
            <Link href={`/courses/course/${courseId}/other`}>
                <button className="flex flex-col items-center px-20 py-20 rounded-xl gap-8 w-full">
                    <BookHeart className="mb-2" size={40} />
                    <p className="text-xl font-bold">Other</p>
                </button>
            </Link>
        </div>
    );
}