import CourseCard from "@/components/ui/CourseCard";
import MajorsSidebar from "@/components/ui/MajorsSidebar";
import SearchBar from "@/components/ui/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen ml-70">
      <MajorsSidebar />
      <div className="flex flex-col flex-1 mt-5">
        <SearchBar className="w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-6 md:p-10 md:pt-5 flex-1">
          <CourseCard /> <CourseCard /> <CourseCard /> <CourseCard /> <CourseCard /> <CourseCard /> <CourseCard /> <CourseCard />
        </div>
      </div>
    </main>
  );
}
