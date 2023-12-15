import { ApolloServer } from "npm:@apollo/server";
import { startStandaloneServer } from "npm:@apollo/server/standalone";
import { Query } from "./resolvers/queries.ts";
import { typeDefs } from "./schema.ts";
import { Character } from "./resolvers/character.ts";
import { Episode } from "./resolvers/episode.ts";

const resolvers = { Query, Character, Episode };

const server = new ApolloServer({ resolvers, typeDefs });

const { url } = await startStandaloneServer(server, {
  listen: { port: 8080 },
});
console.log(`${url}`);
