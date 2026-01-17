import NavBar from "@/components/ui/NavBar";
import CourseCard from "@/components/ui/CourseCard";
import majors from "./data/majors.json";

export default function Home() {

  const majorList = majors.map((faculty) => (
    <div key={faculty.id} className="mb-6">
      <h3 className="font-semibold text-lg mb-2">{faculty.faculty_name}</h3>
      <ul className="space-y-1 ml-4">
        {faculty.majors.map((major) => (
          <li key={major.id} className="text-sm cursor-pointer hover:text-green-600">
            {major.name}
          </li>
        ))}
      </ul>
    </div>
  ))
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen">
        <div className="max-h w-70 border-2 border-t-0 border-l-0 p-4 overflow-y-auto">
          {majorList}
        </div>
        <CourseCard /> <CourseCard /> <CourseCard /> <CourseCard />
      </main>
    </>
  );
}
