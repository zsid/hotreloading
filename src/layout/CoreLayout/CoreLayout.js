import PropTypes from 'prop-types';
import React from 'react';
import './CoreLayout.scss';

const CoreLayout = ({ children }) => (
  <div>
    { children }
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default CoreLayout;
