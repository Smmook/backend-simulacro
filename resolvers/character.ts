import { GraphQLError } from "npm:graphql";
import { CharacterType } from "../types.ts";

export const Character = {
  episode: async (
    parent: CharacterType & { episode: string[] },
  ) => {
    const episodes = await Promise.all(
      parent.episode.map(async (episode: string) => {
        const res = await fetch(episode);
        if (res.status !== 200) {
          throw new GraphQLError(
            `No se ha podido obtener el episodio ${episode}`,
          );
        }
        return await res.json();
      }),
    );

    return episodes;
  },
};
