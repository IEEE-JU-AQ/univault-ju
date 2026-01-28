import { NotebookPen, FileClock, BookHeart } from "lucide-react"
export default function CourseOptions() {
    return (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
            <button className="flex flex-col items-center px-20 py-20 rounded-xl gap-8">
                <NotebookPen className="mb-2" size={40} />
                <p className="text-xl font-bold">Lecture Notes / Summaries</p>
            </button>
            <button className="flex flex-col items-center px-20 py-20 rounded-xl gap-8">
                <FileClock className="mb-2" size={40} />
                <p className="text-xl font-bold">Past Papers / Test Banks</p>
            </button>
            <button className="flex flex-col items-center px-20 py-20 rounded-xl gap-8">
                <BookHeart className="mb-2" size={40} />
                <p className="text-xl font-bold">Other</p>
            </button>
        </div>
    );
}