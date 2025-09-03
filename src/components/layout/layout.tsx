import { useEffect, useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { characterService } from "@/features/services/CharacterServices";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [characters, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const data = await characterService.getAll();
        console.log("data");
        console.log(data);
        setCharacter(data);
      } catch (err) {
        console.log(err);
        setError(err?.message || "Error al cargar usuarios");
      } finally {
        setLoading(false);
      }
    }
    fetchCharacters();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
        {characters.map((character) => (
          <li key={1} className="border-b py-2">
            <span className="font-bold">{character}</span>
          </li>
        ))}
      </main>
    </SidebarProvider>
  );
}
