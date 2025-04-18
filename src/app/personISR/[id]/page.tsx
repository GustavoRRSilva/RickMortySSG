import { Character } from "@/types/types";

// Configuração do ISR para revalidar a cada 60 segundos
export const revalidate = 60;

export default async function Post({ params }: any) {
  const { id } = params;

  const result = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  const infos: Character = await result.json();
  const timestamp = new Date().toLocaleTimeString();

  return (
    <div>
      <p>My Post: {id}</p>
      <p>Name: {infos.name}</p>
      <p>Specie: {infos.species}</p>
      <p>Status: {infos.status}</p>
      <p>Generated at: {timestamp}</p>
    </div>
  );
}
