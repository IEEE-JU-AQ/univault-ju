import CourseGrid from "@/app/components/CourseGrid";
import { getCourses } from "@/lib/majors";

export default function CoursesPage() {
    const courses = getCourses();
  return (
        <CourseGrid courses={courses} />
  );
}
