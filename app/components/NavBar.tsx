"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();
    return (
        <nav className="w-full border-b border-b-foreground/10 fixed top-0 z-50 bg-layout-background dark:bg-layout-background">
            <div className="max-w flex justify-between items-center py-4 px-4 sm:px-10">
                <Link href="/" className="no-underline">
                    <div className="flex gap-1">
                        <Image src="/UJ.svg" alt="UJ Logo" width={30} height={30} />
                        <h1 className="text-2xl font-bold">UniVault</h1>
                    </div>
                </Link>
                <div className="flex gap-4 sm:gap-20 items-center">
                    <Link href="/gpa-calculator">
                        <ul>
                            <li className={`font-medium tracking-wide border-b-1 border-[var(--primary)] transition-all pb-1 ${pathname == "/gpa-calculator" ? "border-b-4" : ""}`}>GPA Calculator</li>
                        </ul>
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
