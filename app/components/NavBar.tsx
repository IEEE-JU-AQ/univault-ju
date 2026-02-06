"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
    return (
        <nav className="w-full border-b border-b-foreground/10 sticky top-0 z-50 bg-layout-background dark:bg-layout-background">
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
                            <li className="list-none border-b-3 border-[var(--primary)] pb-1">GPA Calculator</li>
                        </ul>
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
