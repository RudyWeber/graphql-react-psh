import { ApolloServer } from "apollo-server";
import { config as platformConfig } from "platformsh-config";

import apolloConfig from "./apollo-config.js";

const { port } = platformConfig();

const server = new ApolloServer(apolloConfig);

server
  .listen({
    port,
  })
  .then(({ url }) => console.log(`Server ready at ${url}`));
