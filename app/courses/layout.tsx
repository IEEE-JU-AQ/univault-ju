import MajorsSidebar from "@/app/components/MajorsSidebar";
import SearchBar from "@/app/components/SearchBar";

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex min-h-screen ml-70">
            <MajorsSidebar />
            <div className="flex flex-col flex-1 mt-5">
                {children}
            </div>
        </main>
    );
}