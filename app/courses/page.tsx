import CourseGrid from "@/app/components/CourseGrid";
import { fetchCourses } from "@/lib/utils/CourseUtils";
import { connection } from "next/server";

export default async function CoursesPage({ searchParams }: { searchParams?: Promise<{ query?: string }> }) {
  await connection();
  const courses = await fetchCourses();

  const searchQuery = (await searchParams)?.query?.toLowerCase() || ""
  const filteredCourses = searchQuery
    ? courses.filter(course =>
      course.name.toLowerCase().includes(searchQuery) ||
      course.description?.toLowerCase().includes(searchQuery)
    )
    : courses;
  return (
    <CourseGrid courses={filteredCourses} searchDefaultValue={searchQuery} />
  );
}
