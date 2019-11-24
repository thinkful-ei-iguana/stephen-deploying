import React from 'react';
import Form from './Form/Form';
import './App.css';

export default class App extends React.Component {
  state = {
    results: {},
    loading: false,
  }

  render() {
    return (
      <div>
        <h1 className="title">Star Wars Search</h1>
        <Form />
      </div>
    )
  }
}