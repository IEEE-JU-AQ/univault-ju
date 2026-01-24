import CourseCard from "@/app/components/CourseCard";
import MajorsSidebar from "@/app/components/MajorsSidebar";
import SearchBar from "@/app/components/SearchBar";
import faculties from "@/app/data/faculties.json";

export default function CoursesPage() {
  return (
    <main className="flex min-h-screen ml-70">
      <MajorsSidebar />
      <div className="flex flex-col flex-1 mt-5">
        <SearchBar className="w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-6 md:p-10 md:pt-5 flex-1">
          {
            faculties.map(faculty => (
              faculty.majors.map((major) => (
                major.courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                )
                ))
              ))
            )
          }
        </div>
      </div>
    </main>
  );
}
