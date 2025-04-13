interface Personagem {
  id: number;
  name: string;
}

async function BuscarPersonagens() {
  const res = await fetch("https://rickandmortyapi.com/api/character?page=1", {
    cache: "force-cache",
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Erro ao buscar personagens");

  const dados = await res.json();
  return dados.results.slice(0, 10);
}

export default async function Home() {
  const personagens = await BuscarPersonagens();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {personagens.map((personagem: Personagem) => (
        <div key={personagem.id}>
          <p>id {personagem.id}</p>
          <p>name: {personagem.name}</p>
        </div>
      ))}
    </div>
  );
}
