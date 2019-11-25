import React from 'react';
import Form from './Form/Form';
import './App.css';

export default class App extends React.Component {
  state = {
    results: {},
    loading: false,
    baseUrl: "https://swapi.co/api/",
    error: false,
    errorMessage: ""
  }

  handleFetch = (filter, term) => {
    fetch(`${this.state.baseUrl}${filter}/?search=${term}`)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(data => {
          this.setState({
            results: data
        })
      })
  }

  render() {
    return (
      <div>
        <h1 className="title">Star Wars Search</h1>
        <Form fetch={this.handleFetch} />
      </div>
    )
  }
}