import fetch from "node-fetch";

const {
  YOUTUBE_API_KEY = "<EXPORT YOUTUBE_API_KEY WITH YOUR KEY>",
} = process.env;

export const Query = {
  deployFridayEpisodes() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?maxResults=100&part=snippet&playlistId=PLn5EpEMtxTCmLsbLgaN3djvEkRdp-YmlE&key=${YOUTUBE_API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          return res.json().then(({ error: { message } }) => {
            throw new Error(message);
          });
        }

        return res.json();
      })
      .then(({ items }) =>
        items.map(
          ({
            id,
            snippet: {
              resourceId: { videoId },
              publishedAt,
              title,
              description,
              thumbnails: { high: thumbnail },
              position,
            },
          }) => ({
            id,
            videoId,
            publishedAt,
            title,
            description,
            thumbnail,
            position,
          })
        )
      );
  },
};
