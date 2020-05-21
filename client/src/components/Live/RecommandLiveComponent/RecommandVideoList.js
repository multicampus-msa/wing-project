import React from "react";
import RecommandVideoListItem from "./RecommandVideoListItem";

const VideoList = ({ videos, onVideoSelect, setPlay }) => {
  const videoItems = videos.map(video => {
    return (
      <div>
        <RecommandVideoListItem
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
