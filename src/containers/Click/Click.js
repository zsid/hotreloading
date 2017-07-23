import { connect } from 'react-redux';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { increment, doubleAsync } from './ClickDucks';

class Clickable extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.increment, 1000)
  }

  render() {
    console.log(this.props, 'MM???')
    const { click, increment, doubleAsync } = this.props
    return (
      <p>
        Clicked: {click} times
        {' '}
        <button onClick={increment}>
          +
        </button>
        {' '}
        <button onClick={doubleAsync}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

Clickable.propTypes = {
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  click : state.click
})

export default connect(mapStateToProps, mapDispatchToProps)(Clickable)
