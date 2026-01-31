export default function SearchBar({ defaultValue }: { defaultValue?: string }) {
    return (
            <form className="px-3 md:px-0 md:max-w-xl">
                <input
                    type="search"
                    name="query"
                    placeholder="Search courses..."
                    defaultValue={defaultValue}
                    className="w-full md:w-80 py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
                />
            </form>
    );
}