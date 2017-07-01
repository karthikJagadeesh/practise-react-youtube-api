import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  handleInputChange = ({ target }) => {
    this.setState({ term: target.value })
  }

  render() {
    return (
      <div>
        <input value={this.state.term} onChange={this.handleInputChange}/>
      </div>
    )
  }
}

export default SearchBar
