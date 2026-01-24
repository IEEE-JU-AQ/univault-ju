import Image from "next/image"

export default function CourseCard({ course }: { course: any }) {
    return (
        <div>
            <div className="border rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow bg-white">
                    <h2 className="text-xl font-semibold mb-3 mt-3">{course.name}</h2>
                    <button className="w-full py-2 px-4 rounded transition-colors duration-200">
                        View Course
                    </button>
            </div>
        </div>
    );
}