import { useQuery, gql } from "@apollo/client";

import "./App.css";

const DEPLOY_FRIDAY_EPISODES_QUERY = gql`
  query {
    deployFridayEpisodes {
      videoId
      title
      publishedAt
      description
      thumbnail {
        url
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(DEPLOY_FRIDAY_EPISODES_QUERY);

  if (loading) {
    return "Loading...";
  }

  if (error) {
    return "Error...";
  }

  return (
    <ul>
      {data.deployFridayEpisodes.map(({ videoId, title }) => (
        <li key={videoId}>{title}</li>
      ))}
    </ul>
  );
}

export default App;
