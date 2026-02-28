import MajorsSidebar from "@/app/components/MajorsSidebar";
import { fetchFaculties } from "@/lib/utils/CourseUtils";

export default async function CoursesLayout({ children }: { children: React.ReactNode }) {
    const faculties = await fetchFaculties();

    return (
        <main className="flex min-h-screen md:ml-70">
            <MajorsSidebar faculties={faculties} />
            <div className="flex flex-col flex-1 mt-16 md:mt-5">
                {children}
            </div>
        </main>
    );
}