import Link from "next/link";

interface Personagem {
  id: number;
  name: string;
}

export const revalidate = false;

let timestamp;
async function BuscarPersonagens() {
  const res = await fetch("https://rickandmortyapi.com/api/character?page=1", {
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("Erro ao buscar personagens");
  timestamp = new Date().toLocaleTimeString();
  const dados = await res.json();
  return dados.results.slice(0, 10);
}

export default async function Home() {
  const personagens = await BuscarPersonagens();
  return (
    <div className="flex flex-col items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      {personagens.map((personagem: Personagem) => (
        <div key={personagem.id}>
          <p>id {personagem.id}</p>
          <p>name: {personagem.name}</p>
          <Link href={`/personSSR/${personagem.id}`}>
            <p>SSR</p>
          </Link>
          <Link href={`/personCSR/${personagem.id}`}>
            <p>CSR</p>
          </Link>
          <Link href={`/personISR/${personagem.id}`}>
            <p>ISR</p>
          </Link>
        </div>
      ))}
      <p>Generated at:{timestamp}</p>
    </div>
  );
}
