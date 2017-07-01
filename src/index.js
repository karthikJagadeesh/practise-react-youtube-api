import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/videoList';
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyBqUE2Xd8NGZyOo-kUje5aNn8jOtApQCEc';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({ key: API_KEY, term: 'cute kittens' }, videos =>
			this.setState({ videos })
		);
		console.log(this.state.videos);
	}

	render() {
		console.log(this.state.videos);
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

render(<App />, document.querySelector('.container'));
