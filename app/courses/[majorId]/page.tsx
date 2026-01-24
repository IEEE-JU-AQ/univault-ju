import { getCourses } from "@/lib/majors";
import CourseGrid from "@/app/components/CourseGrid";

export default async function majorCoursesPage({ params }: { params: Promise<{ majorId: string }> }) {
    const { majorId } = await params;
    const courses = getCourses(majorId);
    return (
        <CourseGrid courses={courses} />
    );
}
