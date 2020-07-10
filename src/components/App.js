import React from 'react';
import SearchBar from './SearchBar';
//base axios request
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import '../global.css';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  //initialize state
  //videos array
  //selected video object
  state = { videos: [], selectedVideo: null };

  //when this component first renders
  componentDidMount() {
    //call default search
    //while first Axios request loads, the selected video object is null, so loading shows
    this.onTermSubmit('Trending');
  }

  //Axios submit function
  onTermSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        maxResults: 200,
        type: 'video',
        key: 'AIzaSyCTk2RR6ukJF0EQn8pTemZthAbcZhGEPlw',
      },
    });

    this.setState({
      //Sets video list state
      videos: response.data.items,
      //Set default selected video to first item in search result
      //This will change the video every time a new search happens
      selectedVideo: response.data.items[0],
    });
  };
  //callback function from videoItem, when 1 video is clicked
  onVideoSelect = (videoData) => {
    //sets state of selected video
    this.setState({ selectedVideo: videoData });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* pass selected video state down to video detail component  */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail videoData={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
