"use client";
import { Character, IDS } from "@/types/types";
import React, { useEffect, useState } from "react";
import { getF2Character } from "../../../utils/utils";

const page = ({ params }: { params: { id1: string; id2: string } }) => {
  const [data, setData] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const charactersData: Character[] = await getF2Character(
          params.id1,
          params.id2
        );
        setData(charactersData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Page 2 person</h2>
      {data &&
        data.map((character) => (
          <div>
            {" "}
            <p>name: {character.name}</p> <p>sspecie: {character.species}</p>{" "}
            <p>status: {character.status}</p>{" "}
          </div>
        ))}
    </div>
  );
};

export default page;
