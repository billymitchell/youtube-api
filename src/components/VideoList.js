import React from 'react';
import VideoItem from './VideoItem';

//destructor so you don't need to do props.videos for all things
//destructor the onVideoSelect function from the App.js as a prop
const VideoList = ({ videos, onVideoSelect }) => {
  //for each video
  //list of videos is a const called renderedList
  const renderedList = videos.map((video) => {
    //pass the videos we loop over as a prop
    //videoData is custom name to define video array
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        videoData={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
