"use client";
import { Character } from "@/types/types";
import { useEffect, useState } from "react";

export default function NewPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const [infos, setInfos] = useState<Character>();

  useEffect(() => {
    if (!id) {
      return;
    }
    async function fetchData() {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const resultado = await res.json();

      setInfos(resultado);
    }
    fetchData();
  }, []);
  if (!infos) {
    return <p>carregando...</p>;
  }
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
