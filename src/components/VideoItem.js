import React from 'react';

//props contain just the video object from the array
//destructor to just reference video instead of props.video
//destructor onVideoSelect from VideoList.js and then App.js
const VideoItem = ({ videoData, onVideoSelect }) => {
  return (
    //onclick, run a callback function with the videoData provided to this component
    <div
      id="flex"
      className="item pointer"
      onClick={() => onVideoSelect(videoData)}
    >
      <img
        id="fluid"
        className="ui image max-100"
        src={videoData.snippet.thumbnails.high.url}
        alt={videoData.snippet.title}
      />
      <div className="content">
        <div className="header">{videoData.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
