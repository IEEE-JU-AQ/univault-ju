import { fetchCourses, fetchFaculties } from "@/lib/utils/CourseUtils";
import UploadForm from "@/app/components/UploadForm";

export default async function UploadPage() {
    const faculties = await fetchFaculties();
    const allMajors = faculties.flatMap(faculty => faculty.majors);
    const courses = await fetchCourses();
    return (
        <main className="flex flex-col items-center gap-10 mt-10">
            <h1 className="text-4xl font-bold">Upload Course Material</h1>
            <p className="text-lg mb-10">Share your notes, past papers, and other resources with the community!</p>
            <UploadForm majors={allMajors} courses={courses} />
        </main>
    );
}