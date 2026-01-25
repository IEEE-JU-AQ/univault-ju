export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
    const { courseId } = await params;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Course ID: {courseId}</h1>
            <p className="text-lg text-muted-foreground">
                This is the page for course with ID: {courseId}. More details and resources will be added here.
            </p>
        </div>
    );
}