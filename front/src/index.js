import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { config as platformConfig } from "./platformsh.js";

import App from "./App";

import "./index.css";

const { REACT_APP_LOCAL: isLocalDev } = process.env;
const config = platformConfig({ envPrefix: "REACT_APP_PLATFORM_"});

const getApolloUri = () => {
  if (!!isLocalDev) {
    return `http://localhost:4000`;
  }

  console.log("[Config]", config);

  if (config.hasRelationship("api")) {
    return config.credentials("api").hostname;
  }
};

const client = new ApolloClient({
  uri: getApolloUri(),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
