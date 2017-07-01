import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import VideoList from './components/videoList';
import SearchBar from './components/searchBar';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyBqUE2Xd8NGZyOo-kUje5aNn8jOtApQCEc';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('South Park');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term }, videos =>
			this.setState({
				videos,
				selectedVideo: videos[Math.round(Math.random() * 4)]
			})
		);
	}

	render() {
		const videoSearch = _.debounce(term => this.videoSearch(term), 100);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail videos={this.state.selectedVideo} />
				<VideoList
					videos={this.state.videos}
					onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
				/>
			</div>
		);
	}
}

render(<App />, document.querySelector('.container'));
