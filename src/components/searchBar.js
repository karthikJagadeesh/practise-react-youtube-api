import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	handleInputChange = ({ target }) => {
		this.setState({ term: target.value });
	};

	render() {
		return (
			<div className="col-sm-12 searchBar">
				<input
					value={this.state.term}
					onChange={this.handleInputChange}
					placeholder="search for videos..."
				/>
			</div>
		);
	}
}

export default SearchBar;
