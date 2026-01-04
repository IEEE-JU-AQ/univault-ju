import { AuthButton } from "@/components/auth-button";
import { Suspense } from "react";
import { Vault } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <nav className="w-full border-b border-b-foreground/10">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold"><Vault size={30} /> UniVault</h1>
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
