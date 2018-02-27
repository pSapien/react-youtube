import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const API_KEY = 'ENTER YOUR API KEY HERE!';

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.videoSearch('batman');
  }

  videoSearch = term => {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  };

  handleVideoState = selectedVideo => this.setState({ selectedVideo });

  render() {
    const { selectedVideo, videos } = this.state;
    const videoSearch = debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={this.handleVideoState(selectedVideo)} videos={videos} />
      </div>
    );
  }
}
