import CourseCard from "./CourseCard";
import type { CourseGridProps } from "@/app/types";
import SearchBar from "./SearchBar";
export default function CourseGrid({ courses, majorName }: CourseGridProps) {
    return (
        <>
            <div className="flex w-full justify-start items-center gap-8 py-4">
                <h1 className="text-2xl font-bold ml-11">{majorName || "Courses"}</h1>
                <SearchBar className="" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-6 md:p-10 md:pt-5">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </>
    )
}