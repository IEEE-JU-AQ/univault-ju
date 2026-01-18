import Image from "next/image";
import { Button } from "./button";

export default function CourseCard() {
    return (
        <div>
            <div className="border rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow bg-white">
                <Image width="500" height={200} alt="Course Image" src="/test.jpg" />
                <div className="p-1">
                    <h2 className="text-xl font-semibold mb-3 mt-3">Course Title</h2>
                    <Button variant="default" size="md">
                        View Course
                    </Button>
                </div>
            </div>
        </div>
    );
}