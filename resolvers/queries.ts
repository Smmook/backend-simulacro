import { GraphQLError } from "npm:graphql";

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
    const { ids } = args;

    const characters = await Promise.all(ids.map(async (id) => {
      const url = `https://rickandmortyapi.com/api/character/${id}`;
      const res = await fetch(url);
      if (res.status !== 200) {
        throw new GraphQLError(`Error al obtener el personaje ${url}`);
      }
      return await res.json();
    }));

    return characters;
  },
};
