# GraphQL / React on Platform.sh demo

<p align="center">
  <a href="https://console.platform.sh/projects/create-project/?template=https://github.com/RudyWeber/graphql-react-psh">
    <img src="https://platform.sh/images/deploy/lg-blue.svg" alt="Deploy on Platform.sh" width="180px" />
  </a>
</p>

This project uses the YouTube API. Follow the steps [here](https://developers.google.com/youtube/v3/getting-started) to get an API key and [export it in an environment variable](https://docs.platform.sh/development/variables.html#environment-variables) called YOUTUBE_API_KEY.

For local development, create a `.env.local` file in `back/src` containing `YOUTUBE_API_KEY=[your_key]`. This file is gitignored.
