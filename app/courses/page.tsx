import CourseGrid from "@/app/components/CourseGrid";
import { getCourses } from "@/lib/majors";

export default async function CoursesPage({ searchParams }: { searchParams?: Promise<{ query?: string }> }) {
  const courses = getCourses();

  const searchQuery = (await searchParams)?.query?.toLowerCase() || ""
  const filteredCourses = searchQuery
    ? courses.filter(course =>
      course.name.toLowerCase().includes(searchQuery) ||
      course.description?.toLowerCase().includes(searchQuery)
    )
    : courses;
  return (
    <CourseGrid courses={filteredCourses} />
  );
}
