import CourseCard from "./CourseCard";
import type { CourseGridProps } from "@/app/types";
import SearchBar from "./SearchBar";
export default function CourseGrid({ courses, majorName, searchDefaultValue }: CourseGridProps) {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row w-full justify-between md:items-center gap-8 md:py-4 md:px-12 ">
                <h1 className="text-2xl font-bold md:text-left text-center">{majorName || "Courses"}</h1>
                <SearchBar defaultValue={searchDefaultValue} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-6 md:p-10 md:pt-5">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </>
    )
}