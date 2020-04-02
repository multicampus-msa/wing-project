import React, { Fragment } from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onVideoSelect, setPlay }) => {
  const videoItems = videos.map(video => {
    return (
      <div>
        <VideoListItem
          onVideoSelect={onVideoSelect}
          key={video.etag}
          video={video}
          setPlay ={setPlay}
        />
      </div>
    );
  });

  return (
    <ul
      className="col-md-4 list-group"
      style={{ maxWidth: "80%", maxHeight: "100%" }}
    >
      {videoItems}
    </ul>
  );
};

export default VideoList;
