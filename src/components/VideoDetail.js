import React from 'react';

//destructor props.videoData to just videoData
const VideoDetail = ({ videoData }) => {
  //Check if we have any data
  //if no check, initial data is null from videoData state
  if (!videoData) {
    //while first Axios request loads, the selected video object is null, so loading shows
    return <div>Loading ...</div>;
  } //else return video
  const videoSrc = `https://www.youtube.com/embed/${videoData.id.videoId}?autoplay=1&mute=1`;
  return (
    <div>
      <div className="ui embed">
        <iframe title={videoData.snippet.title} src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{videoData.snippet.title}</h4>
        <p>{videoData.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
