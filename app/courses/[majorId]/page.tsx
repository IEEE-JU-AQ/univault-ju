import { getCourses, getMajorfromId } from "@/lib/majors";
import CourseGrid from "@/app/components/CourseGrid";

export default async function majorCoursesPage({ params }: { params: Promise<{ majorId: string }> }) {
    const { majorId } = await params;
    const courses = getCourses(majorId);
    const major = getMajorfromId(majorId);
    return (
        <CourseGrid courses={courses} majorName={major?.name} />
    );
}
