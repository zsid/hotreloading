import React, { Component } from 'react';
import Click from './containers/Click/Click';
import {
  Link
} from 'react-router-dom';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <h2>Hmm No yes yes yes yeuu: {this.state.counter}</h2>
        <Click />
      </div>
    );
  }
}
