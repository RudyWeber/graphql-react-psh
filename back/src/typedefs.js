import { gql } from "apollo-server";

export default gql`
  type Episode {
    id: String!
    videoId: String!
    publishedAt: String!
    title: String!
    description: String
    thumbnail: Thumbnail!
    position: Int!
  }

  type Thumbnail {
    url: String!
    width: Int!
    height: Int!
  }

  type Query {
    deployFridayEpisodes: [Episode]! @cacheControl(maxAge: 7200)
  }
`;
