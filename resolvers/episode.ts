import { GraphQLError } from "npm:graphql";
import { EpisodeType } from "../types.ts";

export const Episode = {
  characters: async (
    parent: EpisodeType & { characters: string[] },
  ) => {
    const characters = await Promise.all(
      parent.characters.map(async (character: string) => {
        const res = await fetch(character);
        if (res.status !== 200) {
          throw new GraphQLError(
            `No se ha podido obtener el personaje ${character}`,
          );
        }
        return await res.json();
      }),
    );

    return characters;
  },
};
