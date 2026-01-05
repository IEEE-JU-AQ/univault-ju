export default function Page() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center p-6 md:p-10">
      <h1 className="mb-4 text-3xl font-bold">GPA Calculator</h1>
      <p className="mb-8 text-center text-lg">
        Calculate your GPA easily by entering your course grades and credits.
      </p>
      {/* GPA Calculator Form Placeholder */}
      <div className="w-full max-w-md border p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="course1">
              Course 1 Grade
            </label>
            <input
              type="text"
              id="course1"
              className="w-full border rounded px-3 py-2"
              placeholder="e.g., A, B+, C"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="credits1">
              Course 1 Credits
            </label>
            <input
              type="number"
              id="credits1"
              className="w-full border rounded px-3 py-2"
              placeholder="e.g., 3, 4"
            />
          </div>
            {/* Add more courses as needed */}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Calculate GPA
            </button>
        </form>
      </div>
    </div>
  );
}