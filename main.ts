import { ApolloServer } from "npm:@apollo/server";
import { startStandaloneServer } from "npm:@apollo/server/standalone";
import { Query } from "./resolvers/queries.ts";
import { typeDefs } from "./schema.ts";

const mongo_uri = Deno.env.get("MONGO");
if (!mongo_uri) {
  Deno.exit();
}

const resolvers = { Query };

const server = new ApolloServer({ resolvers, typeDefs });

const { url } = await startStandaloneServer(server, {
  listen: { port: 8080 },
});
console.log(`${url}`);
