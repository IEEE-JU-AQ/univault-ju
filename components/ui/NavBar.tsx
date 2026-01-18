import { AuthButton } from "@/components/auth-components/auth-button";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="w-full border-b border-b-foreground/10 sticky top-0 bg-white z-50">
            <div className="max-w flex justify-between items-center py-4 px-10">
                <Link href="/" className="no-underline">
                    <div className="flex gap-1">
                        <Image src="/UJ.svg" alt="UJ Logo" width={50} height={50} />
                        <h1 className="text-2xl font-bold">UniVault</h1>
                    </div>
                </Link>
                <div className="flex gap-20 items-center">
                    <Link className="rounded bg-gray-300 p-1.5 hover:bg-gray-200 no-underline" href="/gpa-calculator">
                        <ul>
                            <li className="list-none">GPA Calculator</li>
                        </ul>
                    </Link>
                    <Suspense>
                        <AuthButton />
                    </Suspense>
                </div>
            </div>
        </nav>
    );
}
