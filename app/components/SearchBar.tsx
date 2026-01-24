export default function SearchBar({ className }: { className?: string }) {
    return (
        <div className={`w-full max-w-md mx-auto ${className}`}>
            <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}