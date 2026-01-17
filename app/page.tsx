import NavBar from "@/components/ui/NavBar";
import CourseCard from "@/components/ui/CourseCard";
import MajorsSidebar from "@/components/ui/MajorsSidebar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen">
        <MajorsSidebar />
        <CourseCard /> <CourseCard /> <CourseCard /> <CourseCard />
      </main>
    </>
  );
}
