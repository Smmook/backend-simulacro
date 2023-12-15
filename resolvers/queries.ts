import { GraphQLError } from "npm:graphql";
import { Character } from "../types.ts";

export const Query = {
  character: async (_: any, args: { id: string }) => {
    const url = `https://rickandmortyapi.com/api/character/${args.id}`;

    const res = await fetch(url);

    if (res.status !== 200) {
      throw new GraphQLError("El id no es valido");
    }

    const character = await res.json();

    character.episodes = Promise.all(
      character.episodes.map(async (episode: string) => {
        const res = await fetch(episode);
        if (res.status !== 200) {
          throw new GraphQLError(`Episodio ${episode} no se ha encontrado`);
        }
        return await res.json();
      }),
    );

    return character;
  },

  charactersByIds: () => {},
};
