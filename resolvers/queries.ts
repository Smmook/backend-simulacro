import { GraphQLError } from "npm:graphql";
import { CharacterType } from "../types.ts";

export const Query = {
  character: async (_: any, args: { id: string }) => {
    const url = `https://rickandmortyapi.com/api/character/${args.id}`;

    const res = await fetch(url);

    if (res.status !== 200) {
      throw new GraphQLError("El id no es valido");
    }

    const character = await res.json();

    return character;
  },

  charactersByIds: async (_: any, args: { ids: string[] }) => {
  },
};
