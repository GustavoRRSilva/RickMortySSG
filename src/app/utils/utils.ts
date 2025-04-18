import { Character } from "@/types/types";

export async function getF2Character(id1: string, id2: String) {
  const user1Promise = await fetch(
    `https://rickandmortyapi.com/api/character/${id1}`
  );
  const user2Promise = await fetch(
    `https://rickandmortyapi.com/api/character/${id2}`
  );

  const [user1Response, user2Response] = await Promise.all([
    user1Promise,
    user2Promise,
  ]);

  const user1: Character = await user1Response.json();
  const user2: Character = await user2Response.json();

  return [user1, user2];
}
