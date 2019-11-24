import React from 'react';

export default class Form extends React.Component {
  state = {
    filter: "",
    term: ""
  }

  handleFilter = (value) => {
    this.setState({
      filter: value
    })
  }

  handleTerm = (value) => {
    this.setState({
      term: value
    })
  }

  render() {
    return (
      <form className="search-form">
        <label for="search-filter">Search for:</label>
        <select id="search-filter" name="search-filter" onChange={e => this.handleFilter(e.target.value)}>
          <option value="">Pick one</option>
          <option value="characters">Characters</option>
          <option value="films">Films</option>
          <option value="planets">Planets</option>
          <option value="spaceships">Spaceships</option>
          <option value="species">Species</option>
          <option value="vehicles">Vehicles</option>
        </select>
        <label for="search-term">Search Term:</label>
        <input type="text" id ="search-term" name="search-term" placeholder="e.g. Anakin" onChange={e => this.handleTerm(e.target.value)} required/>
      </form>
    )
  }
}