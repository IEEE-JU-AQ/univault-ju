import BreadCrumbs from "@/app/components/BreadCrumbs";
import { fetchCourseById } from "@/lib/utils/CourseUtils";
import { connection } from "next/server";

export default async function CoursePageLayout({ params, children }: { params: Promise<{ courseId: string }>, children: React.ReactNode }) {
    await connection();
    const { courseId } = await params;
    const course = await fetchCourseById(courseId);

    return (
        <div className="p-8">
            <BreadCrumbs CourseName={course?.name} />
            <h1 className="text-3xl font-bold mb-4">{course?.name}</h1>
            <p className="text-lg text-muted-foreground">{course?.description}</p>
            {children}
        </div>
    );
}