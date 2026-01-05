import { AuthButton } from "@/components/auth-components/auth-button";
import { Suspense } from "react";
import { Vault } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <nav className="w-full border-b border-b-foreground/10">
        <div className="max-w-5xl mx-auto flex justify-between items-center py-4 !px-[100px]">
          <h1 className="text-2xl font-bold"><Vault size={30} /> UniVault</h1>
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
      <div className="flex-1 flex items-center justify-center">
        <p className="text-foreground/60">Welcome to UniVault</p>
      </div>
    </main>
  );
}
