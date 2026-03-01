import { fetchCourses, fetchMajorById } from "@/lib/utils/CourseUtils";
import CourseGrid from "@/app/components/CourseGrid";
import type { MajorCoursesProps } from "@/app/types";
import { connection } from "next/server";

export default async function majorCoursesPage({ params, searchParams }: MajorCoursesProps) {
    await connection();
    const { majorId } = await params;
    const courses = await fetchCourses(majorId);
    const major = await fetchMajorById(majorId);

    const searchQuery = (await searchParams)?.query?.toLowerCase() || ""
    const filteredCourses = searchQuery
        ? courses.filter(course =>
            course.name.toLowerCase().includes(searchQuery) ||
            course.description?.toLowerCase().includes(searchQuery)
        )
        : courses;

    return (
        <CourseGrid courses={filteredCourses} majorName={major?.name} searchDefaultValue={searchQuery} />
    );
}
