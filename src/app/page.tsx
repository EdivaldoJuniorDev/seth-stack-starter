import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-950 text-white">
      <h1 className="text-4xl font-bold tracking-tighter">
        Seth Stack Starter 🚀
      </h1>
      <p className="text-zinc-400">O motor está ligado.</p>

      <div className="flex gap-4">
        <Button variant="default">Botão Padrão</Button>
        <Button variant="destructive">Botão Perigo</Button>
        <Button variant="outline" className="text-black bg-white">Botão Outline</Button>
      </div>
    </div>
  );
}