import { Character } from "@/types/types";

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;

  const result = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    {
      cache: "no-store",
    }
  );

  const infos: Character = await result.json();
  console.log(infos);
  return (
    <div>
      <p>My Post: {id}</p>
      <p>Name:{infos.name}</p>
      <p>Specie:{infos.species}</p>
      <p>Name:{infos.status}</p>
    </div>
  );
}
