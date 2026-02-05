import { fetchCourses, fetchMajorById } from "@/lib/utils/CourseUtils";
import CourseGrid from "@/app/components/CourseGrid";
import type { MajorCoursesProps } from "@/app/types";

export default async function majorCoursesPage({ params, searchParams }: MajorCoursesProps) {
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
