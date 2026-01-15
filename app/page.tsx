import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 flex items-center justify-center">
        <p className="text-foreground/60">Welcome to UniVault</p>
      </div>
    </main>
  );
}
