import BreadCrumbs from "@/app/components/BreadCrumbs";
import { getCourseFromId } from "@/lib/majors";

export default async function CoursePageLayout({ params, children }: { params: Promise<{ courseId: string }>, children: React.ReactNode }) {
    const { courseId } = await params;
    const course = getCourseFromId(courseId);

    return (
        <div className="p-8">
            <BreadCrumbs courseId={courseId} CourseName={course?.name} />
            <h1 className="text-3xl font-bold mb-4">{course?.name}</h1>
            <p className="text-lg text-muted-foreground">{course?.description}</p>
            {children}
        </div>
    );
}