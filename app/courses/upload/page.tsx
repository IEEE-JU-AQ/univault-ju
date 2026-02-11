import { fetchCourses, fetchFaculties } from "@/lib/utils/CourseUtils";
import UploadForm from "@/app/components/UploadForm";

export default async function UploadPage() {
    const faculties = await fetchFaculties();
    const courses = await fetchCourses();

    return (
        <UploadForm faculties={faculties} courses={courses} />
    );
}