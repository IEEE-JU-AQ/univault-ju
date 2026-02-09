export default function UploadPage() {
    return (
        <div className="flex flex-col items-center gap-10 mt-10">
            <h1 className="text-4xl font-bold">Upload Course Material</h1>
            <p className="text-lg mb-10">Share your notes, past papers, and other resources with the community!</p>
            <form className="w-full max-w-md bg-[var(--card)] p-6 rounded-xl shadow-sm">
                <div className="mb-4">
                    <label htmlFor="courseId" className="block text-sm font-medium mb-1">Course ID</label>
                    <input type="text" id="courseId" name="courseId" className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. CS101" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
                    <select id="category" name="category" className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required>
                        <option value="">Select a category</option>
                        <option value="notes">Lecture Notes / Summaries</option>
                        <option value="exams">Past Papers / Test Banks</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium mb-1">File</label>
                    <input type="file" id="file" name="file" className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
                </div>
                <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">Upload</button>
            </form>
        </div>
    );
}