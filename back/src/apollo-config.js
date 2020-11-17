import responseCachePlugin from "apollo-server-plugin-response-cache";

import resolvers from "./resolvers/index.js";
import typeDefs from "./typedefs.js";

export default {
  resolvers,
  typeDefs,
  plugins: [responseCachePlugin()],
};
