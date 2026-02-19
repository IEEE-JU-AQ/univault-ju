import CourseCard from "./CourseCard";
import Link from "next/link";
import type { CourseGridProps } from "@/app/types";
import SearchBar from "./SearchBar";
import { Upload } from "lucide-react";
export default function CourseGrid({ courses, majorName, searchDefaultValue }: CourseGridProps) {
    return (
        <main className="pb-10">
            <div className="flex flex-col-reverse md:flex-row w-full justify-between md:items-center gap-8 md:py-4 md:px-12">
                <h1 className="text-2xl font-bold md:text-left text-center">{majorName || "Courses"}</h1>
                <SearchBar defaultValue={searchDefaultValue} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-6 md:p-10 md:pt-5">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
            <div className="flex w-full justify-center">
                <Link href={`/courses/upload`}>
                    <button className="flex flex-col items-center px-15 py-15 rounded-xl gap-5 w-100">
                        <Upload size={30} />
                        <p className="text-lg font-bold">Upload Material</p>
                    </button>
                </Link>
            </div>
        </main>
    )
}