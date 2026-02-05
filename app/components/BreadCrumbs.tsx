"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BreadCrumbs({ CourseName }: { CourseName?: string }) {
    const params = useParams();

    const courseId = params.courseId as string;
    const category = params.category as string;

    return (
        <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
            <Link href="/courses" className="hover:text-primary transition-colors">
                Courses
            </Link>

            <i className="fa-solid fa-chevron-right text-[10px]"></i>

            <Link href={`/courses/course/${courseId}`} className="hover:text-primary transition-colors">
                {CourseName || courseId}
            </Link>

            {category && (
                <>
                    <i className="fa-solid fa-chevron-right text-[10px]"></i>
                    <span className="text-gray-500 capitalize">
                        {category.replace(/-/g, ' ')}
                    </span>
                </>
            )}
        </nav>
    );
}