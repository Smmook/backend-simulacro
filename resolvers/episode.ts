import { GraphQLError } from "npm:graphql";
import { EpisodeType } from "../types.ts";
import { getIdsFromUrls } from "../lib.ts";

export const Episode = {
  characters: async (
    parent: EpisodeType & { characters: string[] },
  ) => {
    const ids = getIdsFromUrls(parent.characters);
    const url = `https://rickandmortyapi.com/api/character/${ids}`;

    const res = await fetch(url);
    if (res.status !== 200) {
      throw new Error(`No se ha podido obtener los personajes ${ids}`);
    }

    return await res.json();
  },
};
