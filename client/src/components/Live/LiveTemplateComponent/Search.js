let axios = require("axios");

const ROOT_URL = "https://www.googleapis.com/youtube/v3/search";

module.exports = function(options, callback) {
  if (!options.key) {
    throw new Error("Youtube Search expected key, received undefined");
  }

  let params = {
    part: "snippet",
    key: options.key,
    q: options.term,
    eventType: "live",
    type: "video",
    maxResults: 10
  };

  axios
    .get(ROOT_URL, { params: params })
    .then(function(response) {
      var arr = response.data.items;

      if (callback) {
        // callback(
        // arr.filter(video => video.snippet.liveBroadcastContent === "live") // 라이브 영상만 띄울 경우
        //  );
        callback(arr); // 모든 영상 다 띄울 경우
      }
    })
    .catch(function(error) {
      console.error(error);
    });
};
