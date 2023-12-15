import { GraphQLError } from "npm:graphql";
import { CharacterType } from "../types.ts";
import { getIdsFromUrls } from "../lib.ts";

export const Character = {
  episode: async (
    parent: CharacterType & { episode: string[] },
  ) => {
    const ids = getIdsFromUrls(parent.episode);
    const url = `https://rickandmortyapi.com/api/episode/${ids}`;

    const res = await fetch(url);
    if (res.status !== 200) {
      throw new GraphQLError(`No se ha podido obtener los episodios ${ids}`);
    }

    return await res.json();
  },
};
