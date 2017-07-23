import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, doubleAsync } from './ClickDucks';

class ClickContainer extends Component {
  render() {
    const { timesClicked, increment, doubleAsync } = this.props

    return (
      <div>
        <h3>Hello from ClickContainer. Times clicked: { timesClicked }</h3>
        <button onClick={increment}>
          Increase by 1
        </button>
        <button onClick={doubleAsync}>
          Double Async
        </button>
      </div>
    )
  }
}

ClickContainer.propTypes = {
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  increment : () => increment(),
  doubleAsync
}

const mapStateToProps = (state) => ({
  timesClicked: state.timesClicked
})

export default connect(mapStateToProps, mapDispatchToProps)(ClickContainer)
