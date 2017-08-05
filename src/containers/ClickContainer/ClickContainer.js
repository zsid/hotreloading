import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { increment, doubleAsync } from './ClickDucks';

const ClickContainer = ({ timesClicked, incrementClick, doubleAsyncClick }) => (
  <div>
    <h3>Hello from ClickContainer. Times clicked: { timesClicked }</h3>
    <button onClick={incrementClick}>
        Increase by 1
    </button>
    <button onClick={doubleAsyncClick}>
        Double Async
    </button>
  </div>
);

ClickContainer.propTypes = {
  incrementClick: PropTypes.func.isRequired,
  doubleAsyncClick: PropTypes.func.isRequired,
  timesClicked: PropTypes.number.isRequired,
};

const mapDispatchToProps = {
  incrementClick: () => increment(),
  doubleAsyncClick: doubleAsync,
};

const mapStateToProps = state => ({
  timesClicked: state.timesClicked,
});

export default connect(mapStateToProps, mapDispatchToProps)(ClickContainer);
