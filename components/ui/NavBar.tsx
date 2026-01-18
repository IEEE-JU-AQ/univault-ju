import { AuthButton } from "@/components/auth-components/auth-button";
import { Suspense } from "react";
import { Folder } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="w-full border-b border-b-foreground/10 sticky top-0 bg-white z-50">
            <div className="max-w flex justify-between items-center py-4 px-10">
                <Link href="/" className="no-underline">
                    <div className="flex gap-1"><Folder size={30} /><h1 className="text-2xl font-bold">UniVault</h1></div>
                </Link>
                <div>
                    <Link href="/gpa-calculator">
                        <ul>
                            <li className="hover:text-orange-200 list-none">GPA Calculator</li>
                        </ul>
                    </Link>
                </div>
                <Suspense>
                    <AuthButton />
                </Suspense>
            </div>
        </nav>
    );
}