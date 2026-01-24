import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="w-full border-b border-b-foreground/10 sticky top-0 bg-white z-50">
            <div className="max-w flex justify-between items-center py-4 px-10">
                <Link href="/" className="no-underline">
                    <div className="flex gap-1">
                        <Image src="/UJ.svg" alt="UJ Logo" width={30} height={30} />
                        <h1 className="text-2xl font-bold">UniVault</h1>
                    </div>
                </Link>
                <div className="flex gap-20 items-center">
                    <Link href="/gpa-calculator">
                        <ul>
                            <li className="list-none border-b-3 border-indigo-400 pb-1">GPA Calculator</li>
                        </ul>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
