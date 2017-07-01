import React from 'react'
import { render } from 'react-dom'

import SearchBar from './components/searchBar'

const API_KEY = 'AIzaSyBqUE2Xd8NGZyOo-kUje5aNn8jOtApQCEc'

const App = () => (
  <div>
    <SearchBar />
  </div>
)

render(<App />, document.querySelector('.container'))
