"use client";

import { Character } from "@/types/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PersonCSR() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [infos, setInfos] = useState<Character | null>(null);

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
  }, [id]);

  if (!infos) {
    return <p>carregando...</p>;
  }

  return (
    <div>
      <p>My Post: {id}</p>
      <p>Name: {infos.name}</p>
      <p>Specie: {infos.species}</p>
      <p>Status: {infos.status}</p>
    </div>
  );
}
