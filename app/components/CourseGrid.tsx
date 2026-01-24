import CourseCard from "./CourseCard";
import type { CourseGridProps } from "@/app/types";
export default function CourseGrid({ courses, majorName }: CourseGridProps) {
    return (
        <>
        <h1 className="text-2xl font-bold mb-5 ml-11">{majorName || "Courses"}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-6 md:p-10 md:pt-5">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </>
    )
}