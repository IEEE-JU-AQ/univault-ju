import CourseCard from "@/app/components/CourseCard";
import MajorsSidebar from "@/app/components/MajorsSidebar";
import SearchBar from "@/app/components/SearchBar";
import faculties from "@/app/data/faculties.json";

interface MajorPageProps {
  params: Promise<{ majorId: string }>;
}

export default async function MajorPage({ params }: MajorPageProps) {
  const { majorId } = await params;
  
  let majorData = null;
  let facultyName = "";

  for (const faculty of faculties) {
    const major = faculty.majors.find((m) => m.id === majorId);
    if (major) {
      majorData = major;
      facultyName = faculty.faculty_name;
      break;
    }
  }

  if (!majorData) {
    return (
      <main className="flex min-h-screen ml-70">
        <MajorsSidebar />
        <div className="flex flex-col flex-1 mt-5 p-10">
          <h1 className="text-3xl font-bold text-gray-900">Major Not Found</h1>
          <p className="text-gray-600 mt-2">The major you're looking for doesn't exist.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen ml-70">
      <MajorsSidebar />
      <div className="flex flex-col flex-1 mt-5">
        <SearchBar className="w-full" />
        <div className="p-6 md:p-10">
          <div className="mb-8">
            <p className="text-sm text-gray-600">{facultyName}</p>
            <h1 className="text-4xl font-bold text-gray-900">{majorData.name}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 flex-1">
            {majorData.courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
